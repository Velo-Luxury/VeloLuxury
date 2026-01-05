
export type Language = 'en' | 'ar';

export type CarCategory = 'Elegance' | 'Executive' | 'Adrenaline' | 'Majestic';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface Car {
  id: string;
  name: string;
  model: string;
  category: CarCategory;
  pricePerDay: string;
  imageUrl: string;
  gallery: string[];
  engine: string;
  zeroToSixty: string;
  topSpeed: string;
  seats: number;
  features: string[];
  description: LocalizedText;
  isVisible: boolean;
  isFeatured: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: LocalizedText;
  rating: number;
}

export interface Offer {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  discount: string;
  validUntil: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  iconName: string;
}

export interface JournalPost {
  id: string;
  title: LocalizedText;
  content: LocalizedText;
  imageUrl: string;
  slug: string;
  publishedDate: string;
}

export interface FAQ {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: LocalizedText;
  mapUrl: string;
}
