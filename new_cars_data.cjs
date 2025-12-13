const generateId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const cars = [
    // --- MAJESTIC (Ultra-Luxury) ---
    {
        id: generateId(),
        name: 'Bentley Bentayga',
        model: 'V8 First Edition',
        category: 'Majestic',
        pricePerDay: 'RM 5,500',
        imageUrl: 'https://images.unsplash.com/photo-1621251912520-2c7da87612f0?q=80&w=1000',
        gallery: [
            'https://images.unsplash.com/photo-1621251912520-2c7da87612f0?q=80&w=1000',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000'
        ],
        engine: '4.0L V8 Twin-Turbo',
        zeroToSixty: '4.4s',
        topSpeed: '290 km/h',
        seats: 5,
        features: ['Naim Audio', 'Massage Seats', 'Night Vision', 'All-Terrain Spec'],
        description: {
            en: "The definition of luxury SUV. Unmatched power combined with exquisite craftsmanship.",
            ar: "تعريف سيارات الدفع الرباعي الفاخرة. قوة لا تضاهى تقترن بحرفية رائعة."
        }
    },
    {
        id: generateId(),
        name: 'Rolls-Royce Cullinan',
        model: 'Black Badge',
        category: 'Majestic',
        pricePerDay: 'RM 7,500',
        imageUrl: 'https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=1000'],
        engine: '6.75L V12',
        zeroToSixty: '4.9s',
        topSpeed: '250 km/h',
        seats: 4,
        features: ['Viewing Suite', 'Shooting Star Headliner', 'Immersive Seating', 'Champagne Cooler'],
        description: {
            en: "Effortless everywhere. The Rolls-Royce Cullinan is the most capable Rolls-Royce ever created.",
            ar: "مجهود في كل مكان. رولز رويس كولينان هي أكثر سيارات رولز رويس قدرة على الإطلاق."
        }
    },
    {
        id: generateId(),
        name: 'Mercedes-Maybach S500',
        model: 'S500 X Maybach Kit',
        category: 'Majestic',
        pricePerDay: 'RM 3,800',
        imageUrl: 'https://images.unsplash.com/photo-1609520505218-7421da323823?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1609520505218-7421da323823?q=80&w=1000'],
        engine: '3.0L Inline-6 Turbo',
        zeroToSixty: '5.1s',
        topSpeed: '250 km/h',
        seats: 4,
        features: ['First Class Rear Cabin', 'Burmester High-End 4D', 'Executive Seats', 'Champagne Flutes'],
        description: {
            en: "Exclusive luxury with the appearance of the legendary Maybach.",
            ar: "فخامة حصرية بمظهر مايباخ الأسطوري."
        }
    },

    // --- ADRENALINE (Supercars & Sports) ---
    {
        id: generateId(),
        name: 'Audi R8',
        model: 'V10 Performance',
        category: 'Adrenaline',
        pricePerDay: 'RM 4,500',
        imageUrl: 'https://images.unsplash.com/photo-1603584173870-7b299f589836?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1603584173870-7b299f589836?q=80&w=1000'],
        engine: '5.2L V10',
        zeroToSixty: '3.1s',
        topSpeed: '331 km/h',
        seats: 2,
        features: ['Quattro AWD', 'Virtual Cockpit', 'Carbon Exterior Pack', 'Sport Exhaust'],
        description: {
            en: "Born on the track, built for the road. The roaring V10 is a dying breed of pure performance.",
            ar: "ولدت على المضمار، وبنيت للطريق. محرك V10 الهادر هو سلالة نادرة من الأداء النقي."
        }
    },
    {
        id: generateId(),
        name: 'BMW i8',
        model: 'Roadster',
        category: 'Adrenaline',
        pricePerDay: 'RM 2,800',
        imageUrl: 'https://images.unsplash.com/photo-1594975549887-1607f2a74c43?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1594975549887-1607f2a74c43?q=80&w=1000'],
        engine: '1.5L Turbo Hybrid',
        zeroToSixty: '4.4s',
        topSpeed: '250 km/h',
        seats: 2,
        features: ['Butterfly Doors', 'Plug-in Hybrid', 'Head-up Display', 'Laserlight'],
        description: {
            en: "The future of the sports car. Stunning design meets sustainable performance.",
            ar: "مستقبل السيارات الرياضية. تصميم مذهل يلتقي بالأداء المستدام."
        }
    },
    {
        id: generateId(),
        name: 'BMW M5',
        model: 'Competition',
        category: 'Adrenaline',
        pricePerDay: 'RM 3,500',
        imageUrl: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=1000'],
        engine: '4.4L V8 Twin-Turbo',
        zeroToSixty: '3.3s',
        topSpeed: '305 km/h',
        seats: 5,
        features: ['M xDrive', 'M Sport Exhaust', 'Carbon Roof', 'Drift Mode'],
        description: {
            en: "The ultimate super sedan. Executive comfort creates a disguise for supercar performance.",
            ar: "السيدان الخارقة النهائية. الراحة التنفيذية تخلق تمويهاً لأداء السيارات الخارقة."
        }
    },
    {
        id: generateId(),
        name: 'Ford Mustang',
        model: 'GT 5.0 V8',
        category: 'Adrenaline',
        pricePerDay: 'RM 1,200',
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000'],
        engine: '5.0L V8 Coyote',
        zeroToSixty: '4.3s',
        topSpeed: '250 km/h',
        seats: 4,
        features: ['Active Valve Exhaust', 'Brembo Brakes', 'Line Lock', 'Track Apps'],
        description: {
            en: "American muscle icon. The rumble of the V8 is unmistakable and addictive.",
            ar: "أيقونة العضلات الأمريكية. هدير محرك V8 لا لبس فيه ويسبب الإدمان."
        }
    },
    {
        id: generateId(),
        name: 'Ford Mustang',
        model: '2.3 EcoBoost Convertible',
        category: 'Adrenaline',
        pricePerDay: 'RM 900',
        imageUrl: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=1000'],
        engine: '2.3L EcoBoost',
        zeroToSixty: '5.8s',
        topSpeed: '233 km/h',
        seats: 4,
        features: ['Convertible Top', 'Apple CarPlay', 'Ventilated Seats', 'Turbocharged'],
        description: {
            en: "Open-air freedom with efficiency and style. Perfect for coastal cruising.",
            ar: "حرية في الهواء الطلق مع الكفاءة والأناقة. مثالية للرحلات الساحلية."
        }
    },
    {
        id: generateId(),
        name: 'Lamborghini Urus',
        model: 'V8 Biturbo',
        category: 'Adrenaline',
        pricePerDay: 'RM 6,000',
        imageUrl: 'https://images.unsplash.com/photo-1621606969833-2b4a9b9f5285?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1621606969833-2b4a9b9f5285?q=80&w=1000'],
        engine: '4.0L V8 Twin-Turbo',
        zeroToSixty: '3.6s',
        topSpeed: '305 km/h',
        seats: 5,
        features: ['ANIMA Selector', 'Carbon Ceramic Brakes', 'Bang & Olufsen 3D', 'Air Suspension'],
        description: {
            en: "The world's first Super SUV. The soul of a super sports car with the functionality of an SUV.",
            ar: "أول سيارة دفع رباعي فائقة في العالم. روح سيارة رياضية خارقة مع وظائف سيارة دفع رباعي."
        }
    },
    {
        id: generateId(),
        name: 'McLaren 720S',
        model: 'Coupe',
        category: 'Adrenaline',
        pricePerDay: 'RM 6,200',
        imageUrl: 'https://images.unsplash.com/photo-1621685747442-99c5c96c4297?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1621685747442-99c5c96c4297?q=80&w=1000'],
        engine: '4.0L V8 Twin-Turbo',
        zeroToSixty: '2.9s',
        topSpeed: '341 km/h',
        seats: 2,
        features: ['Dihedral Doors', 'Proactive Chassis Control II', 'Carbon Fibre Monocage', 'Drift Control'],
        description: {
            en: "Lighter, stronger, faster. A supercar that redefines expectations.",
            ar: "أخف، أقوى، أسرع. سيارة خارقة تعيد تعريف التوقعات."
        }
    },
    {
        id: generateId(),
        name: 'Mercedes-AMG GT',
        model: 'S Coupe',
        category: 'Adrenaline',
        pricePerDay: 'RM 3,000',
        imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000'],
        engine: '4.0L V8 Biturbo',
        zeroToSixty: '3.8s',
        topSpeed: '310 km/h',
        seats: 2,
        features: ['Race Mode', 'AMG Ride Control', 'Performance Exhaust', 'Burmester Surround'],
        description: {
            en: "A pure sports car. Handcrafted by racers for the road.",
            ar: "سيارة رياضية نقية. صنعت يدوياً من قبل المتسابقين للطريق."
        }
    },
    {
        id: generateId(),
        name: 'Mercedes-AMG CLA 45',
        model: 'S 4MATIC+',
        category: 'Adrenaline',
        pricePerDay: 'RM 1,500',
        imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000'],
        engine: '2.0L Turbo',
        zeroToSixty: '4.0s',
        topSpeed: '270 km/h',
        seats: 5,
        features: ['Drift Mode', 'AMG Bucket Seats', 'MBUX AI', 'Aerodynamic Pack'],
        description: {
            en: "The world's most powerful compact performance car. Agility meets brute force.",
            ar: "أقوى سيارة مدمجة عالية الأداء في العالم. الرشاقة تلتقي بالقوة الغاشمة."
        }
    },
    {
        id: generateId(),
        name: 'Nissan GT-R',
        model: 'R35 Premium',
        category: 'Adrenaline',
        pricePerDay: 'RM 2,500',
        imageUrl: 'https://images.unsplash.com/photo-1601614008272-358c5a246835?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1601614008272-358c5a246835?q=80&w=1000'],
        engine: '3.8L V6 Twin-Turbo',
        zeroToSixty: '2.7s',
        topSpeed: '315 km/h',
        seats: 4,
        features: ['ATTESA E-TS AWD', 'Bose Audio', 'Titanium Exhaust', 'Recaro Seats'],
        description: {
            en: "Godzilla. A technological marvel that challenges supercars costing twice as much.",
            ar: "غودزيلا. أعجوبة تكنولوجية تتحدى السيارات الخارقة التي تكلف ضعف ثمنها."
        }
    },
    {
        id: generateId(),
        name: 'Porsche 718',
        model: 'Boxster/Cayman',
        category: 'Adrenaline',
        pricePerDay: 'RM 1,600',
        imageUrl: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000'],
        engine: '2.0L Turbo',
        zeroToSixty: '4.9s',
        topSpeed: '275 km/h',
        seats: 2,
        features: ['Mid-Engine Balance', 'Sport Chrono', 'PDK', 'Convertible Top (Boxster)'],
        description: {
            en: "Mid-engine perfection. Agile, responsive, and incredibly fun to drive.",
            ar: "كمال المحرك الأوسط. رشيقة وسريعة الاستجابة وممتعة للغاية في القيادة."
        }
    },
    {
        id: generateId(),
        name: 'Porsche 911',
        model: 'Carrera 992',
        category: 'Adrenaline',
        pricePerDay: 'RM 3,000',
        imageUrl: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000'],
        engine: '3.0L Twin-Turbo Flat-6',
        zeroToSixty: '4.0s',
        topSpeed: '293 km/h',
        seats: 4,
        features: ['Wet Mode', 'Porsche Connect', '10.9" Touchscreen', 'Advanced Cockpit'],
        description: {
            en: "Timeless design, contemporary interpretation. The 992 generation sets the standard.",
            ar: "تصميم خالد، تفسير معاصر. جيل 992 يضع المعايير."
        }
    },
    {
        id: generateId(),
        name: 'Honda Civic',
        model: 'Type R FL5',
        category: 'Adrenaline',
        pricePerDay: 'RM 900',
        imageUrl: 'https://images.unsplash.com/photo-1605816912304-c373a69527f3?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1605816912304-c373a69527f3?q=80&w=1000'],
        engine: '2.0L VTEC Turbo',
        zeroToSixty: '5.4s',
        topSpeed: '275 km/h',
        seats: 4,
        features: ['Manual Transmission', 'Brembo Brakes', 'Type R Aero', 'Data Logger'],
        description: {
            en: "The ultimate front-wheel drive performance car. Precise, engaging, and fast.",
            ar: "سيارة الأداء ذات الدفع الأمامي النهائية. دقيقة، جذابة، وسريعة."
        }
    },

    // --- EXECUTIVE (SUVs & Saloons) ---
    {
        id: generateId(),
        name: 'BMW 7 Series',
        model: '740Le xDrive',
        category: 'Executive',
        pricePerDay: 'RM 1,800',
        imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=1000'],
        engine: '3.0L Inline-6 Plug-in',
        zeroToSixty: '5.1s',
        topSpeed: '250 km/h',
        seats: 5,
        features: ['Executive Lounge Seating', 'Bowers & Wilkins', 'Sky Lounge', 'Gesture Control'],
        description: {
            en: "Luxury, electrified. A spacious sanctuary that combines efficiency with pure class.",
            ar: "الفخامة، الكهرباء. ملاذ واسع يجمع بين الكفاءة والرقي الخالص."
        }
    },
    {
        id: generateId(),
        name: 'BMW X7',
        model: 'xDrive40i',
        category: 'Executive',
        pricePerDay: 'RM 2,200',
        imageUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1000'],
        engine: '3.0L Inline-6 Turbo',
        zeroToSixty: '5.8s',
        topSpeed: '245 km/h',
        seats: 7,
        features: ['Third Row Seating', 'Air Suspension', 'Live Cockpit Pro', 'Panoramic Roof'],
        description: {
            en: "The largest BMW ever built. Commanding presence with room for seven in absolute comfort.",
            ar: "أكبر سيارة بي إم دبليو تم بناؤها على الإطلاق. حضور مسيطر مع مساحة لسبعة أشخاص براحة مطلقة."
        }
    },
    {
        id: generateId(),
        name: 'Maserati Levante',
        model: 'Q4 GranLusso',
        category: 'Executive',
        pricePerDay: 'RM 1,900',
        imageUrl: 'https://images.unsplash.com/photo-1614266627686-30235cb58db1?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1614266627686-30235cb58db1?q=80&w=1000'],
        engine: '3.0L V6 Twin-Turbo',
        zeroToSixty: '5.2s',
        topSpeed: '264 km/h',
        seats: 5,
        features: ['Zegna Silk Interior', 'Q4 AWD', 'Skyhook Suspension', 'Maserati Connect'],
        description: {
            en: "The Maserati of SUVs. Distinctive Italian style with a roar that stirs the soul.",
            ar: "مازيراتي سيارات الدفع الرباعي. أسلوب إيطالي مميز مع زئير يثير الروح."
        }
    },
    {
        id: generateId(),
        name: 'Porsche Cayenne',
        model: 'Platinum Edition',
        category: 'Executive',
        pricePerDay: 'RM 1,800',
        imageUrl: 'https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?q=80&w=1000'],
        engine: '3.0L V6 Turbo',
        zeroToSixty: '5.9s',
        topSpeed: '245 km/h',
        seats: 5,
        features: ['PDLS Lights', 'Panoramic Roof', 'Bose Surround', 'Power Seats'],
        description: {
            en: "A sports car for five. Dynamics that defy physics in an SUV package.",
            ar: "سيارة رياضية لخمسة أشخاص. ديناميكيات تتحدى الفيزياء في حزمة سيارة دفع رباعي."
        }
    },
    {
        id: generateId(),
        name: 'Range Rover Velar',
        model: 'R-Dynamic',
        category: 'Executive',
        pricePerDay: 'RM 1,400',
        imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000'],
        engine: '2.0L Turbo',
        zeroToSixty: '7.1s',
        topSpeed: '217 km/h',
        seats: 5,
        features: ['Flush Door Handles', 'Touch Pro Duo', 'Meridian Sound', 'Matrix LED'],
        description: {
            en: "Avant-garde Range Rover. Minimalist design with maximum impact.",
            ar: "رينج رور الطليعية. تصميم بسيط مع أقصى قدر من التأثير."
        }
    },
    {
        id: generateId(),
        name: 'Range Rover Vogue',
        model: 'Autobiography',
        category: 'Executive',
        pricePerDay: 'RM 2,500',
        imageUrl: 'https://images.unsplash.com/photo-1600277862768-e3621df6b674?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1600277862768-e3621df6b674?q=80&w=1000'],
        engine: '3.0L Inline-6 MHEV',
        zeroToSixty: '6.3s',
        topSpeed: '225 km/h',
        seats: 5,
        features: ['Pixel LED Lights', 'Executive Class Rear Seating', 'Terrain Response 2', 'Head-up Display'],
        description: {
            en: "Peerless refinement. The original luxury SUV, elevated to new heights.",
            ar: "رقي منقطع النظير. سيارة الدفع الرباعي الفاخرة الأصلية، ترتفع إلى آفاق جديدة."
        }
    },
    {
        id: generateId(),
        name: 'Toyota Land Cruiser',
        model: 'LC200 V8',
        category: 'Executive',
        pricePerDay: 'RM 1,100',
        imageUrl: 'https://images.unsplash.com/photo-1594539169624-9b81b5853258?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1594539169624-9b81b5853258?q=80&w=1000'],
        engine: '4.5L V8 Diesel',
        zeroToSixty: '8.9s',
        topSpeed: '210 km/h',
        seats: 7,
        features: ['4WD', 'Cool Box', 'Crawl Control', 'JBL Audio'],
        description: {
            en: "The King of the Road. Unstoppable capability with Lexus-like comfort.",
            ar: "ملك الطريق. قدرة لا يمكن إيقافها مع راحة تشبه سيارات لكزس."
        }
    },
    {
        id: generateId(),
        name: 'Toyota Alphard',
        model: 'SC 2020',
        category: 'Executive',
        pricePerDay: 'RM 1,000',
        imageUrl: 'https://images.unsplash.com/photo-1621993202323-c43ad987102c?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1621993202323-c43ad987102c?q=80&w=1000'],
        engine: '3.5L V6',
        zeroToSixty: '8.3s',
        topSpeed: '180 km/h',
        seats: 7,
        features: ['Pilot Seats', 'Power Doors', 'JBL Sound', 'Rear Entertainment'],
        description: {
            en: "The preferred choice for VIP transport. Spacious, smooth, and silent.",
            ar: "الخيار المفضل لنقل كبار الشخصيات. واسعة وسلسة وصامتة."
        }
    },
    {
        id: generateId(),
        name: 'Toyota Vellfire',
        model: 'ZG Edition',
        category: 'Executive',
        pricePerDay: 'RM 950',
        imageUrl: 'https://images.unsplash.com/photo-1636109315518-a3794b150c77?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1636109315518-a3794b150c77?q=80&w=1000'],
        engine: '2.5L 4-Cyl',
        zeroToSixty: '11.0s',
        topSpeed: '170 km/h',
        seats: 7,
        features: ['Captain Seats', 'Ambient Lighting', 'Power Tailgate', 'Nanoe Climate'],
        description: {
            en: "Bold and daring. A spacious MPV with a distinctively aggressive road presence.",
            ar: "جريئة ومقدامة. سيارة متعددة الأغراض واسعة بحضور عدواني مميز على الطريق."
        }
    },

    // --- ELEGANCE (Premium Sedans & Coupes) ---
    {
        id: generateId(),
        name: 'Audi A5',
        model: 'Sportback S Line',
        category: 'Elegance',
        pricePerDay: 'RM 800',
        imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000'],
        engine: '2.0L Turbo',
        zeroToSixty: '7.2s',
        topSpeed: '240 km/h',
        seats: 5,
        features: ['Virtual Cockpit', 'Matrix LED', 'Quattro', 'Power Tailgate'],
        description: {
            en: "A masterpiece of design. The functionality of a sedan with the lines of a coupe.",
            ar: "تحفة في التصميم. وظائف سيارة السيدان بخطوط الكوبيه."
        }
    },
    {
        id: generateId(),
        name: 'BMW 3 Series',
        model: '330i M Sport',
        category: 'Elegance',
        pricePerDay: 'RM 750',
        imageUrl: 'https://images.unsplash.com/photo-1554559384-25e227e704e7?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1554559384-25e227e704e7?q=80&w=1000'],
        engine: '2.0L Turbo',
        zeroToSixty: '5.8s',
        topSpeed: '250 km/h',
        seats: 5,
        features: ['M Sport Suspension', 'Live Cockpit', 'Voice Control', 'Reversing Assistant'],
        description: {
            en: "The definitive sports sedan. Perfect balance of comfort and driving dynamics.",
            ar: "السيدان الرياضية النهائية. توازن مثالي بين الراحة وديناميكيات القيادة."
        }
    },
    {
        id: generateId(),
        name: 'BMW 5 Series',
        model: '530e M Sport (G30)',
        category: 'Elegance',
        pricePerDay: 'RM 850',
        imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000'],
        engine: '2.0L PHEV',
        zeroToSixty: '5.9s',
        topSpeed: '235 km/h',
        seats: 5,
        features: ['eDrive Zones', 'Adaptive Suspension', 'Harman Kardon', 'Head-up Display'],
        description: {
            en: "Business athlete. Electrified efficiency ensures a quiet, powerful arrival.",
            ar: "رياضي الأعمال. تضمن الكفاءة الكهربائية وصولاً هادئاً وقوياً."
        }
    },
    {
        id: generateId(),
        name: 'Honda Civic',
        model: '1.5 Turbo',
        category: 'Elegance',
        pricePerDay: 'RM 450',
        imageUrl: 'https://images.unsplash.com/photo-1605816912304-c373a69527f3?q=80&w=1000',
        gallery: ['https://images.unsplash.com/photo-1605816912304-c373a69527f3?q=80&w=1000'],
        engine: '1.5L VTEC Turbo',
        zeroToSixty: '8.2s',
        topSpeed: '200 km/h',
        seats: 5,
        features: ['Honda Sensing', 'CarPlay', 'Remote Start', 'Turbocharged'],
        description: {
            en: "Class-leading sophistication. Reliable, spacious, and surprisingly fun to drive.",
            ar: "رقي رائد في فئته. موثوقة، واسعة، وممتعة في القيادة بشكل مدهش."
        }
    },
    {
        id: generateId(),
        name: 'Honda HR-V',
        model: '1.5 Turbo V',
        category: 'Elegance',
        pricePerDay: 'RM 400',
        imageUrl: 'https://images.unsplash.com/photo-1594975549887-1607f2a74c43?q=80&w=1000', // Placeholder
        gallery: ['https://images.unsplash.com/photo-1594975549887-1607f2a74c43?q=80&w=1000'],
        engine: '1.5L Turbo',
        zeroToSixty: '8.8s',
        topSpeed: '200 km/h',
        seats: 5,
        features: ['Magic Seats', 'Honda LaneWatch', 'LED Headlights', 'Keyless Entry'],
        description: {
            en: "Versatile and stylish. The perfect compact SUV for city exploration.",
            ar: "متعددة الاستخدامات وأنيقة. سيارة الدفع الرباعي المدمجة المثالية لاستكشاف المدينة."
        }
    },
    {
        id: generateId(),
        name: 'Mercedes-Benz C-Class',
        model: 'C200 Avantgarde',
        category: 'Elegance',
        pricePerDay: 'RM 700',
        imageUrl: 'https://images.unsplash.com/photo-1554559384-25e227e704e7?q=80&w=1000', // Placeholder
        gallery: ['https://images.unsplash.com/photo-1554559384-25e227e704e7?q=80&w=1000'],
        engine: '1.5L Mild Hybrid',
        zeroToSixty: '7.3s',
        topSpeed: '246 km/h',
        seats: 5,
        features: ['EQ Boost', 'Artico Leather', '12.3" Display', 'Blind Spot Assist'],
        description: {
            en: "Baby S-Class. Comfort and tech derived from the flagship sedan.",
            ar: "إس كلاس الصغيرة. الراحة والتكنولوجيا المستمدة من السيدان الرائدة."
        }
    },
    {
        id: generateId(),
        name: 'Mercedes-Benz C-Class',
        model: 'C300 AMG Line',
        category: 'Elegance',
        pricePerDay: 'RM 850',
        imageUrl: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1000', // Placeholder
        gallery: ['https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1000'],
        engine: '2.0L Turbo',
        zeroToSixty: '6.0s',
        topSpeed: '250 km/h',
        seats: 5,
        features: ['AMG Styling', 'Night Package', 'Panoramic Roof', 'Burmester Audio'],
        description: {
            en: "Sporty elegance. More power and aggressive looks for the spirited driver.",
            ar: "أناقة رياضية. المزيد من القوة والمظهر العدواني للسائق المفعم بالحيوية."
        }
    },
    {
        id: generateId(),
        name: 'Mercedes-Benz CLA',
        model: 'CLA 250 4MATIC',
        category: 'Elegance',
        pricePerDay: 'RM 800',
        imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000', // Placeholder
        gallery: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000'],
        engine: '2.0L Turbo',
        zeroToSixty: '6.3s',
        topSpeed: '240 km/h',
        seats: 5,
        features: ['Coupe Design', 'Frameless Doors', 'MBUX', 'Active Brake Assist'],
        description: {
            en: "Style icon. A trendsetter with a design that turns heads everywhere.",
            ar: "أيقونة الأسلوب. رائدة في الموضة بتصميم يلفت الأنظار في كل مكان."
        }
    },
    {
        id: generateId(),
        name: 'Mercedes-Benz GLC',
        model: 'GLC 300 Coupe',
        category: 'Elegance',
        pricePerDay: 'RM 950',
        imageUrl: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=1000', // Placeholder
        gallery: ['https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=1000'],
        engine: '2.0L Turbo',
        zeroToSixty: '6.3s',
        topSpeed: '240 km/h',
        seats: 5,
        features: ['Coupe SUV Styling', 'AMG Line', '360 Camera', 'Multibeam LED'],
        description: {
            en: "The best of both worlds. SUV capability with sport coupe aesthetics.",
            ar: "أفضل ما في العالمين. قدرة سيارات الدفع الرباعي مع جماليات الكوبيه الرياضية."
        }
    },
    {
        id: generateId(),
        name: 'Mini Cooper',
        model: 'S Countryman',
        category: 'Elegance',
        pricePerDay: 'RM 700',
        imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000', // Placeholder
        gallery: ['https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000'],
        engine: '2.0L Turbo',
        zeroToSixty: '7.5s',
        topSpeed: '225 km/h',
        seats: 5,
        features: ['Iconic Design', 'Go-Kart Feeling', 'Union Jack Lights', 'Spacious Boot'],
        description: {
            en: "Big personality. A crossover that is fun, practical, and distinctively Mini.",
            ar: "شخصية كبيرة. كروس أوفر ممتعة وعملية وميني بشكل متميز."
        }
    },
    {
        id: generateId(),
        name: 'Toyota Camry',
        model: '2.5V',
        category: 'Elegance',
        pricePerDay: 'RM 500',
        imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000', // Placeholder
        gallery: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000'],
        engine: '2.5L Dynamic Force',
        zeroToSixty: '9.2s',
        topSpeed: '210 km/h',
        seats: 5,
        features: ['Toyota Safety Sense', 'Rear Reclining Seats', 'JBL Audio', 'Wireless Charging'],
        description: {
            en: "The definitive executive sedan. Smooth, reliable, and incredibly comfortable.",
            ar: "السيدان التنفيذية النهائية. سلسة وموثوقة ومريحة بشكل لا يصدق."
        }
    },
    {
        id: generateId(),
        name: 'Toyota Fortuner',
        model: '2.8 VRZ',
        category: 'Elegance',
        pricePerDay: 'RM 600',
        imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000', // Placeholder
        gallery: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000'],
        engine: '2.8L Turbodiesel',
        zeroToSixty: '11s',
        topSpeed: '180 km/h',
        seats: 7,
        features: ['Active Traction Control', 'Power Tailgate', 'Toyota Safety Sense', '4x4 System'],
        description: {
            en: "Rugged yet refined. Built to take you anywhere the road leads (or ends).",
            ar: "وعرة ولكن راقية. بنيت لتأخذك إلى أي مكان يقودك إليه الطريق (أو ينتهي)."
        }
    }
];

module.exports = { cars };
