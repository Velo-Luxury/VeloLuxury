
import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import { Button } from '../../components/Button';
import { ContactInfo } from '../../types';
import { Save } from 'lucide-react';

export const ContactManager: React.FC = () => {
  const { contactInfo, updateContactInfo } = useData();
  const [formData, setFormData] = useState<ContactInfo>(contactInfo);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setFormData(contactInfo);
  }, [contactInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateContactInfo(formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-serif text-white mb-8">Contact Details</h1>

        <form onSubmit={handleSubmit} className="bg-dark-800 p-8 rounded-xl border border-white/5 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-neutral-400 text-sm mb-2">Phone Number (Display)</label>
              <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-dark-900 border border-white/10 rounded p-3 text-white" />
            </div>
            <div>
              <label className="block text-neutral-400 text-sm mb-2">WhatsApp Number (No + or spaces)</label>
              <input type="text" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} className="w-full bg-dark-900 border border-white/10 rounded p-3 text-white" />
            </div>
             <div className="md:col-span-2">
              <label className="block text-neutral-400 text-sm mb-2">Email Address</label>
              <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-dark-900 border border-white/10 rounded p-3 text-white" />
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <h3 className="text-gold-500 text-sm uppercase tracking-wider mb-4">Address</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-neutral-400 text-sm mb-2">English Address</label>
                <input type="text" value={formData.address.en} onChange={e => setFormData({...formData, address: {...formData.address, en: e.target.value}})} className="w-full bg-dark-900 border border-white/10 rounded p-3 text-white" />
              </div>
              <div dir="rtl">
                 <label className="block text-neutral-400 text-sm mb-2">Arabic Address</label>
                <input type="text" value={formData.address.ar} onChange={e => setFormData({...formData, address: {...formData.address, ar: e.target.value}})} className="w-full bg-dark-900 border border-white/10 rounded p-3 text-white" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-neutral-400 text-sm mb-2">Map Embed URL</label>
             <input type="text" value={formData.mapUrl} onChange={e => setFormData({...formData, mapUrl: e.target.value})} className="w-full bg-dark-900 border border-white/10 rounded p-3 text-white text-sm font-mono" />
          </div>

          <div className="flex items-center justify-between pt-6">
             {success && <span className="text-green-500">Changes saved successfully!</span>}
             <Button type="submit" className="ml-auto flex items-center gap-2">
               <Save size={18} /> Save Changes
             </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};
