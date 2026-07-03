"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Building2,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const INITIAL_FIELDS = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
  website: "", // honeypot — hidden from real users
};

export default function Contact() {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="divider-gold" />
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Contact Us
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Let&apos;s Talk
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Turn every port call into an advantage.
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
                    <p className="font-semibold">Singapore</p>
                    <p className="font-medium">
                      246 Macpherson Road #03-01 Betime Building, Singapore
                      348578
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300 mb-0.5">Offices At</p>
                    <p className="font-medium">
                      India, Indonesia, UAE
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all placeholder:text-slate-400 disabled:opacity-60"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all placeholder:text-slate-400 disabled:opacity-60"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all placeholder:text-slate-400 disabled:opacity-60"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all text-slate-600 disabled:opacity-60"
                  >
                    <option value="">Select a service</option>
                    <option value="port-agency">Port Agency</option>
                    <option value="liner-agency">Liner Agency</option>
                    <option value="logistics">Logistics</option>
                    <option value="vessel-husbandry">Vessel Husbandry</option>
                    <option value="port-coordination">Port Coordination</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              {/* Honeypot — invisible to users, bots auto-fill it */}
              <input
                type="text"
                name="website"
                value={fields.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="sr-only"
              />

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
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none placeholder:text-slate-400 disabled:opacity-60"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-3 mb-5 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-800">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600" />
                  <p className="text-sm font-medium">
                    Message sent! Our operations team responds within 3 hours.
                    For urgent vessel matters, call{" "}
                    <a href="tel:+6597727802" className="underline font-semibold">
                       +65 9772 7802
                    </a>{" "}
                    — available 24/7.
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/20 disabled:opacity-70 disabled:cursor-not-allowed"
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
