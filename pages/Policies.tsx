import React from 'react';
import { Language } from '../types';

interface PoliciesProps {
  lang: Language;
}

export const Policies: React.FC<PoliciesProps> = ({ lang }) => {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">
          {lang === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}
        </h1>
        
        <div className="space-y-8 text-neutral-400 leading-relaxed">
          <section>
            <h2 className="text-xl text-white mb-3">1. Rental Eligibility</h2>
            <p>Drivers must be at least 23 years of age and possess a valid driving license held for at least 2 years. International driving permits are required for non-Malaysian citizens.</p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">2. Security Deposit</h2>
            <p>A refundable security deposit is required upon vehicle collection. The amount varies depending on the vehicle category (Elegance: RM 1000, Majestic: RM 5000).</p>
          </section>

           <section>
            <h2 className="text-xl text-white mb-3">3. Cancellation Policy</h2>
            <p>Cancellations made 72 hours prior to the booking date will receive a full refund. Cancellations within 72 hours will incur a 50% charge of the total rental fee.</p>
          </section>
        </div>
      </div>
    </div>
  );
};