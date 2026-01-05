import React from 'react';
import { Language } from '../../types';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/Button';
import { useData } from '../../context/DataContext';
import { Plane, Luggage, Clock } from 'lucide-react';

interface Props {
    lang: Language;
}

export const AirportTransfer: React.FC<Props> = ({ lang }) => {
    const { contactInfo } = useData();

    return (
        <div className="min-h-screen bg-dark-900 pt-24">
            <SEO
                title={lang === 'en' ? 'KLIA Airport Transfer Luxury Car | VIP Airport Pickup Malaysia' : 'نقل مطار كوالالمبور سيارة فاخرة | استقبال VIP في مطار ماليزيا'}
                description={lang === 'en'
                    ? 'Reliable luxury airport transfers to and from KLIA/KLIA2. Meet and greet service, flight tracking, and premium vehicles including Alphard and Mercedes S-Class.'
                    : 'نقل مطار فاخر وموثوق من وإلى مطار كوالالمبور. خدمة الاستقبال والترحيب، تتبع الرحلات، ومركبات متميزة بما في ذلك ألفارد ومرسيدس إس-كلاس.'}
                keywords="airport transfer klia, limo service kuala lumpur airport, klia2 premium taxi, luxury airport shuttle malaysia"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Airport Transfer",
                    "provider": {
                        "@type": "CarRental",
                        "name": "VELO LUXURY"
                    },
                    "areaServed": "KLIA"
                }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-3 block">{lang === 'en' ? 'Seamless Connections' : 'اتصالات سلسة'}</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        {lang === 'en' ? 'Luxury Airport Transfers (KLIA)' : 'نقل المطار الفاخر (KLIA)'}
                    </h1>
                </div>

                <div className="mb-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
                    <img
                        src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=1000"
                        alt="KLIA Luxury Transfer"
                        className="w-full h-80 object-cover rounded-lg shadow-2xl mb-8"
                    />
                </div>

                <div className="prose prose-invert prose-lg mx-auto text-neutral-300">
                    <p>
                        {lang === 'en'
                            ? "Start or end your journey in Malaysia with absolute comfort. VELO LUXURY provides prompt, reliable, and exceptionally comfortable airport transfers between Kuala Lumpur International Airport (KLIA/KLIA2) and the city center."
                            : "ابدأ أو انهِ رحلتك في ماليزيا براحة مطلقة. توفر فيلو الفاخرة خدمات نقل مطار سريعة وموثوقة ومريحة للغاية بين مطار كوالالمبور الدولي (KLIA/KLIA2) ووسط المدينة."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                        <div className="flex gap-4">
                            <div className="bg-gold-500/20 p-3 rounded h-fit text-gold-500"><Plane /></div>
                            <div>
                                <h4 className="text-white font-bold mb-2">{lang === 'en' ? 'Flight Tracking' : 'تتبع الرحلات'}</h4>
                                <p className="text-sm">{lang === 'en' ? 'We track your flight arrival. If you are delayed, we wait. No extra charge.' : 'نتتبع وصول رحلتك. إذا تأخرت، سننتظر. بدون رسوم إضافية.'}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-gold-500/20 p-3 rounded h-fit text-gold-500"><Luggage /></div>
                            <div>
                                <h4 className="text-white font-bold mb-2">{lang === 'en' ? 'Meet & Greet' : 'الاستقبال والترحيب'}</h4>
                                <p className="text-sm">{lang === 'en' ? 'Our chauffeur will be waiting at the arrival hall with a personalized name board.' : 'سيكون سائقنا بانتظارك في صالة الوصول مع لوحة اسم مخصصة.'}</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-gold-500 font-serif mt-8 mb-4">
                        {lang === 'en' ? 'Transfers for Every Group Size' : 'نقل لكل أحجام المجموعات'}
                    </h3>
                    <p>
                        {lang === 'en'
                            ? "Whether you are a solo business traveler or a family of seven, we have the right vehicle."
                            : "سواء كنت مسافراً منفرداً للعمل أو عائلة مكونة من سبعة أفراد، فلدينا السيارة المناسبة."}
                    </p>

                    <table className="w-full text-sm text-left text-neutral-400 mt-6 border-collapse">
                        <thead className="text-xs uppercase bg-dark-800 text-white">
                            <tr>
                                <th className="px-6 py-3">Vehicle</th>
                                <th className="px-6 py-3">Capacity</th>
                                <th className="px-6 py-3">Luggage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-white/5">
                                <td className="px-6 py-4 font-medium text-white">Mercedes S-Class</td>
                                <td className="px-6 py-4">3 Pax</td>
                                <td className="px-6 py-4">2 Large</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="px-6 py-4 font-medium text-white">Toyota Alphard</td>
                                <td className="px-6 py-4">6 Pax</td>
                                <td className="px-6 py-4">4 Large</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="px-6 py-4 font-medium text-white">Hyundai Staria</td>
                                <td className="px-6 py-4">7 Pax</td>
                                <td className="px-6 py-4">5 Large</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mt-12 text-center">
                        <Button onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hi VELO, inquiring about Airport Transfer rates from KLIA.`, '_blank')}>
                            {lang === 'en' ? 'Get a Quote' : 'احصل على عرض سعر'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
