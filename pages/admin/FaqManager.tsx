
import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import { Button } from '../../components/Button';
import { FAQ } from '../../types';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

export const FaqManager: React.FC = () => {
  const { faqs, addFaq, updateFaq, deleteFaq } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);

  const emptyFaq: FAQ = {
    id: '',
    question: { en: '', ar: '' },
    answer: { en: '', ar: '' }
  };

  const [formData, setFormData] = useState<FAQ>(emptyFaq);

  const openAddModal = () => {
    setEditingFaq(null);
    setFormData({ ...emptyFaq, id: Date.now().toString() });
    setIsModalOpen(true);
  };

  const openEditModal = (faq: FAQ) => {
    setEditingFaq(faq);
    setFormData(faq);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingFaq) {
      updateFaq(formData);
    } else {
      addFaq(formData);
    }
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-white">FAQ Manager</h1>
        <Button onClick={openAddModal} className="flex items-center gap-2">
          <Plus size={18} /> Add Question
        </Button>
      </div>

      <div className="space-y-4">
        {faqs.map(faq => (
          <div key={faq.id} className="bg-dark-800 p-6 rounded-lg border border-white/5 hover:border-gold-500/30 transition-colors">
            <div className="flex justify-between items-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full pr-8">
                 <div>
                   <span className="text-xs text-gold-500 uppercase tracking-widest mb-1 block">English</span>
                   <h3 className="text-white font-medium mb-2">{faq.question.en}</h3>
                   <p className="text-neutral-400 text-sm">{faq.answer.en}</p>
                 </div>
                 <div dir="rtl">
                   <span className="text-xs text-gold-500 uppercase tracking-widest mb-1 block">Arabic</span>
                   <h3 className="text-white font-medium mb-2">{faq.question.ar}</h3>
                   <p className="text-neutral-400 text-sm">{faq.answer.ar}</p>
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => openEditModal(faq)} className="text-blue-400 hover:text-white"><Edit2 size={18} /></button>
                <button onClick={() => deleteFaq(faq.id)} className="text-red-400 hover:text-white"><Trash2 size={18} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-dark-800 w-full max-w-2xl rounded-xl border border-white/10 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-white font-serif">{editingFaq ? 'Edit FAQ' : 'Add FAQ'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-neutral-400 hover:text-white"><X /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-gold-500 text-sm uppercase tracking-wider border-b border-white/10 pb-2">English</h3>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Question</label>
                  <input type="text" required value={formData.question.en} onChange={e => setFormData({...formData, question: {...formData.question, en: e.target.value}})} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Answer</label>
                  <textarea rows={3} required value={formData.answer.en} onChange={e => setFormData({...formData, answer: {...formData.answer, en: e.target.value}})} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white"></textarea>
                </div>

                <h3 className="text-gold-500 text-sm uppercase tracking-wider border-b border-white/10 pb-2 mt-6">Arabic</h3>
                <div dir="rtl">
                  <label className="block text-neutral-400 text-sm mb-1">السؤال</label>
                  <input type="text" required value={formData.question.ar} onChange={e => setFormData({...formData, question: {...formData.question, ar: e.target.value}})} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                </div>
                <div dir="rtl">
                  <label className="block text-neutral-400 text-sm mb-1">الجواب</label>
                  <textarea rows={3} required value={formData.answer.ar} onChange={e => setFormData({...formData, answer: {...formData.answer, ar: e.target.value}})} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white"></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-4 border-t border-white/10 pt-6">
                <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit">{editingFaq ? 'Update' : 'Add'}</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
