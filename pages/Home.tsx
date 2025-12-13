
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS, TESTIMONIALS, SERVICES, HOW_IT_WORKS } from '../constants';
import { useData } from '../context/DataContext';
import { Button } from '../components/Button';
import { CarCard } from '../components/CarCard';
import { Star, ArrowRight, ChevronDown, ChevronUp, MessageCircle, Key, Search, HelpCircle, UserCheck, Heart, Plane } from 'lucide-react';

interface HomeProps {
  lang: Language;
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const navigate = useNavigate();
  const { cars, faqs, contactInfo } = useData();
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Get a curated list for the homepage (first 3 cars)
  const featuredCars = cars.slice(0, 3);

  const iconMap: Record<string, React.ElementType> = {
    UserCheck,
    Heart,
    Plane,
    Search,
    MessageCircle,
    Key
  };

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hi VELO Luxury, I would like to speak to the concierge.`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-dark-900 z-10"></div>
          <img
            src="/hero.jpg"
            alt="Luxury Car"
            className="w-full h-full object-cover transform scale-105 animate-[zoomIn_20s_infinite_alternate]"
          />
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto px-4 animate-fade-in mt-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold-500"></div>
            <span className="text-gold-500 tracking-[0.4em] uppercase text-xs md:text-sm font-bold drop-shadow-lg">
              Kuala Lumpur
            </span>
            <div className="h-[1px] w-12 bg-gold-500"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-6 leading-none drop-shadow-2xl">
            {t.hero.title}
          </h1>
          <p className="text-neutral-200 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light drop-shadow-md leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => navigate('/fleet')} className="w-full sm:w-auto min-w-[200px] transform hover:scale-105 transition-transform duration-300">
              {t.hero.cta}
            </Button>
            <Button variant="outline" onClick={handleWhatsAppChat} className="w-full sm:w-auto min-w-[200px] bg-black/30 backdrop-blur-sm border-white/30 hover:bg-white hover:border-white hover:text-black">
              <MessageCircle size={18} className="mr-2" /> {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-60">
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2 text-center">Scroll</p>
          <div className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* TRUST STRIP / STATS */}
      <section className="border-y border-white/5 bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {/* Using text placeholders for luxury concepts/partners - normally these would be logos */}
          <span className="font-serif text-xl text-neutral-500 uppercase tracking-widest">VOGUE</span>
          <span className="font-serif text-xl text-neutral-500 uppercase tracking-widest">Tatler</span>
          <span className="font-serif text-xl text-neutral-500 uppercase tracking-widest">Prestige</span>
          <span className="font-serif text-xl text-neutral-500 uppercase tracking-widest">Robb Report</span>
          <div className="h-8 w-px bg-white/20 hidden md:block"></div>
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-gold-500 font-bold text-xl">500+</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider">VIP Journeys</p>
            </div>
            <div className="text-center">
              <p className="text-gold-500 font-bold text-xl">100%</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION PREVIEW */}
      <section className="py-24 bg-dark-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-2 block">The Collection</span>
              <h2 className="text-4xl font-serif text-white mb-2">{t.home.featuredTitle}</h2>
            </div>
            <Link to="/fleet" className="group flex items-center gap-2 text-white hover:text-gold-500 transition-colors uppercase tracking-widest text-sm font-bold border-b border-transparent hover:border-gold-500 pb-1">
              {t.home.viewFleet} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map(car => (
              <div key={car.id} className="animate-slide-up hover:-translate-y-2 transition-transform duration-500">
                <CarCard car={car} lang={lang} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (Friction Reducer) */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">{t.home.howItWorksTitle}</h2>
            <p className="text-neutral-500 max-w-xl mx-auto">Zero paperwork friction. Experience the modern way to access luxury mobility.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent z-0"></div>

            {HOW_IT_WORKS.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-dark-800 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:bg-dark-700 transition-all duration-300 shadow-2xl">
                    <Icon className="text-gold-500 w-10 h-10" />
                  </div>
                  <div className="bg-dark-900/80 px-4 py-2 rounded-full border border-white/5 text-xs font-bold text-neutral-400 mb-4 uppercase tracking-widest">
                    Step 0{step.id}
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">{step.title[lang]}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">{step.desc[lang]}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Button onClick={handleWhatsAppChat} className="min-w-[250px]">
              Start Concierge Chat
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-dark-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-3 block">Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">{t.home.servicesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <div key={service.id} className="text-center group p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 cursor-default">
                  <div className="w-16 h-16 mx-auto bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/20 mb-6 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4">{service.title[lang]}</h3>
                  <p className="text-neutral-400 leading-relaxed max-w-xs mx-auto mb-6">{service.description[lang]}</p>
                  <span className="text-xs text-gold-500 font-bold uppercase tracking-widest border-b border-gold-500/30 pb-1 group-hover:border-gold-500 transition-colors">
                    Learn More
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-white mb-4">Client Stories</h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testi) => (
              <div key={testi.id} className="bg-dark-900 p-10 border border-white/5 relative group hover:border-gold-500/30 transition-colors">
                <div className="text-gold-500 mb-6 flex">
                  {[...Array(testi.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-xl text-neutral-300 font-serif italic mb-8 leading-relaxed">"{testi.content[lang]}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-gold-500 font-serif font-bold text-lg border border-white/10">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">{testi.name}</h4>
                    <span className="text-neutral-500 text-xs uppercase tracking-widest">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION (SEO & OBJECTIONS) */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="text-gold-500 mx-auto mb-4" size={32} />
            <h2 className="text-3xl font-serif text-white">{t.home.faqTitle}</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-white/10 rounded-lg bg-dark-800 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium">{faq.question[lang]}</span>
                  {openFaq === faq.id ? <ChevronUp className="text-gold-500" size={20} /> : <ChevronDown className="text-neutral-500" size={20} />}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${openFaq === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer[lang]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-500 mb-4 text-sm">Still have questions?</p>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-gold-500 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Contact Support <ArrowRight size={14} className="ml-2 rtl:rotate-180" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
