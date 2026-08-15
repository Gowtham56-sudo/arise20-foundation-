export type ProgramCategory = 'all' | 'education' | 'healthcare' | 'youth' | 'sustainability' | 'arts' | 'social service';

export interface Program {
  id: string;
  title: string;
  category: ProgramCategory;
  shortDesc: string;
  fullDesc: string;
  image: string;
  targetAmount: number;
  raisedAmount: number;
  beneficiaries: string;
  location: string;
  keyHighlights: string[];
  featured?: boolean;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix: string;
  description: string;
  iconName: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  beneficiaryName: string;
  roleLocation: string;
  quote: string;
  story: string;
  image: string;
  metrics: { label: string; value: string }[];
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ProgramCategory;
  image: string;
  location: string;
  date: string;
  caption: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  spotsLeft: number;
  category: string;
  isVirtual?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  type: 'volunteer' | 'beneficiary' | 'partner';
  avatar: string;
  content: string;
  rating: number;
  organization?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'donation' | 'tax' | 'volunteering';
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  category: string;
}
