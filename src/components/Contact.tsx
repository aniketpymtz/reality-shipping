"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const INITIAL_FIELDS = {
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
};

export default function Contact() {
    const [fields, setFields] = useState(INITIAL_FIELDS);
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const { name, value } = e.target;
        setFields((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(fields),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error ?? "Something went wrong. Please try again.");
                setStatus("error");
                return;
            }

            setStatus("success");
            setFields(INITIAL_FIELDS);
        } catch {
            setErrorMsg("Network error. Please check your connection and try again.");
            setStatus("error");
        }
    }

    const isLoading = status === "loading";

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="divider-gold" />
                        <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                            Contact Us
                        </span>
                        <div className="divider-gold" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Ready to streamline your shipping operations? Reach out to our team
                        for a personalized consultation and competitive quote.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Contact info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-linear-to-br from-blue-950 to-blue-800 rounded-2xl p-8 text-white">
                            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-blue-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-300 mb-0.5">Email</p>
                                        <p className="font-medium">info@realityshipping.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-blue-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-300 mb-0.5">Phone</p>
                                        <p className="font-medium">+91 829 157 3141</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-blue-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-300 mb-0.5">Headquarters</p>
                                        <p className="font-medium">
                                            7th floor, Maithili Signet,
                                            Near Inorbit mall
                                            NearHawares building,
                                            Sector 30A, Vashi, Navi Mumbai
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-blue-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-300 mb-0.5">Operations</p>
                                        <p className="font-medium">24/7 — Around the Clock</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl border border-slate-200 p-8"
                        >
                            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={fields.name}
                                        onChange={handleChange}
                                        placeholder="John Smith"
                                        required
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 disabled:opacity-60"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={fields.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        required
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 disabled:opacity-60"
                                    />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={fields.company}
                                        onChange={handleChange}
                                        placeholder="Your Company"
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 disabled:opacity-60"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Service Required
                                    </label>
                                    <select
                                        name="service"
                                        value={fields.service}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-600 disabled:opacity-60"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="sea">Sea Freight</option>
                                        <option value="air">Air Freight</option>
                                        <option value="land">Land Transportation</option>
                                        <option value="port">Port Agency</option>
                                        <option value="warehouse">Warehousing</option>
                                        <option value="customs">Customs Brokerage</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={fields.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell us about your shipping requirements..."
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder:text-slate-400 disabled:opacity-60"
                                />
                            </div>

                            {/* Status messages */}
                            {status === "success" && (
                                <div className="flex items-center gap-3 mb-5 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-800">
                                    <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600" />
                                    <p className="text-sm font-medium">
                                        Message sent! We&apos;ll get back to you shortly.
                                    </p>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="flex items-center gap-3 mb-5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-800">
                                    <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                                    <p className="text-sm font-medium">{errorMsg}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
