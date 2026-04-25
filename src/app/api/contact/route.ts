import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = "aniketfcb10@gmail.com";

const SERVICE_LABELS: Record<string, string> = {
    sea: "Sea Freight",
    air: "Air Freight",
    land: "Land Transportation",
    port: "Port Agency",
    warehouse: "Warehousing",
    customs: "Customs Brokerage",
    other: "Other",
};

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { name, email, company, service, message } = body as Record<string, string>;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return NextResponse.json(
            { error: "Name, email, and message are required." },
            { status: 400 }
        );
    }
    if (!isValidEmail(email.trim())) {
        return NextResponse.json(
            { error: "Please provide a valid email address." },
            { status: 400 }
        );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
        console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.");
        return NextResponse.json(
            { error: "Email service is not configured." },
            { status: 500 }
        );
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // STARTTLS
        auth: {
            user: gmailUser,
            pass: gmailAppPassword,
        },
    });

    // Verify SMTP credentials before attempting to send
    try {
        await transporter.verify();
    } catch (verifyErr) {
        console.error("[contact/route] SMTP verify failed:", verifyErr);
        return NextResponse.json(
            { error: "Email service authentication failed. Please check server configuration." },
            { status: 500 }
        );
    }

    const serviceLabel = SERVICE_LABELS[service] ?? service ?? "Not specified";

    const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
            <div style="background: linear-gradient(135deg, #1e3a5f, #1d4ed8); padding: 24px 32px; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; color: #ffffff; font-size: 20px;">New Contact Form Submission</h1>
                <p style="margin: 4px 0 0; color: #93c5fd; font-size: 14px;">Reality Shipping — Website Enquiry</p>
            </div>
            <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 140px;">
                            <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Full Name</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px; color: #0f172a; font-weight: 500;">
                            ${name.trim()}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Email</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">
                            <a href="mailto:${email.trim()}" style="color: #1d4ed8;">${email.trim()}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Company</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px; color: #0f172a;">
                            ${company?.trim() || "—"}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Service</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px; color: #0f172a;">
                            ${serviceLabel}
                        </td>
                    </tr>
                </table>
                <div style="margin-top: 24px;">
                    <p style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px;">Message</p>
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; font-size: 15px; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</div>
                </div>
                <p style="margin: 24px 0 0; font-size: 12px; color: #94a3b8;">
                    Reply directly to this email to respond to ${name.trim()}.
                </p>
            </div>
        </div>
    `;

    const textBody = `
New Contact Form Submission — Reality Shipping

Full Name : ${name.trim()}
Email     : ${email.trim()}
Company   : ${company?.trim() || "—"}
Service   : ${serviceLabel}

Message:
${message.trim()}
    `.trim();

    try {
        const info = await transporter.sendMail({
            from: `"Reality Shipping Website" <${gmailUser}>`,
            to: ADMIN_EMAIL,
            replyTo: email.trim(),
            subject: `New Enquiry from ${name.trim()} — Reality Shipping`,
            text: textBody,
            html: htmlBody,
        });

        console.log("[contact/route] Email sent successfully. MessageId:", info.messageId);
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Failed to send contact form email:", err);
        return NextResponse.json(
            { error: "Failed to send your message. Please try again later." },
            { status: 500 }
        );
    }
}
