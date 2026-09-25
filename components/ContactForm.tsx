"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Phone, RefreshCw } from "lucide-react";
import { CONTACT_INFO, CONTACT_PERSON } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Home Loan",
  "Personal Loan",
  "Car Loan",
  "Loan Against Property",
  "Business Loan",
  "Credit Card",
  "Insurance",
  "Investment",
  "Wealth Management",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your mobile phone number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // WhatsApp pre-filled text with submitted enquiry details
  const whatsappEnquiryUrl = `https://wa.me/91${CONTACT_INFO.phone}?text=${encodeURIComponent(
    `Hello ${CONTACT_PERSON.name}, I have submitted a financial service enquiry:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Message:* ${formData.message || "Looking for detailed guidance."}`
  )}`;

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gold-600/30 shadow-card-luxury text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-forest-50 border border-forest-100 text-forest-800 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-forest-800" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-bold text-forest-900">
            Enquiry Prepared Successfully
          </h3>
          <p className="text-sm text-charcoal-700 leading-relaxed max-w-md mx-auto">
            Thank you, <strong className="text-forest-900">{formData.name}</strong>. Your enquiry regarding{" "}
            <strong className="text-forest-900">{formData.service}</strong> is recorded for review by{" "}
            <strong>{CONTACT_PERSON.name}</strong>, Business Associate.
          </p>
        </div>

        {/* Instant Fast-Track Actions */}
        <div className="p-4 rounded-xl bg-forest-50/70 border border-forest-100 text-left space-y-3">
          <p className="text-xs font-semibold text-forest-900 uppercase tracking-wider">
            Fast-Track Your Consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-green-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-green-800 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward via WhatsApp</span>
            </a>
            <a
              href={CONTACT_INFO.links.phoneCall}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-forest-800 text-ivory text-xs font-bold uppercase tracking-wider hover:bg-forest-900 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-500 hover:text-forest-800 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Submit another enquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-8 sm:p-10 rounded-2xl bg-white border border-gold-600/30 shadow-card-luxury space-y-5"
    >
      <div className="border-b border-gold-600/20 pb-4">
        <h3 className="font-serif text-2xl font-bold text-forest-900">
          Send a Financial Service Enquiry
        </h3>
        <p className="text-xs text-charcoal-600 mt-1">
          Direct consultation with Brijesh Gangadharan, Business Associate &bull; Credtree Kannur
        </p>
      </div>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Ramesh Kumar"
          className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none ${
            errors.name
              ? "border-red-400 bg-red-50/30 focus:border-red-500"
              : "border-gold-600/30 bg-ivory/40 focus:border-forest-800 focus:bg-white"
          }`}
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
      </div>

      {/* Contact Grid: Phone and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9778484739"
            className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none ${
              errors.phone
                ? "border-red-400 bg-red-50/30 focus:border-red-500"
                : "border-gold-600/30 bg-ivory/40 focus:border-forest-800 focus:bg-white"
            }`}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. name@domain.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none ${
              errors.email
                ? "border-red-400 bg-red-50/30 focus:border-red-500"
                : "border-gold-600/30 bg-ivory/40 focus:border-forest-800 focus:bg-white"
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Service Dropdown */}
      <div>
        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5">
          Service Required <span className="text-red-600">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none appearance-none bg-white ${
            errors.service
              ? "border-red-400 bg-red-50/30 focus:border-red-500"
              : "border-gold-600/30 bg-ivory/40 focus:border-forest-800 focus:bg-white"
          }`}
        >
          <option value="">-- Please select a service category --</option>
          {SERVICE_OPTIONS.map((svc) => (
            <option key={svc} value={svc}>
              {svc}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-xs text-red-600 mt-1">{errors.service}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5">
          Message / Requirement Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your requirements, timeframes, or specific inquiries..."
          className="w-full px-4 py-3 rounded-lg border border-gold-600/30 bg-ivory/40 focus:border-forest-800 focus:bg-white text-sm transition-colors focus:outline-none resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-forest-800 text-ivory text-sm font-semibold tracking-wide uppercase shadow-card-luxury hover:bg-forest-900 border border-gold-500/40 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-75"
      >
        <Send className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
        <span>{isSubmitting ? "Processing Enquiry..." : "Send Enquiry"}</span>
      </button>

      <p className="text-[11px] text-charcoal-500 text-center pt-1 leading-normal">
        Your enquiry details are treated with strict confidentiality. Direct facilitation by
        Credtree Financial Services, Kamath Building, Kannur.
      </p>
    </form>
  );
}
