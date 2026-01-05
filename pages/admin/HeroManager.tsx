import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import { Button } from '../../components/Button';
import { SmartTextButton, SmartImageButton } from '../../components/admin/SmartButtons';
import { Save, Loader2, Image as ImageIcon } from 'lucide-react';
import { HeroContent } from '../../types';

export const HeroManager: React.FC = () => {
    const { heroContent, updateHeroContent, loading } = useData();
    const [formData, setFormData] = useState<HeroContent | null>(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (heroContent) {
            setFormData(heroContent);
        }
    }, [heroContent]);

    const handleSave = async () => {
        if (!formData) return;
        setSaving(true);
        try {
            await updateHeroContent(formData);
            alert('Hero section updated successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to update hero section.');
        } finally {
            setSaving(false);
        }
    };

    const VELO_SCENE_CONTEXT = "in a high-end, dark luxury showroom with glossy black reflective floors, warm ambient golden lighting, cinematic 8k resolution, sleek and modern atmosphere, photorealistic.";

    const generateTitlePrompt = (lang: 'en' | 'ar') => {
        const base = "Write a short, powerful, 3-word luxury headline for a premium car rental service.";
        return lang === 'en'
            ? `${base} English. Examples: 'Command the Road', 'Elevate Your Drive'.`
            : `${base} Arabic. Examples: 'تحكم في الطريق', 'قمة الفخامة'.`;
    };

    const generateSubtitlePrompt = (lang: 'en' | 'ar') => {
        const base = "Write a 1-sentence persuasive subtitle for luxury car rental in Kuala Lumpur.";
        return lang === 'en'
            ? `${base} Focus on exclusivity and speed. English.`
            : `${base} Focus on exclusivity and speed. Arabic.`;
    };

    const generateHeroImagePrompt = () => {
        return `Cinematic wide shot of a luxury fleet (Rolls Royce Ghost, Lamborghini Urus, Ferrari) lined up ${VELO_SCENE_CONTEXT} --ar 16:9`;
    };

    if (loading || !formData) return <AdminLayout><div className="flex justify-center p-10"><Loader2 className="animate-spin" /></div></AdminLayout>;

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif text-white">Hero Section Manager</h1>
                <Button onClick={handleSave} disabled={saving} className="flex items-center gap-2">
                    {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                    Save Changes
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* TEXT CONTENT */}
                <div className="bg-dark-800 p-6 rounded-lg border border-white/5 space-y-6">
                    <h2 className="text-xl text-white font-bold border-b border-white/10 pb-2">Text Content</h2>

                    {/* English */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <label className="text-neutral-400 text-sm">Headline (EN)</label>
                            <SmartTextButton
                                prompt={generateTitlePrompt('en')}
                                onGenerate={(txt) => setFormData({ ...formData, title: { ...formData.title, en: txt } })}
                            />
                        </div>
                        <input
                            type="text"
                            value={formData.title.en}
                            onChange={e => setFormData({ ...formData, title: { ...formData.title, en: e.target.value } })}
                            className="w-full bg-dark-900 border border-white/10 rounded p-3 text-2xl font-serif text-white"
                        />

                        <div className="flex justify-between items-end mt-4">
                            <label className="text-neutral-400 text-sm">Subtitle (EN)</label>
                            <SmartTextButton
                                prompt={generateSubtitlePrompt('en')}
                                onGenerate={(txt) => setFormData({ ...formData, subtitle: { ...formData.subtitle, en: txt } })}
                            />
                        </div>
                        <textarea
                            rows={3}
                            value={formData.subtitle.en}
                            onChange={e => setFormData({ ...formData, subtitle: { ...formData.subtitle, en: e.target.value } })}
                            className="w-full bg-dark-900 border border-white/10 rounded p-3 text-neutral-300"
                        />
                    </div>

                    <div className="border-t border-white/10 my-6"></div>

                    {/* Arabic */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <label className="text-neutral-400 text-sm">Headline (AR)</label>
                            <SmartTextButton
                                prompt={generateTitlePrompt('ar')}
                                onGenerate={(txt) => setFormData({ ...formData, title: { ...formData.title, ar: txt } })}
                            />
                        </div>
                        <input
                            dir="rtl"
                            type="text"
                            value={formData.title.ar}
                            onChange={e => setFormData({ ...formData, title: { ...formData.title, ar: e.target.value } })}
                            className="w-full bg-dark-900 border border-white/10 rounded p-3 text-2xl font-serif text-white"
                        />

                        <div className="flex justify-between items-end mt-4">
                            <label className="text-neutral-400 text-sm">Subtitle (AR)</label>
                            <SmartTextButton
                                prompt={generateSubtitlePrompt('ar')}
                                onGenerate={(txt) => setFormData({ ...formData, subtitle: { ...formData.subtitle, ar: txt } })}
                            />
                        </div>
                        <textarea
                            dir="rtl"
                            rows={3}
                            value={formData.subtitle.ar}
                            onChange={e => setFormData({ ...formData, subtitle: { ...formData.subtitle, ar: e.target.value } })}
                            className="w-full bg-dark-900 border border-white/10 rounded p-3 text-neutral-300"
                        />
                    </div>
                </div>

                {/* VISUALS */}
                <div className="bg-dark-800 p-6 rounded-lg border border-white/5 space-y-6">
                    <h2 className="text-xl text-white font-bold border-b border-white/10 pb-2">Hero Visuals</h2>

                    <div className="relative group aspect-video bg-black rounded-lg overflow-hidden border border-white/10">
                        <img src={formData.imageUrl} alt="Hero Background" className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-3xl font-serif text-white text-center px-4 drop-shadow-lg">{formData.title.en}</h3>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <label className="text-neutral-400 text-sm">Background Image URL</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={formData.imageUrl}
                                onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
                                className="flex-grow bg-dark-900 border border-white/10 rounded p-2 text-white text-sm font-mono"
                            />
                        </div>

                        <div className="p-4 bg-dark-900 rounded border border-gold-500/20">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gold-500 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                    <ImageIcon size={16} /> AI Generation
                                </span>
                            </div>
                            <SmartImageButton
                                label="Generate New Hero Background"
                                prompt={generateHeroImagePrompt()}
                                bucket="cars" // Reusing cars bucket or create 'hero' bucket if needed
                                onImageGenerated={(url) => setFormData({ ...formData, imageUrl: url })}
                            />
                            <p className="text-[10px] text-neutral-500 mt-2">
                                Generates a wide (16:9) cinematic shot matching the Velo Luxury dark showroom theme.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
};
