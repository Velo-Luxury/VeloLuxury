
import React from 'react';
import { Language } from '../types';
import { Phone, Mail, MapPin } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { useData } from '../context/DataContext';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const { contactInfo } = useData();

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif text-white mb-12 text-center">{t.nav.contact}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           
           {/* Contact Info */}
           <div className="space-y-8">
              <div className="bg-dark-800 p-8 border border-white/5">
                <h3 className="text-xl text-white font-serif mb-6">{lang === 'en' ? 'Get in Touch' : 'تواصل معنا'}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold-500 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">VELO HQ</p>
                      <p className="text-neutral-400 text-sm">{contactInfo.address[lang]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-gold-500" />
                    <div>
                      <p className="text-white font-medium mb-1">{lang === 'en' ? 'Phone / WhatsApp' : 'الهاتف / واتساب'}</p>
                      <p className="text-neutral-400 text-sm">+{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-gold-500" />
                    <div>
                      <p className="text-white font-medium mb-1">Email</p>
                      <p className="text-neutral-400 text-sm">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 p-8 border border-white/5">
                <h3 className="text-xl text-white font-serif mb-4">{lang === 'en' ? 'Opening Hours' : 'ساعات العمل'}</h3>
                 <ul className="space-y-2 text-neutral-400 text-sm">
                    <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 - 20:00</span></li>
                    <li className="flex justify-between"><span>Sat - Sun</span> <span>10:00 - 18:00</span></li>
                 </ul>
              </div>
           </div>

           {/* Map Placeholder */}
           <div className="bg-dark-800 border border-white/5 h-[400px] lg:h-auto relative overflow-hidden">
              <iframe 
                src={contactInfo.mapUrl}
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};
