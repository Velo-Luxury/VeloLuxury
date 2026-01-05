import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../../types';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/Button';
import { useData } from '../../context/DataContext';
import { Check, Star } from 'lucide-react';

interface Props {
    lang: Language;
}

export const WeddingCarRental: React.FC<Props> = ({ lang }) => {
    const { contactInfo } = useData();

    return (
        <div className="min-h-screen bg-dark-900 pt-24">
            <SEO
                title={lang === 'en' ? 'Luxury Wedding Car Rental Kuala Lumpur | Rolls Royce & Supercars' : 'تأجير سيارات الزفاف الفاخرة في كوالالمبور | رولز رويس وسيارات خارقة'}
                description={lang === 'en'
                    ? 'Make your wedding day unforgettable with Velo Luxury. Rent a Rolls-Royce, Bentley, or Ferrari for your wedding in Kuala Lumpur. Professional chauffeur services available.'
                    : 'اجعل يوم زفافك لا يُنسى مع فيلو الفاخرة. استأجر رولز رويس، بنتلي، أو فيراري لزفافك في كوالالمبور. تتوفر خدمات سائق محترف.'}
                keywords="wedding car rental kl, luxury wedding car malaysia, bridal car rental, rolls royce rental wedding, bentley wedding car"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Wedding Car Rental",
                    "provider": {
                        "@type": "CarRental",
                        "name": "VELO LUXURY"
                    },
                    "areaServed": "Kuala Lumpur"
                }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-3 block">{lang === 'en' ? 'Ceremonial Fleet' : 'أسطول الاحتفالات'}</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        {lang === 'en' ? 'Wedding Car Rental Kuala Lumpur' : 'تأجير سيارات الزفاف في كوالالمبور'}
                    </h1>
                    <p className="text-neutral-400 text-lg">
                        {lang === 'en'
                            ? 'Arrive in a manner that befits the magnitude of the moment.'
                            : 'اصلي بطريقة تليق بعظمة اللحظة.'}
                    </p>
                </div>

                <div className="mb-12">
                    <img
                        src="https://images.unsplash.com/photo-1619551734325-81ebdeb74495?q=80&w=1000"
                        alt="Rolls Royce Wedding Car KL"
                        className="w-full h-96 object-cover rounded-lg shadow-2xl mb-8"
                    />
                </div>

                <div className="prose prose-invert prose-lg mx-auto text-neutral-300">
                    <p>
                        {lang === 'en'
                            ? "Your wedding day is a collection of moments that will be cherished forever. At VELO LUXURY, we understand that the journey is just as important as the destination. Our premium wedding car rental service in Kuala Lumpur is designed to ensure that your bridal arrival is nothing short of spectacular."
                            : "يوم زفافك هو مجموعة من اللحظات التي ستعتز بها إلى الأبد. في فيلو الفاخرة، ندرك أن الرحلة لا تقل أهمية عن الوجهة. تم تصميم خدمة تأجير سيارات الزفاف المتميزة لدينا في كوالالمبور لضمان أن يكون وصول العروس ليس أقل من مذهل."}
                    </p>

                    <h3 className="text-gold-500 font-serif mt-8 mb-4">
                        {lang === 'en' ? 'The Perfect Car for Your Special Day' : 'السيارة المثالية ليومك الخاص'}
                    </h3>
                    <p>
                        {lang === 'en'
                            ? "Whether you envision the timeless elegance of a Rolls-Royce Ghost, the regal presence of a Bentley Flying Spur, or the modern sophistication of a Mercedes-Maybach, our fleet stands ready. We meticulously define 'luxury' through the condition of our vehicles—each hand-polished and detailed to perfection for your ceremony."
                            : "سواء كنت تتخيل الأناقة الخالدة لسيارة رولز رويس جوست، أو الحضور الملكي لسيارة بنتلي فلاينج سبير، أو التطور الحديث لسيارة مرسيدس-مايباخ، فإن أسطولنا جاهز. نحن نحدد 'الفخامة' بدقة من خلال حالة سياراتنا - كل واحدة مصقولة يدوياً ومفصلة لدرجة الكمال لحفلك."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                        <div className="bg-dark-800 p-6 border border-white/5 rounded-lg">
                            <h4 className="text-white font-serif mb-2 flex items-center gap-2"><Star className="text-gold-500" size={18} /> {lang === 'en' ? 'Chauffeur Driven' : 'مع سائق'}</h4>
                            <p className="text-sm text-neutral-400">
                                {lang === 'en' ? 'Our uniformed chauffeurs are trained in ceremonial etiquette, ensuring a smooth, punctual, and dignified service.' : 'سائقونا بزي موحد مدربون على بروتوكولات الاحتفالات، لضمان خدمة سلسة ودقيقة ومهيبة.'}
                            </p>
                        </div>
                        <div className="bg-dark-800 p-6 border border-white/5 rounded-lg">
                            <h4 className="text-white font-serif mb-2 flex items-center gap-2"><Check className="text-gold-500" size={18} /> {lang === 'en' ? 'Decoration Ready' : 'جاهزة للزينة'}</h4>
                            <p className="text-sm text-neutral-400">
                                {lang === 'en' ? 'We can coordinate with your florist to safely adorn the vehicle with ribbons and flowers.' : 'يمكننا التنسيق مع بائع الزهور الخاص بك لتزيين السيارة شرائط والزهور بأمان.'}
                            </p>
                        </div>
                    </div>

                    <h3 className="text-gold-500 font-serif mt-8 mb-4">
                        {lang === 'en' ? 'Popular Wedding Cars in KL' : 'سيارات الزفاف الشهيرة في كوالالمبور'}
                    </h3>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div> <strong>Rolls-Royce Ghost</strong> - The ultimate symbol of romance and luxury.</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div> <strong>Bentley Continental</strong> - For couples who want a touch of British grand touring.</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div> <strong>Mercedes S-Class</strong> - The classic choice for bridal parties and family transport.</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div> <strong>Ferrari / Lamborghini</strong> - For a bold, high-energy groom's entrance.</li>
                    </ul>

                    <div className="mt-12 text-center p-8 bg-gold-500/10 border border-gold-500/30 rounded-xl">
                        <h3 className="text-2xl text-white font-serif mb-4">{lang === 'en' ? 'Reserve Your Date' : 'احجز تاريخك'}</h3>
                        <p className="mb-6">{lang === 'en' ? 'Wedding dates are often booked months in advance. Contact our concierge to secure your vehicle.' : 'تُحجز تواريخ الزفاف غالباً قبل أشهر. اتصل بالكونسيرج لتأمين سيارتك.'}</p>
                        <Button onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hi VELO, I am inquiring about wedding car rental availability.`, '_blank')}>
                            {lang === 'en' ? 'Check Availability via WhatsApp' : 'تحقق من التوفر عبر واتساب'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
