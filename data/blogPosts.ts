export type BlogFAQ = {
  question: string;
  answer: string;
};

export type SubSection = {
  heading?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
};

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  callout?: string;
  subsections?: SubSection[];
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  image: string;
  readingTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
  takeaways?: string[];
  tableOfContents?: string[];
  sections?: ArticleSection[];
  faqs?: BlogFAQ[];
};

export const blogCategories = [
  'All Articles',
  'Web Development',
  'Business Automation',
  'ERP & HRMS',
  'CRM & Billing',
  'AI & Technology',
  'Cloud & DevOps',
  'Digital Transformation',
] as const;

export type BlogCategory = typeof blogCategories[number];

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-technology-can-help-small-businesses-grow-faster',
    title: 'How Technology Can Help Small Businesses Grow Faster',
    subtitle: 'A Practical Guide to Digital Transformation for Growing Businesses',
    category: 'Digital Transformation',
    featured: true,
    description:
      'Learn how websites, ERP, CRM, HRMS, and automation help small businesses save time, reduce errors, and grow faster.',
    image: '/images/blog/digital-transformation.jpg',
    readingTime: '5 min read',
    publishedDate: 'September 2026',
    author: {
      name: 'Intouch Global Tech Team',
      role: 'Technology Advisory & Solutions',
    },
    takeaways: [
      'Digital tools help reduce manual work.',
      'A website improves online visibility and customer communication.',
      'ERP, HRMS, and CRM help organize business activities.',
      'AI and automation save time on repetitive tasks.',
      'Cloud software supports access, teamwork, and business growth.',
      'Businesses should choose technology based on their actual needs.',
    ],
    tableOfContents: [
      'What Is Digital Transformation?',
      'Why Small Businesses Need Technology',
      'Building a Strong Online Presence',
      'Managing Business Operations with ERP',
      'Simplifying Employee Management with HRMS',
      'Improving Customer Relationships with CRM',
      'Using AI, Automation, and Cloud Technology',
      'Common Mistakes to Avoid',
      'How to Get Started',
      'Frequently Asked Questions',
      'Final Thoughts',
    ],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Running a small business involves more than selling products or providing services. Business owners also manage customers, employees, stock, billing, suppliers, payments, and daily reports.',
          'When a business is small, notebooks, Excel sheets, phone calls, and WhatsApp messages may seem enough. But as the business grows, these methods can become difficult to manage. Information may be missed, records may become confusing, and employees may spend too much time doing repeated work.',
          'Technology can make these tasks easier.',
          'Digital transformation means using suitable digital tools to improve the way a business works. It does not mean buying every new software product. It means choosing practical solutions that save time, organize information, and support business growth.',
        ],
      },
      {
        heading: '1. What Is Digital Transformation?',
        paragraphs: [
          'Digital transformation is the process of using technology to improve business activities.',
          'For a small business, it may begin with a simple website, digital billing system, inventory software, or customer management tool.',
          'Digital transformation can include:',
        ],
        bulletPoints: [
          'Business websites.',
          'Online billing.',
          'Inventory management.',
          'Customer relationship management.',
          'Employee attendance and payroll support.',
          'Cloud applications.',
          'Automated reports.',
          'AI-based customer support.',
          'Digital payment and communication tools.',
        ],
        subsections: [
          {
            paragraphs: [
              'For example, a retail shop may first introduce digital billing. Later, it may add stock management and customer records.',
              'The goal is to make work easier, faster, and more organized.',
            ],
          },
        ],
      },
      {
        heading: '2. Why Small Businesses Need Technology',
        paragraphs: [
          'Small businesses often have limited staff and resources. One employee may handle several tasks every day.',
          'Without proper digital tools, employees may need to:',
        ],
        bulletPoints: [
          'Search through old messages.',
          'Prepare invoices manually.',
          'Check stock by calling different people.',
          'Track customer follow-ups in notebooks.',
          'Prepare reports using multiple files.',
          'Calculate attendance and salary details manually.',
        ],
        subsections: [
          {
            paragraphs: [
              'These tasks take time and may lead to mistakes.',
              'A suitable digital system can bring important information into one place. Employees can find details faster, managers can monitor work more easily, and business owners can focus on customers and growth.',
              'A business may need digital support when billing is slow, customer enquiries are missed, stock records are incorrect, or reports take too much time to prepare.',
            ],
          },
        ],
      },
      {
        heading: '3. Building a Strong Online Presence',
        paragraphs: [
          'A professional website helps customers learn about a business before contacting the company.',
          'A website can display:',
        ],
        bulletPoints: [
          'Company information.',
          'Products and services.',
          'Contact details.',
          'Business location.',
          'Customer reviews.',
          'Enquiry forms.',
          'WhatsApp and call buttons.',
          'Product catalogues.',
          'Blog articles.',
        ],
        subsections: [
          {
            paragraphs: [
              'For example, a customer may visit a website after business hours to check services or submit an enquiry. The business team can respond later without losing the customer’s interest.',
              'An effective website should be:',
            ],
            bulletPoints: [
              'Mobile-friendly.',
              'Easy to navigate.',
              'Fast to load.',
              'Simple to understand.',
              'Clear about the company’s services.',
              'Easy to contact.',
            ],
          },
          {
            paragraphs: [
              'A website should not only look attractive. It should also help visitors find information and take the next step.',
            ],
          },
        ],
      },
      {
        heading: '4. Managing Business Operations with ERP',
        paragraphs: [
          'As a business grows, managing purchases, sales, stock, suppliers, and billing through separate files becomes difficult.',
          'Enterprise Resource Planning software, or ERP, helps connect these activities through one system.',
          'ERP may include:',
        ],
        bulletPoints: [
          'Purchase management.',
          'Sales management.',
          'Inventory management.',
          'Supplier records.',
          'Billing and invoicing.',
          'Product management.',
          'Branch management.',
          'Reports and dashboards.',
        ],
        subsections: [
          {
            paragraphs: [
              'Imagine a business with two branches. A customer asks whether a product is available at another branch. With a connected ERP system, employees may be able to check stock information without making several phone calls.',
              'ERP can help reduce repeated data entry, improve stock visibility, organize records, and support better reporting.',
              'The best ERP is not the one with the most features. It is the one that matches the business’s actual workflow.',
            ],
          },
        ],
      },
      {
        heading: '5. Simplifying Employee Management with HRMS',
        paragraphs: [
          'Managing employee records becomes harder as the team grows.',
          'A Human Resource Management System, or HRMS, helps businesses organize employee information in one place.',
          'Common HRMS features include:',
        ],
        bulletPoints: [
          'Employee profiles.',
          'Attendance tracking.',
          'Leave management.',
          'Shift schedules.',
          'Payroll support.',
          'Department records.',
          'Employee reports.',
        ],
        subsections: [
          {
            paragraphs: [
              'For example, an employee can submit a leave request through the system. The manager can approve it, and the HR team can maintain the record without checking messages or paper forms.',
              'HRMS can reduce paperwork, improve attendance tracking, and make employee management more organized.',
              'Payroll and compliance information should still be reviewed carefully according to company policies and applicable requirements.',
            ],
          },
        ],
      },
      {
        heading: '6. Improving Customer Relationships with CRM',
        paragraphs: [
          'Customer enquiries can come through websites, phone calls, WhatsApp, social media, or direct visits.',
          'When these enquiries are stored in different places, sales teams may forget follow-ups.',
          'Customer Relationship Management software, or CRM, helps organize customer details and sales activities.',
          'A CRM system may include:',
        ],
        bulletPoints: [
          'Customer contact details.',
          'Enquiry records.',
          'Follow-up reminders.',
          'Quotations.',
          'Sales stages.',
          'Communication history.',
          'Customer service requests.',
        ],
        subsections: [
          {
            paragraphs: [
              'For example, if a customer asks for a quotation but does not confirm the order immediately, CRM software can remind the sales team to follow up.',
              'CRM helps businesses respond more consistently, track sales opportunities, and build better customer relationships.',
            ],
          },
        ],
      },
      {
        heading: '7. Using AI, Automation, and Cloud Technology',
        paragraphs: [
          'AI and automation can help businesses reduce repetitive work.',
          'Practical uses include:',
        ],
        bulletPoints: [
          'Answering common customer questions.',
          'Preparing simple summaries.',
          'Extracting information from documents.',
          'Sending reminders.',
          'Generating reports.',
          'Sending invoice notifications.',
          'Updating order status.',
          'Assigning tasks to employees.',
        ],
        subsections: [
          {
            paragraphs: [
              'Not every business needs advanced AI. Even simple automation can save time when a task is repeated regularly.',
              'Cloud technology also supports business growth by allowing authorized users to access applications and information through internet-connected devices.',
              'Cloud systems may support:',
            ],
            bulletPoints: [
              'Remote access.',
              'Team collaboration.',
              'Online applications.',
              'Data backups.',
              'Centralized reports.',
              'Multi-branch operations.',
            ],
          },
          {
            paragraphs: [
              'Businesses should use strong passwords, role-based access, backups, and secure hosting to protect important information.',
            ],
          },
        ],
      },
      {
        heading: '8. Common Mistakes to Avoid',
        subsections: [
          {
            heading: 'Choosing Software Without Understanding the Problem',
            paragraphs: [
              'First identify the business problem. Do not choose software only because it is popular.',
            ],
          },
          {
            heading: 'Changing Everything at Once',
            paragraphs: [
              'Introducing too many systems together may confuse employees. Start with one important improvement.',
            ],
          },
          {
            heading: 'Ignoring Employee Training',
            paragraphs: [
              'Employees need clear instructions and practical training to use new software confidently.',
            ],
          },
          {
            heading: 'Focusing Only on Design',
            paragraphs: [
              'A system should not only look good. It should also be reliable, easy to use, and suitable for the business workflow.',
            ],
          },
          {
            heading: 'Forgetting Security',
            paragraphs: [
              'Customer details, employee records, and financial information should be protected through proper access control and regular backups.',
            ],
          },
          {
            heading: 'Not Clarifying Support Terms',
            paragraphs: [
              'Before starting a software project, discuss source code ownership, data ownership, hosting, maintenance, support, and future updates.',
            ],
          },
        ],
      },
      {
        heading: '9. How to Get Started',
        paragraphs: [
          'Businesses can begin their digital transformation journey through a few simple steps.',
        ],
        subsections: [
          {
            heading: 'Step 1: Identify the Biggest Problem',
            paragraphs: [
              'Find out which task takes the most time or creates the most mistakes.',
            ],
          },
          {
            heading: 'Step 2: Set a Clear Goal',
            paragraphs: [
              'The goal may be to reduce billing time, improve stock visibility, organize employee records, or increase customer follow-ups.',
            ],
          },
          {
            heading: 'Step 3: Choose the Right Solution',
            paragraphs: [
              'Depending on the need, the solution may be a website, ERP, HRMS, CRM, cloud application, or custom software.',
            ],
          },
          {
            heading: 'Step 4: Start with Essential Features',
            paragraphs: [
              'Begin with the features that solve the main problem. More features can be added later.',
            ],
          },
          {
            heading: 'Step 5: Train the Team',
            paragraphs: [
              'Make sure employees understand how to use the system in their daily work.',
            ],
          },
          {
            heading: 'Step 6: Review the Results',
            paragraphs: [
              'Collect feedback and improve the system as the business grows.',
            ],
          },
        ],
      },
      {
        heading: 'Final Thoughts',
        paragraphs: [
          'Technology can help small businesses manage daily work with less confusion and more confidence.',
          'A website can improve online visibility. ERP can organize business operations. HRMS can simplify employee management. CRM can support customer follow-ups. AI, automation, and cloud technology can save time and improve access to information.',
          'The important thing is to choose technology based on real business needs.',
          'Start with one problem, select a practical solution, train your team, and improve gradually.',
          'At Intouch Global Tech, we help businesses build practical digital solutions through websites, custom software, ERP, HRMS, CRM, automation, and cloud-based applications.',
          'Have a business process that needs improvement? Contact Intouch Global Tech and let’s discuss the right solution for your business.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is digital transformation?',
        answer:
          'Digital transformation means using technology to improve business operations, customer service, employee management, and reporting.',
      },
      {
        question: 'Is digital transformation useful for small businesses?',
        answer:
          'Yes. It can reduce manual work, organize information, improve customer communication, and save time.',
      },
      {
        question: 'Does every business need custom software?',
        answer:
          'No. Ready-made software may be enough for some businesses. Custom software is useful when a company has specific workflows or integration needs.',
      },
      {
        question: 'When should a business consider ERP?',
        answer:
          'A business may consider ERP when managing purchases, sales, stock, billing, or branches through separate files becomes difficult.',
      },
      {
        question: 'How can CRM help a business?',
        answer:
          'CRM helps track customer enquiries, follow-ups, quotations, communication, and sales opportunities.',
      },
      {
        question: 'Can HRMS manage attendance and payroll?',
        answer:
          'HRMS can support employee records, attendance, leave, and payroll-related activities. The exact features depend on the software.',
      },
      {
        question: 'Is AI necessary for every business?',
        answer:
          'No. AI should be used only when it solves a clear business problem or reduces repetitive work.',
      },
      {
        question: 'Is cloud software safe?',
        answer:
          'Cloud software can be secure when it is properly managed with strong passwords, access control, backups, and secure hosting.',
      },
      {
        question: 'What should be checked before starting a software project?',
        answer:
          'Discuss the project scope, features, budget, timeline, ownership, hosting, maintenance, security, and support terms.',
      },
    ],
  },
];

