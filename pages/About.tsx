import React from 'react';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const content = {
    en: {
      title: "The Legacy",
      story: "Established in the heart of Kuala Lumpur, VELO LUXURY was born from a simple yet ambitious vision: to transform the car rental industry from a transactional service into a lifestyle experience.",
      missionTitle: "Our Mission",
      mission: "To provide access to the world's most exclusive vehicles with a service level usually reserved for private aviation.",
      visionTitle: "The Vision",
      vision: "To be Southeast Asia's definitive brand for luxury mobility."
    },
    ar: {
      title: "الإرث",
      story: "تأسست فيلو الفاخرة في قلب كوالالمبور، وولدت من رؤية بسيطة ولكنها طموحة: تحويل صناعة تأجير السيارات من خدمة معاملات إلى تجربة نمط حياة.",
      missionTitle: "مهمتنا",
      mission: "توفير الوصول إلى أكثر السيارات تميزاً في العالم بمستوى خدمة عادة ما يكون مخصصاً للطيران الخاص.",
      visionTitle: "الرؤية",
      vision: "أن نكون العلامة التجارية النهائية في جنوب شرق آسيا للتنقل الفاخر."
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{t.title}</h1>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="prose prose-invert prose-lg mx-auto">
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop" 
                alt="VELO HQ" 
                className="w-full h-64 md:h-96 object-cover mb-8 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <p className="text-xl text-neutral-300 font-light leading-relaxed mb-8 first-letter:text-5xl first-letter:text-gold-500 first-letter:font-serif first-letter:mr-3 first-letter:float-left">
                {t.story}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <div className="p-8 bg-dark-800 border-l-2 border-gold-500">
                    <h3 className="text-2xl font-serif text-white mb-4">{t.missionTitle}</h3>
                    <p className="text-neutral-400">{t.mission}</p>
                </div>
                <div className="p-8 bg-dark-800 border-l-2 border-gold-500">
                    <h3 className="text-2xl font-serif text-white mb-4">{t.visionTitle}</h3>
                    <p className="text-neutral-400">{t.vision}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};