
import { Car, Offer, Testimonial, Service, FAQ, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "60123456789",
  whatsapp: "60123456789",
  email: "info@veloluxury.com",
  address: {
    en: "3 Towers, Jalan Ampang, 50450 Kuala Lumpur",
    ar: "أبراج 3، جالان أمبانج، 50450 كوالالمبور"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.769312095633!2d101.7365!3d3.1569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37c8c6c8c8c9%3A0x123456789!2s3%20Towers%20Jalan%20Ampang!5e0!3m2!1sen!2smy!4v1625000000000!5m2!1sen!2smy"
};

export const PHONE_NUMBER = CONTACT_INFO.whatsapp; // Deprecated in favor of Context but kept for fallback

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      fleet: "The Fleet",
      about: "Legacy",
      offers: "Privileges",
      contact: "Contact",
      policies: "Policies"
    },
    hero: {
      title: "Command the Road",
      subtitle: "Kuala Lumpur’s most exclusive fleet. Delivered to your doorstep. Booked in seconds.",
      cta: "View Collection",
      ctaSecondary: "Concierge Chat",
    },
    home: {
      featuredTitle: "Curated Excellence",
      servicesTitle: "Beyond the Drive",
      viewFleet: "Explore Full Fleet",
      howItWorksTitle: "Seamless Acquisition",
      faqTitle: "Frequently Asked Questions"
    },
    filters: {
      all: "All Models",
      elegance: "Elegance",
      executive: "Executive",
      adrenaline: "Adrenaline",
      majestic: "Majestic"
    },
    carDetail: {
      specs: "Specifications",
      perDay: "per day",
      bookBtn: "Book via WhatsApp",
      inquireBtn: "Inquire Availability",
      features: "Key Features",
      benefits: "VELO Benefits",
      benefitsList: ["Comprehensive Insurance", "Doorstep Delivery", "24/7 Roadside Assistance", "Chauffeur Option Available"],
      related: "You Might Also Like",
      gallery: "Gallery"
    },
    whyChoose: {
      title: "The VELO Standard",
      p1_title: "Prestige",
      p1_desc: "A curated fleet of the world's most desirable marques.",
      p2_title: "Excellence",
      p2_desc: "Meticulously maintained vehicles for flawless performance.",
      p3_title: "Experience",
      p3_desc: "Seamless booking, personalized service, unforgettable drives."
    },
    footer: {
      address: CONTACT_INFO.address.en, // Initial value, will be overridden by context
      copyright: "© 2024 VELO LUXURY. All rights reserved.",
      tagline: "Beyond Transportation."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      fleet: "الأسطول",
      about: "قصتنا",
      offers: "العروض",
      contact: "اتصل بنا",
      policies: "السياسات"
    },
    hero: {
      title: "تحكم في الطريق",
      subtitle: "الأسطول الأكثر تميزاً في كوالالمبور. توصيل حتى باب منزلك. حجز في ثوانٍ.",
      cta: "شاهد المجموعة",
      ctaSecondary: "محادثة الكونسيرج",
    },
    home: {
      featuredTitle: "تميز مختار",
      servicesTitle: "أكثر من مجرد قيادة",
      viewFleet: "استكشف الأسطول الكامل",
      howItWorksTitle: "امتلاك سلس",
      faqTitle: "أسئلة مكررة"
    },
    filters: {
      all: "كل الموديلات",
      elegance: "أناقة",
      executive: "تنفيذي",
      adrenaline: "أدرينالين",
      majestic: "مهيب"
    },
    carDetail: {
      specs: "المواصفات",
      perDay: "في اليوم",
      bookBtn: "احجز عبر واتساب",
      inquireBtn: "استفسر عن التوفر",
      features: "الميزات الرئيسية",
      benefits: "مزايا فيلو",
      benefitsList: ["تأمين شامل", "توصيل للباب", "خدمة طريق 24/7", "خيار سائق خاص"],
      related: "قد يعجبك أيضاً",
      gallery: "المعرض"
    },
    whyChoose: {
      title: "معيار فيلو",
      p1_title: "هيبة",
      p1_desc: "أسطول مختار بعناية من أرقى العلامات التجارية في العالم.",
      p2_title: "امتياز",
      p2_desc: "مركبات مصانة بدقة لأداء لا تشوبه شائبة.",
      p3_title: "تجربة",
      p3_desc: "حجز سلس، خدمة شخصية، وقيادة لا تُنسى."
    },
    footer: {
      address: CONTACT_INFO.address.ar, // Initial value
      copyright: "© 2024 فيلو الفاخرة. جميع الحقوق محفوظة.",
      tagline: "أكثر من مجرد نقل."
    }
  }
};

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: { en: "Select Your Vehicle", ar: "اختر مركبتك" },
    desc: { en: "Browse our exclusive collection of supercars and luxury sedans.", ar: "تصفح مجموعتنا الحصرية من السيارات الخارقة وسيارات السيدان الفاخرة." },
    icon: "Search"
  },
  {
    id: 2,
    title: { en: "Connect Instantly", ar: "تواصل فوراً" },
    desc: { en: "Click to chat via WhatsApp. No forms, just direct VIP service.", ar: "اضغط للدردشة عبر واتساب. بدون نماذج، فقط خدمة VIP مباشرة." },
    icon: "MessageCircle"
  },
  {
    id: 3,
    title: { en: "Drive Delivered", ar: "استلم وقد" },
    desc: { en: "We deliver the car to your hotel, airport, or residence.", ar: "نقوم بتوصيل السيارة إلى فندقك، المطار، أو محل إقامتك." },
    icon: "Key"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: { en: "What documents do I need to rent?", ar: "ما المستندات التي أحتاجها للاستئجار؟" },
    answer: { en: "We require a valid passport/ID and a driving license held for at least 2 years. International permits are needed for non-Malaysian licenses.", ar: "نحتاج إلى جواز سفر/هوية سارية ورخصة قيادة سارية لمدة سنتين على الأقل. التصاريح الدولية مطلوبة للرخص غير الماليزية." }
  },
  {
    id: "2",
    question: { en: "Is insurance included?", ar: "هل التأمين مشمول؟" },
    answer: { en: "Yes, all our rentals come with comprehensive insurance coverage. Excess reduction options are available upon request.", ar: "نعم، جميع إيجاراتنا تأتي مع تغطية تأمينية شاملة. تتوفر خيارات تخفيض التحمل عند الطلب." }
  },
  {
    id: "3",
    question: { en: "Do you provide chauffeur services?", ar: "هل توفرون خدمات سائق؟" },
    answer: { en: "Absolutely. Our 'Majestic' and 'Executive' categories can be booked with a professional chauffeur for an effortless experience.", ar: "بالتأكيد. يمكن حجز فئات 'مهيب' و 'تنفيذي' مع سائق محترف لتجربة سهلة." }
  },
  {
    id: "4",
    question: { en: "How much is the security deposit?", ar: "كم يبلغ مبلغ التأمين؟" },
    answer: { en: "Security deposits range from RM 1,000 to RM 5,000 depending on the vehicle category. It is fully refundable upon safe return.", ar: "تتراوح مبالغ التأمين من 1000 إلى 5000 رينغيت ماليزي حسب فئة السيارة. وهو قابل للاسترداد بالكامل عند الإرجاع الآمن." }
  }
];

