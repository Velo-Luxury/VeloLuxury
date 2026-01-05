import React from 'react';
import { Language } from '../../types';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/Button';
import { useData } from '../../context/DataContext';
import { MapPin, ShoppingBag, Star } from 'lucide-react';

interface Props {
    lang: Language;
}

export const BukitBintang: React.FC<Props> = ({ lang }) => {
    const { contactInfo } = useData();

    return (
        <div className="min-h-screen bg-dark-900 pt-24">
            <SEO
                title={lang === 'en' ? 'Rent Sports Car Bukit Bintang | Pavilion Kuala Lumpur Luxury Car' : 'استأجر سيارة رياضية بوكيت بينتانج | سيارة فاخرة بافيليون كوالالمبور'}
                description={lang === 'en'
                    ? 'The best luxury car rental in Bukit Bintang. Turn heads at Pavilion and Starhill Gallery. Lamborghini, McLaren, and Mustang rental available near JW Marriott.'
                    : 'أفضل تأجير سيارات فاخرة في بوكيت بينتانج. الفت الأنظار في بافيليون وستارهيل جاليري. تتوفر تأجير لامبورغيني، ماكلارين، وموستانج بالقرب من جي دبليو ماريوت.'}
                keywords="car rental bukit bintang, rent ferrari pavilion kl, luxury car hire jw marriott kl, sports car rental starhill"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "CarRental",
                    "name": "VELO LUXURY Bukit Bintang",
                    "areaServed": {
                        "@type": "Place",
                        "name": "Bukit Bintang"
                    }
                }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-3 block">{lang === 'en' ? 'Shopping District' : 'منطقة التسوق'}</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        {lang === 'en' ? 'Car Rental Bukit Bintang' : 'تأجير السيارات بوكيت بينتانج'}
                    </h1>
                </div>

                <div className="mb-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1596707328649-14a01490212e?q=80&w=1000"
                        alt="Bukit Bintang Luxury Life"
                        className="w-full h-80 object-cover rounded-lg shadow-2xl mb-8 opacity-80"
                    />
                </div>

                <div className="prose prose-invert prose-lg mx-auto text-neutral-300">
                    <p>
                        {lang === 'en'
                            ? "Bukit Bintang is the entertainment and fashion capital of Kuala Lumpur. It demands a vehicle that matches its energy. Rent a convertible sports car or a high-end SUV to cruise down Jalan Bukit Bintang in style."
                            : "بوكيت بينتانج هي عاصمة الترفيه والموضة في كوالالمبور. إنها تتطلب مركبة تتناسب مع طاقتها. استأجر سيارة رياضية مكشوفة أو سيارة دفع رباعي راقية للتجول في جالان بوكيت بينتانج بأناقة."}
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 my-12">
                        <div className="flex-1 bg-dark-800 p-6 rounded-lg border border-white/5 hover:border-gold-500 transition-colors">
                            <ShoppingBag className="text-gold-500 mb-4" size={32} />
                            <h3 className="text-xl text-white font-serif mb-2">Pavilion & Starhill</h3>
                            <p className="text-sm text-neutral-400">Perfect for heavy shopping days. Rent a spacious Bentley Bentayga or G-Wagon to transport your luxury purchases with ease.</p>
                        </div>
                        <div className="flex-1 bg-dark-800 p-6 rounded-lg border border-white/5 hover:border-gold-500 transition-colors">
                            <Star className="text-gold-500 mb-4" size={32} />
                            <h3 className="text-xl text-white font-serif mb-2">Nightlife Presence</h3>
                            <p className="text-sm text-neutral-400">Arrive at Marini's on 57, Troika, or Changkat in a Lamborghini. Make every arrival a red-carpet moment.</p>
                        </div>
                    </div>

                    <h3 className="text-gold-500 font-serif mt-8 mb-4">
                        {lang === 'en' ? 'Hotels We Serve in Bukit Bintang' : 'فنادق نخدمها في بوكيت بينتانج'}
                    </h3>
                    <ul className="text-sm text-neutral-400 grid grid-cols-2 gap-2">
                        <li>• JW Marriott</li>
                        <li>• The Westin</li>
                        <li>• The Ritz-Carlton</li>
                        <li>• Grand Millennium</li>
                        <li>• Pavilion Hotel</li>
                        <li>• WOLO Kuala Lumpur</li>
                    </ul>

                    <div className="mt-12 text-center">
                        <Button onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hi VELO, I am in Bukit Bintang and want to rent a car.`, '_blank')}>
                            {lang === 'en' ? 'Book Delivery to Bukit Bintang' : 'احجز توصيل إلى بوكيت بينتانج'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
