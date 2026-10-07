import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Codingtron',
  description: 'Privacy Policy and data governance practices at Codingtron.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-inherit min-h-screen py-16">
      <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-inherit flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-inherit transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-inherit" />
          <span className="text-inherit font-bold">Privacy Policy</span>
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black text-inherit text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Data Protection</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-inherit tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-inherit">Last updated: 2025 • Compute Universe / Codingtron</p>

          <div className="text-inherit text-sm sm:text-base space-y-6 leading-relaxed pt-4 border-t border-black">
            <p>
              At Codingtron (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we take your privacy and the confidentiality of your technical infrastructure seriously. This Privacy Policy explains how we collect, handle, protect, and process information when you interact with our website (codingtron.com) and our cloud consulting services.
            </p>

            <h3 className="text-lg font-black text-inherit pt-2">1. Information We Collect</h3>
            <p>
              We collect information that you directly provide when inquiring about our cloud and DevOps services:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-inherit">
              <li>Contact details (Full Name, Business Email Address, Phone Number, Company Name)</li>
              <li>Project requirements and technical descriptions provided through our contact forms</li>
              <li>Standard technical analytics (browser type, anonymized IP, pages viewed) to improve website performance</li>
            </ul>

            <h3 className="text-lg font-black text-inherit pt-2">2. Client Infrastructure &amp; Zero Persistent Access</h3>
            <p>
              During technical consultations, audits, or migrations, Codingtron adheres to the principle of least privilege. We do not retain, copy, or store client production data or customer personally identifiable information (PII) on our local devices. All cloud access is conducted via client-governed IAM roles with Multi-Factor Authentication (MFA).
            </p>

            <h3 className="text-lg font-black text-inherit pt-2">3. Non-Disclosure &amp; Confidentiality</h3>
            <p>
              All technical specifications, network diagrams, security audits, and proprietary architectures shared with Codingtron are covered under strict Non-Disclosure Agreements (NDAs).
            </p>

            <h3 className="text-lg font-black text-inherit pt-2">4. Contact Information</h3>
            <p>
              If you have questions regarding this Privacy Policy or our data governance practices, please reach out to us:
            </p>
            <div className="p-4 rounded-xl bg-white border border-black text-xs text-inherit space-y-1">
              <div>Email: info@codingtron.com</div>
              <div>Phone: +92 320 782 2110</div>
              <div>Hours: Monday – Friday, 9:00 AM – 5:00 PM (GMT -5)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