export const SERVICES: Service[] = [
  {
    id: 'chauffeur',
    title: { en: "Chauffeur Services", ar: "خدمات السائق" },
    description: { en: "Professional chauffeurs for a seamless, relaxing journey.", ar: "سائقون محترفون لرحلة سلسة ومريحة." },
    iconName: "UserCheck"
  },
  {
    id: 'wedding',
    title: { en: "Wedding Events", ar: "حفلات الزفاف" },
    description: { en: "Make your special day unforgettable with our grand fleet.", ar: "اجعل يومك الخاص لا يُنسى مع أسطولنا الكبير." },
    iconName: "Heart"
  },
  {
    id: 'airport',
    title: { en: "Airport Transfer", ar: "نقل المطار" },
    description: { en: "Punctual, premium transfers to and from KLIA.", ar: "نقل دقيق ومميز من وإلى مطار كوالالمبور." },
    iconName: "Plane"
  }
];

export const CARS: Car[] = [
  {
    id: 'rr-ghost',
    name: 'Rolls Royce Ghost',
    model: '2023 Black Badge',
    category: 'Majestic',
    pricePerDay: 'RM 6,500',
    imageUrl: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1619551734325-81ebdeb74495?q=80&w=1000&auto=format&fit=crop'
    ],
    engine: '6.75L V12',
    zeroToSixty: '4.6s',
    topSpeed: '250 km/h',
    seats: 4,
    features: ['Starlight Headliner', 'Massage Seats', 'Bespoke Audio', 'Privacy Glass'],
    description: {
      en: "The purest expression of Rolls-Royce. An effortless, immersive experience that whispers success.",
      ar: "أنقى تعبير عن رولز رويس. تجربة غامرة سهلة تهمس بالنجاح."
    }
  },
  {
    id: 'lambo-huracan',
    name: 'Lamborghini Huracán',
    model: 'EVO Spyder',
    category: 'Adrenaline',
    pricePerDay: 'RM 5,800',
    imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621606969833-2b4a9b9f5285?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566008885218-4047098da420?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop'
    ],
    engine: '5.2L V10',
    zeroToSixty: '3.1s',
    topSpeed: '325 km/h',
    seats: 2,
    features: ['Convertible Top', 'Sport Exhaust', 'Carbon Ceramic Brakes', 'Lift System'],
    description: {
      en: "Raw emotion. Open-air freedom. The V10 engine sings a song of pure adrenaline on the streets of KL.",
      ar: "عاطفة خام. حرية في الهواء الطلق. محرك V10 يغني أغنية من الأدرينالين النقي في شوارع كوالالمبور."
    }
  },
  {
    id: 's-class',
    name: 'Mercedes-Benz S-Class',
    model: 'S580 4MATIC',
    category: 'Elegance',
    pricePerDay: 'RM 2,200',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609520505218-7421da323823?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622199569394-732192d7986e?q=80&w=1000&auto=format&fit=crop'
    ],
    engine: '4.0L V8 Biturbo',
    zeroToSixty: '4.4s',
    topSpeed: '250 km/h',
    seats: 5,
    features: ['Executive Rear Seats', 'Burmester 4D Sound', 'Ambient Lighting', 'MBUX'],
    description: {
      en: "The benchmark of luxury sedans. Advanced technology meets timeless comfort for the discerning executive.",
      ar: "معيار سيارات السيدان الفاخرة. تلتقي التكنولوجيا المتقدمة بالراحة الخالدة للمدير التنفيذي المميز."
    }
  },
  {
    id: 'g-wagon',
    name: 'Mercedes-AMG G63',
    model: 'G-Wagon',
    category: 'Executive',
    pricePerDay: 'RM 3,500',
    imageUrl: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603577005036-d64186d3458d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop'
    ],
    engine: '4.0L V8 Biturbo',
    zeroToSixty: '4.5s',
    topSpeed: '220 km/h',
    seats: 5,
    features: ['Differential Locks', 'AMG Ride Control', 'Sunroof', 'Towing Package'],
    description: {
      en: "An icon of capability and status. Dominating presence on the road with the performance to back it up.",
      ar: "أيقونة القدرة والمكانة. حضور مسيطر على الطريق مع أداء يدعمه."
    }
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911',
    model: 'Carrera S',
    category: 'Adrenaline',
    pricePerDay: 'RM 3,200',
    imageUrl: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611821064430-09416a639954?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop'
    ],
    engine: '3.0L Twin-Turbo Flat-6',
    zeroToSixty: '3.5s',
    topSpeed: '308 km/h',
    seats: 4,
    features: ['PDK Transmission', 'Sport Chrono', 'BOSE Surround', 'Active Suspension'],
    description: {
      en: "The definitive sports car. Precision engineering that connects driver and road in perfect harmony.",
      ar: "السيارة الرياضية النهائية. هندسة دقيقة تربط السائق والطريق في انسجام تام."
    }
  },
  {
    id: 'alphard',
    name: 'Toyota Alphard',
    model: 'Executive Lounge',
    category: 'Executive',
    pricePerDay: 'RM 1,200',
    imageUrl: 'https://images.unsplash.com/photo-1621993202323-c43ad987102c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621993202323-c43ad987102c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1655218269621-4d6666567025?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605218427360-6946d3b4540c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop'
    ],
    engine: '3.5L V6',
    zeroToSixty: '8.3s',
    topSpeed: '180 km/h',
    seats: 7,
    features: ['Pilot Seats', 'Roof Monitor', 'Dual Sunroof', 'Power Doors'],
    description: {
      en: "First-class travel for groups. Spacious, quiet, and incredibly comfortable for city tours or transfers.",
      ar: "سفر من الدرجة الأولى للمجموعات. واسعة وهادئة ومريحة بشكل لا يصدق لجولات المدينة أو التنقلات."
    }
  }
  ,
  {
    "id": "38b1fc36-bfd4-4c7e-a9d5-a38534874ccb",
    "name": "Bentley Bentayga",
    "model": "V8 First Edition",
    "category": "Majestic",
    "pricePerDay": "RM 5,500",
    "imageUrl": "https://images.unsplash.com/photo-1621251912520-2c7da87612f0?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1621251912520-2c7da87612f0?q=80&w=1000",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000"
    ],
    "engine": "4.0L V8 Twin-Turbo",
    "zeroToSixty": "4.4s",
    "topSpeed": "290 km/h",
    "seats": 5,
    "features": [
      "Naim Audio",
      "Massage Seats",
      "Night Vision",
      "All-Terrain Spec"
    ],
    "description": {
      "en": "The definition of luxury SUV. Unmatched power combined with exquisite craftsmanship.",
      "ar": "تعريف سيارات الدفع الرباعي الفاخرة. قوة لا تضاهى تقترن بحرفية رائعة."
    }
  },
  {
    "id": "1b3a52cf-2d07-4f58-b768-0ae12c5f85f6",
    "name": "Rolls-Royce Cullinan",
    "model": "Black Badge",
    "category": "Majestic",
    "pricePerDay": "RM 7,500",
    "imageUrl": "https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=1000"
    ],
    "engine": "6.75L V12",
    "zeroToSixty": "4.9s",
    "topSpeed": "250 km/h",
    "seats": 4,
    "features": [
      "Viewing Suite",
      "Shooting Star Headliner",
      "Immersive Seating",
      "Champagne Cooler"
    ],
    "description": {
      "en": "Effortless everywhere. The Rolls-Royce Cullinan is the most capable Rolls-Royce ever created.",
      "ar": "مجهود في كل مكان. رولز رويس كولينان هي أكثر سيارات رولز رويس قدرة على الإطلاق."
    }
  },
  {
    "id": "74ac7622-06fd-416e-8302-dff159fb4191",
    "name": "Mercedes-Maybach S500",
    "model": "S500 X Maybach Kit",
    "category": "Majestic",
    "pricePerDay": "RM 3,800",
    "imageUrl": "https://images.unsplash.com/photo-1609520505218-7421da323823?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1609520505218-7421da323823?q=80&w=1000"
    ],
    "engine": "3.0L Inline-6 Turbo",
    "zeroToSixty": "5.1s",
    "topSpeed": "250 km/h",
    "seats": 4,
    "features": [
      "First Class Rear Cabin",
      "Burmester High-End 4D",
      "Executive Seats",
      "Champagne Flutes"
    ],
    "description": {
      "en": "Exclusive luxury with the appearance of the legendary Maybach.",
      "ar": "فخامة حصرية بمظهر مايباخ الأسطوري."
    }
  },
  {
    "id": "28bde5b5-84dc-4791-b1c7-8ca818fce6d3",
    "name": "Audi R8",
    "model": "V10 Performance",
    "category": "Adrenaline",
    "pricePerDay": "RM 4,500",
    "imageUrl": "https://images.unsplash.com/photo-1603584173870-7b299f589836?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1603584173870-7b299f589836?q=80&w=1000"
    ],
    "engine": "5.2L V10",
    "zeroToSixty": "3.1s",
    "topSpeed": "331 km/h",
    "seats": 2,
    "features": [
      "Quattro AWD",
      "Virtual Cockpit",
      "Carbon Exterior Pack",
      "Sport Exhaust"
    ],
    "description": {
      "en": "Born on the track, built for the road. The roaring V10 is a dying breed of pure performance.",
      "ar": "ولدت على المضمار، وبنيت للطريق. محرك V10 الهادر هو سلالة نادرة من الأداء النقي."
    }
  },
  {
    "id": "c3cec0d0-f12d-4967-a085-544ca6407f67",
    "name": "BMW i8",
    "model": "Roadster",
    "category": "Adrenaline",
    "pricePerDay": "RM 2,800",
    "imageUrl": "https://images.unsplash.com/photo-1594975549887-1607f2a74c43?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1594975549887-1607f2a74c43?q=80&w=1000"
    ],
    "engine": "1.5L Turbo Hybrid",
    "zeroToSixty": "4.4s",
    "topSpeed": "250 km/h",
    "seats": 2,
    "features": [
      "Butterfly Doors",
      "Plug-in Hybrid",
      "Head-up Display",
      "Laserlight"
    ],
    "description": {
      "en": "The future of the sports car. Stunning design meets sustainable performance.",
      "ar": "مستقبل السيارات الرياضية. تصميم مذهل يلتقي بالأداء المستدام."
    }
  },
  {
    "id": "2d7ef863-2630-4f1c-8bce-495efafd0463",
    "name": "BMW M5",
    "model": "Competition",
    "category": "Adrenaline",
    "pricePerDay": "RM 3,500",
    "imageUrl": "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=1000"
    ],
    "engine": "4.4L V8 Twin-Turbo",
    "zeroToSixty": "3.3s",
    "topSpeed": "305 km/h",
    "seats": 5,
    "features": [
      "M xDrive",
      "M Sport Exhaust",
      "Carbon Roof",
      "Drift Mode"
    ],
    "description": {
      "en": "The ultimate super sedan. Executive comfort creates a disguise for supercar performance.",
      "ar": "السيدان الخارقة النهائية. الراحة التنفيذية تخلق تمويهاً لأداء السيارات الخارقة."
    }
  },
  {
    "id": "52eaa390-f882-4b51-b0a0-ef9072494cf5",
    "name": "Ford Mustang",
    "model": "GT 5.0 V8",
    "category": "Adrenaline",
    "pricePerDay": "RM 1,200",
    "imageUrl": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000"
    ],
    "engine": "5.0L V8 Coyote",
    "zeroToSixty": "4.3s",
    "topSpeed": "250 km/h",
    "seats": 4,
    "features": [
      "Active Valve Exhaust",
      "Brembo Brakes",
      "Line Lock",
      "Track Apps"
    ],
    "description": {
      "en": "American muscle icon. The rumble of the V8 is unmistakable and addictive.",
      "ar": "أيقونة العضلات الأمريكية. هدير محرك V8 لا لبس فيه ويسبب الإدمان."
    }
  },
  {
    "id": "3672d32c-3b41-4acb-bf50-b88a849ab45f",
    "name": "Ford Mustang",
    "model": "2.3 EcoBoost Convertible",
    "category": "Adrenaline",
    "pricePerDay": "RM 900",
    "imageUrl": "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=1000"
    ],
    "engine": "2.3L EcoBoost",
    "zeroToSixty": "5.8s",
    "topSpeed": "233 km/h",
    "seats": 4,
    "features": [
      "Convertible Top",
      "Apple CarPlay",
      "Ventilated Seats",
      "Turbocharged"
    ],
    "description": {
      "en": "Open-air freedom with efficiency and style. Perfect for coastal cruising.",
      "ar": "حرية في الهواء الطلق مع الكفاءة والأناقة. مثالية للرحلات الساحلية."
    }
  },
  {
    "id": "07faab14-05e5-40cd-8346-2ec7cd236db2",
    "name": "Lamborghini Urus",
    "model": "V8 Biturbo",
    "category": "Adrenaline",
    "pricePerDay": "RM 6,000",
    "imageUrl": "https://images.unsplash.com/photo-1621606969833-2b4a9b9f5285?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1621606969833-2b4a9b9f5285?q=80&w=1000"
    ],
    "engine": "4.0L V8 Twin-Turbo",
    "zeroToSixty": "3.6s",
    "topSpeed": "305 km/h",
    "seats": 5,
    "features": [
      "ANIMA Selector",
      "Carbon Ceramic Brakes",
      "Bang & Olufsen 3D",
      "Air Suspension"
    ],
    "description": {
      "en": "The world's first Super SUV. The soul of a super sports car with the functionality of an SUV.",
      "ar": "أول سيارة دفع رباعي فائقة في العالم. روح سيارة رياضية خارقة مع وظائف سيارة دفع رباعي."
    }
  },
  {
    "id": "3247f19d-7671-4bf9-9649-5f5befa15f20",
    "name": "McLaren 720S",
    "model": "Coupe",
    "category": "Adrenaline",
    "pricePerDay": "RM 6,200",
    "imageUrl": "https://images.unsplash.com/photo-1621685747442-99c5c96c4297?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1621685747442-99c5c96c4297?q=80&w=1000"
    ],
    "engine": "4.0L V8 Twin-Turbo",
    "zeroToSixty": "2.9s",
    "topSpeed": "341 km/h",
    "seats": 2,
    "features": [
      "Dihedral Doors",
      "Proactive Chassis Control II",
      "Carbon Fibre Monocage",
      "Drift Control"
    ],
    "description": {
      "en": "Lighter, stronger, faster. A supercar that redefines expectations.",
      "ar": "أخف، أقوى، أسرع. سيارة خارقة تعيد تعريف التوقعات."
    }
  },
  {
    "id": "db4acce1-5cde-4d15-97b4-f5e4b1c79f51",
    "name": "Mercedes-AMG GT",
    "model": "S Coupe",
    "category": "Adrenaline",
    "pricePerDay": "RM 3,000",
    "imageUrl": "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000"
    ],
    "engine": "4.0L V8 Biturbo",
    "zeroToSixty": "3.8s",
    "topSpeed": "310 km/h",
    "seats": 2,
    "features": [
      "Race Mode",
      "AMG Ride Control",
      "Performance Exhaust",
      "Burmester Surround"
    ],
    "description": {
      "en": "A pure sports car. Handcrafted by racers for the road.",
      "ar": "سيارة رياضية نقية. صنعت يدوياً من قبل المتسابقين للطريق."
    }
  },
  {
    "id": "a92fc8a5-6a9f-4e41-92d4-edd2b8c62e06",
    "name": "Mercedes-AMG CLA 45",
    "model": "S 4MATIC+",
    "category": "Adrenaline",
    "pricePerDay": "RM 1,500",
    "imageUrl": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000"
    ],
    "engine": "2.0L Turbo",
    "zeroToSixty": "4.0s",
    "topSpeed": "270 km/h",
    "seats": 5,
    "features": [
      "Drift Mode",
      "AMG Bucket Seats",
      "MBUX AI",
      "Aerodynamic Pack"
    ],
    "description": {
      "en": "The world's most powerful compact performance car. Agility meets brute force.",
      "ar": "أقوى سيارة مدمجة عالية الأداء في العالم. الرشاقة تلتقي بالقوة الغاشمة."
    }
  },
  {
    "id": "5010d345-873c-4ee5-9b9a-cb1a4066ef2a",
    "name": "Nissan GT-R",
    "model": "R35 Premium",
    "category": "Adrenaline",
    "pricePerDay": "RM 2,500",
    "imageUrl": "https://images.unsplash.com/photo-1601614008272-358c5a246835?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1601614008272-358c5a246835?q=80&w=1000"
    ],
    "engine": "3.8L V6 Twin-Turbo",
    "zeroToSixty": "2.7s",
    "topSpeed": "315 km/h",
    "seats": 4,
    "features": [
      "ATTESA E-TS AWD",
      "Bose Audio",
      "Titanium Exhaust",
      "Recaro Seats"
    ],
    "description": {
      "en": "Godzilla. A technological marvel that challenges supercars costing twice as much.",
      "ar": "غودزيلا. أعجوبة تكنولوجية تتحدى السيارات الخارقة التي تكلف ضعف ثمنها."
    }
  },
  {
    "id": "ba102c09-fa68-4c0b-b3e6-3543514a88cf",
    "name": "Porsche 718",
    "model": "Boxster/Cayman",
    "category": "Adrenaline",
    "pricePerDay": "RM 1,600",
    "imageUrl": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000"
    ],
    "engine": "2.0L Turbo",
    "zeroToSixty": "4.9s",
    "topSpeed": "275 km/h",
    "seats": 2,
    "features": [
      "Mid-Engine Balance",
      "Sport Chrono",
      "PDK",
      "Convertible Top (Boxster)"
    ],
    "description": {
      "en": "Mid-engine perfection. Agile, responsive, and incredibly fun to drive.",
      "ar": "كمال المحرك الأوسط. رشيقة وسريعة الاستجابة وممتعة للغاية في القيادة."
    }
  },
  {
    "id": "2bcd4948-26ce-45e8-a60c-61503787c2d3",
    "name": "Porsche 911",
    "model": "Carrera 992",
    "category": "Adrenaline",
    "pricePerDay": "RM 3,000",
    "imageUrl": "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000"
    ],
    "engine": "3.0L Twin-Turbo Flat-6",
    "zeroToSixty": "4.0s",
    "topSpeed": "293 km/h",
    "seats": 4,
    "features": [
      "Wet Mode",
      "Porsche Connect",
      "10.9\" Touchscreen",
      "Advanced Cockpit"
    ],
    "description": {
      "en": "Timeless design, contemporary interpretation. The 992 generation sets the standard.",
      "ar": "تصميم خالد، تفسير معاصر. جيل 992 يضع المعايير."
    }
  },
  {
    "id": "0c36ca25-dedc-4217-ae6b-1f1ef28bd057",
    "name": "Honda Civic",
    "model": "Type R FL5",
    "category": "Adrenaline",
    "pricePerDay": "RM 900",
    "imageUrl": "https://images.unsplash.com/photo-1605816912304-c373a69527f3?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1605816912304-c373a69527f3?q=80&w=1000"
    ],
    "engine": "2.0L VTEC Turbo",
    "zeroToSixty": "5.4s",
    "topSpeed": "275 km/h",
    "seats": 4,
    "features": [
      "Manual Transmission",
      "Brembo Brakes",
      "Type R Aero",
      "Data Logger"
    ],
    "description": {
      "en": "The ultimate front-wheel drive performance car. Precise, engaging, and fast.",
      "ar": "سيارة الأداء ذات الدفع الأمامي النهائية. دقيقة، جذابة، وسريعة."
    }
  },
  {
    "id": "5029055a-00b6-4120-b11d-edf7bedf7f17",
    "name": "BMW 7 Series",
    "model": "740Le xDrive",
    "category": "Executive",
    "pricePerDay": "RM 1,800",
    "imageUrl": "https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=1000"
    ],
    "engine": "3.0L Inline-6 Plug-in",
    "zeroToSixty": "5.1s",
    "topSpeed": "250 km/h",
    "seats": 5,
    "features": [
      "Executive Lounge Seating",
      "Bowers & Wilkins",
      "Sky Lounge",
      "Gesture Control"
    ],
    "description": {
      "en": "Luxury, electrified. A spacious sanctuary that combines efficiency with pure class.",
      "ar": "الفخامة، الكهرباء. ملاذ واسع يجمع بين الكفاءة والرقي الخالص."
    }
  },
  {
    "id": "4e8fd2d6-b7b5-4262-a598-f582b0740afd",
    "name": "BMW X7",
    "model": "xDrive40i",
    "category": "Executive",
    "pricePerDay": "RM 2,200",
    "imageUrl": "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1000"
    ],
    "engine": "3.0L Inline-6 Turbo",
    "zeroToSixty": "5.8s",
    "topSpeed": "245 km/h",
    "seats": 7,
    "features": [
      "Third Row Seating",
      "Air Suspension",
      "Live Cockpit Pro",
      "Panoramic Roof"
    ],
    "description": {
      "en": "The largest BMW ever built. Commanding presence with room for seven in absolute comfort.",
      "ar": "أكبر سيارة بي إم دبليو تم بناؤها على الإطلاق. حضور مسيطر مع مساحة لسبعة أشخاص براحة مطلقة."
    }
  },
  {
    "id": "b7e8cd60-e957-446b-9de3-31b6eb207bfd",
    "name": "Maserati Levante",
    "model": "Q4 GranLusso",
    "category": "Executive",
    "pricePerDay": "RM 1,900",
    "imageUrl": "https://images.unsplash.com/photo-1614266627686-30235cb58db1?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1614266627686-30235cb58db1?q=80&w=1000"
    ],
    "engine": "3.0L V6 Twin-Turbo",
    "zeroToSixty": "5.2s",
    "topSpeed": "264 km/h",
    "seats": 5,
    "features": [
      "Zegna Silk Interior",
      "Q4 AWD",
      "Skyhook Suspension",
      "Maserati Connect"
    ],
    "description": {
      "en": "The Maserati of SUVs. Distinctive Italian style with a roar that stirs the soul.",
      "ar": "مازيراتي سيارات الدفع الرباعي. أسلوب إيطالي مميز مع زئير يثير الروح."
    }
  },
  {
    "id": "5f5af388-fb04-49b0-8ad5-7a01633a5467",
    "name": "Porsche Cayenne",
    "model": "Platinum Edition",
    "category": "Executive",
    "pricePerDay": "RM 1,800",
    "imageUrl": "https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?q=80&w=1000"
    ],
    "engine": "3.0L V6 Turbo",
    "zeroToSixty": "5.9s",
    "topSpeed": "245 km/h",
    "seats": 5,
    "features": [
      "PDLS Lights",
      "Panoramic Roof",
      "Bose Surround",
      "Power Seats"
    ],
    "description": {
      "en": "A sports car for five. Dynamics that defy physics in an SUV package.",
      "ar": "سيارة رياضية لخمسة أشخاص. ديناميكيات تتحدى الفيزياء في حزمة سيارة دفع رباعي."
    }
  },
  {
    "id": "f70de145-f9dc-446f-98c1-b4a8d1063675",
    "name": "Range Rover Velar",
    "model": "R-Dynamic",
    "category": "Executive",
    "pricePerDay": "RM 1,400",
    "imageUrl": "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000"
    ],
    "engine": "2.0L Turbo",
    "zeroToSixty": "7.1s",
    "topSpeed": "217 km/h",
    "seats": 5,
    "features": [
      "Flush Door Handles",
      "Touch Pro Duo",
      "Meridian Sound",
      "Matrix LED"
    ],
    "description": {
      "en": "Avant-garde Range Rover. Minimalist design with maximum impact.",
      "ar": "رينج رور الطليعية. تصميم بسيط مع أقصى قدر من التأثير."
    }
  },
  {
    "id": "d75d7a20-58ee-4d3f-9be4-2e284cf0492c",
    "name": "Range Rover Vogue",
    "model": "Autobiography",
    "category": "Executive",
    "pricePerDay": "RM 2,500",
    "imageUrl": "https://images.unsplash.com/photo-1600277862768-e3621df6b674?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1600277862768-e3621df6b674?q=80&w=1000"
    ],
    "engine": "3.0L Inline-6 MHEV",
    "zeroToSixty": "6.3s",
    "topSpeed": "225 km/h",
    "seats": 5,
    "features": [
      "Pixel LED Lights",
      "Executive Class Rear Seating",
      "Terrain Response 2",
      "Head-up Display"
    ],
    "description": {
      "en": "Peerless refinement. The original luxury SUV, elevated to new heights.",
      "ar": "رقي منقطع النظير. سيارة الدفع الرباعي الفاخرة الأصلية، ترتفع إلى آفاق جديدة."
    }
  },
  {
    "id": "5904db98-d1ca-43db-a770-86e2a4b8c142",
    "name": "Toyota Land Cruiser",
    "model": "LC200 V8",
    "category": "Executive",
    "pricePerDay": "RM 1,100",
    "imageUrl": "https://images.unsplash.com/photo-1594539169624-9b81b5853258?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1594539169624-9b81b5853258?q=80&w=1000"
    ],
    "engine": "4.5L V8 Diesel",
    "zeroToSixty": "8.9s",
    "topSpeed": "210 km/h",
    "seats": 7,
    "features": [
      "4WD",
      "Cool Box",
      "Crawl Control",
      "JBL Audio"
    ],
    "description": {
      "en": "The King of the Road. Unstoppable capability with Lexus-like comfort.",
      "ar": "ملك الطريق. قدرة لا يمكن إيقافها مع راحة تشبه سيارات لكزس."
    }
  },
  {
    "id": "66271905-cec0-4367-bb14-9872459254e6",
    "name": "Toyota Alphard",
    "model": "SC 2020",
    "category": "Executive",
    "pricePerDay": "RM 1,000",
    "imageUrl": "https://images.unsplash.com/photo-1621993202323-c43ad987102c?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1621993202323-c43ad987102c?q=80&w=1000"
    ],
    "engine": "3.5L V6",
    "zeroToSixty": "8.3s",
    "topSpeed": "180 km/h",
    "seats": 7,
    "features": [
      "Pilot Seats",
      "Power Doors",
      "JBL Sound",
      "Rear Entertainment"
    ],
    "description": {
      "en": "The preferred choice for VIP transport. Spacious, smooth, and silent.",
      "ar": "الخيار المفضل لنقل كبار الشخصيات. واسعة وسلسة وصامتة."
    }
  },
  {
    "id": "61b55f58-1a32-4f62-b862-7666c4222771",
    "name": "Toyota Vellfire",
    "model": "ZG Edition",
    "category": "Executive",
    "pricePerDay": "RM 950",
    "imageUrl": "https://images.unsplash.com/photo-1636109315518-a3794b150c77?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1636109315518-a3794b150c77?q=80&w=1000"
    ],
    "engine": "2.5L 4-Cyl",
    "zeroToSixty": "11.0s",
    "topSpeed": "170 km/h",
    "seats": 7,
    "features": [
      "Captain Seats",
      "Ambient Lighting",
      "Power Tailgate",
      "Nanoe Climate"
    ],
    "description": {
      "en": "Bold and daring. A spacious MPV with a distinctively aggressive road presence.",
      "ar": "جريئة ومقدامة. سيارة متعددة الأغراض واسعة بحضور عدواني مميز على الطريق."
    }
  },
  {
    "id": "b2561653-d599-40e9-9845-e958f7f14714",
    "name": "Audi A5",
    "model": "Sportback S Line",
    "category": "Elegance",
    "pricePerDay": "RM 800",
    "imageUrl": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000"
    ],
    "engine": "2.0L Turbo",
    "zeroToSixty": "7.2s",
    "topSpeed": "240 km/h",
    "seats": 5,
    "features": [
      "Virtual Cockpit",
      "Matrix LED",
      "Quattro",
      "Power Tailgate"
    ],
    "description": {
      "en": "A masterpiece of design. The functionality of a sedan with the lines of a coupe.",
      "ar": "تحفة في التصميم. وظائف سيارة السيدان بخطوط الكوبيه."
    }
  },
  {
    "id": "8d70eb87-fa61-4079-a665-b5451cf73477",
    "name": "BMW 3 Series",
    "model": "330i M Sport",
    "category": "Elegance",
    "pricePerDay": "RM 750",
    "imageUrl": "https://images.unsplash.com/photo-1554559384-25e227e704e7?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1554559384-25e227e704e7?q=80&w=1000"
    ],
    "engine": "2.0L Turbo",
    "zeroToSixty": "5.8s",
    "topSpeed": "250 km/h",
    "seats": 5,
    "features": [
      "M Sport Suspension",
      "Live Cockpit",
      "Voice Control",
      "Reversing Assistant"
    ],
    "description": {
      "en": "The definitive sports sedan. Perfect balance of comfort and driving dynamics.",
      "ar": "السيدان الرياضية النهائية. توازن مثالي بين الراحة وديناميكيات القيادة."
    }
  },
  {
    "id": "f3741423-fd1b-49dd-a8f5-e06bc7cc5e4e",
    "name": "BMW 5 Series",
    "model": "530e M Sport (G30)",
    "category": "Elegance",
    "pricePerDay": "RM 850",
    "imageUrl": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000"
    ],
    "engine": "2.0L PHEV",
    "zeroToSixty": "5.9s",
    "topSpeed": "235 km/h",
    "seats": 5,
    "features": [
      "eDrive Zones",
      "Adaptive Suspension",
      "Harman Kardon",
      "Head-up Display"
    ],
    "description": {
      "en": "Business athlete. Electrified efficiency ensures a quiet, powerful arrival.",
      "ar": "رياضي الأعمال. تضمن الكفاءة الكهربائية وصولاً هادئاً وقوياً."
    }
  },
  {
    "id": "59691518-9ae9-4569-bca5-2eb8f6e1383a",
    "name": "Honda Civic",
    "model": "1.5 Turbo",
    "category": "Elegance",
    "pricePerDay": "RM 450",
    "imageUrl": "https://images.unsplash.com/photo-1605816912304-c373a69527f3?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1605816912304-c373a69527f3?q=80&w=1000"
    ],
    "engine": "1.5L VTEC Turbo",
    "zeroToSixty": "8.2s",
    "topSpeed": "200 km/h",
    "seats": 5,
    "features": [
      "Honda Sensing",
      "CarPlay",
      "Remote Start",
      "Turbocharged"
    ],
    "description": {
      "en": "Class-leading sophistication. Reliable, spacious, and surprisingly fun to drive.",
      "ar": "رقي رائد في فئته. موثوقة، واسعة، وممتعة في القيادة بشكل مدهش."
    }
  },
  {
    "id": "b40abcf7-2b77-4ac8-ae15-a36aae9043bd",
    "name": "Honda HR-V",
    "model": "1.5 Turbo V",
    "category": "Elegance",
    "pricePerDay": "RM 400",
    "imageUrl": "https://images.unsplash.com/photo-1594975549887-1607f2a74c43?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1594975549887-1607f2a74c43?q=80&w=1000"
    ],
    "engine": "1.5L Turbo",
    "zeroToSixty": "8.8s",
    "topSpeed": "200 km/h",
    "seats": 5,
    "features": [
      "Magic Seats",
      "Honda LaneWatch",
      "LED Headlights",
      "Keyless Entry"
    ],
    "description": {
      "en": "Versatile and stylish. The perfect compact SUV for city exploration.",
      "ar": "متعددة الاستخدامات وأنيقة. سيارة الدفع الرباعي المدمجة المثالية لاستكشاف المدينة."
    }
  },
  {
    "id": "8e7aeaf1-e881-4978-ad76-15749dfcc544",
    "name": "Mercedes-Benz C-Class",
    "model": "C200 Avantgarde",
    "category": "Elegance",
    "pricePerDay": "RM 700",
    "imageUrl": "https://images.unsplash.com/photo-1554559384-25e227e704e7?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1554559384-25e227e704e7?q=80&w=1000"
    ],
    "engine": "1.5L Mild Hybrid",
    "zeroToSixty": "7.3s",
    "topSpeed": "246 km/h",
    "seats": 5,
    "features": [
      "EQ Boost",
      "Artico Leather",
      "12.3\" Display",
      "Blind Spot Assist"
    ],
    "description": {
      "en": "Baby S-Class. Comfort and tech derived from the flagship sedan.",
      "ar": "إس كلاس الصغيرة. الراحة والتكنولوجيا المستمدة من السيدان الرائدة."
    }
  },
  {
    "id": "22e05c8b-6a78-49ed-abc9-b351db8e7dc6",
    "name": "Mercedes-Benz C-Class",
    "model": "C300 AMG Line",
    "category": "Elegance",
    "pricePerDay": "RM 850",
    "imageUrl": "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1000"
    ],
    "engine": "2.0L Turbo",
    "zeroToSixty": "6.0s",
    "topSpeed": "250 km/h",
    "seats": 5,
    "features": [
      "AMG Styling",
      "Night Package",
      "Panoramic Roof",
      "Burmester Audio"
    ],
    "description": {
      "en": "Sporty elegance. More power and aggressive looks for the spirited driver.",
      "ar": "أناقة رياضية. المزيد من القوة والمظهر العدواني للسائق المفعم بالحيوية."
    }
  },
  {
    "id": "61da555e-45bc-43e1-9ed1-b471d384ddfd",
    "name": "Mercedes-Benz CLA",
    "model": "CLA 250 4MATIC",
    "category": "Elegance",
    "pricePerDay": "RM 800",
    "imageUrl": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000"
    ],
    "engine": "2.0L Turbo",
    "zeroToSixty": "6.3s",
    "topSpeed": "240 km/h",
    "seats": 5,
    "features": [
      "Coupe Design",
      "Frameless Doors",
      "MBUX",
      "Active Brake Assist"
    ],
    "description": {
      "en": "Style icon. A trendsetter with a design that turns heads everywhere.",
      "ar": "أيقونة الأسلوب. رائدة في الموضة بتصميم يلفت الأنظار في كل مكان."
    }
  },
  {
    "id": "fe582098-53de-4773-9f65-6ecc7a86596a",
    "name": "Mercedes-Benz GLC",
    "model": "GLC 300 Coupe",
    "category": "Elegance",
    "pricePerDay": "RM 950",
    "imageUrl": "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=1000"
    ],
    "engine": "2.0L Turbo",
    "zeroToSixty": "6.3s",
    "topSpeed": "240 km/h",
    "seats": 5,
    "features": [
      "Coupe SUV Styling",
      "AMG Line",
      "360 Camera",
      "Multibeam LED"
    ],
    "description": {
      "en": "The best of both worlds. SUV capability with sport coupe aesthetics.",
      "ar": "أفضل ما في العالمين. قدرة سيارات الدفع الرباعي مع جماليات الكوبيه الرياضية."
    }
  },
  {
    "id": "8876a86a-5241-47e9-9d20-2ea3c1c228b2",
    "name": "Mini Cooper",
    "model": "S Countryman",
    "category": "Elegance",
    "pricePerDay": "RM 700",
    "imageUrl": "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000"
    ],
    "engine": "2.0L Turbo",
    "zeroToSixty": "7.5s",
    "topSpeed": "225 km/h",
    "seats": 5,
    "features": [
      "Iconic Design",
      "Go-Kart Feeling",
      "Union Jack Lights",
      "Spacious Boot"
    ],
    "description": {
      "en": "Big personality. A crossover that is fun, practical, and distinctively Mini.",
      "ar": "شخصية كبيرة. كروس أوفر ممتعة وعملية وميني بشكل متميز."
    }
  },
  {
    "id": "5c1b4589-7c43-4023-8455-3b3850239bd1",
    "name": "Toyota Camry",
    "model": "2.5V",
    "category": "Elegance",
    "pricePerDay": "RM 500",
    "imageUrl": "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000"
    ],
    "engine": "2.5L Dynamic Force",
    "zeroToSixty": "9.2s",
    "topSpeed": "210 km/h",
    "seats": 5,
    "features": [
      "Toyota Safety Sense",
      "Rear Reclining Seats",
      "JBL Audio",
      "Wireless Charging"
    ],
    "description": {
      "en": "The definitive executive sedan. Smooth, reliable, and incredibly comfortable.",
      "ar": "السيدان التنفيذية النهائية. سلسة وموثوقة ومريحة بشكل لا يصدق."
    }
  },
  {
    "id": "0646b33e-f6ce-487a-b16a-75c6b3e936fe",
    "name": "Toyota Fortuner",
    "model": "2.8 VRZ",
    "category": "Elegance",
    "pricePerDay": "RM 600",
    "imageUrl": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000"
    ],
    "engine": "2.8L Turbodiesel",
    "zeroToSixty": "11s",
    "topSpeed": "180 km/h",
    "seats": 7,
    "features": [
      "Active Traction Control",
      "Power Tailgate",
      "Toyota Safety Sense",
      "4x4 System"
    ],
    "description": {
      "en": "Rugged yet refined. Built to take you anywhere the road leads (or ends).",
      "ar": "وعرة ولكن راقية. بنيت لتأخذك إلى أي مكان يقودك إليه الطريق (أو ينتهي)."
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Fayed",
    role: "Business Traveler",
    content: {
      en: "The G63 was in pristine condition. Delivery to my hotel was punctual. VELO defines professionalism.",
      ar: "كانت سيارة جي 63 في حالة ممتازة. كان التسليم إلى فندقي في الموعد المحدد. فيلو تعرف معنى الاحتراف."
    },
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Wedding Planner",
    content: {
      en: "I booked the Rolls Royce for a client's wedding. It was the highlight of their day. Thank you!",
      ar: "حجزت رولز رويس لحفل زفاف عميل. كانت أبرز ما في يومهم. شكراً لكم!"
    },
    rating: 5
  }
];

export const OFFERS: Offer[] = [
  {
    id: 1,
    title: { en: "Wedding Season Special", ar: "عرض موسم الزفاف" },
    description: { en: "Book any Majestic car for 2 days, get the 3rd day 50% off.", ar: "احجز أي سيارة مهيبة لمدة يومين واحصل على اليوم الثالث بخصم 50٪." },
    discount: "50% OFF",
    validUntil: "2024-12-31",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: { en: "Corporate Fleet Access", ar: "دخول أسطول الشركات" },
    description: { en: "Weekly rates for Executive cars designed for business leaders.", ar: "أسعار أسبوعية للسيارات التنفيذية المصممة لقادة الأعمال." },
    discount: "VIP RATES",
    validUntil: "2024-11-30",
    imageUrl: "https://images.unsplash.com/photo-1553440683-1b9dc52962e5?q=80&w=1000&auto=format&fit=crop"
  }
];
