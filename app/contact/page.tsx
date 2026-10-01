 'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ShieldCheck, CheckCircle2, Send } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, subject: 'General Technical Inquiry' }) });
    const data = await response.json();
    setStatus(response.ok ? data.message : data.error);
  };

  return (
    <section id="contact" className="bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[19px] font-bold text-inherit">Passionate - Dedicated - Professional</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Send your query or request a callback</h2>
          <p className="mt-4 text-white">Have a complex cloud migration, Kubernetes bottleneck, or need an architectural review? Connect directly with our certified senior architects.</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
          <a href={`tel:${CONTACT_INFO.phone}`}><Phone className="mr-2 inline h-4 w-4 text-inherit" />{CONTACT_INFO.phone}</a>
          <a href={`mailto:${CONTACT_INFO.email}`}><Mail className="mr-2 inline h-4 w-4 text-inherit" />{CONTACT_INFO.email}</a>
          <p><Clock className="mr-2 inline h-4 w-4 text-inherit" />{CONTACT_INFO.supportHours}</p>
          <p><MapPin className="mr-2 inline h-4 w-4 text-inherit" />{CONTACT_INFO.address}</p>
        </div>
        <form onSubmit={submit} className="mx-auto mt-12 max-w-3xl rounded-3xl border border-black bg-black p-6 sm:p-8">
          <h3 className="mb-2 text-xl font-black">Send Us a Message</h3>
          {status && <p className="mb-4 rounded-xl border border-white p-3 text-sm text-white">{status}</p>}
          <div className="space-y-4">
            <input required placeholder="Your Name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-xl border border-black bg-black px-4 py-3 text-sm text-white" />
            <input required type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full rounded-xl border border-black bg-black px-4 py-3 text-sm text-white" />
            <textarea required minLength={10} rows={5} placeholder="Type your message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="w-full rounded-xl border border-black bg-black px-4 py-3 text-sm text-white" />
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-xs font-bold uppercase tracking-wider">Send Message<Send className="h-4 w-4" /></button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white text-inherit min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 md:py-24 bg-white border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[19px] capitalize text-inherit font-bold">
            Passionate – Dedicated – Professional
          </p>
          <div className="w-48 border-t border-dotted border-black mx-auto my-3" />

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-inherit tracking-tight max-w-4xl mx-auto leading-tight">
            Connect With Our Senior Architects
          </h1>

          <p className="mt-4 text-base sm:text-lg text-inherit max-w-2xl mx-auto leading-relaxed">
            Whether planning a multi-cloud migration, seeking 24/7 infrastructure management, or needing high availability disaster recovery, we are here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <ContactSection />

      {/* Operational Guarantee Bar */}
      <section className="py-14 bg-white border-t border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="p-5 rounded-2xl bg-white border border-black flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white text-inherit flex items-center justify-center shrink-0 border border-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-inherit">NDA Protected</div>
                <div className="text-xs text-inherit">Your architecture and data are 100% confidential.</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white text-inherit flex items-center justify-center shrink-0 border border-black">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-inherit">24-Hour SLA</div>
                <div className="text-xs text-inherit">Guaranteed response from a lead engineer.</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white text-inherit flex items-center justify-center shrink-0 border border-black">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-inherit">No-Obligation Review</div>
                <div className="text-xs text-inherit">Free 30-minute high-level architectural discovery.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
