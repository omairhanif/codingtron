import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cloud, Server, Workflow, Database, ShieldAlert, Cpu, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/lib/data';

const SERVICE_IMAGES: Record<string, string> = {
  'cloud-migration': 'https://codingtron.com/media/cloud-migration.jpg',
  'infrastructure-deployment': 'https://codingtron.com/media/infrastructure-deployment.webp',
  'devops-ci-cd': 'https://codingtron.com/media/devops.webp',
  'data-migration': 'https://codingtron.com/media/data-migration.webp',
  'disaster-recovery': 'https://codingtron.com/media/disaster-recovery.webp',
  'high-availability': 'https://codingtron.com/media/high-availability.jpg',
};

export const metadata = {
  title: 'Our Comprehensive Range of Services | Codingtron',
  description:
    'End-to-End IT Solutions for Enhanced Efficiency: Cloud Migration, Infrastructure Deployment, DevOps CI/CD Pipelines, Data Migration, Disaster Recovery, and High Availability.',
};

export default function ServicesPage() {
  const steps = [
    {
      num: '01',
      title: 'Assess & Discover',
      desc: 'We perform a deep architectural audit of your existing workloads, network topologies, and cost patterns.',
    },
    {
      num: '02',
      title: 'Architect & Plan',
      desc: 'We design the target cloud infrastructure with IaC, high availability, security guardrails, and compliance.',
    },
    {
      num: '03',
      title: 'Migrate & Automate',
      desc: 'Executing zero-downtime cutovers, configuring automated CI/CD pipelines, and establishing GitOps workflows.',
    },
    {
      num: '04',
      title: 'Optimize & Operate',
      desc: 'Continuous FinOps cost optimization, 24/7 APM monitoring, and automated disaster recovery drills.',
    },
  ];

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
            Our Comprehensive Range of Services
          </h1>

          <p className="mt-4 text-base sm:text-lg text-inherit max-w-2xl mx-auto leading-relaxed">
            End-to-End IT Solutions for Enhanced Efficiency. Tailored engineering capabilities built to help enterprises scale smoothly across AWS, Azure, Google Cloud, and VMware environments.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20 md:py-28 bg-white border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const bgImg = service.image || SERVICE_IMAGES[service.slug] || 'https://codingtron.com/media/cloud-migration.jpg';
              return (
                <div
                  key={service.id}
                  className="rounded-[10px] bg-white border border-black hover:border-black overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:translate-y-2 group"
                >
                  <div>
                    {/* Top Image with Gradient Overlay */}
                    <div className="relative h-48 w-full overflow-hidden bg-black">
                      <Image
                        src={bgImg}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0    " />
                      <div className="absolute bottom-4 left-6 right-6 z-10">
                        <h3 className="text-lg font-black text-white leading-snug drop-shadow-sm group-hover:text-inherit transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-inherit leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>

                      <div className="mt-6 pt-4 border-t border-black space-y-2">
                        <div className="text-xs font-bold text-inherit uppercase tracking-wider">
                          Key Deliverables
                        </div>
                        {service.deliverables.slice(0, 3).map((deliv, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-inherit">
                            <CheckCircle2 className="w-3.5 h-3.5 text-inherit shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-inherit hover:text-inherit transition-colors"
                    >
                      <span className="capitalize">view details</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-24 bg-white border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[19px] capitalize text-inherit font-bold">Delivery Process</p>
            <div className="w-48 border-t border-dotted border-black mx-auto my-3" />
            <h2 className="text-3xl sm:text-4xl font-black text-inherit">
              Our 4-Stage Delivery Methodology
            </h2>
            <p className="text-sm text-inherit mt-2">
              Every project is managed with disciplined engineering workflows, ensuring transparency and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-8 rounded-2xl bg-white border border-black hover:border-black transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-3xl font-black text-inherit mb-3">{st.num}</div>
                <h3 className="text-lg font-black text-inherit mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm text-inherit leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Need a specialized multi-cloud solution?</h2>
          <p className="mt-3 text-sm sm:text-base text-white">
            Our certified cloud architects are ready to review your infrastructure and deliver a tailored roadmap.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-black shadow-lg shadow-black transition-all duration-300"
            >
              <span>Contact Our Architects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
