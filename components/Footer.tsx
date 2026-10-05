import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';

const companyLinks = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Case Studies', '/case-studies'],
  ['Contact', '/contact'],
] as const;

const serviceLinks = [
  ['DevOps & CI/CD', '/services/devops-ci-cd-pipeline-solutions'],
  ['Cloud', '/services/cloud-migration-multi-cloud-strategy'],
  ['Web Development', '/services/custom-software-development'],
  ['Application Development', '/services/custom-software-development'],
] as const;

const resourceLinks = [
  ['Blog', '/blog'],
  ['Guides', '/help-center'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
] as const;

function FooterLinks({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="footer-heading">{title}</h2>
      <ul className="footer-link-list">
        {links.map(([label, href]) => <li key={label}><Link className="footer-link" href={href}>{label}<ArrowUpRight aria-hidden="true" /></Link></li>)}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-wrap footer-main">
        <div className="footer-about">
          <Link href="/" className="footer-brand-link" aria-label="Codingtron home">
            <span className="header-brand-mark" aria-hidden="true">C</span>
            <span>CODINGTRON</span>
          </Link>
          <p>Cloud, DevOps, and software engineering for teams building what comes next.</p>
          <a className="footer-contact-link" href={`mailto:${CONTACT_INFO.email}`}><Mail aria-hidden="true" />{CONTACT_INFO.email}</a>
        </div>
        <FooterLinks title="Company" links={companyLinks} />
        <FooterLinks title="Services" links={serviceLinks} />
        <FooterLinks title="Resources" links={resourceLinks} />
      </div>
      <div className="content-wrap footer-bottom">
        <p>© {new Date().getFullYear()} Codingtron. All rights reserved.</p>
        <p className="footer-location"><Phone aria-hidden="true" /><a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a><MapPin aria-hidden="true" />{CONTACT_INFO.address}</p>
        <nav aria-label="Legal" className="footer-legal"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link></nav>
      </div>
    </footer>
  );
}