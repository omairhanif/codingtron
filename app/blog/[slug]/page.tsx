import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  CheckCircle2,
} from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostDetailPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Codingtron',
    };
  }

  return {
    title: `${post.title} | Codingtron Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostDetailPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white text-inherit min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-inherit flex items-center gap-2">
          <Link href="/" className="hover:text-inherit transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-inherit" />
          <Link href="/blog" className="hover:text-inherit transition-colors">
            Insights
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-inherit" />
          <span className="text-inherit font-bold truncate">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-16 md:py-20 border-b border-black bg-white">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs text-inherit mb-4">
            <span className="px-3 py-1 rounded-full bg-white border border-black text-inherit font-bold uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-inherit" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-inherit tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-inherit leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-black">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-black">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="44px"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-inherit">{post.author.name}</div>
              <div className="text-xs text-inherit">
                {post.author.role} • Published {post.date}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <main className="py-16 bg-white">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-inherit text-sm sm:text-base leading-relaxed">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-black text-inherit pt-6 pb-2 border-b border-black">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.includes('- **')) {
                return (
                  <div key={idx} className="space-y-2.5 my-4 pl-4 border-l-4 border-black bg-white p-4 rounded-r-xl">
                    {paragraph.split('\n').map((line, lidx) => (
                      <div key={lidx} className="text-inherit text-sm">
                        {line.replace('- ', '')}
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-black flex flex-wrap items-center gap-2">
            <span className="text-xs text-inherit font-bold uppercase tracking-wider mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white border border-black text-xs font-semibold text-inherit"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-black flex items-center gap-4 shadow-sm">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-black shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="56px"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-base font-bold text-inherit">{post.author.name}</div>
              <div className="text-xs text-inherit font-bold">{post.author.role}</div>
              <p className="text-xs text-inherit mt-1">
                Senior engineering contributor at Codingtron, focusing on enterprise cloud migration, GitOps workflows, and multi-cloud resilience.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-black">
              <h3 className="text-xl font-black text-inherit mb-6">More from Insights &amp; Innovations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="p-6 rounded-2xl bg-white border border-black hover:border-black transition-all group block shadow-sm"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-inherit">{rel.category}</span>
                    <h4 className="text-base font-bold text-inherit group-hover:text-inherit transition-colors mt-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-inherit mt-2 line-clamp-2">{rel.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
