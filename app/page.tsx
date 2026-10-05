'use client';

import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Asterisk,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Gauge,
  GitBranch,
  Mail,
  Quote,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import devopsLifecycleImage from './public/images/devops-lifecycle.png';
import heroSectionImage from './public/images/hero-section-image.png';
import {
  BLOG_POSTS,
  CASE_STUDIES,
  COMPANY_STATS,
  CONTACT_INFO,
  FAQS,
  SERVICES,
  TESTIMONIALS,
} from '@/lib/data';

const capabilities = [
  'DevOps Automation',
  'Cloud Infrastructure',
  'Cloud Migration',
  'CI/CD Engineering',
  'Infrastructure as Code',
  'Web Development',
  'Application Development',
];

const platforms = [
  { name: 'AWS', slug: 'amazonaws' },
  { name: 'Microsoft Azure', slug: 'microsoftazure' },
  { name: 'Google Cloud', slug: 'googlecloud' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'Terraform', slug: 'terraform' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Jenkins', slug: 'jenkins' },
];

const platformLogoOverrides: Record<string, string> = {
  amazonaws: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  microsoftazure: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
};

const platformBrandColors: Record<string, string> = {
  amazonaws: 'FF9900',
  microsoftazure: '0078D4',
  googlecloud: '4285F4',
  docker: '2496ED',
  kubernetes: '326CE5',
  terraform: '7B42BC',
  github: '181717',
  jenkins: 'D24939',
};

const integrations = [
  { name: 'AWS', slug: 'amazonaws', detail: 'Build secure, scalable foundations for your cloud workloads.' },
  { name: 'Docker', slug: 'docker', detail: 'Package applications consistently across environments.' },
  { name: 'Kubernetes', slug: 'kubernetes', detail: 'Deploy and manage containerized workloads at scale.' },
  { name: 'Terraform', slug: 'terraform', detail: 'Provision repeatable infrastructure with versioned code.' },
  { name: 'Jenkins', slug: 'jenkins', detail: 'Automate builds, tests, and releases in one workflow.' },
  { name: 'GitHub', slug: 'github', detail: 'Collaborate on code and manage changes with confidence.' },
];

const processSteps = [
  ['01', 'Discover', 'Understand your goals, current systems, and constraints.'],
  ['02', 'Plan', 'Agree on architecture, priorities, and a practical roadmap.'],
  ['03', 'Build', 'Implement the cloud, software, and delivery foundations.'],
  ['04', 'Deploy', 'Release with automated checks and a clear rollback path.'],
  ['05', 'Optimize', 'Improve reliability and performance as needs evolve.'],
];

const valueProps = [
  { title: 'DevOps automation', description: 'Reduce repetitive delivery work with dependable, versioned workflows.', icon: Workflow, href: '/services/devops-ci-cd-pipeline-solutions' },
  { title: 'Cloud infrastructure', description: 'Build secure environments designed around your workloads and team.', icon: Cloud, href: '/services/infrastructure-deployment-management' },
  { title: 'Cloud migration', description: 'Move applications and data with deliberate planning and validation.', icon: ArrowUpRight, href: '/services/cloud-migration-multi-cloud-strategy' },
  { title: 'CI/CD engineering', description: 'Bring build, test, security, and release steps into one clear path.', icon: GitBranch, href: '/services/devops-ci-cd-pipeline-solutions' },
  { title: 'Infrastructure as code', description: 'Make environments repeatable, reviewable, and easier to evolve.', icon: Blocks, href: '/services/infrastructure-deployment-management' },
  { title: 'Monitoring & reliability', description: 'Improve visibility into service health, performance, and incidents.', icon: Gauge, href: '/services/monitoring-reporting-solutions' },
];

const featureRows = [
  {
    label: 'DELIVERY / AUTOMATION',
    title: 'Make every release a little less risky.',
    description: 'Bring build, test, security checks, and deployment into a repeatable workflow. Teams can spend less time coordinating releases and more time improving the product.',
    href: '/services/devops-ci-cd-pipeline-solutions',
    image: devopsLifecycleImage,
    alt: 'DevOps cycle from code and planning through release, operations, and monitoring',
    reverse: false,
  },
  {
    label: 'CLOUD / INFRASTRUCTURE',
    title: 'Build cloud foundations that grow with you.',
    description: 'Shape infrastructure around real workloads, with thoughtful architecture, automation, monitoring, and security built into the day-to-day operating model.',
    href: '/services/infrastructure-deployment-management',
    image: heroSectionImage,
    alt: 'Cloud infrastructure connected to web apps, mobile apps, databases, servers, and security',
    reverse: true,
  },
  {
    label: 'MODERNIZATION / MIGRATION',
    title: 'Move forward without losing sight of what matters.',
    description: 'Assess existing systems, plan the transition, and modernize in manageable steps. The result is a clearer path from today’s environment to the one your team needs next.',
    href: '/services/cloud-migration-multi-cloud-strategy',
    image: devopsLifecycleImage,
    alt: 'Cloud engineering lifecycle illustrating a continuous path to reliable operations',
    reverse: false,
  },
];

const homepageFaqs = [
  ...FAQS,
  {
    question: 'Can Codingtron improve an existing CI/CD pipeline?',
    answer: 'Yes. Codingtron designs delivery workflows that bring automated builds, testing, security checks, and releases into a repeatable process.',
  },
  {
    question: 'Can you build web and application software?',
    answer: 'Yes. Codingtron develops custom web, mobile, and enterprise applications, including full-stack interfaces, APIs, testing, and production deployment.',
  },
];

const caseImages = [
  { src: heroSectionImage, alt: 'Cloud infrastructure connecting applications, databases, servers, and security' },
  { src: devopsLifecycleImage, alt: 'Continuous delivery workflow from code to monitoring' },
  { src: heroSectionImage, alt: 'Cloud infrastructure connecting applications, databases, servers, and security' },
];

const blogImages = [
  heroSectionImage,
  devopsLifecycleImage,
  heroSectionImage,
];

const HOME_PAGE_STYLES = String.raw`.home-page { --black: #0e0e0f; --white: #ffffff; --background: #ffffff; --card: #ffffff; --accent: #062c41; --accent-hover: #0e405a; --accent-soft: #d8e6fd; --secondary: #686868; --border: #e2e2e2; --highlight: #dba91c; }

.home-page .eyebrow {
  color: var(--black);
}

.home-page .bg-black .eyebrow {
  color: var(--accent);
}

@media (max-width: 639px) {

  .home-page .hero-section .button {
    min-height: 2.25rem;
    gap: 0.4rem;
    padding: 0.4rem 0.65rem;
    font-size: 0.7rem;
  } }

.home-page h1 {
  font-size: clamp(2.125rem, calc(4.2vw + 0.5rem), 3.5rem);
  line-height: 1.1;
}

.home-page h2 {
  font-size: clamp(1.75rem, calc(3vw + 0.2rem), 2.625rem);
  line-height: 1.15;
}

.home-page h2.display-heading {
  font-size: clamp(1.75rem, calc(3vw + 0.2rem), 2.625rem);
  line-height: 1.15;
}

.home-page .eyebrow {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1.5;
  text-transform: uppercase;
}

.home-page .button {
  display: inline-flex;
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border: 1px solid var(--black);
  padding: 0.85rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  transition: background-color 220ms ease, color 220ms ease;
}

.home-page .button svg, .home-page
.text-link svg {
  width: 1rem;
  height: 1rem;
  transition: transform 220ms ease;
}

.home-page .button:hover svg, .home-page
.text-link:hover svg {
  transform: translate(2px, -2px);
}

.home-page .button-dark {
  background: var(--accent);
  color: var(--white);
  border-color: var(--accent);
}

.home-page .button-dark:hover {
  background: var(--accent-hover);
  color: var(--white);
  border-color: var(--accent-hover);
}

.home-page .button-light {
  background: var(--white);
  color: var(--black);
}

.home-page .button-light:hover {
  background: var(--accent);
  color: var(--white);
  border-color: var(--accent);
}

.home-page .button-white {
  background: var(--white);
  color: var(--black);
}

.home-page .button-white:hover {
  background: var(--accent);
  color: var(--white);
  border-color: var(--accent);
}

.home-page .text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--accent-hover);
  font-size: 0.8rem;
  font-weight: 700;
}

.home-page .text-link:hover {
  color: var(--accent-hover);
}

.home-page a:not([class*="bg-"]):not(.button):hover {
  color: var(--accent-hover);
}

.home-page [data-reveal] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 650ms ease, transform 650ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.home-page [data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes home-marquee {
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {

  .home-page [data-reveal] {
    opacity: 1;
    transform: none;
  } }

.home-page {
  overflow: hidden;
  background: var(--white);
  color: var(--black);
  font-family: var(--font-body), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.home-page .content-wrap {
  width: min(100%, 1440px);
  margin-inline: auto;
  padding-inline: 32px;
}

.home-page .section-pad {
  padding-block: 84px;
}

.home-page :is(h1, h2, h3) {
  color: var(--black);
  letter-spacing: 0;
}

.home-page :is(h1, h2) {
  font-family: var(--font-body), sans-serif;
  font-weight: 700;
  line-height: 1;
}

.home-page p {
  color: var(--secondary);
}

.home-page .eyebrow {
  color: var(--accent-hover);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 1.2px;
  line-height: 1.5;
}

.home-page .home-hero {
  padding-block: 64px 40px;
}

.home-page .hero-grid {
  display: grid;
  align-items: center;
  gap: 36px;
}

.home-page .hero-copy {
  max-width: none;
  padding-block: 20px;
}

.home-page .hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--accent-hover) !important;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 1.2px;
}

.home-page .hero-eyebrow > span, .home-page
.hero-image-dot {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--highlight);
}

.home-page .hero-copy h1 {
  max-width: none;
  margin-top: 16px;
  font-size: 60px;
  font-weight: 700;
  line-height: 1;
}

.home-page .hero-title-line {
  display: block;
}

.home-page .hero-description {
  max-width: 600px;
  margin-top: 18px;
  font-size: 18px;
  line-height: 1.7;
}

.home-page .technology-dropdown-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2px 10px;
  padding-top: 10px;
}

.home-page .mobile-navigation-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
}

.home-page .hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.home-page .button {
  min-height: 46px;
  gap: 10px;
  border-radius: 8px;
  padding: 12px 17px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0;
  transition: color 180ms ease, background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
}

.home-page .button:hover {
  transform: translateY(-2px);
}

.home-page .button-dark {
  border-color: var(--accent);
  background: var(--accent);
  color: var(--white);
}

.home-page .button-dark:hover {
  border-color: var(--accent-hover);
  background: var(--accent-hover);
}

.home-page .button-light {
  border-color: var(--border);
  background: var(--white);
  color: var(--black);
}

.home-page .button-light:hover {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--accent);
}

.home-page .button svg, .home-page .text-link svg {
  width: 15px;
  height: 15px;
}

.home-page .hero-proof {
  display: flex;
  max-width: 435px;
  align-items: flex-start;
  gap: 11px;
  margin-top: 31px;
}

.home-page .proof-mark {
  display: grid;
  width: 24px;
  height: 24px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
}

.home-page .proof-mark svg {
  width: 13px;
  height: 13px;
}

.home-page .hero-proof p {
  margin: 0;
  font-size: 12px;
  line-height: 1.55;
}

.home-page .hero-stats {
  display: flex;
  gap: 26px;
  margin-top: 25px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.home-page .hero-stats > div {
  display: grid;
  gap: 3px;
}

.home-page .hero-stats strong {
  color: var(--black);
  font-size: 20px;
  font-weight: 750;
}

.home-page .hero-stats span {
  color: var(--secondary);
  font-size: 11px;
}

.home-page .hero-tech-proof {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 0;
  color: var(--secondary);
  font-size: 10px;
}

.home-page .hero-tech-proof > span {
  margin-right: 3px;
}

.home-page .hero-tech-proof strong {
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--white);
  padding: 5px 7px;
  color: var(--accent);
  font-size: 9px;
  font-weight: 750;
}

.home-page .hero-visual {
  position: relative;
  min-width: 0;
  overflow: hidden;
  aspect-ratio: 1.3;
  border: 1px solid #e8edf4;
  border-radius: 10px;
  background: #f4f7fc;
}

.home-page .hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.home-page .hero-image-note {
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  padding: 9px 11px;
  color: var(--black);
  font-size: 11px;
  font-weight: 650;
}

.home-page .hero-image-dot {
  width: 7px;
  height: 7px;
}

.home-page .capability-marquee {
  overflow: hidden;
  border-block: 1px solid var(--accent-hover);
  background: var(--accent);
  padding-block: 13px;
}

.home-page .marquee-track {
  display: flex;
  width: max-content;
  align-items: center;
  animation: home-marquee 42s linear infinite;
}

.home-page .capability-marquee:hover .marquee-track {
  animation-play-state: paused;
}

.home-page .marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding-inline: 16px;
  color: var(--white);
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
}

.home-page .marquee-star {
  width: 14px;
  height: 14px;
  color: var(--highlight);
  stroke-width: 2.5;
}

.home-page .stats-section.section-pad {
  background: var(--white);
  padding-block: 52px 64px;
}

.home-page .stats-panel {
  display: flex;
  min-height: 504px;
  flex-direction: column;
  justify-content: space-between;
  gap: 0;
  border-radius: 16px;
  background: #d8e6fd;
  margin-inline: 4px 12px;
  padding: 48px 72px 96px;
}

.home-page .stats-story {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  align-items: start;
  gap: 48px;
  min-height: 272px;
}

.home-page .stats-heading {
  max-width: 480px;
  align-self: start;
  margin-top: 48px;
  padding-left: 24px;
}

.home-page .stats-heading h2 {
  max-width: none;
  margin-top: 0;
  font-size: 56px;
  line-height: 0.98;
}

.home-page .stats-heading > p:not(.eyebrow) {
  max-width: 420px;
  margin-top: 18px;
  color: #4f5f70;
  font-size: 14px;
  line-height: 1.65;
}

.home-page .stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  border-top: 1px solid rgba(6, 44, 65, 0.18);
  border-bottom: 1px solid rgba(6, 44, 65, 0.18);
  padding-block: 25px;
}

.home-page .stat-item {
  padding: 7px 18px 7px 0;
}

.home-page .stat-item + .stat-item {
  border-left: 1px solid rgba(6, 44, 65, 0.18);
  padding-left: 18px;
}

.home-page .stat-item strong {
  display: block;
  color: var(--black);
  font-size: 42px;
  font-weight: 750;
  line-height: 1;
}

.home-page .stat-item > span {
  display: block;
  margin-top: 11px;
  color: var(--black);
  font-size: 13px;
  font-weight: 700;
}

.home-page .stat-item p {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.5;
}

.home-page .platform-strip {
  border-block: 1px solid var(--border);
  padding-block: 27px;
}

.home-page .stats-platform-strip {
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 40px;
  margin-top: 48px;
}

.home-page .stats-platform-strip > .eyebrow {
  flex: 0 0 auto;
  color: #53677a;
}

.home-page .platform-marquee {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.home-page .platform-strip-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
}

.home-page .platform-strip-inner > .eyebrow {
  flex: 0 0 auto;
}

.home-page .platform-logos {
  display: flex;
  width: max-content;
  flex: 0 0 auto;
  align-items: center;
  animation: home-marquee 24s linear infinite;
}

.home-page .platform-logo-group {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 25px;
  padding-right: 25px;
}

.home-page .stats-platform-strip:hover .platform-logos, .home-page
.stats-platform-strip:focus-within .platform-logos {
  animation-play-state: paused;
}

.home-page .platform-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #737982;
  font-size: 13px;
  font-weight: 650;
  white-space: nowrap;
}

.home-page .platform-logo img {
  width: auto;
  height: auto;
  max-width: 30px;
  max-height: 22px;
}

.home-page .integration-logo img {
  width: auto;
  height: auto;
  max-width: 34px;
  max-height: 26px;
}

.home-page .primary-service-grid {
  display: grid;
  align-items: center;
  gap: 45px;
}

.home-page .primary-service {
  background: var(--accent);
}

.home-page .primary-service-copy h2, .home-page
.primary-service-copy .eyebrow {
  color: var(--white);
}

.home-page .primary-service-copy > p:not(.eyebrow) {
  color: rgba(255, 255, 255, 0.78);
}

.home-page .primary-service-copy .text-link {
  color: var(--accent-soft);
}

.home-page .primary-service-visual {
  overflow: hidden;
  border: 0;
  border-radius: 8px;
  background: var(--accent-soft);
  padding: 24px;
}

.home-page .primary-service-visual img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.home-page .primary-service-visual figcaption {
  margin: 8px 4px 0;
  color: var(--secondary);
  font-size: 11px;
}

.home-page .primary-service-copy > p:not(.eyebrow), .home-page
.feature-copy > p:not(.eyebrow) {
  max-width: 520px;
  margin-top: 20px;
  font-size: 15px;
  line-height: 1.9;
}

.home-page .primary-service-copy .text-link, .home-page
.feature-copy .text-link {
  margin-top: 26px;
}

.home-page .text-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 700;
  transition: color 160ms ease;
}

.home-page .text-link:hover {
  color: var(--accent-hover);
}

.home-page .text-link svg {
  transition: transform 160ms ease;
}

.home-page .text-link:hover svg {
  transform: translate(2px, -2px);
}

.home-page .section-heading {
  max-width: 720px;
}

.home-page .section-heading h2 {
  max-width: 22ch;
}

.home-page .section-intro {
  max-width: 580px;
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.8;
}

.home-page .section-heading-centered {
  margin-inline: auto;
  text-align: center;
}

.home-page .section-heading-centered h2, .home-page
.section-heading-centered .section-intro {
  margin-inline: auto;
}

.home-page .value-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #f5f8f8 0%, #edf2f2 100%);
}

.home-page .value-section::before {
  position: absolute;
  top: -220px;
  right: -100px;
  width: 480px;
  height: 480px;
  border: 1px solid rgba(6, 44, 65, 0.08);
  border-radius: 50%;
  content: '';
  pointer-events: none;
}

.home-page .value-section::after {
  position: absolute;
  top: -150px;
  right: -30px;
  width: 340px;
  height: 340px;
  border: 1px solid rgba(6, 44, 65, 0.06);
  border-radius: 50%;
  content: '';
  pointer-events: none;
}

.home-page .value-heading {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 48px;
}

.home-page .value-heading-copy .eyebrow {
  display: inline-flex;
  margin-bottom: 18px;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--accent);
  color: var(--white);
  font-size: 10px;
  letter-spacing: 0.12em;
}

.home-page .value-heading h2 {
  max-width: 12ch;
  font-size: clamp(40px, 5vw, 64px);
  letter-spacing: -0.055em;
  line-height: 1.02;
}

.home-page .value-heading-note {
  max-width: 350px;
  margin: 0 0 6px;
  font-size: 15px;
  line-height: 1.8;
}

.home-page .value-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(278px, 1fr));
  gap: 14px;
  margin-top: 48px;
}

.home-page .value-item {
  position: relative;
  display: flex;
  min-height: 278px;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  padding: 26px;
  overflow: hidden;
  border: 1px solid rgba(6, 44, 65, 0.08);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 10px 28px rgba(6, 44, 65, 0.035);
  transition: opacity 650ms ease, transform 650ms cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 220ms ease, border-color 220ms ease;
}

.home-page .value-item:nth-child(2) {
  transition-delay: 70ms;
}

.home-page .value-item:nth-child(3) {
  transition-delay: 140ms;
}

.home-page .value-item:nth-child(4) {
  transition-delay: 210ms;
}

.home-page .value-item:nth-child(5) {
  transition-delay: 280ms;
}

.home-page .value-item:nth-child(6) {
  transition-delay: 350ms;
}

.home-page .value-item:hover {
  transform: translateY(-5px);
  border-color: rgba(6, 44, 65, 0.2);
  box-shadow: 0 18px 36px rgba(6, 44, 65, 0.1);
  transition-delay: 0ms;
}

.home-page .value-item-featured {
  border-color: rgba(6, 44, 65, 0.08);
  background: rgba(255, 255, 255, 0.88);
  color: var(--black);
  box-shadow: 0 10px 28px rgba(6, 44, 65, 0.035);
}

.home-page .value-index {
  position: absolute;
  top: 25px;
  right: 26px;
  color: #87969c;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.home-page .value-item-featured .value-index {
  color: #87969c;
}

.home-page .value-icon {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(6, 44, 65, 0.1);
  border-radius: 12px;
  background: #edf3f4;
  color: var(--accent);
}

.home-page .value-item-featured .value-icon {
  border-color: rgba(6, 44, 65, 0.1);
  background: #edf3f4;
  color: var(--accent);
}

.home-page .value-item:nth-child(1) .value-icon {
  border-color: #d7e8ff;
  background: #edf5ff;
  color: #2563eb;
}

.home-page .value-item:nth-child(2) .value-icon {
  border-color: #c9eff1;
  background: #e9f9fa;
  color: #0891a2;
}

.home-page .value-item:nth-child(3) .value-icon {
  border-color: #e3d8ff;
  background: #f3efff;
  color: #7c3aed;
}

.home-page .value-item:nth-child(4) .value-icon {
  border-color: #ccebdc;
  background: #eaf8f0;
  color: #16834b;
}

.home-page .value-item:nth-child(5) .value-icon {
  border-color: #f6dfbd;
  background: #fff5e7;
  color: #c26a12;
}

.home-page .value-item:nth-child(6) .value-icon {
  border-color: #cae8e5;
  background: #eaf7f5;
  color: #087f78;
}

.home-page .value-icon svg {
  width: 19px;
  height: 19px;
  stroke-width: 1.7;
}

.home-page .value-item h3 {
  margin-top: 22px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.home-page .value-item-featured h3 {
  font-size: 23px;
}

.home-page .value-item > p {
  max-width: 48ch;
  margin-top: 9px;
  font-size: 13px;
  line-height: 1.7;
}

.home-page .value-item-featured > p {
  color: var(--secondary);
}

.home-page .value-item .text-link {
  margin-top: auto;
  padding-top: 18px;
  font-size: 12px;
}

.home-page .value-item-featured .text-link {
  color: var(--accent);
}

.home-page .value-item-featured .text-link:hover {
  color: var(--accent-hover);
}

@media (max-width: 799px) {
  .home-page .value-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 18px;
  }

  .home-page .value-heading-note {
    max-width: 500px;
  } }

@media (max-width: 639px) {
  .home-page .value-heading h2 {
    font-size: 42px;
  }

  .home-page .value-grid {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 11px;
    margin-top: 30px;
  }

  .home-page .value-item, .home-page
  .value-item:nth-child(n) {
    grid-column: auto;
    min-height: 0;
    padding: 22px;
  }

  .home-page .value-item-featured {
    min-height: 235px;
  }

  .home-page .value-item:nth-child(n) {
    transition-delay: 0ms;
  }

  .home-page .value-item > p {
    min-height: 0;
  } }

.home-page .feature-list {
  display: grid;
  gap: 88px;
}

.home-page .feature-row {
  display: grid;
  align-items: center;
  gap: 56px;
}

.home-page .feature-row-reverse .feature-copy {
  order: 2;
}

.home-page .feature-row-reverse .feature-image {
  order: 1;
}

.home-page .feature-copy h2 {
  max-width: 13ch;
  margin-top: 12px;
}

.home-page .feature-image {
  overflow: hidden;
  aspect-ratio: 1.3;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #f4f7fc;
  padding: 12px;
}

.home-page .feature-image img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: contain;
}

.home-page .feature-image-2 img {
  object-fit: cover;
}

.home-page .integration-section {
  background: #f5f8f8;
}

.home-page .integration-section .section-heading {
  margin-inline: auto;
}

.home-page .integration-section .section-heading h2, .home-page
.integration-section .section-intro {
  margin-inline: auto;
}

.home-page .integration-cta {
  margin-top: 28px;
  text-align: center;
}

.home-page .integration-summary {
  max-width: 620px;
  margin: 28px auto 0;
  color: #52646b;
  font-size: 14px;
  line-height: 1.8;
  text-align: center;
}

.home-page .integration-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(200px, 1fr);
  gap: 14px;
  margin-top: 42px;
}

.home-page .integration-item {
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(6, 44, 65, 0.08);
  border-radius: 14px;
  background: var(--white);
  padding: 24px;
  box-shadow: 0 10px 28px rgba(6, 44, 65, 0.035);
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.home-page .integration-item:hover {
  transform: translateY(-4px);
  border-color: rgba(6, 44, 65, 0.2);
  box-shadow: 0 18px 36px rgba(6, 44, 65, 0.09);
}

.home-page .integration-logo {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid rgba(6, 44, 65, 0.08);
  border-radius: 12px;
  background: #edf3f4;
}

.home-page .integration-item h3 {
  margin-top: 22px;
  font-size: 17px;
  font-weight: 700;
}

.home-page .integration-item p {
  margin-top: 7px;
  font-size: 13px;
  line-height: 1.6;
}

.home-page .integration-item > svg {
  position: absolute;
  top: 26px;
  right: 24px;
  width: 16px;
  height: 16px;
  color: var(--accent);
  transition: transform 180ms ease;
}

.home-page .integration-item:hover > svg {
  transform: translate(2px, -2px);
}

.home-page .integration-item:nth-child(2) {
  transition-delay: 70ms;
}

.home-page .integration-item:nth-child(3) {
  transition-delay: 140ms;
}

.home-page .integration-item:nth-child(4) {
  transition-delay: 210ms;
}

.home-page .integration-item:nth-child(5) {
  transition-delay: 280ms;
}

.home-page .integration-item:nth-child(6) {
  transition-delay: 350ms;
}

@media (max-width: 799px) {
  .home-page .integration-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  } }

@media (max-width: 639px) {
  .home-page .integration-list {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(174px, auto);
    margin-top: 28px;
  }

  .home-page .integration-item:nth-child(n) {
    transition-delay: 0ms;
  } }

.home-page .process-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 42px;
  border-top: 1px solid var(--border);
}

.home-page .process-step {
  min-width: 0;
  padding: 22px 22px 0 0;
}

.home-page .process-step + .process-step {
  padding-left: 18px;
  border-left: 1px solid var(--border);
}

.home-page .process-step > span {
  color: var(--accent-hover);
  font-size: 12px;
  font-weight: 750;
}

.home-page .process-step h3 {
  margin-top: 16px;
  font-size: 18px;
  font-weight: 700;
}

.home-page .process-step p {
  margin-top: 9px;
  font-size: 12px;
  line-height: 1.65;
}

.home-page .case-section {
  background: #f6f6f6;
}

.home-page .case-heading-row, .home-page
.insights-heading-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
}

.home-page .case-heading-row > .text-link, .home-page
.insights-heading-row > .text-link {
  flex: 0 0 auto;
  margin-bottom: 5px;
}

.home-page .case-list {
  display: grid;
  gap: 46px;
  margin-top: 34px;
}

.home-page .case-row {
  display: grid;
  align-items: center;
  gap: 32px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 32px;
}

.home-page .case-row-reverse .case-visual {
  order: 2;
}

.home-page .case-row-reverse .case-copy {
  order: 1;
}

.home-page .case-visual, .home-page
.insight-image {
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 1.5;
  border: 1px solid var(--border);
  border-radius: 7px;
  background: #edf1f7;
}

.home-page .case-visual img, .home-page
.insight-image img {
  object-fit: cover;
  transition: transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.home-page .case-visual:hover img, .home-page
.insight-image:hover img {
  transform: scale(1.025);
}

.home-page .case-copy h3 {
  max-width: 22ch;
  margin-top: 14px;
  font-family: var(--font-body), sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
}

.home-page .case-copy > p:not(.eyebrow) {
  margin-top: 14px;
  font-size: 13px;
  line-height: 1.8;
}

.home-page .case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 14px;
}

.home-page .case-tags span {
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 5px 7px;
  color: var(--secondary);
  font-size: 10px;
}

.home-page .case-copy .text-link {
  margin-top: 17px;
}

.home-page .why-grid {
  display: grid;
  align-items: start;
  gap: 42px;
}

.home-page .why-grid h2 {
  max-width: 10ch;
}

.home-page .why-intro {
  max-width: 400px;
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.8;
}

.home-page .why-grid > div > .text-link {
  margin-top: 22px;
}

.home-page .why-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--border);
}

.home-page .why-list li {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  border-bottom: 1px solid var(--border);
  padding: 18px 16px 18px 0;
  color: var(--black);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.6;
}

.home-page .why-list li:nth-child(even) {
  padding-left: 14px;
  border-left: 1px solid var(--border);
}

.home-page .why-list svg {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  color: var(--accent-hover);
}

.home-page .testimonial-section {
  background: #f6f6f6;
}

.home-page .testimonial-wrap {
  max-width: 930px;
  text-align: center;
}

.home-page .testimonial-quote-mark {
  width: 28px;
  height: 28px;
  margin: 27px auto 14px;
  color: var(--highlight);
}

.home-page .testimonial-wrap blockquote {
  color: var(--black);
  font-family: var(--font-body), sans-serif;
  font-size: 54px;
  font-weight: 600;
  line-height: 1.55;
}

.home-page .testimonial-byline {
  display: grid;
  gap: 4px;
  margin-top: 25px;
}

.home-page .testimonial-byline strong {
  color: var(--black);
  font-size: 13px;
}

.home-page .testimonial-byline span {
  color: var(--secondary);
  font-size: 11px;
}

.home-page .testimonial-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 27px;
}

.home-page .testimonial-controls > span {
  margin-right: 8px;
  color: var(--secondary);
  font-size: 11px;
  font-weight: 700;
}

.home-page .testimonial-controls > span span {
  margin-inline: 3px;
  color: var(--border);
}

.home-page .testimonial-controls button {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--white);
  color: var(--accent);
  transition: border-color 180ms ease, background-color 180ms ease, color 180ms ease;
}

.home-page .testimonial-controls button:hover {
  border-color: var(--accent);
  background: var(--accent);
  color: var(--white);
}

.home-page .testimonial-controls button svg {
  width: 16px;
  height: 16px;
}

.home-page .testimonial-quote-enter {
  animation: home-testimonial-quote-in 320ms ease both;
}

@keyframes home-testimonial-quote-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.home-page .faq-section {
  background: var(--white);
}

.home-page .faq-grid {
  display: grid;
  align-items: start;
  gap: 42px;
}

.home-page .faq-grid > div:first-child > .text-link {
  margin-top: 26px;
}

.home-page .faq-list {
  border-top: 1px solid var(--border);
}

.home-page .faq-item {
  border-bottom: 1px solid var(--border);
}

.home-page .faq-item h3 {
  margin: 0;
}

.home-page .faq-item button {
  display: flex;
  width: 100%;
  min-height: 63px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 0;
  color: var(--black);
  font-size: 14px;
  font-weight: 650;
  line-height: 1.45;
  text-align: left;
}

.home-page .faq-item button svg {
  width: 17px;
  height: 17px;
  flex: 0 0 auto;
  color: var(--accent);
  transition: transform 200ms ease;
}

.home-page .faq-item.is-open button svg {
  transform: rotate(180deg);
}

.home-page .faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 240ms ease;
}

.home-page .faq-item.is-open .faq-answer {
  grid-template-rows: 1fr;
}

.home-page .faq-answer > div {
  overflow: hidden;
}

.home-page .faq-answer p {
  max-width: 650px;
  padding: 0 30px 18px 0;
  font-size: 13px;
  line-height: 1.75;
}

.home-page .insights-section {
  background: var(--white);
}

.home-page .insights-grid {
  display: grid;
  gap: 32px;
  margin-top: 32px;
}

.home-page .insight-image {
  margin-bottom: 18px;
}

.home-page .insight-item > .eyebrow {
  font-size: 10px;
}

.home-page .insight-item h3 {
  max-width: 29ch;
  margin-top: 10px;
  font-family: var(--font-body), sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.35;
}

.home-page .insight-item h3 a:hover {
  color: var(--accent-hover);
}

.home-page .insight-excerpt {
  margin-top: 9px;
  font-size: 12px;
  line-height: 1.7;
}

.home-page .insight-item > .text-link {
  margin-top: 12px;
  font-size: 12px;
}

.home-page .final-cta-section {
  background: var(--accent);
  padding-block: 52px;
}

.home-page .final-cta-content {
  display: grid;
  align-items: center;
  gap: 32px;
}

.home-page .final-cta-content h2 {
  max-width: 16ch;
  margin-top: 10px;
  color: var(--white);
}

.home-page .final-cta-content > div:first-child > p:last-child {
  margin-top: 13px;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);
}

.home-page .final-cta-section .eyebrow, .home-page
.final-cta-section .text-link {
  color: var(--accent-soft);
}

.home-page .final-cta-section .button-dark {
  border-color: var(--white);
  background: var(--white);
  color: var(--accent);
}

.home-page .final-cta-section .button-dark:hover {
  border-color: var(--accent-soft);
  background: var(--accent-soft);
  color: var(--accent);
}

.home-page .final-cta-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 19px;
}

.home-page .final-cta-visual {
  display: none;
  align-items: center;
  justify-content: flex-end;
  gap: 13px;
  color: var(--accent-soft);
}

.home-page .final-cta-visual > span {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border: 1px solid rgba(216, 230, 253, 0.25);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.08);
}

.home-page .final-cta-visual > span svg {
  width: 22px;
  height: 22px;
  stroke-width: 1.6;
}

.home-page .final-cta-visual > svg {
  width: 14px;
  height: 14px;
  color: #8394a8;
}

.home-page .newsletter-section {
  border-bottom: 1px solid var(--border);
  background: #f6f6f6;
  padding-block: 36px;
}

.home-page .newsletter-inner {
  display: grid;
  align-items: center;
  gap: 25px;
}

.home-page .newsletter-inner h2 {
  margin-top: 8px;
  font-size: 40px;
  font-weight: 700;
}

.home-page .newsletter-inner > div > p:last-child {
  margin-top: 6px;
  font-size: 12px;
}

.home-page .newsletter-form > div {
  display: flex;
  min-height: 48px;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 4px 5px 4px 13px;
}

.home-page .newsletter-form > div > svg {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  color: var(--secondary);
}

.home-page .newsletter-form input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  color: var(--black);
  font-size: 12px;
}

.home-page .newsletter-form input::placeholder {
  color: #858b93;
}

.home-page .newsletter-form button {
  display: inline-flex;
  min-height: 38px;
  flex: 0 0 auto;
  align-items: center;
  gap: 7px;
  border-radius: 4px;
  background: var(--accent);
  padding: 8px 12px;
  color: var(--white);
  font-size: 11px;
  font-weight: 700;
  transition: background-color 180ms ease;
}

.home-page .newsletter-form button:hover {
  background: var(--accent-hover);
}

.home-page .newsletter-form button svg {
  width: 13px;
  height: 13px;
}

.home-page .newsletter-form > p {
  min-height: 16px;
  margin-top: 7px;
  font-size: 10px;
}

.home-page :is(a, button, input):focus-visible {
  outline: 2px solid var(--accent-hover);
  outline-offset: 3px;
}

@media (min-width: 640px) {
  .home-page .content-wrap {
    padding-inline: 44px;
  }

  .home-page .hero-copy h1 {
    font-size: 48px;
  }

  .home-page .section-pad {
    padding-block: 88px;
  }

  .home-page .stats-heading h2, .home-page
  .section-heading h2, .home-page
  .primary-service-copy h2, .home-page
  .feature-copy h2, .home-page
  .why-grid h2, .home-page
  .final-cta-content h2 {
    font-size: 40px;
  }

  .home-page .insights-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-page .newsletter-inner {
    grid-template-columns: 1fr 0.9fr;
    gap: 35px;
  } }

@media (min-width: 800px) {
  .home-page .hero-grid {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 40px;
  }

  .home-page .primary-service-grid, .home-page
  .feature-row, .home-page
  .case-row {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }

  .home-page .why-grid, .home-page
  .faq-grid {
    grid-template-columns: 0.75fr 1.25fr;
    gap: 64px;
  }

  .home-page .stats-story {
    grid-template-columns: 0.8fr 1fr;
  }

  .home-page .insights-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .home-page .final-cta-content {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 20px 50px;
  }

  .home-page .final-cta-actions {
    grid-column: 2;
    grid-row: 1;
  }

  .home-page .final-cta-visual {
    display: flex;
    grid-column: 1 / -1;
    margin-top: 8px;
    border-top: 1px solid rgba(23, 51, 79, 0.14);
    padding-top: 19px;
  } }

@media (min-width: 1024px) {
  .home-page .content-wrap {
    padding-inline: 62px;
  }

  .home-page .home-hero {
    padding-block: 0 26px;
    min-height: calc(100svh - 154px);
    display: flex;
    align-items: center;
  }

  .home-page .capability-marquee {
    margin-bottom: -7px;
    padding-block: 17px;
    transform: translateY(-32px);
  }

  .home-page .hero-grid {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    transform: translateY(-12px);
  }

  .home-page .hero-copy h1 {
    font-size: clamp(66px, 4.7vw, 76px);
  }

  .home-page .section-pad {
    padding-block: 96px;
  }

  .home-page .stats-section.section-pad {
    position: relative;
    z-index: 2;
    background: transparent;
    padding-top: 24px;
  }

  .home-page .stats-panel {
    min-height: 360px;
    justify-content: flex-start;
    gap: 24px;
    padding: 24px 72px 48px;
  }

  .home-page .stats-story {
    min-height: 0;
  }

  .home-page .stats-platform-strip {
    margin-top: 0;
  }

  .home-page .stats-heading {
    margin-top: 16px;
  }

  .home-page .stats-heading > p:not(.eyebrow) {
    font-size: 15px;
  }

  .home-page .primary-service.section-pad {
    position: relative;
    z-index: 1;
    margin-top: -244px;
    padding-top: 180px;
  }

  .home-page .stats-heading h2 {
    font-size: 54px;
  }

  .home-page .section-heading h2, .home-page
  .primary-service-copy h2, .home-page
  .feature-copy h2, .home-page
  .why-grid h2, .home-page
  .final-cta-content h2 {
    font-size: 52px;
  }

  .home-page .feature-copy h2 {
    font-size: 42px;
    line-height: 1.08;
  }

  .home-page .primary-service-grid, .home-page
  .feature-row, .home-page
  .case-row {
    gap: 64px;
  }

  .home-page .feature-list {
    gap: 92px;
  }

  .home-page .case-list {
    gap: 48px;
  }

  .home-page .case-row {
    padding-bottom: 32px;
  }

  .home-page .hero-copy {
    padding-block: 12px;
  }

  .home-page .hero-copy h1 {
    margin-top: 16px;
    font-size: clamp(66px, 4.7vw, 76px);
  }

  .home-page .hero-description {
    margin-top: 18px;
    font-size: clamp(16px, 1.25vw, 18px);
    line-height: 1.68;
  }

  .home-page .hero-actions {
    margin-top: 22px;
  }

  .home-page .hero-proof {
    margin-top: 20px;
  }

  .home-page .hero-stats {
    margin-top: 18px;
    padding-top: 16px;
  }

  .home-page .hero-tech-proof {
    margin-top: 8px;
  }

  .home-page .hero-visual {
    height: clamp(380px, 58svh, 540px);
    align-self: center;
    aspect-ratio: auto;
  } }

@media (max-width: 639px) {
  .home-page .content-wrap {
    padding-inline: 18px;
  }

  .home-page .section-pad {
    padding-block: 56px;
  }

  .home-page .home-hero {
    padding-block: 30px 22px;
    min-height: calc(100svh - 139px);
  }

  .home-page .hero-grid {
    gap: 20px;
  }

  .home-page .hero-copy h1 {
    max-width: none;
    margin-top: 14px;
    font-size: 36px;
    line-height: 1.08;
  }

  .home-page .hero-description {
    max-width: 36ch;
    margin-top: 14px;
    font-size: 15px;
    line-height: 1.6;
  }

  .home-page .hero-actions {
    gap: 10px;
    margin-top: 20px;
  }

  .home-page .button {
    min-height: 48px;
    padding-inline: 12px;
    font-size: 12px;
  }

  .home-page .hero-actions .button-dark {
    min-height: 56px;
  }

  .home-page .hero-proof {
    margin-top: 24px;
  }

  .home-page .hero-stats {
    gap: 20px;
    margin-top: 18px;
    padding-top: 16px;
  }

  .home-page .hero-visual {
    aspect-ratio: 1.22;
    margin-top: 0;
  }

  .home-page .marquee-item {
    gap: 14px;
    padding-inline: 12px;
    font-size: 16px;
  }

  .home-page .marquee-star {
    width: 14px;
    height: 14px;
  }

  .home-page .stats-heading {
    display: block;
    max-width: none;
    margin-top: 0;
    padding-left: 0;
  }

  .home-page .stats-heading h2 {
    max-width: 12ch;
    margin-top: 12px;
    font-size: 32px;
  }

  .home-page .stats-heading > p:not(.eyebrow) {
    margin-top: 11px;
    font-size: 12px;
  }

  .home-page .stats-panel {
    min-height: 0;
    gap: 0;
    border-radius: 12px;
    margin-inline: 0;
    padding: 24px 20px;
  }

  .home-page .stats-story {
    grid-template-columns: 1fr;
    gap: 23px;
    min-height: 0;
  }

  .home-page .stats-heading h2, .home-page
  .section-heading h2, .home-page
  .primary-service-copy h2, .home-page
  .feature-copy h2, .home-page
  .why-grid h2, .home-page
  .final-cta-content h2 {
    font-size: 32px;
  }

  .home-page .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 16px;
  }

  .home-page .stat-item {
    min-height: 90px;
    padding: 13px 10px 10px 0;
    border-bottom: 0;
  }

  .home-page .stat-item + .stat-item {
    padding-left: 10px;
  }

  .home-page .stat-item:nth-child(odd) {
    border-left: 0;
    padding-left: 0;
  }

  .home-page .stat-item:last-child {
    grid-column: 1 / -1;
    border-top: 1px solid rgba(6, 44, 65, 0.18);
    padding: 13px 0 4px;
  }

  .home-page .stat-item strong {
    font-size: 34px;
  }

  .home-page .stats-platform-strip {
    align-items: flex-start;
    flex-direction: column;
    gap: 11px;
    margin-top: 16px;
    padding-top: 14px;
  }

  .home-page .platform-marquee {
    width: 100%;
    flex: none;
  }

  .home-page .platform-logo-group {
    gap: 15px;
    padding-right: 15px;
  }

  .home-page .stats-platform-strip .platform-logos {
    animation-duration: 30s;
  }

  .home-page .platform-logo {
    font-size: 11px;
  }

  .home-page .primary-service-grid, .home-page
  .feature-row, .home-page
  .case-row, .home-page
  .why-grid, .home-page
  .faq-grid {
    gap: 24px;
  }

  .home-page .primary-service-visual {
    padding: 10px;
  }

  .home-page .feature-list {
    gap: 46px;
  }

  .home-page .feature-row-reverse .feature-copy, .home-page
  .feature-row-reverse .feature-image, .home-page
  .case-row-reverse .case-visual, .home-page
  .case-row-reverse .case-copy {
    order: initial;
  }

  .home-page .feature-image {
    aspect-ratio: 1.2;
  }

  .home-page .process-list {
    grid-template-columns: 1fr;
    margin-top: 25px;
  }

  .home-page .process-step, .home-page
  .process-step + .process-step {
    display: grid;
    grid-template-columns: 38px minmax(0, 1fr);
    gap: 3px 10px;
    padding: 15px 0;
    border-bottom: 1px solid var(--border);
    border-left: 0;
  }

  .home-page .process-step > span {
    grid-row: span 2;
  }

  .home-page .process-step h3 {
    margin-top: 0;
    font-size: 16px;
  }

  .home-page .process-step p {
    margin-top: 2px;
  }

  .home-page .case-heading-row, .home-page
  .insights-heading-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .home-page .case-list {
    gap: 22px;
    margin-top: 22px;
  }

  .home-page .case-row {
    gap: 14px;
    padding-bottom: 20px;
  }

  .home-page .case-copy h3 {
    font-size: 19px;
  }

  .home-page .why-list {
    grid-template-columns: 1fr;
  }

  .home-page .why-list li, .home-page
  .why-list li:nth-child(even) {
    padding: 13px 0;
    border-left: 0;
  }

  .home-page .testimonial-wrap blockquote {
    font-size: 23px;
  }

  .home-page .faq-item button {
    min-height: 58px;
    font-size: 13px;
  }

  .home-page .insights-grid {
    grid-template-columns: 1fr;
    gap: 22px;
    margin-top: 22px;
  }

  .home-page .final-cta-section {
    padding-block: 36px;
  }

  .home-page .final-cta-actions {
    gap: 14px;
  }

  .home-page .newsletter-inner h2 {
    font-size: 25px;
  }

  .home-page .newsletter-form > div {
    gap: 7px;
    padding-left: 9px;
  }

  .home-page .newsletter-form button {
    padding-inline: 9px;
  } }

@media (min-width: 1024px) {

  .home-page .content-wrap {
    padding-inline: 48px;
  } }

@media (min-width: 1024px) {

  .home-page .content-wrap {
    padding-inline: 48px;
  } }`;

function useScrollReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.home-page [data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) {
  return (
    <div className={centered ? 'section-heading section-heading-centered' : 'section-heading'} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="text-link" href={href}>{children}<ArrowUpRight aria-hidden="true" /></Link>;
}

function Hero() {
  const stats = COMPANY_STATS.slice(0, 2);
  return (
    <section className="home-hero">
      <div className="content-wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span aria-hidden="true" /> CLOUD · DEVOPS · SOFTWARE</p>
          <h1><span className="hero-title-line">Engineering</span><span className="hero-title-line">reliable digital</span><span className="hero-title-line">infrastructure.</span></h1>
          <p className="hero-description">We help teams plan, build, and operate dependable cloud platforms, delivery pipelines, and software that support the work your business depends on.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">Let&apos;s talk <ArrowRight aria-hidden="true" /></Link>
            <Link className="button button-light" href="#services">Explore services</Link>
          </div>
        </div>
        <figure className="hero-visual">
          <Image src={heroSectionImage} alt="Cloud infrastructure connecting web and mobile apps, databases, servers, and security" priority fetchPriority="high" sizes="(max-width: 800px) 100vw, 52vw" className="hero-image" />
          <figcaption className="hero-image-note"><span className="hero-image-dot" /> Cloud, connected.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function CapabilityMarquee() {
  const items = [...capabilities, ...capabilities];
  return (
    <div className="capability-marquee" role="region" aria-label={`Capabilities: ${capabilities.join(', ')}`}>
      <div className="marquee-track" aria-hidden="true">
        {items.map((item, index) => <span className="marquee-item" key={`${item}-${index}`}>{item}<Asterisk className="marquee-star" aria-hidden="true" /></span>)}
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="stats-section section-pad">
      <div className="content-wrap">
        <div className="stats-panel">
          <div className="stats-story">
            <div className="stats-heading" data-reveal>
              <h2>We help teams do more with technology.</h2>
              <p>Cloud, DevOps, and software engineering that helps teams reduce operational friction and move good ideas into production.</p>
            </div>
            <div className="stats-grid">
              {COMPANY_STATS.slice(0, 3).map((stat) => <div className="stat-item" key={stat.label} data-reveal><strong>{stat.value}</strong><span>{stat.label}</span><p>{stat.subtext}</p></div>)}
            </div>
          </div>
          <PlatformStrip />
        </div>
      </div>
    </section>
  );
}

function PlatformStrip() {
  return (
    <div className="stats-platform-strip" role="region" aria-label="Technologies Codingtron works with">
      <p className="eyebrow">TOOLS WE KNOW</p>
      <div className="platform-marquee">
        <div className="platform-logos">
          {[0, 1].map((copy) => (
            <div className="platform-logo-group" key={copy} aria-hidden={copy === 1}>
              {platforms.map((platform) => {
                const wordmark = platformLogoOverrides[platform.slug];
                return <span key={platform.slug} className="platform-logo"><Image src={wordmark ?? `https://cdn.simpleicons.org/${platform.slug}/${platformBrandColors[platform.slug]}`} alt={wordmark ? `${platform.name} logo` : ''} width={22} height={22} unoptimized />{wordmark ? <span className="sr-only">{platform.name}</span> : platform.name}</span>;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrimaryServiceSection() {
  const service = SERVICES.find((item) => item.slug === 'infrastructure-deployment-management');
  return (
    <section id="services" className="primary-service section-pad">
      <div className="content-wrap primary-service-grid">
        <figure className="primary-service-visual" data-reveal>
          <Image src={devopsLifecycleImage} alt="Continuous DevOps cycle from code and planning through deployment and monitoring" sizes="(max-width: 800px) 100vw, 50vw" />
          <figcaption>Plan · Build · Release · Operate</figcaption>
        </figure>
        <div className="primary-service-copy" data-reveal>
          <p className="eyebrow">CLOUD / ENGINEERING</p>
          <h2>Build, automate, and scale your infrastructure with confidence.</h2>
          <p>{service?.shortDescription}</p>
          <ArrowLink href="/services/infrastructure-deployment-management">Explore infrastructure services</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function ValuePropositionSection() {
  return (
    <section className="value-section section-pad">
      <div className="content-wrap">
        <div className="value-heading" data-reveal>
          <div className="value-heading-copy">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Our value proposition</h2>
          </div>
          <p className="value-heading-note">The engineering capabilities to make complex systems easier to build, ship, and run.</p>
        </div>
        <div className="value-grid">
          {valueProps.map(({ title, description, icon: Icon, href }, index) => (
            <article className={`value-item ${index === 0 ? 'value-item-featured' : ''}`} key={title} data-reveal>
              <span className="value-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="value-icon"><Icon aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowLink href={href}>Explore service</ArrowLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureShowcase() {
  return (
    <section id="expertise" className="feature-showcase section-pad">
      <div className="content-wrap feature-list">
        {featureRows.map((feature, index) => (
          <article className={`feature-row ${feature.reverse ? 'feature-row-reverse' : ''}`} key={feature.label}>
            <div className="feature-copy" data-reveal>
              <p className="eyebrow">{feature.label}</p>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <ArrowLink href={feature.href}>Learn more</ArrowLink>
            </div>
            <figure className={`feature-image feature-image-${index + 1}`} data-reveal>
              <Image src={feature.image} alt={feature.alt} sizes="(max-width: 800px) 100vw, 50vw" />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}

function IntegrationSection() {
  return (
    <section id="technologies" className="integration-section section-pad">
      <div className="content-wrap">
        <SectionHeading eyebrow="TECHNOLOGY ECOSYSTEM" title="Get more value from your tools." description="Make the most of the proven platforms behind your cloud infrastructure, delivery workflows, and software." centered />
        <div className="integration-list">
          {integrations.map((item) => <article className="integration-item" key={item.slug} data-reveal><span className="integration-logo"><Image src={platformLogoOverrides[item.slug] ?? `https://cdn.simpleicons.org/${item.slug}/${platformBrandColors[item.slug]}`} alt="" width={30} height={30} unoptimized /></span><h3>{item.name}</h3><p>{item.detail}</p><ArrowUpRight aria-hidden="true" /></article>)}
        </div>
        <p className="integration-summary">From first commit to production infrastructure, these tools help teams build, ship, and scale with confidence.</p>
        <div className="integration-cta"><ArrowLink href="/services">Explore our expertise</ArrowLink></div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="process-section section-pad">
      <div className="content-wrap">
        <SectionHeading eyebrow="A CLEAR WAY FORWARD" title="From first conversation to steady-state." description="A collaborative process keeps each decision visible and each next step grounded in your goals." centered />
        <ol className="process-list">
          {processSteps.map(([number, title, description]) => <li className="process-step" key={number} data-reveal><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section id="case-studies" className="case-section section-pad">
      <div className="content-wrap">
        <div className="case-heading-row"><SectionHeading eyebrow="SELECTED WORK" title="Engineering built for real-world demands." description="A look at the infrastructure and delivery challenges Codingtron has helped teams address." /><ArrowLink href="/case-studies">View all case studies</ArrowLink></div>
        <div className="case-list">
          {CASE_STUDIES.map((study, index) => <article className={`case-row ${index % 2 ? 'case-row-reverse' : ''}`} key={study.id} data-reveal>
            <Link href={`/case-studies/${study.slug}`} className="case-visual" aria-label={`View case study: ${study.title}`}>
              <Image src={caseImages[index % caseImages.length].src} alt={caseImages[index % caseImages.length].alt} fill sizes="(max-width: 800px) 100vw, 52vw" />
            </Link>
            <div className="case-copy">
              <p className="eyebrow">{study.clientIndustry}</p>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <div className="case-tags">{study.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}</div>
              <ArrowLink href={`/case-studies/${study.slug}`}>View case study</ArrowLink>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function WhyCodingtronSection() {
  const reasons = [
    'Cloud-first architecture grounded in your workload',
    'Automation woven into delivery and operations',
    'Scalable infrastructure with clear ownership',
    'Modern engineering practices and reviewable changes',
    'Security considered throughout the system lifecycle',
    'Maintainable foundations for long-term change',
  ];
  return (
    <section className="why-section section-pad">
      <div className="content-wrap why-grid">
        <div data-reveal><p className="eyebrow">WHY CODINGTRON</p><h2>Complex technology. Clear decisions.</h2><p className="why-intro">We bring cloud, software, and delivery engineering together to solve the problem in front of your team.</p><ArrowLink href="/about">More about Codingtron</ArrowLink></div>
        <ul className="why-list">{reasons.map((reason) => <li key={reason} data-reveal><Check aria-hidden="true" />{reason}</li>)}</ul>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = TESTIMONIALS[activeIndex];
  const changeTestimonial = (direction: number) => setActiveIndex((current) => (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length);
  return (
    <section id="testimonials" className="testimonial-section section-pad">
      <div className="content-wrap testimonial-wrap" data-reveal aria-live="polite">
        <p className="eyebrow">CLIENT PERSPECTIVE</p>
        <Quote className="testimonial-quote-mark" aria-hidden="true" />
        <blockquote key={testimonial.id} className="testimonial-quote-enter">{testimonial.content}</blockquote>
        <div className="testimonial-byline"><strong>{testimonial.name}</strong><span>{testimonial.role}, {testimonial.company}</span></div>
        <div className="testimonial-controls">
          <span>{String(activeIndex + 1).padStart(2, '0')} <span aria-hidden="true">/</span> {String(TESTIMONIALS.length).padStart(2, '0')}</span>
          <button type="button" aria-label="Previous testimonial" onClick={() => changeTestimonial(-1)}><ArrowLeft aria-hidden="true" /></button>
          <button type="button" aria-label="Next testimonial" onClick={() => changeTestimonial(1)}><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  return (
    <section id="faq" className="faq-section section-pad">
      <div className="content-wrap faq-grid">
        <div><SectionHeading eyebrow="FAQ" title="A few useful answers." description="Questions teams often ask before starting a cloud or software engagement." /><ArrowLink href="/contact">Still have a question?</ArrowLink></div>
        <div className="faq-list">
          {homepageFaqs.map((faq, index) => <div className={`faq-item ${openQuestion === index ? 'is-open' : ''}`} key={faq.question}>
            <h3><button type="button" aria-expanded={openQuestion === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenQuestion(openQuestion === index ? null : index)}>{faq.question}<ChevronDown aria-hidden="true" /></button></h3>
            <div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={openQuestion !== index}><div><p>{faq.answer}</p></div></div>
          </div>)}
        </div>
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section id="insights" className="insights-section section-pad">
      <div className="content-wrap">
        <div className="insights-heading-row"><SectionHeading eyebrow="INSIGHTS" title="Ideas for what comes next." description="Practical perspectives on cloud, delivery, and modern infrastructure." /><ArrowLink href="/blog">View all insights</ArrowLink></div>
        <div className="insights-grid">
          {BLOG_POSTS.slice(0, 3).map((post, index) => <article className="insight-item" key={post.id} data-reveal>
            <Link href={`/blog/${post.slug}`} className="insight-image"><Image src={blogImages[index % blogImages.length]} alt={`${post.category} article illustration`} fill sizes="(max-width: 700px) 100vw, 33vw" /></Link>
            <p className="eyebrow">{post.category}<span aria-hidden="true"> · </span>{post.readTime}</p>
            <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
            <p className="insight-excerpt">{post.excerpt}</p>
            <ArrowLink href={`/blog/${post.slug}`}>Read article</ArrowLink>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="final-cta-section">
      <div className="content-wrap final-cta-content" data-reveal>
        <div><p className="eyebrow">A GOOD PLACE TO START</p><h2>Let&apos;s make your next move a confident one.</h2><p>Bring us the challenge. We&apos;ll help you find a practical path forward.</p></div>
        <div className="final-cta-actions"><Link className="button button-dark" href="/contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></Link><Link className="text-link" href="/services">View services <ArrowRight aria-hidden="true" /></Link></div>
        <div className="final-cta-visual" aria-hidden="true"><span><Cloud /></span><ArrowRight /><span><Workflow /></span><ArrowRight /><span><Code2 /></span></div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [status, setStatus] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get('email')?.toString() ?? '';
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent('Codingtron insights newsletter')}&body=${encodeURIComponent(`Please add ${email} to the Codingtron insights newsletter.`)}`;
    setStatus('Your email app will open so you can complete the subscription request.');
  };
  return (
    <section className="newsletter-section">
      <div className="content-wrap newsletter-inner"><div><p className="eyebrow">OCCASIONAL NOTES, USEFUL IDEAS</p><h2>Stay ahead with Codingtron insights.</h2><p>Thoughtful updates on cloud engineering, DevOps, and software delivery.</p></div><form className="newsletter-form" onSubmit={handleSubmit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><div><Mail aria-hidden="true" /><input id="newsletter-email" name="email" type="email" placeholder="Your email address" autoComplete="email" required /><button type="submit">Subscribe <ArrowRight aria-hidden="true" /></button></div><p aria-live="polite">{status || `By subscribing, you agree to receive occasional emails from Codingtron.`}</p></form></div>
    </section>
  );
}

export default function HomePage() {
  useScrollReveals();
  return (
    <>
      <style>{HOME_PAGE_STYLES}</style>
      <div className="home-page">
        <Hero />
        <CapabilityMarquee />
        <StatsSection />
        <PrimaryServiceSection />
        <ValuePropositionSection />
        <FeatureShowcase />
        <IntegrationSection />
        <ProcessSection />
        <CaseStudiesSection />
        <WhyCodingtronSection />
        <TestimonialSection />
        <FAQSection />
        <InsightsSection />
        <FinalCTA />
        <NewsletterSection />
      </div>
    </>
  );
}
