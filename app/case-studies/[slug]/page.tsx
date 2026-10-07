import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';
import { CASE_STUDIES } from '@/lib/data';

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | Codingtron',
    };
  }

  return {
    title: `${study.title} | Codingtron Case Studies`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  const otherStudies = CASE_STUDIES.filter((cs) => cs.slug !== slug);

  return (
    <div className="bg-white text-inherit min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-inherit flex items-center gap-2">
          <Link href="/" className="hover:text-inherit transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-inherit" />
          <Link href="/case-studies" className="hover:text-inherit transition-colors">
            Case Studies
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-inherit" />
          <span className="text-inherit font-bold truncate">{study.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black text-inherit text-xs font-bold uppercase tracking-wider mb-4">
              <span>{study.clientIndustry}</span>
              <span>•</span>
              <span>{study.duration}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-inherit tracking-tight leading-tight">
              {study.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-inherit font-bold">
              {study.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Breakdown */}
      <section className="py-16 md:py-20 border-b border-black bg-white">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Story Details */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-xl font-black text-inherit mb-3">Project Summary</h2>
                <p className="text-inherit text-sm sm:text-base leading-relaxed">
                  {study.summary}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-l-4 border-l-black border border-black">
                <h3 className="text-lg font-black text-inherit mb-2">The Operational Challenge</h3>
                <p className="text-inherit text-sm leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-l-4 border-l-black border border-black">
                <h3 className="text-lg font-black text-inherit mb-2">Codingtron’s Architectural Solution</h3>
                <p className="text-inherit text-sm leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {study.testimonial && (
                <div className="p-8 rounded-3xl bg-white border border-black italic text-inherit shadow-sm">
                  <p className="text-base sm:text-lg font-medium">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4 not-italic font-bold text-inherit text-sm">
                    {study.testimonial.author} —{' '}
                    <span className="text-inherit font-normal">
                      {study.testimonial.role}, {study.testimonial.company}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Results */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-6 rounded-2xl bg-white border border-black shadow-sm space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-inherit flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-inherit" />
                  <span>Key Measured Results</span>
                </h3>

                <div className="space-y-3">
                  {study.results.map((res, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-black">
                      <div className="text-2xl font-black text-inherit">{res.metric}</div>
                      <div className="text-xs text-inherit mt-1">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-black shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-inherit mb-3">
                  Tech Stack Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-white border border-black text-xs font-semibold text-inherit"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-black shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-inherit mb-3">
                  More Case Studies
                </h4>
                <div className="space-y-3">
                  {otherStudies.map((other) => (
                    <Link
                      key={other.id}
                      href={`/case-studies/${other.slug}`}
                      className="block p-3 rounded-xl bg-white hover:bg-white border border-black hover:border-black text-xs text-inherit hover:text-inherit transition-colors"
                    >
                      {other.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-[68rem] mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Ready for a similar transformation?</h2>
          <p className="mt-3 text-sm sm:text-base text-white">
            Let our senior architects design an enterprise solution that delivers measurable ROI.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-black shadow-lg shadow-black transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
