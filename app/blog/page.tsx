import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';

export const metadata = {
  title: 'Insights and Innovations | Codingtron Tech Blog',
  description:
    'Explore our latest thoughts on cloud computing, DevOps, and automation. Stay updated with trends, solutions, and expert advice shaping the tech world.',
};

export default function BlogListingPage() {
  const featured = BLOG_POSTS[0];
  const others = BLOG_POSTS.slice(1);

  return (
    <div className="bg-white text-inherit min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-24 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[19px] capitalize text-inherit font-bold">
            Passionate – Dedicated – Professional
          </p>
          <div className="w-48 border-t border-dotted border-black mx-auto my-3" />

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-inherit tracking-tight max-w-4xl mx-auto leading-tight">
            Insights and Innovations
          </h1>

          <p className="mt-4 text-base sm:text-lg text-inherit max-w-2xl mx-auto leading-relaxed">
            Explore our latest thoughts on cloud computing, DevOps, and automation. Stay updated with trends, solutions, and expert advice shaping the tech world.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-20 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-black p-8 sm:p-12 hover:border-black transition-all shadow-md hover:shadow-xl flex flex-col lg:flex-row gap-8 items-center group">
            <div className="lg:w-7/12 space-y-4">
              <div className="flex items-center gap-3 text-xs text-inherit">
                <span className="px-3 py-1 rounded-full bg-white border border-black text-inherit font-bold uppercase tracking-wider text-[11px]">
                  Featured • {featured.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-inherit" />
                  <span>{featured.readTime}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-inherit tracking-tight group-hover:text-inherit transition-colors">
                {featured.title}
              </h2>

              <p className="text-inherit text-sm sm:text-base leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-black">
                  <Image
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    fill
                    className="object-cover"
                    sizes="36px"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-inherit">{featured.author.name}</div>
                  <div className="text-[11px] text-inherit">
                    {featured.author.role} • {featured.date}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-black shadow-md shadow-black transition-all duration-300"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:w-5/12 w-full p-8 rounded-2xl bg-white border border-black flex flex-col justify-center shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-inherit mb-2">
                # Cloud Architecture &amp; Strategy
              </div>
              <div className="text-sm text-inherit leading-relaxed italic">
                &ldquo;A successful migration is 80% preparation and 20% execution. By adopting automated IaC pipelines and phased cutovers, organizations achieve seamless cloud transformations.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Articles */}
      <section className="py-20 bg-white border-b border-black">
        <div className="max-w-[68rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {others.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl bg-white border border-black hover:border-black p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-inherit mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-white border border-black text-inherit font-bold text-[11px] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-inherit" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-inherit group-hover:text-inherit transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-inherit line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-black">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-black shrink-0">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-inherit">{post.author.name}</div>
                      <div className="text-[10px] text-inherit">{post.date}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-black">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-inherit group-hover:text-inherit transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
