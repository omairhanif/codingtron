import React from 'react';
import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Codingtron',
  description: 'Terms of Service and client engagement agreements at Codingtron.',
};

export default function TermsPage() {
  return (
    <div className="bg-white text-inherit min-h-screen py-16">
      <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-inherit flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-inherit transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-inherit" />
          <span className="text-inherit font-bold">Terms of Service</span>
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black text-inherit text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-inherit tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-inherit">Last updated: 2025 • Compute Universe / Codingtron</p>

          <div className="text-inherit text-sm sm:text-base space-y-6 leading-relaxed pt-4 border-t border-black">
            <p>
              Welcome to Codingtron. By accessing our website or engaging our cloud consulting, migration, and DevOps engineering services, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h3 className="text-lg font-black text-inherit pt-2">1. Scope of Services</h3>
            <p>
              Codingtron provides professional technical services including cloud infrastructure provisioning, workload migration, CI/CD pipeline automation, disaster recovery planning, and high availability systems design. Specific milestones, SLAs, and deliverables are defined in individual Statements of Work (SOW).
            </p>

            <h3 className="text-lg font-black text-inherit pt-2">2. Client Responsibilities &amp; Cloud Accounts</h3>
            <p>
              Clients retain full ownership of their cloud provider accounts (AWS, Azure, GCP, etc.). Clients are responsible for granting necessary IAM permissions and maintaining payment obligations with their respective cloud hosting providers.
            </p>

            <h3 className="text-lg font-black text-inherit pt-2">3. Service Level Agreements (SLAs)</h3>
            <p>
              Our guaranteed uptime SLAs and response time commitments apply to systems actively covered under signed managed support agreements. SLA terms specify guaranteed response windows and remediation workflows.
            </p>

            <h3 className="text-lg font-black text-inherit pt-2">4. Limitation of Liability</h3>
            <p>
              In no event shall Codingtron be liable for consequential, indirect, or punitive damages arising from third-party cloud provider hardware failures or global ISP disruptions outside our reasonable control.
            </p>

            <h3 className="text-lg font-black text-inherit pt-2">5. Inquiries &amp; Legal Notices</h3>
            <p>
              For legal inquiries regarding these terms, please contact:
            </p>
            <div className="p-4 rounded-xl bg-white border border-black text-xs text-inherit space-y-1">
              <div>Email: info@codingtron.com</div>
              <div>Phone: +92 320 782 2110</div>
              <div>Operating Hours: Mon – Fri: 9:00 AM – 5:00 PM (GMT -5)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
