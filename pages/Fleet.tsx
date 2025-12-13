
import React, { useState, useEffect } from 'react';
import { CarCategory, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { useData } from '../context/DataContext';
import { CarCard } from '../components/CarCard';

interface FleetProps {
  lang: Language;
}

export const Fleet: React.FC<FleetProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const { cars } = useData();
  const [activeCategory, setActiveCategory] = useState<CarCategory | 'All'>('All');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter visible cars only
  const visibleCars = cars.filter(car => car.isVisible);

  const filteredCars = activeCategory === 'All'
    ? visibleCars
    : visibleCars.filter(car => car.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {t.nav.fleet}
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            {lang === 'en'
              ? "Explore our curated collection of the world's finest automobiles."
              : "استكشف مجموعتنا المختارة من أرقى السيارات في العالم."}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {['All', 'Elegance', 'Executive', 'Adrenaline', 'Majestic'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2 text-sm uppercase tracking-wider border transition-all duration-300 ${activeCategory === cat
                  ? 'border-gold-500 text-black bg-gold-500 shadow-[0_0_15px_rgba(192,160,98,0.2)]'
                  : 'border-white/20 text-neutral-400 hover:border-gold-500 hover:text-gold-500'
                }`}
            >
              {cat === 'All' ? t.filters.all : t.filters[cat.toLowerCase() as keyof typeof t.filters]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <div key={car.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CarCard car={car} lang={lang} />
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20 text-neutral-500">
            {lang === 'en' ? "No vehicles found in this category." : "لم يتم العثور على مركبات في هذه الفئة."}
          </div>
        )}
      </div>
    </div>
  );
};
