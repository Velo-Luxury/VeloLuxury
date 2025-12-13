import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gauge, Users } from 'lucide-react';
import { Car, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface CarCardProps {
  car: Car;
  lang: Language;
}

export const CarCard: React.FC<CarCardProps> = ({ car, lang }) => {
  const t = TRANSLATIONS[lang].carDetail;

  return (
    <Link to={`/car/${car.id}`} className="group block bg-dark-800 border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden relative">
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={car.imageUrl} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
             <p className="text-xs text-gold-400 uppercase tracking-widest mb-1">{car.category}</p>
             <h3 className="text-xl font-serif font-medium text-white">{car.name}</h3>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-4 text-neutral-400 text-sm">
            <span className="flex items-center gap-1"><Gauge size={14} /> {car.zeroToSixty}</span>
            <span className="flex items-center gap-1"><Users size={14} /> {car.seats}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="block text-lg font-bold text-white">{car.pricePerDay}</span>
            <span className="text-xs text-neutral-500">{t.perDay}</span>
          </div>
          <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-black transition-all duration-300">
            <ArrowRight size={18} className="rtl:rotate-180" />
          </span>
        </div>
      </div>
    </Link>
  );
};