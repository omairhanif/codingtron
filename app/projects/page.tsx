import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/data';

function CloudProviders() {
  const providers = [['Amazon Web Services', 'aws.jpg'], ['Microsoft Azure', 'azure.jpg'], ['VMware Cloud', 'vmware.jpg'], ['DigitalOcean', 'digitalocean.jpg'], ['Oracle Cloud', 'oracle.jpg'], ['Google Cloud Platform', 'gcp.jpg']];
  return <section className="bg-white py-12"><div className="mx-auto grid max-w-6xl grid-cols-2 items-center justify-items-center gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">{providers.map(([name, image]) => <div key={name} className="relative h-20 w-36"><Image src={`https://codingtron.com/media/${image}`} alt={`Codingtron - ${name}`} fill className="rounded-lg object-contain" sizes="160px" referrerPolicy="no-referrer" /></div>)}</div></section>;
}

export const metadata = {
  title: 'Our Projects - Codingtron - Cloud, DevOps and Automation Service Provider',
  description:
    'Explore featured projects and real-world case studies delivered by Codingtron certified cloud architects.',
};

export default function OurProjectsPage() {
  return (
    <div className="bg-white text-inherit min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-inherit flex items-center gap-2">
          <Link href="/" className="hover:text-inherit transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-inherit" />
          <span className="text-inherit font-bold">Our Projects</span>
        </div>
      </div>

      {/* Header */}
      <section className="relative py-20 md:py-24 bg-white border-b border-black text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[19px] capitalize text-inherit font-bold">
            Passionate – Dedicated – Professional
          </p>
          <div className="w-48 border-t border-dotted border-black mx-auto my-3" />

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-inherit tracking-tight max-w-4xl mx-auto leading-tight mt-2">
            Our Projects &amp; Case Studies
          </h1>

          <p className="mt-4 text-base sm:text-lg text-inherit max-w-2xl mx-auto leading-relaxed">
            Proven enterprise transformations in cloud migration, DevOps acceleration, and high availability systems design.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-white border border-black hover:border-black p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-inherit mb-2">
                    {project.clientIndustry}
                  </div>

                  <h2 className="text-xl font-black text-inherit group-hover:text-inherit transition-colors leading-snug">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-inherit line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-black">
                    {project.results.slice(0, 2).map((res, ridx) => (
                      <div key={ridx} className="p-2.5 rounded-xl bg-white border border-black">
                        <div className="text-lg font-black text-inherit">{res.metric}</div>
                        <div className="text-[10px] text-inherit line-clamp-1">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black">
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-inherit group-hover:text-inherit transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-black shadow-lg shadow-black transition-all duration-300"
            >
              <span>Discuss Your Project With Us</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <CloudProviders />
    </div>
  );
}
