import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Service } from '../../types';
import { Plus, Trash2, Edit2, Save, X, Briefcase } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { AdminLayout } from '../../components/AdminLayout';

export const ServiceManager: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingService, setEditingService] = useState<Partial<Service> | null>(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const { data, error } = await supabase.from('services').select('*').order('created_at', { ascending: false });
            if (error) throw error;

            const mappedData: Service[] = (data || []).map((item: any) => ({
                id: item.id,
                title: { en: item.title_en, ar: item.title_ar },
                description: { en: item.description_en, ar: item.description_ar },
                iconName: item.icon_name
            }));
            setServices(mappedData);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        if (!editingService) return;

        try {
            const dbPayload = {
                title_en: editingService.title?.en,
                title_ar: editingService.title?.ar,
                description_en: editingService.description?.en,
                description_ar: editingService.description?.ar,
                icon_name: editingService.iconName
            };

            if (editingService.id) {
                const { error } = await supabase.from('services').update(dbPayload).eq('id', editingService.id);
                if (error) throw error;
            } else {
                const { error } = await supabase.from('services').insert([dbPayload]);
                if (error) throw error;
            }

            setEditingService(null);
            fetchServices();
        } catch (error) {
            console.error('Error saving service:', error);
            alert('Failed to save service');
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this service?')) return;
        try {
            const { error } = await supabase.from('services').delete().eq('id', id);
            if (error) throw error;
            fetchServices();
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    // Helper to render dynamic icon
    const renderIcon = (iconName: string, size = 20) => {
        const Icon = (LucideIcons as any)[iconName];
        return Icon ? <Icon size={size} /> : <Briefcase size={size} />;
    };

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-serif text-white">Service Manager</h1>
                    <button
                        onClick={() => setEditingService({ title: { en: '', ar: '' }, description: { en: '', ar: '' }, iconName: 'Briefcase' })}
                        className="flex items-center gap-2 bg-gold-500 text-black px-4 py-2 rounded hover:bg-gold-400 transition-colors"
                    >
                        <Plus size={20} /> New Service
                    </button>
                </div>

                {loading ? (
                    <div className="text-white">Loading services...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(service => (
                            <div key={service.id} className="bg-dark-800 p-6 rounded border border-white/5 flex flex-col gap-4">
                                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500">
                                    {renderIcon(service.iconName, 24)}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl text-white font-serif mb-2">{service.title.en}</h3>
                                    <p className="text-neutral-400 text-sm line-clamp-3">{service.description.en}</p>
                                </div>
                                <div className="flex justify-end gap-2 pt-4 border-t border-white/5">
                                    <button
                                        onClick={() => setEditingService(service)}
                                        className="p-2 text-gold-500 hover:bg-white/5 rounded"
                                    >
                                        <Edit2 size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service.id)}
                                        className="p-2 text-red-500 hover:bg-white/5 rounded"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                        {services.length === 0 && <div className="text-neutral-500 italic col-span-3 text-center py-12">No services found. Create one.</div>}
                    </div>
                )}

                {/* Edit Modal */}
                {editingService && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
                        <div className="bg-dark-900 border border-white/10 rounded-lg p-6 w-full max-w-2xl space-y-4 max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <h2 className="text-xl text-white font-serif">{editingService.id ? 'Edit Service' : 'New Service'}</h2>
                                <button onClick={() => setEditingService(null)} className="text-neutral-400 hover:text-white"><X size={24} /></button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Title (EN)</label>
                                    <input
                                        type="text"
                                        value={editingService.title?.en || ''}
                                        onChange={e => setEditingService({ ...editingService, title: { ...editingService.title!, en: e.target.value } })}
                                        className="w-full bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Title (AR)</label>
                                    <input
                                        type="text"
                                        value={editingService.title?.ar || ''}
                                        onChange={e => setEditingService({ ...editingService, title: { ...editingService.title!, ar: e.target.value } })}
                                        className="w-full bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none dir-rtl"
                                        dir="rtl"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Icon Name (Lucide React)</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={editingService.iconName || ''}
                                        onChange={e => setEditingService({ ...editingService, iconName: e.target.value })}
                                        placeholder="e.g. Heart, Plane, UserCheck"
                                        className="w-full bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none"
                                    />
                                    <div className="w-10 h-10 bg-dark-800 border border-white/10 rounded flex items-center justify-center text-gold-500">
                                        {editingService.iconName && renderIcon(editingService.iconName)}
                                    </div>
                                </div>
                                <p className="text-xs text-neutral-500 mt-1">Use icon names from <a href="https://lucide.dev/icons" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">Lucide React</a></p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Description (EN)</label>
                                    <textarea
                                        value={editingService.description?.en || ''}
                                        onChange={e => setEditingService({ ...editingService, description: { ...editingService.description!, en: e.target.value } })}
                                        className="w-full h-24 bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Description (AR)</label>
                                    <textarea
                                        value={editingService.description?.ar || ''}
                                        onChange={e => setEditingService({ ...editingService, description: { ...editingService.description!, ar: e.target.value } })}
                                        className="w-full h-24 bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none text-sm dir-rtl"
                                        dir="rtl"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
                                <button onClick={() => setEditingService(null)} className="px-4 py-2 text-neutral-400 hover:text-white">Cancel</button>
                                <button onClick={handleSave} className="flex items-center gap-2 bg-gold-500 text-black px-6 py-2 rounded hover:bg-gold-400 transition-colors font-bold">
                                    <Save size={18} /> Save Service
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};
