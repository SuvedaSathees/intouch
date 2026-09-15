'use client';

import React, { useEffect, Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  GA_MEASUREMENT_ID,
  pageview,
  trackWhatsAppClick,
  trackCallClick,
  trackEmailClick,
  trackGetQuoteClick,
} from '@/lib/gtag';

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track pageviews on SPA navigation
  useEffect(() => {
    if (!pathname) return;
    const queryString = searchParams?.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    pageview(url);
  }, [pathname, searchParams]);

  // Global event delegation for WhatsApp, Call, Email, and Get Quote clicks
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button');
      if (!target) return;

      const rawHref = target.getAttribute('href') || '';
      const href = rawHref.toLowerCase();
      const text = (target.textContent || '').trim().toLowerCase();

      // 1. WhatsApp_click
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackWhatsAppClick({
          link_url: rawHref,
          link_text: text || 'WhatsApp',
        });
        return;
      }

      // 2. Call_click
      if (href.startsWith('tel:')) {
        trackCallClick({
          phone_number: rawHref.replace(/^tel:/i, ''),
          link_text: text || 'Call',
        });
        return;
      }

      // 3. Email_click
      if (href.startsWith('mailto:')) {
        trackEmailClick({
          email_address: rawHref.replace(/^mailto:/i, '').split('?')[0],
          link_text: text || 'Email',
        });
        return;
      }

      // 4. Get_quote_click
      if (
        text.includes('get quote') ||
        text.includes('quote') ||
        target.getAttribute('data-analytics') === 'get_quote'
      ) {
        trackGetQuoteClick({
          link_url: rawHref,
          button_text: text,
        });
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}

export function GoogleAnalytics() {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
}
