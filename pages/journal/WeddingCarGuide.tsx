import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../../types';
import { SEO } from '../../components/SEO';
import { ArrowLeft, User, Calendar } from 'lucide-react';

interface Props {
    lang: Language;
}

export const WeddingCarGuide: React.FC<Props> = ({ lang }) => {
    return (
        <div className="min-h-screen bg-dark-900 pt-24">
            <SEO
                title={lang === 'en' ? 'Top 5 Luxury Wedding Cars in Malaysia [2024 Guide] | VELO' : 'أفضل 5 سيارات زفاف فاخرة في ماليزيا [دليل 2024] | فيلو'}
                description={lang === 'en'
                    ? 'Planning your wedding in KL? We compare the Rolls-Royce Ghost, Bentley Flying Spur, and other top bridal cars to help you choose the perfect ride.'
                    : 'تخطط لزفافك في كوالالمبور؟ نقارن بين رولز رويس جوست، بنتلي فلاينج سبير، وغيرها من أفضل سيارات الزفاف لمساعدتك في اختيار الرحلة المثالية.'}
                type="article"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Top 5 Luxury Wedding Cars in Malaysia",
                    "image": "https://images.unsplash.com/photo-1619551734325-81ebdeb74495?q=80&w=1000",
                    "author": {
                        "@type": "Organization",
                        "name": "VELO LUXURY"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "VELO LUXURY",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://veloluxury.com/logo.png"
                        }
                    },
                    "datePublished": "2024-05-20"
                }}
            />

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link to="/journal" className="inline-flex items-center text-neutral-400 hover:text-gold-500 transition-colors mb-8 gap-2">
                    <ArrowLeft size={16} className="rtl:rotate-180" /> {lang === 'en' ? 'Back to Journal' : 'العودة للمجلة'}
                </Link>

                <header className="mb-12 text-center">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-4 block">Wedding Guide</span>
                    <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                        {lang === 'en' ? 'Top 5 Luxury Wedding Cars in Malaysia' : 'أفضل 5 سيارات زفاف فاخرة في ماليزيا'}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-neutral-500 text-sm">
                        <span className="flex items-center gap-2"><User size={14} /> VELO Editorial</span>
                        <span className="flex items-center gap-2"><Calendar size={14} /> May 20, 2024</span>
                    </div>
                </header>

                <img
                    src="https://images.unsplash.com/photo-1619551734325-81ebdeb74495?q=80&w=1000"
                    alt="Rolls Royce Ghost Wedding"
                    className="w-full h-80 md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl"
                />

                <div className="prose prose-invert prose-lg prose-gold mx-auto">
                    <p className="lead text-xl text-neutral-300">
                        {lang === 'en'
                            ? "Your wedding entrance sets the tone for the entire event. In Kuala Lumpur, where luxury weddings are an art form, arriving in a vehicle that matches the grandeur of your venue is non-negotiable. Here are the top 5 choices for Malaysian couples in 2024."
                            : "يحدد دخول زفافك نغمة الحدث بأكمله. في كوالالمبور، حيث حفلات الزفاف الفاخرة شكل من أشكال الفن، فإن الوصول في مركبة تتناسب مع عظمة مكانك أمر غير قابل للتفاوض. إليك أفضل 5 خيارات للأزواج الماليزيين في 2024."}
                    </p>

                    <h2 className="text-white font-serif mt-12 mb-6">1. Rolls-Royce Ghost</h2>
                    <p>{lang === 'en' ? "The undisputed king of bridal cars. The Ghost offers a sanctuary of silence and comfort, ensuring the bride arrives relaxed and ready. Its suicide doors also make for stunning photography opportunities." : "الملك بلا منازع لسيارات الزفاف. تقدم الشبح ملاذاً من الصمت والراحة، مما يضمن وصول العروس مسترخية وجاهزة. أبوابها الانتحارية تجعل أيضاً فرص التصوير مذهلة."}</p>

                    <h2 className="text-white font-serif mt-12 mb-6">2. Bentley Flying Spur</h2>
                    <p>{lang === 'en' ? "For those who prefer a slightly more driver-focused aesthetic, the Bentley brings British charm and aggressive elegance. It is particularly popular for garden weddings." : "لأولئك الذين يفضلون جمالية تركز أكثر قليلاً على السائق، تجلب بنتلي السحر البريطاني والأناقة العدوانية. وهي مشهورة بشكل خاص لحفلات الزفاف في الحدائق."}</p>

                    <h2 className="text-white font-serif mt-12 mb-6">3. Mercedes-Maybach S-Class</h2>
                    <p>{lang === 'en' ? "The longest vehicle in its class, offering incredible legroom for voluminous bridal gowns. The extensive technology inside allows you to set the ambient lighting to match your wedding theme." : "أطول مركبة في فئتها، توفر مساحة أرجل لا تصدق لفساتين الزفاف الضخمة. تتيح لك التكنولوجيا الواسعة في الداخل ضبط الإضاءة المحيطة لتتناسب مع موضوع حفل زفافك."}</p>

                    <h2 className="text-white font-serif mt-12 mb-6">4. Toyota Alphard Executive Lounge</h2>
                    <p>{lang === 'en' ? "Often overlooked as a bridal car, but perfect for the family. It is the most practical choice for transporting parents and bridesmaids in supreme comfort." : "غالباً ما يتم التغاضي عنها كسيارة زفاف، ولكنها مثالية للعائلة. إنها الخيار الأكثر عملية لنقل الوالدين ووصيفات العروس براحة فائقة."}</p>

                    <h2 className="text-white font-serif mt-12 mb-6">5. Ferrari 488 Spider</h2>
                    <p>{lang === 'en' ? "For the bold groom. Arrive at the reception with the top down and the V8 engine roaring. It makes a statement that the party has officially started." : "للعريس الجريء. صل إلى حفل الاستقبال والسقف مكشوف ومحرك V8 يزأر. إنه بيان بأن الحفلة قد بدأت رسمياً."}</p>

                    <div className="bg-dark-800 p-8 rounded-xl border-l-4 border-gold-500 mt-12">
                        <h3 className="text-white font-bold mb-2">{lang === 'en' ? 'Pro Tip: Book Early' : 'نصيحة محترف: احجز مبكراً'}</h3>
                        <p className="text-sm text-neutral-400 mb-0">
                            {lang === 'en'
                                ? "Luxury wedding cars in KL are booked out 3-6 months in advance, especially during peak wedding seasons (December - February). Secure your date as soon as your venue is confirmed."
                                : "يتم حجز سيارات الزفاف الفاخرة في كوالالمبور قبل 3-6 أشهر، خاصة خلال مواسم الذروة (ديسمبر - فبراير). قم بتأمين تاريخك بمجرد تأكيد مكانك."}
                        </p>
                    </div>
                </div>

            </article>
        </div>
    );
};
