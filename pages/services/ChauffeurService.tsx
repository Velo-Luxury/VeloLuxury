import React from 'react';
import { Language } from '../../types';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/Button';
import { useData } from '../../context/DataContext';
import { Shield, Clock, MapPin } from 'lucide-react';

interface Props {
    lang: Language;
}

export const ChauffeurService: React.FC<Props> = ({ lang }) => {
    const { contactInfo } = useData();

    return (
        <div className="min-h-screen bg-dark-900 pt-24">
            <SEO
                title={lang === 'en' ? 'VIP Chauffeur Services Malaysia | Executive Driver Kuala Lumpur' : 'خدمات سائق VIP في ماليزيا | سائق تنفيذي في كوالالمبور'}
                description={lang === 'en'
                    ? 'Experience premium chauffeur services in Malaysia. Professional, English-speaking drivers for business meetings, events, and airport transfers. Mercedes S-Class, Alphard, and Rolls-Royce available.'
                    : 'جرب خدمات السائق المتميزة في ماليزيا. سائقون محترفون يتحدثون الإنجليزية لاجتماعات العمل، الفعاليات، ونقل المطار. تتوفر مرسيدس إس-كلاس، ألفارد، ورولز رويس.'}
                keywords="chauffeur service kl, driver rental malaysia, executive transport kuala lumpur, bodyguard driver malaysia, luxury car with driver"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Chauffeur Service",
                    "provider": {
                        "@type": "CarRental",
                        "name": "VELO LUXURY"
                    },
                    "areaServed": "Malaysia"
                }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-3 block">{lang === 'en' ? 'Sit Back & Relax' : 'استرخ واستمتع'}</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        {lang === 'en' ? 'Premium Chauffeur Services' : 'خدمات السائق المتميزة'}
                    </h1>
                    <p className="text-neutral-400 text-lg">
                        {lang === 'en'
                            ? 'Professionalism, Punctuality, and Privacy.'
                            : 'الاحترافية، الدقة في المواعيد، والخصوصية.'}
                    </p>
                </div>

                <div className="mb-12">
                    <img
                        src="https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=1000"
                        alt="Chauffeur Service KL"
                        className="w-full h-96 object-cover rounded-lg shadow-2xl mb-8"
                    />
                </div>

                <div className="prose prose-invert prose-lg mx-auto text-neutral-300">
                    <p>
                        {lang === 'en'
                            ? "Navigating the bustling streets of Kuala Lumpur requires patience and skill. Why stress over traffic when you can work, relax, or entertain guests in the back of a luxury vehicle? VELO LUXURY offers top-tier chauffeur services in Malaysia, tailored for business executives, diplomats, and discerning travelers."
                            : "يتطلب التنقل في الشوارع المزدحمة في كوالالمبور صبراً ومهارة. لماذا تتوتر بسبب حركة المرور بينما يمكنك العمل، الاسترخاء، أو ترفيه الضيوف في الجزء الخلفي من سيارة فاخرة؟ تقدم فيلو الفاخرة خدمات سائق من الدرجة الأولى في ماليزيا، مصممة خصيصاً للمديرين التنفيذيين، الدبلوماسيين، والمسافرين المميزين."}
                    </p>

                    <h3 className="text-gold-500 font-serif mt-8 mb-4">
                        {lang === 'en' ? 'More Than Just a Driver' : 'أكثر من مجرد سائق'}
                    </h3>
                    <p>
                        {lang === 'en'
                            ? "Our chauffeurs are strictly vetted professionals. They possess extensive knowledge of Kuala Lumpur's routes, ensuring you arrive at your meetings on time, every time. Trained in executive etiquette, they understand the value of your privacy and comfort."
                            : "سائقونا محترفون تم فحصهم بدقة. يمتلكون معرفة واسعة بمسارات كوالالمبور، مما يضمن وصولك إلى اجتماعاتك في الوقت المحدد، في كل مرة. مدربون على آداب السلوك التنفيذي، ويفهمون قيمة خصوصيتك وراحتك."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                        <div className="bg-dark-800 p-6 border border-white/5 rounded-lg text-center">
                            <Shield className="text-gold-500 mx-auto mb-3" size={32} />
                            <h4 className="text-white font-serif mb-2">{lang === 'en' ? 'Secure & Safe' : 'آمن ومحمي'}</h4>
                            <p className="text-sm text-neutral-400">
                                {lang === 'en' ? 'Defensive driving trained personnel prioritizing your safety.' : 'موظفون مدربون على القيادة الدفاعية يعطون الأولوية لسلامتك.'}
                            </p>
                        </div>
                        <div className="bg-dark-800 p-6 border border-white/5 rounded-lg text-center">
                            <Clock className="text-gold-500 mx-auto mb-3" size={32} />
                            <h4 className="text-white font-serif mb-2">{lang === 'en' ? 'Always Punctual' : 'دقيق دائماً'}</h4>
                            <p className="text-sm text-neutral-400">
                                {lang === 'en' ? 'We arrive 15 minutes prior to pickup. Your time is invaluable.' : 'نصل قبل 15 دقيقة من الموعد. وقتك لا يقدر بثمن.'}
                            </p>
                        </div>
                        <div className="bg-dark-800 p-6 border border-white/5 rounded-lg text-center">
                            <MapPin className="text-gold-500 mx-auto mb-3" size={32} />
                            <h4 className="text-white font-serif mb-2">{lang === 'en' ? 'Local Experts' : 'خبراء محليون'}</h4>
                            <p className="text-sm text-neutral-400">
                                {lang === 'en' ? 'Need a recommendation for fine dining? Just ask your chauffeur.' : 'هل تحتاج إلى توصية لتناول الطعام الفاخر؟ فقط اسأل سائقك.'}
                            </p>
                        </div>
                    </div>

                    <h3 className="text-gold-500 font-serif mt-8 mb-4">
                        {lang === 'en' ? 'Our Chauffeur Fleet' : 'أسطول السائقين لدينا'}
                    </h3>
                    <ul className="space-y-4 mb-8">
                        <li className="bg-dark-800 p-4 border-l-2 border-gold-500">
                            <strong className="text-white block mb-1">Toyota Alphard / Vellfire</strong>
                            <span className="text-sm">The gold standard for business comfort. Spacious captain seats perfect for working on the go.</span>
                        </li>
                        <li className="bg-dark-800 p-4 border-l-2 border-gold-500">
                            <strong className="text-white block mb-1">Mercedes-Benz S-Class</strong>
                            <span className="text-sm">The definitive executive sedan. Smooth, quiet, and imposing.</span>
                        </li>
                        <li className="bg-dark-800 p-4 border-l-2 border-gold-500">
                            <strong className="text-white block mb-1">Rolls-Royce Ghost</strong>
                            <span className="text-sm">For when only the best will do. Make a statement upon arrival.</span>
                        </li>
                    </ul>

                    <div className="mt-12 text-center">
                        <Button onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hi VELO, I would like to book a chauffeur service.`, '_blank')}>
                            {lang === 'en' ? 'Book Chauffeur Now' : 'احجز سائق الآن'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
