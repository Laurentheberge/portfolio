export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorTagline: string;
  authorAvatar?: string;
  url?: string;
  date: string;
  isFeatured?: boolean;
};

/**
 * TESTIMONIALS_ROW_1: Long quotes (more than 50 characters)
 * TESTIMONIALS_ROW_2: Short quotes (50 characters or fewer)
 */

export const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Saiyantific delivered a stunning website that perfectly captured our brand vision. The attention to detail in both design and code was exceptional.',
    authorName: 'Client Name',
    authorTagline: 'CEO, Company',
    date: '2025-01',
  },
  {
    id: 'testimonial-2',
    quote:
      'Working with Saiyantific was a seamless experience. They brought both technical expertise and creative design skills to the table.',
    authorName: 'Colleague Name',
    authorTagline: 'Product Manager',
    date: '2024-11',
  },
];

export const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    id: 'testimonial-3',
    quote: 'Incredible eye for design and clean code.',
    authorName: 'Teammate Name',
    authorTagline: 'Frontend Developer',
    date: '2025-02',
  },
  {
    id: 'testimonial-4',
    quote: 'Reliable, creative, and technically sharp.',
    authorName: 'Another Client',
    authorTagline: 'Startup Founder',
    date: '2024-09',
  },
];
