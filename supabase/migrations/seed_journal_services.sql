-- Seed Services
INSERT INTO public.services (id, title_en, title_ar, description_en, description_ar, icon_name, created_at)
VALUES 
    (
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        'Chauffeur Services',
        'خدمات السائق',
        'Professional chauffeurs for a seamless, relaxing journey.',
        'سائقون محترفون لرحلة سلسة ومريحة.',
        'UserCheck',
        NOW()
    ),
    (
        'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22',
        'Wedding Events',
        'حفلات الزفاف',
        'Make your special day unforgettable with our grand fleet.',
        'اجعل يومك الخاص لا يُنسى مع أسطولنا الكبير.',
        'Heart',
        NOW()
    ),
    (
        'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a33',
        'Airport Transfer',
        'نقل المطار',
        'Punctual, premium transfers to and from KLIA.',
        'نقل دقيق ومميز من وإلى مطار كوالالمبور.',
        'Plane',
        NOW()
    )
ON CONFLICT (id) DO UPDATE SET 
    title_en = EXCLUDED.title_en,
    title_ar = EXCLUDED.title_ar,
    description_en = EXCLUDED.description_en,
    description_ar = EXCLUDED.description_ar,
    icon_name = EXCLUDED.icon_name;

-- Seed Journal Posts
INSERT INTO public.journal_posts (slug, title_en, title_ar, content_en, content_ar, image_url, published_date, created_at)
VALUES 
    (
        'top-5-luxury-wedding-cars-malaysia',
        'Top 5 Luxury Wedding Cars in Malaysia',
        'أفضل 5 سيارات زفاف فاخرة في ماليزيا',
        'Choosing the right bridal car is essential for your big day. From Rolls-Royce to Bentley, we rank the best options for a grand entrance.
        
### 1. Rolls-Royce Ghost
The epitome of luxury.

### 2. Bentley Flying Spur
A perfect blend of performance and comfort.

### 3. Mercedes-Maybach S-Class
The ultimate chauffeur-driven experience.

### 4. Porsche Panamera
For those who want a sporty edge.

### 5. Toyota Alphard Executive Lounge
Unbeatable comfort for the entire bridal party.',
        'يعد اختيار سيارة الزفاف المناسبة أمراً ضرورياً ليومك الكبير. من رولز رويس إلى بنتلي، نقوم بتصنيف أفضل الخيارات لدخول كبير.

### 1. رولز رويس جوست
عنوان الفخامة.

### 2. بنتلي فلاينج سبير
مزيج مثالي من الأداء والراحة.

### 3. مرسيدس-مايباخ إس-كلاس
تجربة السائق الخاص المثالية.

### 4. بورشه باناميرا
لأولئك الذين يريدون لمسة رياضية.

### 5. تويوتا ألفارد الصالة التنفيذية
راحة لا تقبل المنافسة لحفل الزفاف بأكمله.',
        'https://images.unsplash.com/photo-1619551734325-81ebdeb74495?q=80&w=1000',
        '2024-05-20',
        NOW()
    )
ON CONFLICT (slug) DO UPDATE SET
    title_en = EXCLUDED.title_en,
    title_ar = EXCLUDED.title_ar,
    content_en = EXCLUDED.content_en,
    content_ar = EXCLUDED.content_ar,
    image_url = EXCLUDED.image_url,
    published_date = EXCLUDED.published_date;
