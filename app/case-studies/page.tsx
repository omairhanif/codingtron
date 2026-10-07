import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/data';

export const metadata = {
  title: 'Real-World Success Stories | Codingtron Case Studies',
  description:
    'End-to-End IT Solutions for Enhanced Efficiency: Explore real-world case studies of Codingtron delivering cloud migration, DevOps acceleration, and scalable Kubernetes architectures.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-white text-inherit min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 md:py-24 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[19px] capitalize text-inherit font-bold">
            Passionate – Dedicated – Professional
          </p>
          <div className="w-48 border-t border-dotted border-black mx-auto my-3" />

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-inherit tracking-tight max-w-4xl mx-auto leading-tight">
            Real-World Success Stories
          </h1>

          <p className="mt-4 text-base sm:text-lg text-inherit max-w-2xl mx-auto leading-relaxed">
            End-to-End IT Solutions for Enhanced Efficiency. See how our certified architects solve complex engineering challenges, slash cloud infrastructure bills, and accelerate deployment frequency.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className="rounded-3xl bg-white border border-black p-8 sm:p-12 hover:border-black transition-all shadow-md hover:shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-start group"
              >
                <div className="lg:w-7/12 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-white border border-black text-inherit text-xs font-bold uppercase tracking-wider">
                      {study.clientIndustry}
                    </span>
                    <span className="text-xs text-inherit font-semibold">{study.duration}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-inherit tracking-tight group-hover:text-inherit transition-colors">
                    {study.title}
                  </h2>

                  <p className="text-inherit font-bold text-sm sm:text-base">
                    {study.tagline}
                  </p>

                  <p className="text-inherit text-sm leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white border border-black text-xs font-semibold text-inherit"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-black shadow-md shadow-black transition-all duration-300"
                    >
                      <span>Read Full Architectural Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Metrics Box */}
                <div className="lg:w-5/12 w-full p-6 rounded-2xl bg-white border border-black space-y-4 shrink-0 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-inherit">
                    <TrendingUp className="w-4 h-4" />
                    <span>Key Performance Results</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((res, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white border border-black">
                        <div className="text-xl sm:text-2xl font-black text-inherit">{res.metric}</div>
                        <div className="text-xs text-inherit mt-1 leading-snug">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  {study.testimonial && (
                    <div className="pt-4 border-t border-black text-xs text-inherit italic">
                      &ldquo;{study.testimonial.quote}&rdquo;
                      <div className="not-italic font-bold text-inherit mt-2">
                        — {study.testimonial.author}, {study.testimonial.role} ({study.testimonial.company})
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-[68rem] mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Want to achieve similar results?</h2>
          <p className="mt-3 text-sm sm:text-base text-white">
            Let our certified engineers perform a technical audit of your environment and design a customized roadmap.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-black shadow-lg shadow-black transition-all duration-300"
            >
              <span>Schedule Your Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
