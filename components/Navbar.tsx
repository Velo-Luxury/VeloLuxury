
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Logo } from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/fleet', label: t.fleet },
    { path: '/about', label: t.about },
    { path: '/offers', label: t.offers },
    { path: '/contact', label: t.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-gold-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <button 
            onClick={toggleLang}
            className="flex items-center space-x-1 rtl:space-x-reverse text-gold-500 hover:text-white transition-colors border border-gold-500/30 px-3 py-1 rounded-full"
          >
            <Globe size={14} />
            <span className="text-xs font-bold">{lang.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleLang}
            className="flex items-center text-gold-500"
          >
            <span className="text-xs font-bold">{lang.toUpperCase()}</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-gold-500/20 py-4 flex flex-col items-center space-y-6 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-lg font-serif text-white hover:text-gold-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
