export const GA_MEASUREMENT_ID = 'G-KCHPN566SQ';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Track pageviews
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Generic event tracking
export const event = (name: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
};

// Custom Events requested by user:
// 1. contact_form_submit
export const trackContactFormSubmit = (params: Record<string, any> = {}) => {
  event('contact_form_submit', {
    event_category: 'form',
    event_label: 'Contact Form Submission',
    ...params,
  });
};

// 2. WhatsApp_click
export const trackWhatsAppClick = (params: Record<string, any> = {}) => {
  event('WhatsApp_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp Chat Initiated',
    ...params,
  });
};

// 3. Call_click
export const trackCallClick = (params: Record<string, any> = {}) => {
  event('Call_click', {
    event_category: 'engagement',
    event_label: 'Direct Phone Call',
    ...params,
  });
};

// 4. Email_click
export const trackEmailClick = (params: Record<string, any> = {}) => {
  event('Email_click', {
    event_category: 'engagement',
    event_label: 'Direct Email Enquiry',
    ...params,
  });
};

// 5. Get_quote_click
export const trackGetQuoteClick = (params: Record<string, any> = {}) => {
  event('Get_quote_click', {
    event_category: 'engagement',
    event_label: 'Get Quote Button Clicked',
    ...params,
  });
};
