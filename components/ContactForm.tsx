"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Phone, Mail, RefreshCw } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Home Loan",
  "Personal Loan",
  "Car Loan",
  "Loan Against Property",
  "Business Loan",
  "Credit Card",
  "Insurance - Health Insurance",
  "Insurance - Motor Insurance",
  "Insurance - Home Loan & Protection",
  "Insurance - Property All Risk (PAR)",
  "Insurance (All Classes)",
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

    // 1. Full Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    // 2. Phone Number Validation (Strictly 10 digits only)
    const cleanPhone = formData.phone.trim();
    if (!cleanPhone) {
      newErrors.phone = "Please enter your mobile phone number.";
    } else if (cleanPhone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Phone number must start with 6, 7, 8, or 9 and be 10 digits.";
    }

    // 3. Email Validation (Strictly requires @gmail.com)
    const cleanEmail = formData.email.trim();
    if (!cleanEmail) {
      newErrors.email = "Please enter your Gmail address.";
    } else if (/[A-Z]/.test(cleanEmail)) {
      newErrors.email = "Email must contain lowercase letters only.";
    } else if (!/^[a-z0-9._%+-]+@gmail\.com$/.test(cleanEmail)) {
      newErrors.email = "Only Gmail addresses are allowed (must end with @gmail.com).";
    }

    // 4. Service Category Validation
    if (!formData.service) {
      newErrors.service = "Please select a service category.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === "phone") {
      // Allow only numbers and cap at exactly 10 digits (cannot type more than 10)
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "email") {
      // Automatically force all letters to lowercase
      sanitizedValue = value.toLowerCase();
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
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
    `Hello Credtree Financial Services, I have submitted a financial service enquiry:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Message:* ${formData.message || "Looking for detailed guidance."}`
  )}`;

  // Email pre-filled subject and body
  const emailSubject = encodeURIComponent(`Financial Service Enquiry: ${formData.service} - ${formData.name}`);
  const emailBody = encodeURIComponent(
    `Hello Credtree Financial Services Team,\n\nI have submitted an enquiry on credtree.in:\n\n` +
    `• Name: ${formData.name}\n` +
    `• Phone: ${formData.phone}\n` +
    `• Email: ${formData.email}\n` +
    `• Service: ${formData.service}\n` +
    `• Details: ${formData.message || "Looking for consultation and options."}\n\n` +
    `Please reach back to me at your earliest convenience.\n\nThank you,\n${formData.name}`
  );
  const gmailEnquiryUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}&su=${emailSubject}&body=${emailBody}`;
  const mailtoEnquiryUrl = `mailto:${CONTACT_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

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
            <strong className="text-forest-900">{formData.service}</strong> is ready to send to{" "}
            the <strong>Credtree Financial Services</strong> team.
          </p>
        </div>

        {/* Dedicated Send via Gmail Action */}
        <div className="pt-2 max-w-sm mx-auto">
          <a
            href={gmailEnquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span>Send via Gmail</span>
          </a>
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
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]{10}"
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
            placeholder="e.g. name@gmail.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm lowercase transition-colors focus:outline-none ${
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
