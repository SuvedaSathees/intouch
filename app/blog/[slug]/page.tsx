import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getAnchorId,
  type BlogPost,
} from '@/data/blogPosts';
import { siteConfig } from '@/lib/site-config';
import { BlogFAQSection } from '@/components/blog/blog-faq';
import { RelatedArticles } from '@/components/blog/related-articles';
import { CTASection } from '@/components/sections/cta-section';
import { TableOfContents } from '@/components/blog/table-of-contents';
import {
  ChevronRight,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  BookmarkCheck,
} from 'lucide-react';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Intouch Global Tech',
    };
  }

  const pageTitle = `${post.title} | Intouch Global Tech`;
  const pageDescription = post.description;

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = `${siteConfig.url}${post.image}`;

  return {
    title: {
      absolute: pageTitle,
    },
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}

export default function BlogPostDetailPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.category, 3);
  const fullDisplayTitle = post.title;

  const mainSections =
    post.sections?.filter((s) => s.heading.toLowerCase() !== 'final thoughts') || [];
  const finalThoughtsSection = post.sections?.find(
    (s) => s.heading.toLowerCase() === 'final thoughts'
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: fullDisplayTitle,
    description: post.description,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <article className="bg-[#F8FAFC] text-slate-900 min-h-screen pt-28 sm:pt-36 pb-20 scroll-smooth">
      {/* Article Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* 1. Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 mb-6"
        >
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
          <Link
            href="/blog"
            className="hover:text-blue-600 transition-colors font-medium"
          >
            Blog
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-700 font-semibold">{post.category}</span>
        </nav>

        {/* 2. Article Header */}
        <header className="space-y-4 text-left border-b border-slate-200/80 pb-8 mb-8">
          {/* Category Badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 border border-blue-200 text-blue-600">
              {post.category}
            </span>
          </div>

          {/* Article Title (H1) */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
            {fullDisplayTitle}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {post.subtitle}
            </p>
          )}

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2">
            <div className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-700">
                By {post.author.name}
              </span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>{post.publishedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* 3. Featured Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-sm mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover object-center"
          />
        </div>

        {/* 4. Article Body (Comfortable reading width of ~700-800px) */}
        <div className="mx-auto max-w-3xl">
          {/* Key Takeaways Box */}
          {post.takeaways && post.takeaways.length > 0 && (
            <div className="mb-8 rounded-2xl border border-blue-200/90 bg-blue-50/70 p-5 sm:p-6 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                <BookmarkCheck className="h-4 w-4 text-blue-600" />
                <span>KEY TAKEAWAYS</span>
              </div>
              <ul className="space-y-2">
                {post.takeaways.map((takeaway, tIdx) => (
                  <li
                    key={tIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Table of Contents Box */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <TableOfContents items={post.tableOfContents} />
          )}

          {/* Structured Content Sections */}
          <div className="space-y-10 text-left">
            {mainSections && mainSections.length > 0 ? (
              mainSections.map((section, sIdx) => {
                const sectionId = getAnchorId(section.heading);
                return (
                  <section
                    key={sIdx}
                    id={sectionId}
                    className="space-y-4 scroll-mt-28 sm:scroll-mt-32"
                  >
                    <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                      {section.heading}
                    </h2>

                  {section.paragraphs &&
                    section.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}

                  {section.bulletPoints && (
                    <ul className="space-y-2 pt-1 pl-1">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li
                          key={bpIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.callout && (
                    <div className="my-4 rounded-xl border-l-4 border-blue-600 bg-slate-100/90 p-4 text-xs sm:text-sm font-semibold text-slate-800 italic">
                      {section.callout}
                    </div>
                  )}

                  {/* Subsections support */}
                  {section.subsections && (
                    <div className="space-y-6 pt-2">
                      {section.subsections.map((sub, subIdx) => (
                        <div key={subIdx} className="space-y-3">
                          {sub.heading && (
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                              {sub.heading}
                            </h3>
                          )}
                          {sub.paragraphs &&
                            sub.paragraphs.map((subP, spIdx) => (
                              <p
                                key={spIdx}
                                className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed"
                              >
                                {subP}
                              </p>
                            ))}
                          {sub.bulletPoints && (
                            <ul className="space-y-2 pt-1 pl-1">
                              {sub.bulletPoints.map((subBp, sbpIdx) => (
                                <li
                                  key={sbpIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                                  <span>{subBp}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })
          ) : (
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {post.description}
            </p>
          )}
        </div>

        {/* 5. FAQ Section (Item 10 in TOC) */}
        {post.faqs && (
          <div id="frequently-asked-questions" className="scroll-mt-28 sm:scroll-mt-32">
            <BlogFAQSection faqs={post.faqs} />
          </div>
        )}

        {/* 6. Final Thoughts (Item 11 in TOC) */}
        {finalThoughtsSection && (
          <section
            id={getAnchorId(finalThoughtsSection.heading)}
            className="mt-12 pt-10 border-t border-slate-200/80 space-y-4 scroll-mt-28 sm:scroll-mt-32 text-left"
          >
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
              {finalThoughtsSection.heading}
            </h2>

            {finalThoughtsSection.paragraphs &&
              finalThoughtsSection.paragraphs.map((para, pIdx) => {
                const isCallout =
                  para.startsWith('At Intouch Global Tech') ||
                  para.startsWith('Have a business process');
                return (
                  <p
                    key={pIdx}
                    className={`text-sm sm:text-base leading-relaxed ${
                      isCallout
                        ? 'font-bold text-slate-950'
                        : 'text-slate-700 font-normal'
                    }`}
                  >
                    {para}
                  </p>
                );
              })}
          </section>
        )}

          {/* 6. Related Articles */}
          {relatedPosts.length > 0 && <RelatedArticles posts={relatedPosts} />}
        </div>
      </div>

      {/* 7. Contact CTA */}
      <div className="mt-16">
        <CTASection
          title="Ready to Scale Your Business Systems?"
          subtitle="Speak directly with our engineering architects to discuss custom ERPs, websites, and business software with 100% complete source code ownership."
          buttonText="Talk to Our Team"
          buttonHref="/contact"
        />
      </div>
    </article>
  );
}
