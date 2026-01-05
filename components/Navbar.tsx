
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
  }, [location]);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/fleet', label: t.fleet },
    {
      label: t.services,
      children: [
        { path: '/services/wedding-car-rental-kuala-lumpur', label: t.wedding },
        { path: '/services/chauffeur-service-malaysia', label: t.chauffeur },
        { path: '/services/airport-transfer-klia', label: t.airport },
      ]
    },
    {
      label: t.locations,
      children: [
        { path: '/locations/klcc', label: t.klcc },
        { path: '/locations/bukit-bintang', label: t.bukitBintang },
      ]
    },
    { path: '/journal', label: t.journal },
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
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.path ? (
                <Link
                  to={link.path}
                  className="text-sm uppercase tracking-wider text-neutral-300 hover:text-gold-500 transition-colors py-2 block"
                >
                  {link.label}
                </Link>
              ) : (
                <button className="text-sm uppercase tracking-wider text-neutral-300 hover:text-gold-500 transition-colors flex items-center gap-1 py-2 cursor-pointer">
                  {link.label} <ChevronDown size={14} />
                </button>
              )}

              {/* Dropdown Menu */}
              {link.children && (
                <div className="absolute top-full left-0 w-56 bg-dark-900/95 backdrop-blur-md border border-white/5 rounded shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-gold-500/20 py-4 flex flex-col items-center space-y-4 animate-fade-in shadow-2xl max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label} className="w-full text-center">
              {link.path ? (
                <Link
                  to={link.path}
                  className="block py-2 text-lg font-serif text-white hover:text-gold-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <div className="flex flex-col items-center">
                  <span className="text-gold-500 uppercase text-xs tracking-widest mb-2 mt-2">{link.label}</span>
                  {link.children?.map(child => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block py-1 text-neutral-400 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
