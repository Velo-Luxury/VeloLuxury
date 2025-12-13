
import React from 'react';
import { Phone } from 'lucide-react';
import { useData } from '../context/DataContext';

export const WhatsAppButton: React.FC = () => {
  const { contactInfo } = useData();

  const handleClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hi VELO Luxury, I would like to inquire about your services.`, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <Phone size={24} fill="white" />
    </button>
  );
};
