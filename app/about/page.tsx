import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Zap,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { COMPANY_STATS } from '@/lib/data';

export const metadata = {
  title: 'About Us | Codingtron - Passionate, Dedicated, Professional',
  description:
    'Learn about Codingtron: Over 5+ years of delivering innovative cloud, DevOps, and automation solutions with certified engineers in AWS, Azure, and Kubernetes.',
};

export default function AboutPage() {
  const leadershipValues = [
    {
      title: 'Passionate',
      desc: 'We are intensely passionate about clean architecture, automation, and pushing the boundaries of what cloud technology can achieve.',
    },
    {
      title: 'Dedicated',
      desc: 'We treat our clients’ systems as our own. We stay in the trenches until every migration is flawless and every SLA is satisfied.',
    },
    {
      title: 'Professional',
      desc: 'Rigorous engineering standards, certified architects, transparent communication, and ironclad security compliance on every engagement.',
    },
  ];

  const highlights = [
    'Certified engineers in AWS, Microsoft Azure, and Kubernetes (CKA)',
    'Zero-downtime database and workload migration methodologies',
    'Automated CI/CD pipelines with integrated security scanning',
    'FinOps cost optimization reducing hyperscaler cloud spend by up to 45%',
    'High availability multi-region architectures with 99.99% uptime SLAs',
    'Dedicated ongoing support, proactive monitoring, and disaster recovery drills',
  ];

  return (
    <div className="bg-white text-inherit min-h-screen">
      {/* Hero Header Banner */}
      <section className="relative py-20 md:py-24 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[19px] capitalize text-inherit font-bold">
            Passionate – Dedicated – Professional
          </p>
          <div className="w-48 border-t border-dotted border-black mx-auto my-3" />

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-inherit tracking-tight max-w-4xl mx-auto leading-tight">
            About Codingtron
          </h1>

          <p className="mt-4 text-base sm:text-lg text-inherit max-w-2xl mx-auto leading-relaxed">
            Driving innovation, simplifying complexities, and delivering reliable solutions for a connected world.
          </p>
        </div>
      </section>

      {/* Main Narrative & Image Section */}
      <section className="py-20 md:py-28 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <figure className="relative mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-br-[50px] rounded-tl-2xl border-4 border-white bg-white shadow-2xl">
              <Image
                src="https://codingtron.com/media/About-Codingtron.jpg"
                alt="About Codingtron"
                width={1440}
                height={720}
                className="h-auto w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="absolute -bottom-6 right-3 flex items-center gap-3 rounded-2xl border border-black bg-white p-4 shadow-xl sm:right-8">
              <span className="text-3xl font-black text-inherit">5+</span>
              <span className="text-left text-xs font-bold leading-tight text-inherit">
                Years of History
                <span className="block text-[10px] font-normal text-inherit">Cloud &amp; DevOps</span>
              </span>
            </figcaption>
          </figure>

          <div className="mx-auto mt-16 max-w-4xl space-y-6 text-center">
              <div>
                <p className="text-[19px] capitalize text-inherit font-bold">
                  Who We Are
                </p>
                <div className="w-48 border-t border-dotted border-black my-3" />
                <h2 className="text-3xl sm:text-4xl font-black text-inherit tracking-tight leading-tight">
                  Architects of High-Availability Cloud Infrastructure
                </h2>
              </div>

              <p className="text-inherit text-base leading-relaxed">
                Codingtron was established by veteran DevOps and cloud architects who saw too many businesses struggling with brittle manual deployments, sky-high cloud bills, and catastrophic outages.
              </p>

              <p className="text-inherit text-base leading-relaxed">
                Over 5+ years of continuous execution, we have delivered 150+ successful client initiatives across AWS, Microsoft Azure, Google Cloud, and VMware environments. We don&apos;t just consult from the sidelines—we build, test, automate, and operate enterprise workloads with zero downtime.
              </p>

              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 pt-2 text-left sm:grid-cols-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-inherit shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-inherit leading-snug">{item}</span>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Core Ethos: Passionate - Dedicated - Professional */}
      <section className="py-20 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[19px] capitalize text-inherit font-bold">Our Core Ethos</p>
            <div className="w-48 border-t border-dotted border-black mx-auto my-3" />
            <h2 className="text-3xl sm:text-4xl font-black text-inherit">
              Passionate – Dedicated – Professional
            </h2>
            <p className="text-sm text-inherit mt-3">
              These three pillars dictate how we architect solutions, collaborate with partners, and support production systems 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipValues.map((v, i) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl bg-white border border-black hover:border-black transition-all shadow-md hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-inherit flex items-center justify-center font-black text-lg mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-black text-inherit group-hover:text-inherit transition-colors mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-inherit leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl bg-white border border-black text-center flex flex-col justify-center items-center shadow-sm"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-inherit tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-inherit mt-2">{stat.label}</div>
                <div className="text-xs text-inherit mt-0.5">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section matching codingtron dark navy theme */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-[68rem] mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-inherit">
            Work with Certified Architects
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Ready to partner with passionate cloud engineers?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white max-w-xl mx-auto">
            Schedule an introductory consultation with our senior architects and discover how Codingtron can streamline your infrastructure.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-black shadow-lg shadow-black transition-all duration-300"
            >
              <span>Get in Touch Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
