import React from 'react';
import { Language } from '../types';
import { OFFERS, PHONE_NUMBER } from '../constants';
import { Button } from '../components/Button';
import { Clock } from 'lucide-react';

interface OffersProps {
  lang: Language;
}

export const Offers: React.FC<OffersProps> = ({ lang }) => {
  const handleBookOffer = (offerTitle: string) => {
     const message = `Hi VELO Luxury, I am interested in the offer: ${offerTitle}.`;
     window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
          {lang === 'en' ? 'Exclusive Privileges' : 'امتيازات حصرية'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFERS.map(offer => (
            <div key={offer.id} className="group relative bg-dark-800 overflow-hidden flex flex-col md:flex-row border border-white/5 hover:border-gold-500 transition-all duration-300">
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                 <img src={offer.imageUrl} alt="Offer" className="w-full h-full object-cover" />
                 <div className="absolute top-4 left-4 bg-gold-500 text-black px-3 py-1 font-bold text-sm">
                    {offer.discount}
                 </div>
              </div>
              <div className="p-8 flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">{offer.title[lang]}</h3>
                  <p className="text-neutral-400 text-sm mb-6">{offer.description[lang]}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
                    <Clock size={12} /> Valid until {offer.validUntil}
                  </div>
                  <Button variant="outline" fullWidth onClick={() => handleBookOffer(offer.title.en)}>
                     {lang === 'en' ? 'Claim Offer' : 'احصل على العرض'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};