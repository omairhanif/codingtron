'use client';

import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import devopsLifecycleImage from './public/images/devops-lifecycle.png';
import heroSectionImage from './public/images/hero-section-image.png';
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

const featureRows = [];

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
  return null;
}

function IntegrationSection() {
  return (
    <section id="technologies" className="integration-section section-pad">
      <div className="content-wrap">
        <SectionHeading eyebrow="TECHNOLOGY ECOSYSTEM" title="Tools in Our Expertise."  centered />
        <div className="integration-list">
          {integrations.map((item) => <article className="integration-item" key={item.slug} data-reveal><span className="integration-logo"><Image src={platformLogoOverrides[item.slug] ?? `https://cdn.simpleicons.org/${item.slug}/${platformBrandColors[item.slug]}`} alt="" width={30} height={30} unoptimized /></span><h3>{item.name}</h3><p>{item.detail}</p><ArrowUpRight aria-hidden="true" /></article>)}
        </div>
        <p className="integration-summary">From first commit to production infrastructure, these tools help teams build, ship, and scale with confidence.</p>
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

  return (
    <section id="testimonials" className="testimonial-section section-pad">
      <div className="content-wrap testimonial-shell" data-reveal aria-live="polite">
        <div className="testimonial-ornament testimonial-ornament-top" aria-hidden="true" />
        <div className="testimonial-ornament testimonial-ornament-bottom" aria-hidden="true" />
        <div className="testimonial-inner">
          <p className="eyebrow">CLIENT PERSPECTIVE</p>
          <div key={testimonial.id} className="testimonial-slide testimonial-quote-enter">
            <Quote className="testimonial-quote-mark" aria-hidden="true" />
            <blockquote>{testimonial.content}</blockquote>
            <div className="testimonial-byline">
              <Image
                src={testimonial.avatar ?? 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'}
                alt={testimonial.name}
                className="testimonial-avatar"
                width={58}
                height={58}
                unoptimized
              />
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
          <div className="testimonial-pagination" aria-label="Testimonial navigation">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={index === activeIndex ? 'is-active' : ''}
                aria-label={`View testimonial ${index + 1}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
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
    <div className="home-page">
      <Hero />
      <CapabilityMarquee />
      <StatsSection />
      <PrimaryServiceSection />
      <ValuePropositionSection />
      <FeatureShowcase />
      <IntegrationSection />
      <ProcessSection />
      <WhyCodingtronSection />
      <TestimonialSection />
      <FAQSection />
      <InsightsSection />
      <FinalCTA />
      <NewsletterSection />
    </div>
  );
}
