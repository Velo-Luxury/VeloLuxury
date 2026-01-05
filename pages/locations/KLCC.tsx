import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../../types';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/Button';
import { useData } from '../../context/DataContext';
import { MapPin, Navigation, Building } from 'lucide-react';

interface Props {
    lang: Language;
}

export const KLCC: React.FC<Props> = ({ lang }) => {
    const { contactInfo } = useData();

    return (
        <div className="min-h-screen bg-dark-900 pt-24">
            <SEO
                title={lang === 'en' ? 'Luxury Car Rental KLCC | Near Petronas Twin Towers' : 'تأجير سيارات فاخرة في KLCC | بالقرب من برجي بتروناس التوأم'}
                description={lang === 'en'
                    ? 'Rent a luxury car in KLCC. Premium vehicle delivery to Mandarin Oriental, Four Seasons, and Petronas Twin Towers. Ferrari, Porsche, and Mercedes available.'
                    : 'استأجر سيارة فاخرة في KLCC. توصيل مركبات مميزة إلى ماندارين أورينتال، فور سيزونز، وبرجي بتروناس التوأم. تتوفر فيراري، بورش، ومرسيدس.'}
                keywords="car rental klcc, luxury car rental petronas towers, rent sports car kl city centre, mandarin oriental car rental"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "CarRental",
                    "name": "VELO LUXURY KLCC Service",
                    "areaServed": {
                        "@type": "Place",
                        "name": "Kuala Lumpur City Centre"
                    }
                }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-3 block">City Centre Hub</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        {lang === 'en' ? 'Luxury Car Rental KLCC' : 'تأجير سيارات فاخرة في KLCC'}
                    </h1>
                </div>

                <div className="mb-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1606775797371-294b0df1450a?q=80&w=1000"
                        alt="KLCC Petronas Towers Luxury Car"
                        className="w-full h-80 object-cover rounded-lg shadow-2xl mb-8 opacity-80"
                    />
                </div>

                <div className="prose prose-invert prose-lg mx-auto text-neutral-300">
                    <p>
                        {lang === 'en'
                            ? "The heartbeat of Malaysia. If you are staying in the Golden Triangle or KLCC area, VELO LUXURY offers instant delivery to your hotel or residence. Bypass the taxi queues and experience Kuala Lumpur from the driver's seat of a supercar."
                            : "نبض ماليزيا. إذا كنت تقيم في المثلث الذهبي أو منطقة KLCC، تقدم فيلو الفاخرة توصيلاً فورياً إلى فندقك أو مسكنك. تجاوز طوابير التاكسي واستمتع بتجربة كوالالمبور من مقعد السائق في سيارة خارقة."}
                    </p>

                    <h3 className="text-gold-500 font-serif mt-8 mb-4">
                        {lang === 'en' ? 'Hotels We Serve in KLCC' : 'فنادق نخدمها في KLCC'}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <li className="flex items-center gap-3 bg-dark-800 p-3 rounded border border-white/5"><Building className="text-gold-500" size={16} /> Mandarin Oriental</li>
                        <li className="flex items-center gap-3 bg-dark-800 p-3 rounded border border-white/5"><Building className="text-gold-500" size={16} /> Four Seasons Kuala Lumpur</li>
                        <li className="flex items-center gap-3 bg-dark-800 p-3 rounded border border-white/5"><Building className="text-gold-500" size={16} /> Grand Hyatt</li>
                        <li className="flex items-center gap-3 bg-dark-800 p-3 rounded border border-white/5"><Building className="text-gold-500" size={16} /> W Kuala Lumpur</li>
                        <li className="flex items-center gap-3 bg-dark-800 p-3 rounded border border-white/5"><Building className="text-gold-500" size={16} /> EQ Kuala Lumpur</li>
                        <li className="flex items-center gap-3 bg-dark-800 p-3 rounded border border-white/5"><Building className="text-gold-500" size={16} /> The RuMa Hotel</li>
                    </ul>

                    <div className="bg-dark-800 p-8 border border-white/5 rounded-xl my-12">
                        <h3 className="text-2xl font-serif text-white mb-4">{lang === 'en' ? 'How It Works' : 'كيف يعمل'}</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-gold-500 text-black flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h4 className="text-white font-bold">{lang === 'en' ? 'Select Your Car' : 'اختر سيارتك'}</h4>
                                    <p className="text-sm text-neutral-400">Browse our fleet online and choose your preferred vehicle.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-gold-500 text-black flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h4 className="text-white font-bold">{lang === 'en' ? 'Concierge Delivery' : 'توصيل الكونسيرج'}</h4>
                                    <p className="text-sm text-neutral-400">Our concierge brings the car to your hotel lobby Valet.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-gold-500 text-black flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h4 className="text-white font-bold">{lang === 'en' ? 'Drive' : 'قد'}</h4>
                                    <p className="text-sm text-neutral-400">Enjoy the city. When done, we pick it up from the hotel.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Button onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hi VELO, I am in KLCC area and want to rent a car.`, '_blank')}>
                            {lang === 'en' ? 'Book Delivery to KLCC' : 'احجز توصيل إلى KLCC'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
