export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterContactItem {
  type: 'email' | 'phone' | 'whatsapp' | 'instagram';
  label: string;
  href: string;
}

export interface FooterConfig {
  brand: {
    logoSrc: string;
    logoAlt: string;
    tagline: string;
  };
  nav: {
    title: string;
    links: FooterLink[];
  }[];
  contact: FooterContactItem[];
  legal: FooterLink[];
  copyright: string;
}

const footerConfig: FooterConfig = {
  brand: {
    logoSrc: '/logo-large.png',
    logoAlt: 'Shopey',
    tagline: 'Pre-built ecommerce stores for small businesses. One-time payment, lifetime support.',
  },
  nav: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Technology', href: '#technology' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
        { label: 'View Live Demo', href: 'https://app.shopey.tech', external: true },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: 'mailto:hello@shopey.tech' },
        { label: 'WhatsApp', href: 'https://wa.me/919656010927', external: true },
      ],
    },
  ],
  contact: [
    {
      type: 'email',
      label: 'hello@shopey.tech',
      href: 'mailto:hello@shopey.tech',
    },
    {
      type: 'phone',
      label: '+91 96560 10927',
      href: 'tel:+919656010927',
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/919656010927',
    },
    {
      type: 'instagram',
      label: '@kromic.in',
      href: 'https://instagram.com/kromic.in',
    },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ],
  copyright: `© ${new Date().getFullYear()} Shopey. All rights reserved.`,
};

export default footerConfig;
