import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Server,
  Cloud,
  Workflow,
  Database,
  ShieldAlert,
  Cpu,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { SERVICES } from '@/lib/data';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Cloud,
  Server,
  Workflow,
  Database,
  ShieldAlert,
  Cpu,
};

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  SERVICES.forEach((service) => {
    params.push({ slug: service.slug });
    if (service.aliases) {
      service.aliases.forEach((alias) => {
        params.push({ slug: alias });
      });
    }
  });
  return params;
}

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug || s.aliases?.includes(slug));

  if (!service) {
    return {
      title: 'Service Not Found | Codingtron',
    };
  }

  return {
    title: `${service.title} | Codingtron`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug || s.aliases?.includes(slug));

  if (!service) {
    notFound();
  }

  const Icon = SERVICE_ICONS[service.iconName] || Cloud;
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white text-inherit min-h-screen">
      {/* Breadcrumb & Top Bar */}
      <div className="bg-white border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-inherit flex items-center gap-2">
          <Link href="/" className="hover:text-inherit transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-inherit" />
          <Link href="/services" className="hover:text-inherit transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-inherit" />
          <span className="text-inherit font-bold truncate">{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-black bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black text-inherit text-xs font-bold uppercase tracking-wider mb-4">
              <Icon className="w-4 h-4" />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-inherit tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-inherit leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-black shadow-lg shadow-black transition-all duration-300"
              >
                <span>Request Service Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href="#deliverables"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-inherit hover:text-inherit bg-white hover:bg-white border-2 border-black hover:border-black transition-all duration-300"
              >
                <span>View Deliverables</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Architecture Breakdown */}
      <section className="py-16 md:py-20 border-b border-black bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Full Overview & Benefits */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-2xl font-black text-inherit mb-4">Service Overview</h2>
                <p className="text-inherit leading-relaxed text-sm sm:text-base">
                  {service.fullDescription}
                </p>
              </div>

              {/* Business Benefits Grid */}
              <div>
                <h3 className="text-xl font-black text-inherit mb-6">Key Business Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.benefits.map((b) => (
                    <div
                      key={b.title}
                      className="p-6 rounded-2xl bg-white border border-black hover:border-black transition-all shadow-sm"
                    >
                      <h4 className="font-bold text-inherit text-sm group-hover:text-inherit">{b.title}</h4>
                      <p className="text-xs text-inherit mt-2 leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Overview */}
              <div className="p-6 rounded-2xl bg-white border border-black">
                <div className="flex items-center gap-2 text-inherit font-bold text-sm mb-3">
                  <Layers className="w-5 h-5" />
                  <span>Architectural Approach</span>
                </div>
                <p className="text-sm text-inherit leading-relaxed">
                  {service.architectureOverview}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div id="deliverables" className="space-y-4">
                <h3 className="text-xl font-black text-inherit">What You Receive (Deliverables)</h3>
                <div className="space-y-3">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-inherit shrink-0 mt-0.5" />
                      <span className="text-sm text-inherit font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Specific FAQs */}
              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-black text-inherit flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-inherit" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-black space-y-2"
                    >
                      <h4 className="font-bold text-sm text-inherit">{faq.question}</h4>
                      <p className="text-xs sm:text-sm text-inherit leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Technologies Card */}
              <div className="p-6 rounded-2xl bg-white border border-black shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-inherit mb-4">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white border border-black text-xs font-semibold text-inherit"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* SLA Guarantee Card */}
              <div className="p-6 rounded-2xl bg-white border border-black">
                <div className="w-10 h-10 rounded-xl bg-white border border-black text-inherit flex items-center justify-center mb-4 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-inherit">Codingtron SLA Guarantee</h4>
                <p className="mt-2 text-xs text-inherit leading-relaxed">
                  Every engagement is backed by our 99.99% uptime guarantee, zero-downtime execution methodology, and 24/7 incident escalation protocol.
                </p>
              </div>

              {/* Related Services */}
              <div className="p-6 rounded-2xl bg-white border border-black shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-inherit mb-4">
                  Related Services
                </h4>
                <div className="space-y-3">
                  {otherServices.map((other) => (
                    <Link
                      key={other.id}
                      href={`/services/${other.slug}`}
                      className="block p-3.5 rounded-xl bg-white hover:bg-white border border-black hover:border-black transition-colors group"
                    >
                      <div className="text-xs font-bold text-inherit group-hover:text-inherit transition-colors flex items-center justify-between">
                        <span>{other.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-inherit" />
                      </div>
                      <p className="text-[11px] text-inherit mt-1 line-clamp-1">
                        {other.shortDescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to implement {service.title}?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white">
            Let our senior certified architects audit your setup and provide a step-by-step roadmap.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-black shadow-lg shadow-black transition-all duration-300"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
