import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../constants';

const EMAILJS_SERVICE_ID = 'service_131x77h';
const EMAILJS_TEMPLATE_ID = 'template_my3wtnp';
const EMAILJS_PUBLIC_KEY = 'tbwNPE234I8IJvDNK';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'internship',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openMailClientFallback = () => {
    const subject = `Portfolio Inquiry: ${formData.type.toUpperCase()} — ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.type}\n\nMessage:\n${formData.message}\n`;
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setStatus('success');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Harrison',
          from_name: formData.name,
          from_email: formData.email,
          inquiry_type: formData.type,
          message: formData.message
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
    } catch (error) {
      console.warn('Direct email sending failed. Falling back to mail client.', error);
      setTimeout(() => openMailClientFallback(), 800);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-black/[0.08] p-12 rounded-3xl text-center space-y-5 fade-in-up">
        <div className="w-16 h-16 bg-[#007aff]/10 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-[#007aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">Message sent</h3>
        <p className="text-[#6e6e73]">Thanks for reaching out — I'll get back to you shortly.</p>
        <button
          onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', type: 'internship', message: '' }); }}
          className="mono text-sm text-[#007aff] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputBase = "w-full bg-white border border-black/[0.1] rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#007aff]/30 focus:border-[#007aff]/60 transition-all placeholder:text-[#6e6e73]/60";

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-black/[0.08] p-8 sm:p-10 rounded-3xl space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="mono text-[10px] text-[#6e6e73] uppercase tracking-widest ml-1">Full Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className={inputBase}
          />
        </div>
        <div className="space-y-2">
          <label className="mono text-[10px] text-[#6e6e73] uppercase tracking-widest ml-1">Email Address</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={inputBase}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="mono text-[10px] text-[#6e6e73] uppercase tracking-widest ml-1">Inquiry Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className={`${inputBase} appearance-none cursor-pointer pr-10`}
        >
          <option value="internship">Internship Opportunity</option>
          <option value="contract">Engineering Contract</option>
          <option value="cad">CAD / Prototyping Project</option>
          <option value="ios">iOS / App Collaboration</option>
          <option value="other">General Inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="mono text-[10px] text-[#6e6e73] uppercase tracking-widest ml-1">Message</label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your project or opportunity…"
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 bg-[#1d1d1f] hover:bg-[#007aff] text-white rounded-full font-semibold text-sm transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {status === 'sending' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
