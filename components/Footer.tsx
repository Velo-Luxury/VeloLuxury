
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { useData } from '../context/DataContext';
import { Logo } from './Logo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const { contactInfo } = useData();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <Logo />
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.instagram.com/velocarrental/" className="text-gold-500 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/veloluxury" className="text-gold-500 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="https://www.linkedin.com/company/velo-luxury/" className="text-gold-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">{t.nav.fleet}</h3>
            <ul className="space-y-3 text-sm text-neutral-400 mb-8">
              <li><Link to="/fleet" className="hover:text-gold-500 transition-colors">{t.filters.elegance}</Link></li>
              <li><Link to="/fleet" className="hover:text-gold-500 transition-colors">{t.filters.executive}</Link></li>
              <li><Link to="/fleet" className="hover:text-gold-500 transition-colors">{t.filters.adrenaline}</Link></li>
              <li><Link to="/fleet" className="hover:text-gold-500 transition-colors">{t.filters.majestic}</Link></li>
            </ul>

            <h3 className="text-white font-serif text-lg mb-6">{t.nav.services}</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link to="/services/wedding-car-rental-kuala-lumpur" className="hover:text-gold-500 transition-colors">{t.nav.wedding}</Link></li>
              <li><Link to="/services/chauffeur-service-malaysia" className="hover:text-gold-500 transition-colors">{t.nav.chauffeur}</Link></li>
              <li><Link to="/services/airport-transfer-klia" className="hover:text-gold-500 transition-colors">{t.nav.airport}</Link></li>
            </ul>
          </div>

          {/* Legal/Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">VELO</h3>
            <ul className="space-y-3 text-sm text-neutral-400 mb-8">
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/journal" className="hover:text-gold-500 transition-colors">{t.nav.journal}</Link></li>
              <li><Link to="/offers" className="hover:text-gold-500 transition-colors">{t.nav.offers}</Link></li>
              <li><Link to="/policies" className="hover:text-gold-500 transition-colors">{t.nav.policies}</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">{t.nav.contact}</Link></li>
            </ul>

            <h3 className="text-white font-serif text-lg mb-6">{t.nav.locations}</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link to="/locations/klcc" className="hover:text-gold-500 transition-colors">{t.nav.klcc}</Link></li>
              <li><Link to="/locations/bukit-bintang" className="hover:text-gold-500 transition-colors">{t.nav.bukitBintang}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">{t.nav.contact}</h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 mt-1 shrink-0" />
                <span>{contactInfo.address[lang]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <span>+{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* 
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
             <p className="text-xs text-neutral-600">Designed for Excellence.</p>
             <Link to="/admin" className="text-[10px] text-neutral-800 hover:text-gold-500 transition-colors">Admin</Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
};
