'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import devopsLifecycleImage from './public/images/devops-lifecycle.png';
import heroSectionImage from './public/images/hero-section-image.png';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, LaptopMinimal, Mail, MapPin, Phone, Quote } from 'lucide-react';
import { BLOG_POSTS, CASE_STUDIES, CONTACT_INFO, SERVICES } from '@/lib/data';

const providers = ['AWS', 'Microsoft Azure', 'Google Cloud', 'VMware', 'DigitalOcean', 'Oracle Cloud'];
const processSteps = [
  ['01', 'Discover', 'Understand your business goals, current systems, and technical requirements.'],
  ['02', 'Plan', 'Shape an architecture and a practical implementation strategy around those needs.'],
  ['03', 'Build', 'Configure the cloud environment, software, and infrastructure for dependable delivery.'],
  ['04', 'Automate', 'Introduce repeatable deployments, monitoring, and operational improvements.'],
  ['05', 'Scale', 'Continue to refine performance, resilience, and capacity as requirements change.'],
];
const technologies = [
  { name: 'AWS', slug: 'amazonaws', href: '/technologies/aws', description: 'Build secure, scalable infrastructure with the world’s leading cloud platform.' },
  { name: 'Microsoft Azure', slug: 'microsoftazure', href: '/technologies/microsoft-azure', description: 'Run applications and services across Microsoft’s flexible cloud ecosystem.' },
  { name: 'Google Cloud', slug: 'googlecloud', href: '/technologies/google-cloud', description: 'Use Google Cloud services to modernize applications and unlock data.' },
  { name: 'Docker', slug: 'docker', href: '/technologies/docker', description: 'Package applications into portable containers for consistent delivery.' },
  { name: 'Kubernetes', slug: 'kubernetes', href: '/technologies/kubernetes', description: 'Deploy, scale, and manage containerized workloads with confidence.' },
  { name: 'Terraform', slug: 'terraform', href: '/technologies/terraform', description: 'Provision and manage infrastructure with reusable configuration.' },
];
const technologyLogoOverrides: Record<string, string> = {
  amazonaws: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  microsoftazure: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
};
const devopsToolCategories = [
  {
    name: 'CI/CD & Automation',
    tools: [
      { name: 'Jenkins', slug: 'jenkins' },
      { name: 'GitHub Actions', slug: 'githubactions' },
      { name: 'GitLab CI/CD', slug: 'gitlab' },
      { name: 'CircleCI', slug: 'circleci' },
      { name: 'Argo CD', slug: 'argo' },
      { name: 'Tekton', slug: 'tekton' },
    ],
  },
  {
    name: 'Containers & Orchestration',
    tools: [
      { name: 'Docker', slug: 'docker' },
      { name: 'Kubernetes', slug: 'kubernetes' },
      { name: 'Helm', slug: 'helm' },
      { name: 'OpenShift', slug: 'redhatopenshift' },
    ],
  },
  {
    name: 'Infrastructure as Code',
    tools: [
      { name: 'Terraform', slug: 'terraform' },
      { name: 'Ansible', slug: 'ansible' },
      { name: 'CloudFormation', slug: 'amazonaws' },
      { name: 'Pulumi', slug: 'pulumi' },
    ],
  },
  {
    name: 'Cloud Platforms',
    tools: [
      { name: 'AWS', slug: 'amazonaws' },
      { name: 'Microsoft Azure', slug: 'microsoftazure' },
      { name: 'Google Cloud', slug: 'googlecloud' },
    ],
  },
  {
    name: 'Monitoring & Observability',
    tools: [
      { name: 'Prometheus', slug: 'prometheus' },
      { name: 'Grafana', slug: 'grafana' },
      { name: 'ELK', slug: 'elastic' },
      { name: 'OpenTelemetry', slug: 'opentelemetry' },
      { name: 'Datadog', slug: 'datadog' },
      { name: 'Dynatrace', slug: 'dynatrace' },
    ],
  },
  {
    name: 'Security',
    tools: [
      { name: 'SonarQube', slug: 'sonarqube' },
      { name: 'Snyk', slug: 'snyk' },
      { name: 'Trivy', slug: 'trivy' },
      { name: 'Vault', slug: 'vault' },
      { name: 'OWASP tooling', slug: 'owasp' },
    ],
  },
];
const devopsToolLogoOverrides: Record<string, string> = {
  ...technologyLogoOverrides,
  sonarqube: 'https://cdn.simpleicons.org/sonar',
};
const homepageTestimonials = [
  {
    id: 'ahmad-asad',
    name: 'Ahmad Asad',
    titleAndCompany: 'Senior AWS Consultant, Systems Ltd.',
    content: 'I had the pleasure of working with Ghulam for nearly two years. He is an exceptional cloud and migration engineer with deep expertise in multi-cloud and on-premises environments. Additionally, he is a highly skilled Python and JavaScript developer with strong capabilities in DevOps practices and network automation. I highly recommend him for any complex technical roles or projects.',
  },
  {
    id: 'zac-caro-helio-gt',
    name: 'Zac Caro',
    titleAndCompany: 'Sales Manager Helio GT.',
    content: 'Ghulam has been an instrumental tech designer for our recent projects in software development. I can recommend his skillset and knowledge base with Amazon Web Services (AWS)during our collaboration on integrating our telecommunications/voip service with our custom software at Helio GreenTech.',
  },
  {
    id: 'hamail-zahid',
    name: 'Hamail Zahid',
    titleAndCompany: 'Team Lead, PufferSoft',
    content: 'I have worked with Mujtaba on several projects, and I loved his dedication to the work. He is easily adjustable to a given situation and is the liveliest person I have met. Mujtaba would become an appreciated member of any team.',
  },
  {
    id: 'tarig-hamdi-stc',
    name: 'Tarig Hamdi',
    titleAndCompany: 'Chief Solutions Architect, Solutions by STC',
    content: 'Mujtaba is a good Azure Cloud engineer with good skills on dockers, CI/CD pipeline and Azure webapps.',
  },
];

function useScrollReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
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
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function Hero() {
  return (
    <section className="hero-section overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-3 px-5 py-6 sm:px-8 md:grid-cols-2 md:gap-6 md:py-10 lg:gap-10 lg:px-12">
        <div className="hero-copy max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--accent)]" aria-hidden="true" />
            <SectionLabel>CLOUD / DEVOPS / AUTOMATION</SectionLabel>
          </div>
          <h1 className="mt-2 max-w-[13ch] text-2xl font-semibold leading-[1.02] tracking-[-.055em] sm:mt-4 sm:text-3xl xl:text-3xl">
            Engineering that <span className="text-[var(--accent)]">moves business forward.</span>
          </h1>
          <p className="mt-2 max-w-lg text-base leading-5 sm:mt-4 sm:text-lg sm:leading-8">
            We help teams modernize infrastructure, accelerate delivery, and build dependable software across cloud platforms.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 sm:mt-6 sm:flex-nowrap">
            <Link href="/contact" className="button button-dark">Let&apos;s Talk <ArrowUpRight aria-hidden="true" /></Link>
            <Link href="#services" className="button button-light">Explore Services <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <figure className="hero-visual min-w-0 lg:-ml-8 lg:w-[52vw] xl:-ml-14" aria-label="Cloud and DevOps engineering visual">
          <Image
            src={heroSectionImage}
            alt="Cloud and DevOps engineering visual"
            priority
            unoptimized
            className="h-auto max-h-[34rem] w-full object-contain lg:h-[min(48vh,30rem,36vw)] lg:max-h-none"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </figure>
      </div>
      <div className="border-y border-black">
        <div className="mx-auto flex max-w-4xl items-center gap-4 overflow-hidden px-5 py-2 sm:gap-6 sm:px-8 lg:px-12">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[.18em]">Platforms</span>
          <div className="provider-marquee min-w-0 flex-1 overflow-hidden" aria-label="Cloud platforms: AWS, Microsoft Azure, Google Cloud, VMware, DigitalOcean, Oracle Cloud">
            <div className="provider-track flex w-max items-center gap-10 sm:gap-16" aria-hidden="true">
              {[...providers, ...providers].map((provider, index) => <span className="whitespace-nowrap text-sm font-semibold tracking-tight sm:text-base" key={`${provider}-${index}`}>{provider}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevOpsToolsSection() {
  const [activeCategory, setActiveCategory] = useState(devopsToolCategories[0].name);
  const activeTools = devopsToolCategories.find((category) => category.name === activeCategory);

  return (
    <section aria-labelledby="devops-tools-heading" className="section-space home-tools-section">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="devops-tools-heading" className="mx-auto max-w-none text-3xl font-semibold leading-tight sm:text-4xl">
            The Tools Behind Our DevOps Expertise
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7">
            Our DevOps engineers work across CI/CD, cloud infrastructure, containers, Infrastructure as Code, observability, and security.
          </p>
        </div>
        <div className="devops-tool-categories mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="DevOps tool categories">
          {devopsToolCategories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={`devops-tool-category ${activeCategory === category.name ? 'is-active' : ''}`}
              aria-pressed={activeCategory === category.name}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div
          key={activeCategory}
          className="devops-tools-grid mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6"
          aria-live="polite"
        >
          {activeTools?.tools.map((tool) => (
            <article key={tool.name} className="devops-tool-card flex min-h-36 flex-col items-center justify-center gap-4 rounded-lg border border-[var(--border)] bg-white px-3 py-5 text-center sm:min-h-40 sm:px-4">
              <Image
                src={devopsToolLogoOverrides[tool.slug] ?? `https://cdn.simpleicons.org/${tool.slug}`}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
                unoptimized
              />
              <h3 className="text-sm font-semibold leading-snug sm:text-base">{tool.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevOpsLifecycleSection() {
  const devopsService = SERVICES.find((service) => service.slug === 'devops-ci-cd-pipeline-solutions');
  if (!devopsService) return null;

  return (
    <section aria-labelledby="devops-lifecycle-heading" className="section-space">
      <div className="mx-auto grid max-w-4xl items-center gap-10 px-5 sm:px-8 md:gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12">
        <div data-reveal>
          <SectionLabel>DEVOPS / CI-CD</SectionLabel>
          <h2 id="devops-lifecycle-heading" className="display-heading mt-6 text-black">{devopsService.title}</h2>
          <p className="mt-6 max-w-xl leading-7">{devopsService.shortDescription}</p>
        </div>
        <figure className="overflow-hidden rounded-xl border border-black bg-white p-3 sm:p-5" data-reveal>
          <Image
            src={devopsLifecycleImage}
            alt="DevOps lifecycle diagram showing Code, Plan, Build, Test, Release, Deploy, Operate, and Monitor"
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="h-auto w-full rounded-lg object-contain"
          />
        </figure>
      </div>
    </section>
  );
}

function TechnologiesSection() {
  return (
    <section id="technologies" className="section-space">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <SectionLabel>OUR TOOLKIT</SectionLabel>
          <h2 className="display-heading mx-auto mt-6">Technologies We Work With</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7">We choose proven tools to build, automate, and operate dependable cloud infrastructure.</p>
        </div>
        <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <Link
              key={technology.slug}
              href={technology.href}
              className="technology-card group flex h-full min-h-64 flex-col rounded-xl border border-[var(--border)] border-t-4 border-t-[var(--accent)] bg-[var(--white)] p-6"
              data-reveal
            >
              <span className="technology-logo">
                <Image
                  src={technologyLogoOverrides[technology.slug] ?? `https://cdn.simpleicons.org/${technology.slug}`}
                  alt={`${technology.name} logo`}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                  unoptimized
                />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{technology.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-6">{technology.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                Read More <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-space bg-[var(--card)]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <SectionLabel>CLIENT STORIES</SectionLabel>
          <h2 className="display-heading mx-auto mt-6">What Our Clients Say</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7">Hear from the teams who trust us to deliver dependable cloud and DevOps solutions.</p>
        </div>
        <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2">
          {homepageTestimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card flex h-full min-h-64 flex-col rounded-xl border border-[var(--border)] bg-white p-6 sm:p-8" data-reveal>
              <Quote className="testimonial-quote h-8 w-8" aria-hidden="true" />
              <p className="mt-5 flex-1 text-base leading-7">{testimonial.content}</p>
              <div className="mt-7 border-t border-[var(--border)] pt-5">
                <h3 className="font-semibold text-[var(--black)]">{testimonial.name}</h3>
                <p className="mt-1 text-sm leading-6">– {testimonial.titleAndCompany}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeContactCTA() {
  return (
    <section aria-labelledby="home-contact-heading" className="bg-[var(--accent-soft)] px-5 py-8 text-[var(--black)] sm:px-8 sm:py-10 md:py-12 lg:px-12">
      <div className="home-contact-cta mx-auto grid max-w-4xl items-center gap-6 sm:grid-cols-[1.2fr_.8fr] sm:gap-8">
        <div className="relative z-10" data-reveal>
          <p className="home-contact-eyebrow text-xs font-bold uppercase tracking-[.18em]">LET&apos;S TALK ABOUT WHAT&apos;S NEXT</p>
          <h2 id="home-contact-heading" className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.04] tracking-[-.04em] text-[var(--black)] sm:text-4xl md:text-5xl">
            Excited to talk about your <span className="block">next big project?</span>
          </h2>
          <p className="home-contact-copy mt-4 max-w-2xl text-base leading-7 sm:leading-7">
            Tell us about your project, technology, or business requirements. We&apos;ll start with a conversation about your goals and a practical way forward.
          </p>
          <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link href="/contact" className="home-contact-button group inline-flex min-h-12 items-center justify-center gap-3 border px-6 py-3 text-sm font-bold">
              Contact Us <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <p className="home-contact-note text-sm font-semibold">Have a project in mind? Let&apos;s talk.</p>
          </div>
        </div>
        <div className="home-contact-visual flex min-h-28 items-center justify-center sm:min-h-36 lg:min-h-40" data-reveal aria-hidden="true">
          <LaptopMinimal className="h-24 w-24 text-[var(--accent)] sm:h-28 sm:w-28 lg:h-36 lg:w-36" strokeWidth={1.1} />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useScrollReveals();
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <DevOpsToolsSection />
      <DevOpsLifecycleSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <HomeContactCTA />
    </div>
  );
}