// Additional articles saved for future publication (later we can add it):
export const futureBlogPosts: BlogPost[] = [
  {
    slug: 'why-every-growing-business-needs-a-professional-website',
    title: 'Why Every Growing Business Needs a Professional Website',
    subtitle: 'Elevating Brand Trust, Visibility, and Lead Conversion in the Digital Era',
    category: 'Web Development',
    description:
      'Understand how a modern business website can improve trust, visibility, customer engagement, and enquiries.',
    image: '/images/blog/web-development.jpg',
    readingTime: '5 min read',
    publishedDate: 'March 08, 2025',
    author: {
      name: 'Intouch Web Engineering',
      role: 'Web & Digital Platforms',
    },
    takeaways: [
      'First impressions are formed in seconds; a sluggish or dated website immediately damages credibility.',
      'Targeted search engine optimization attracts high-intent enterprise buyers seeking your specific services.',
      'Mobile-first responsive architecture ensures smooth engagement across all screen sizes.',
    ],
    sections: [
      {
        heading: 'The Digital Front Door to Your Enterprise',
        paragraphs: [
          'In today’s competitive marketplace, your website is frequently the very first touchpoint a prospective buyer, investor, or partner encounters. A professional, modern website instantly validates your company’s market standing, technical capabilities, and brand standards.',
          'Conversely, an outdated, slow-loading, or broken website immediately creates doubt regarding your operational reliability. High-performing businesses treat their web presence as an indispensable sales asset rather than a static brochure.',
        ],
      },
      {
        heading: 'Speed, Mobile Responsiveness & Search Engine Authority',
        paragraphs: [
          'More than 65% of commercial and retail inquiries originate on mobile devices. A mobile-first architecture engineered with modern web standards ensures instant page rendering, zero layout shift, and intuitive navigation.',
          'Furthermore, search engines prioritize websites built with semantic structure, clean markup, and rapid response times, placing your services directly in front of active buyers searching for solutions in your sector.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why should we build a custom website instead of using a basic template?',
        answer:
          'Custom web platforms provide superior loading speed, custom conversion workflows, clean brand aesthetics without bloated code, and the ability to scale into customer portals or e-commerce seamlessly.',
      },
      {
        question: 'How does a professional website help generate sales leads?',
        answer:
          'By guiding visitors through clear value propositions, interactive product showcases, and friction-free inquiry channels like direct WhatsApp funnels and quick quotation requests.',
      },
    ],
  },
  {
    slug: 'erp-software-architecture-for-modern-enterprises',
    title: 'How ERP Software Unifies Operations for Modern Enterprises',
    subtitle: 'Eliminating Data Silos Across Inventory, Multi-Branch Billing, and Supply Chains',
    category: 'ERP & HRMS',
    description:
      'Explore how unified ERP systems synchronize inventory, sales, procurement, and branch logistics in real-time.',
    image: '/images/blog/erp-operations.jpg',
    readingTime: '6 min read',
    publishedDate: 'March 04, 2025',
    author: {
      name: 'Intouch ERP Architects',
      role: 'Enterprise Systems Practice',
    },
    takeaways: [
      'Single database architecture eliminates data silos across warehouses and accounting.',
      'Automated low-stock triggers prevent production line halts and missed customer shipments.',
      'Real-time double-entry ledger integration simplifies GST filing and monthly audits.',
    ],
    sections: [
      {
        heading: 'Unifying Disparate Departments into One Reliable Platform',
        paragraphs: [
          'When purchasing, warehousing, manufacturing, and accounting operate in separate silos, discrepancies are inevitable. An Enterprise Resource Planning (ERP) platform solves this by providing a unified ledger where every transaction triggers appropriate updates across the entire enterprise.',
          'For instance, when a sales order is confirmed, the ERP automatically checks multi-warehouse inventory levels, reserves raw materials for production, and alerts dispatch teams—all without requiring a single phone call or manual spreadsheet update.',
        ],
      },
      {
        heading: 'Real-Time Financial Integrity & GST Compliance',
        paragraphs: [
          'Manual invoicing often leads to tax calculation errors, delayed collections, and painful month-end reconciliation. Modern ERP platforms generate GST-compliant tax invoices, e-way bills, and accounts-receivable aging reports automatically upon order dispatch.',
          'Business owners and financial controllers gain instant visibility over cash flow, operating margins, and outstanding vendor liabilities through centralized analytics dashboards.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the main advantage of a custom ERP over standard commercial software?',
        answer:
          'A custom ERP matches your exact shopfloor workflows, custom bills of materials (BOM), and multi-warehouse distribution structure without forcing your staff to adapt to rigid third-party software constraints.',
      },
    ],
  },
  {
    slug: 'how-hrms-and-payroll-software-simplify-employee-management',
    title: 'How HRMS and Payroll Software Simplify Employee Management',
    subtitle: 'Automating Attendance, Shift Scheduling, Compliance, and Salary Processing',
    category: 'ERP & HRMS',
    description:
      'Learn how digital HR tools help manage attendance, leave, payroll, employee records, and approvals.',
    image: '/images/blog/hrms-payroll.jpg',
    readingTime: '5 min read',
    publishedDate: 'February 26, 2025',
    author: {
      name: 'Intouch Solutions Practice',
      role: 'HR Tech & Operations',
    },
    takeaways: [
      'Direct sync with biometric clocks removes attendance manipulation and manual time tracking.',
      'Automated salary engines calculate statutory deductions, overtime, and payslips in seconds.',
      'Employee self-service portals empower staff to submit leave requests and download documents.',
    ],
    sections: [
      {
        heading: 'Eliminating the Monthly Payroll Crunch',
        paragraphs: [
          'Calculating monthly employee salaries across varying shifts, overtime hours, unpaid leaves, and statutory requirements like PF, ESI, and tax deductions is one of the most tedious tasks for business administration.',
          'A modern Human Resource Management System (HRMS) synchronizes directly with on-premise biometric hardware or geo-tagged mobile attendance, calculating payroll accurately with a single click and delivering digital payslips directly to employee inboxes.',
        ],
      },
      {
        heading: 'Empowering Teams with Self-Service Portals',
        paragraphs: [
          'Rather than interrupting HR managers for leave balance queries or salary slip copies, employees can log in to secure web or mobile self-service portals. Leave requests, expense claims, and profile updates are routed through automated manager approval workflows.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can HRMS software sync with our existing fingerprint or facial recognition hardware?',
        answer:
          'Yes. Modern HRMS platforms integrate directly with standard biometric devices via local TCP/IP and API endpoints to stream punch logs in real time.',
      },
    ],
  },
  {
    slug: 'how-crm-software-helps-businesses-convert-leads-into-customers',
    title: 'How CRM Software Helps Businesses Convert Leads into Customers',
    subtitle: 'Building a Structured Sales Pipeline That Drives Consistent Revenue',
    category: 'CRM & Billing',
    description:
      'Understand how CRM software improves lead tracking, follow-ups, customer communication, and sales visibility.',
    image: '/images/blog/crm-sales.jpg',
    readingTime: '6 min read',
    publishedDate: 'February 20, 2025',
    author: {
      name: 'Intouch Growth Advisory',
      role: 'CRM & Sales Automation',
    },
    takeaways: [
      'Centralized lead capture ensures no customer inquiry falls through the cracks.',
      'Multi-stage pipeline tracking provides visibility into sales velocity and conversion bottlenecks.',
      'Automated reminders and WhatsApp notifications empower reps to close deals faster.',
    ],
    sections: [
      {
        heading: 'Why Leads Get Lost Without a Central System',
        paragraphs: [
          'In many growing businesses, incoming inquiries arrive across multiple channels—website forms, phone calls, WhatsApp messages, and trade exhibitions. When reps record leads on individual notepads or disparate chat threads, follow-ups get delayed and valuable deals slip away.',
          'A dedicated CRM platform captures every inquiry into a unified sales inbox, immediately assigning it to the right representative according to territory or product category.',
        ],
      },
      {
        heading: 'Visual Stages & Timely Follow-Up Triggers',
        paragraphs: [
          'By organizing opportunities across transparent pipeline stages—from initial qualification and technical demonstration to quotation delivery and negotiation—sales leaders can quickly spot stalled deals.',
          'Automated reminders notify sales representatives when a quotation has remained unviewed or when a scheduled call is due, ensuring consistent customer touchpoints.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How does a CRM improve sales conversions?',
        answer:
          'By providing automated follow-up reminders, pipeline visibility, and rapid communication funnels.',
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  const sameCategory = blogPosts.filter(
    (post) => post.slug !== currentSlug && post.category === category
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const otherPosts = blogPosts.filter(
    (post) => post.slug !== currentSlug && post.category !== category
  );
  return [...sameCategory, ...otherPosts].slice(0, limit);
}

export function getAnchorId(text: string): string {
  return text
    .replace(/^\d+[\.\)]\s*/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

