import type { Metadata } from 'next';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';
import { BlogHero } from '@/components/blog/blog-hero';
import { FeaturedBlogCard } from '@/components/blog/featured-blog-card';
import { BlogGrid } from '@/components/blog/blog-grid';
import { TechInsights } from '@/components/blog/tech-insights';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: {
    absolute: 'Technology Insights & Business Software Blog | Intouch Global Tech',
  },
  description:
    'Explore practical insights on web development, ERP, HRMS, CRM, AI, cloud technology, automation, and digital transformation.',
  keywords: [
    'software engineering blog',
    'enterprise ERP insights',
    'HRMS best practices',
    'CRM sales conversion',
    'web development guides',
    'small business digital transformation',
    'business automation',
    'cloud software architecture',
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: 'Technology Insights & Business Software Blog | Intouch Global Tech',
    description:
      'Explore practical insights on web development, ERP, HRMS, CRM, AI, cloud technology, automation, and digital transformation.',
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/blog/digital-transformation.jpg`,
        width: 1200,
        height: 675,
        alt: 'Intouch Global Tech Insights & Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Insights & Business Software Blog | Intouch Global Tech',
    description:
      'Explore practical insights on web development, ERP, HRMS, CRM, AI, cloud technology, automation, and digital transformation.',
    images: [`${siteConfig.url}/images/blog/digital-transformation.jpg`],
  },
};

export default function BlogPage() {
  const featuredPost =
    getBlogPostBySlug('how-technology-can-help-small-businesses-grow-faster') ||
    blogPosts[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Intouch Global Tech Technology Insights & Blog',
    description:
      'Explore practical insights on web development, ERP, HRMS, CRM, AI, cloud technology, automation, and digital transformation.',
    url: `${siteConfig.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.publishedDate,
      image: `${siteConfig.url}${post.image}`,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 min-h-screen">
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Blog Hero Section */}
      <BlogHero />

      {/* 2. Featured Blog Article */}
      {featuredPost && <FeaturedBlogCard post={featuredPost} />}

      {/* 3. Blog Categories & Latest Articles Grid */}
      <BlogGrid initialPosts={blogPosts} />

      {/* 4. Technology Insights Section */}
      <TechInsights />

      {/* 5. Reusable CTA Section */}
      <CTASection
        title="Ready to Build Scalable Business Software?"
        subtitle="Consult directly with our engineering team. We architect custom ERPs, websites, and automation systems with 100% complete source code ownership."
        buttonText="Talk to Our Team"
        buttonHref="/contact"
      />
    </div>
  );
}
