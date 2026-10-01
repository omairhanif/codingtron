import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';

const quickLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Blog', '/blog'],
  ['Testimonials', '/testimonials'],
  ['Contact', '/contact'],
] as const;
const serviceLinks = [
  ['Cloud Migration', '/services/cloud-migration-multi-cloud-strategy'],
  ['Infrastructure', '/services/infrastructure-deployment-management'],
  ['DevOps & CI/CD', '/services/devops-ci-cd-pipeline-solutions'],
  ['Automation', '/services/scripting-automation-functions'],
  ['Software Development', '/services/custom-software-development'],
] as const;
const caseStudyLinks = [
  ['All Case Studies', '/case-studies'],
  ['E-commerce Infrastructure', '/case-studies/scalable-ecommerce-platform'],
  ['DevOps Delivery', '/case-studies/devops-delivery-transformation'],
  ['Monitoring & Reporting', '/case-studies/ecommerce-monitoring-reporting'],
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white text-[var(--black)]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-14 lg:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-[var(--border)] pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 lg:pb-12">
          <div>
            <Link href="/" className="footer-brand-link inline-flex items-center gap-3" aria-label="Codingtron home">
              <span className="header-brand-mark">C</span>
              <span className="text-sm font-extrabold tracking-[.16em]">CODINGTRON</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6">Reliable cloud, DevOps, and software solutions that help businesses move forward.</p>
          </div>
          <div>
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="mt-4 space-y-3 text-sm">{quickLinks.map(([label, href]) => <li key={href}><Link className="footer-link" href={href}>{label}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-heading">Services</h2>
            <ul className="mt-4 space-y-3 text-sm">{serviceLinks.map(([label, href]) => <li key={href}><Link className="footer-link" href={href}>{label}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-heading">Case Studies</h2>
            <ul className="mt-4 space-y-3 text-sm">{caseStudyLinks.map(([label, href]) => <li key={href}><Link className="footer-link" href={href}>{label}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-heading">Get in Touch</h2>
            <div className="mt-4 space-y-3 text-sm">
              <a className="footer-contact footer-link" href={`mailto:${CONTACT_INFO.email}`}><Mail aria-hidden="true" />{CONTACT_INFO.email}</a>
              <a className="footer-contact footer-link" href={`tel:${CONTACT_INFO.phone}`}><Phone aria-hidden="true" />{CONTACT_INFO.phone}</a>
              <p className="footer-contact"><MapPin aria-hidden="true" />{CONTACT_INFO.address}</p>
              <Link href="/contact" className="button button-dark mt-3">Contact Us <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Codingtron. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2"><Link className="footer-link" href="/privacy-policy">Privacy Policy</Link><Link className="footer-link" href="/terms">Terms of Service</Link><Link className="footer-link" href="/contact">Contact</Link></nav>
        </div>
      </div>
    </footer>
  );
}
