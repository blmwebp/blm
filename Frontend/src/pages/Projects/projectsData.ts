export type PortfolioCategory =
  | 'Websites'
  | 'Backdrops & Banners'
  | 'Brochures'
  | 'Emailers'
  | 'Event Creatives';

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  description: string;
  coverImage: string;
  mobileCoverImage?: string;
  gallery: string[];
  websiteUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    slug: 'aayush-excil-backdrop-banner',
    title: 'Backdrop Banner',
    client: 'Aayush Excil',
    category: 'Backdrops & Banners',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '2',
    slug: 'aayush-excil-backdrop-banner',
    title: 'Bharat Tech Expo',
    client: 'AIFOM',
    category: 'Backdrops & Banners',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '3',
    slug: 'aayurveda-day-backdrop-banner',
    title: 'Aayurveda Day Banner',
    client: 'Aayush Excil',
    category: 'Backdrops & Banners',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '4',
    slug: 'cantech-backdrop-banner',
    title: 'Cantech Banner',
    client: 'Cantech',
    category: 'Backdrops & Banners',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '5',
    slug: 'vcom-bouchers',
    title: 'Bouchers',
    client: 'Vcom',
    category: 'Brochures',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '6',
    slug: 'gjepc-bouchers',
    title: 'B2B Trade Delegation',
    client: 'GJEPC',
    category: 'Brochures',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '7',
    slug: 'vcom-bouchers',
    title: 'bouchers',
    client: 'Vcom',
    category: 'Brochures',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '8',
    slug: 'aayush-excil-brochure',
    title: 'Aayush Excil Brochure',
    client: 'Aayush Excil',
    category: 'Brochures',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '9',
    slug: 'aayush-excil-bouchers',
    title: 'Bouchers',
    client: 'Aayush Excil',
    category: 'Brochures',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '10',
    slug: 'project-emailer',
    title: 'Emailer',
    client: 'Aayush Excil',
    category: 'Emailers',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '11',
    slug: 'project-emailer',
    title: 'Emailer',
    client: 'Aayush Excil',
    category: 'Emailers',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '12',
    slug: 'project-emailer',
    title: 'Emailer',
    client: 'Aayush Excil',
    category: 'Emailers',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '13',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '14',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '15',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '16',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '17',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '18',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '19',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '20',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '21',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '22',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '23',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '24',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '25',
    slug: 'project-event-images',
    title: 'Event Images',
    client: 'Aayush Excil',
    category: 'Event Creatives',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '26',
    slug: 'project-emailer',
    title: 'Emailer',
    client: 'Aayush Excil',
    category: 'Emailers',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '27',
    slug: 'project-website',
    title: 'Website',
    client: 'Aayush Excil',
    category: 'Websites',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '28',
    slug: 'project-website',
    title: 'Website',
    client: 'Aayush Excil',
    category: 'Websites',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '29',
    slug: 'project-website',
    title: 'Website',
    client: 'Aayush Excil',
    category: 'Websites',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '30',
    slug: 'project-website',
    title: 'Website',
    client: 'Aayush Excil',
    category: 'Websites',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
  {
    id: '31',
    slug: 'project-website',
    title: 'Website',
    client: 'Aayush Excil',
    category: 'Websites',
    year: '2026',
    description:
      'A modern, responsive website designed to create a premium digital experience, showcase products, and strengthen the brand identity.',

    coverImage: '/images/projects/work data/Design/backdrop banner/03.jpg',
    mobileCoverImage: '/images/projects/aayush-excil/backdrop-banner/mobile.webp',

    gallery: [
      '/images/projects/work data/Design/backdrop banner/03.jpg',
      '/images/projects/aayush-excil/backdrop-banner/products.webp',
      '/images/projects/aayush-excil/backdrop-banner/mobile-view.webp',
    ],

    websiteUrl: 'https://example.com',
  },
];