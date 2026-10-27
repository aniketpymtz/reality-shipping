import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = process.env.CONTACT_ADMIN_EMAIL ?? "hr@realityshipping.com";

const SERVICE_LABELS: Record<string, string> = {
    "port-agency": "Port Agency",
    "liner-agency": "Liner Agency",
    logistics: "Logistics",
    "vessel-husbandry": "Vessel Husbandry",
    "port-coordination": "Port Coordination",
    "technical-support": "Technical Support",
    other: "Other",
};

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getSmtpErrorDetails(error: unknown) {
    if (!(error instanceof Error)) {
        return { error: String(error) };
    }

    const smtpError = error as Error & {
        code?: string;
        command?: string;
        responseCode?: number;
    };

    return {
        name: smtpError.name,
        message: smtpError.message,
        code: smtpError.code,
        command: smtpError.command,
        responseCode: smtpError.responseCode,
    };
}

export async function POST(req: NextRequest) {
    const requestId = crypto.randomUUID();
    const startedAt = Date.now();

    console.info(`[contact/route] [${requestId}] Contact request received.`);

    let body: unknown;
    try {
        body = await req.json();
    } catch {
        console.warn(`[contact/route] [${requestId}] Invalid JSON request body.`);
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { name, email, company, service, message, website } = body as Record<string, string>;

    // Honeypot: real users never fill this hidden field. Pretend success so
    // bots don't learn they were filtered.
    if (website?.trim()) {
        console.info(`[contact/route] [${requestId}] Honeypot submission ignored.`);
        return NextResponse.json({ success: true });
    }

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        console.warn(`[contact/route] [${requestId}] Required contact fields are missing.`);
        return NextResponse.json(
            { error: "Name, email, and message are required." },
            { status: 400 }
        );
    }
    if (!isValidEmail(email.trim())) {
        console.warn(`[contact/route] [${requestId}] Contact email has an invalid format.`);
        return NextResponse.json(
            { error: "Please provide a valid email address." },
            { status: 400 }
        );
    }

    const mailProvider = process.env.MAIL_PROVIDER ?? "microsoft365";
    const isGmail = mailProvider === "gmail";
    const smtpUser = isGmail
        ? process.env.GMAIL_USER ?? process.env.SMTP_USER
        : process.env.SMTP_USER;
    const smtpPassword = isGmail
        ? process.env.GMAIL_APP_PASSWORD ?? process.env.SMTP_PASSWORD
        : process.env.SMTP_PASSWORD;
    const smtpHost = isGmail ? "smtp.gmail.com" : process.env.SMTP_HOST ?? "smtp.office365.com";
    const smtpPort = isGmail ? 465 : Number(process.env.SMTP_PORT ?? 587);
    const smtpSecure = isGmail;

    if (!smtpUser || !smtpPassword) {
        console.error(`[contact/route] [${requestId}] Missing SMTP credentials.`, {
            hasSmtpUser: Boolean(smtpUser),
            hasSmtpPassword: Boolean(smtpPassword),
        });
        return NextResponse.json(
            { error: "Email service is not configured." },
            { status: 500 }
        );
    }

    console.info(`[contact/route] [${requestId}] SMTP configuration resolved.`, {
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        requireTLS: !smtpSecure,
        provider: mailProvider,
        smtpUserDomain: smtpUser.split("@")[1] ?? "invalid-email",
        hasSmtpPassword: true,
    });

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        requireTLS: !smtpSecure,
        auth: {
            user: smtpUser,
            pass: smtpPassword,
        },
    });

    // Verify SMTP credentials before attempting to send
    try {
        console.info(`[contact/route] [${requestId}] Verifying SMTP connection.`);
        await transporter.verify();
        console.info(`[contact/route] [${requestId}] SMTP verification succeeded.`, {
            durationMs: Date.now() - startedAt,
        });
    } catch (verifyErr) {
        console.error(`[contact/route] [${requestId}] SMTP verification failed.`, {
            ...getSmtpErrorDetails(verifyErr),
            host: smtpHost,
            port: smtpPort,
            durationMs: Date.now() - startedAt,
        });
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
        console.info(`[contact/route] [${requestId}] Sending contact email.`, {
            recipientDomain: ADMIN_EMAIL.split("@")[1] ?? "invalid-email",
            service: serviceLabel,
        });
        await transporter.sendMail({
            // Microsoft 365 requires the From address to be the authenticated mailbox
            from: `"Reality Shipping Website" <${smtpUser}>`,
            to: ADMIN_EMAIL,
            replyTo: email.trim(),
            subject: `New Enquiry from ${name.trim()} — Reality Shipping`,
            text: textBody,
            html: htmlBody,
        });
        console.info(`[contact/route] [${requestId}] Contact email sent.`, {
            durationMs: Date.now() - startedAt,
        });
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(`[contact/route] [${requestId}] Failed to send contact email.`, {
            ...getSmtpErrorDetails(err),
            durationMs: Date.now() - startedAt,
        });
        return NextResponse.json(
            { error: "Failed to send your message. Please try again later." },
            { status: 500 }
        );
    }
}
