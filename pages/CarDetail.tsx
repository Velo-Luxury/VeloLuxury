
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Gauge, Users, Zap, Calendar } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { useData } from '../context/DataContext';
import { Button } from '../components/Button';
import { CarCard } from '../components/CarCard';

interface CarDetailProps {
  lang: Language;
}

export const CarDetail: React.FC<CarDetailProps> = ({ lang }) => {
  const { id } = useParams<{ id: string }>();
  const { cars, contactInfo } = useData();
  const car = cars.find(c => c.id === id);
  const t = TRANSLATIONS[lang].carDetail;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!car) {
    return <div className="min-h-screen flex items-center justify-center text-white">Car not found</div>;
  }

  const handleWhatsAppBooking = () => {
    const message = `Hi VELO Luxury, I am interested in renting the ${car.name} (${car.model}). Could you share availability and pricing?`;
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const relatedCars = cars.filter(c => c.category === car.category && c.id !== car.id).slice(0, 2);

  // Ensure we have at least 4 images for the display
  const displayImages = car.gallery && car.gallery.length > 0 
    ? car.gallery.slice(0, 4) 
    : [car.imageUrl, car.imageUrl, car.imageUrl, car.imageUrl];

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/fleet" className="inline-flex items-center text-neutral-400 hover:text-gold-500 transition-colors mb-6 gap-2">
          <ArrowLeft size={16} className="rtl:rotate-180" /> {lang === 'en' ? 'Back to Fleet' : 'العودة للأسطول'}
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Images (Gallery) */}
          <div className="lg:col-span-7">
            {/* Main Hero Image */}
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 group mb-4">
              <img 
                src={displayImages[activeImageIndex]} 
                alt={car.name} 
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-gold-500 text-black px-4 py-2 font-bold text-sm">
                {car.category}
              </div>
            </div>

            {/* Gallery Grid - 4 Photos Visible Control */}
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {displayImages.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-video overflow-hidden border-2 transition-all duration-300 ${activeImageIndex === idx ? 'border-gold-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/30'}`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  {activeImageIndex === idx && (
                    <div className="absolute inset-0 bg-gold-500/10" />
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-neutral-500 mt-2 text-right">{lang === 'en' ? 'Select an image to view' : 'اختر صورة للعرض'}</p>
          </div>

          {/* Right Column: Details Info */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="sticky top-32">
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-2">{car.name}</h1>
              <p className="text-xl text-neutral-400 mb-6">{car.model}</p>
              
              <div className="flex items-end gap-3 mb-8 border-b border-white/10 pb-8">
                <span className="text-3xl font-bold text-gold-500">{car.pricePerDay}</span>
                <span className="text-neutral-500 mb-1">{t.perDay}</span>
              </div>

              <p className="text-neutral-300 leading-relaxed text-lg mb-8 font-light">
                {car.description[lang]}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-dark-800 border border-white/5 flex flex-col items-center text-center group hover:border-gold-500/30 transition-colors">
                  <Gauge className="text-gold-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-xs text-neutral-500 uppercase mb-1">0-100 km/h</p>
                  <p className="text-white font-mono">{car.zeroToSixty}</p>
                </div>
                <div className="p-4 bg-dark-800 border border-white/5 flex flex-col items-center text-center group hover:border-gold-500/30 transition-colors">
                  <Zap className="text-gold-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-xs text-neutral-500 uppercase mb-1">Engine</p>
                  <p className="text-white font-mono">{car.engine}</p>
                </div>
                <div className="p-4 bg-dark-800 border border-white/5 flex flex-col items-center text-center group hover:border-gold-500/30 transition-colors">
                  <Users className="text-gold-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-xs text-neutral-500 uppercase mb-1">Seats</p>
                  <p className="text-white font-mono">{car.seats} Pax</p>
                </div>
                 <div className="p-4 bg-dark-800 border border-white/5 flex flex-col items-center text-center group hover:border-gold-500/30 transition-colors">
                  <Calendar className="text-gold-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-xs text-neutral-500 uppercase mb-1">Year</p>
                  <p className="text-white font-mono">2023/24</p>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h3 className="text-white font-serif mb-4">{t.features}</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-neutral-400 border-b border-white/5 pb-2">
                      <Check size={14} className="text-gold-500 shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-dark-900 lg:bg-transparent z-10">
                <Button onClick={handleWhatsAppBooking} fullWidth className="mb-3">
                  {t.bookBtn}
                </Button>
                <p className="text-center text-xs text-neutral-600">
                  Instant confirmation via WhatsApp Concierge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Cars */}
      {relatedCars.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
          <h2 className="text-2xl font-serif text-white mb-8">{t.related}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCars.map(rc => (
              <CarCard key={rc.id} car={rc} lang={lang} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
