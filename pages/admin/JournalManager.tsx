import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { JournalPost } from '../../types';
import { Plus, Trash2, Edit2, Save, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import { SmartTextButton, SmartImageButton } from '../../components/admin/SmartButtons';

export const JournalManager: React.FC = () => {
    const { uploadImage } = useData();
    const [posts, setPosts] = useState<JournalPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingPost, setEditingPost] = useState<Partial<JournalPost> | null>(null);
    const [uploading, setUploading] = useState(false);

    // Topic Suggestion State
    const [suggestedTopics, setSuggestedTopics] = useState<{ en: string; ar: string }[]>([]);
    const [showTopicModal, setShowTopicModal] = useState(false);
    const [suggestingTopics, setSuggestingTopics] = useState(false);

    // File input ref
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const { data, error } = await supabase.from('journal_posts').select('*').order('published_date', { ascending: false });
            if (error) throw error;
            const mappedData: JournalPost[] = (data || []).map((item: any) => ({
                id: item.id,
                title: { en: item.title_en, ar: item.title_ar },
                content: { en: item.content_en, ar: item.content_ar },
                imageUrl: item.image_url,
                slug: item.slug,
                publishedDate: item.published_date
            }));
            setPosts(mappedData);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        if (!editingPost) return;

        try {
            const dbPayload = {
                title_en: editingPost.title?.en,
                title_ar: editingPost.title?.ar,
                content_en: editingPost.content?.en,
                content_ar: editingPost.content?.ar,
                image_url: editingPost.imageUrl,
                slug: editingPost.slug,
                published_date: editingPost.publishedDate || new Date().toISOString().split('T')[0]
            };

            if (editingPost.id) {
                const { error } = await supabase.from('journal_posts').update(dbPayload).eq('id', editingPost.id);
                if (error) throw error;
            } else {
                const { error } = await supabase.from('journal_posts').insert([dbPayload]);
                if (error) throw error;
            }

            setEditingPost(null);
            fetchPosts();
        } catch (error) {
            console.error('Error saving post:', error);
            alert('Failed to save post');
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this post?')) return;
        try {
            const { error } = await supabase.from('journal_posts').delete().eq('id', id);
            if (error) throw error;
            fetchPosts();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length || !editingPost) return;

        setUploading(true);
        try {
            const file = e.target.files[0];
            const url = await uploadImage(file, 'journal');

            setEditingPost(prev => ({ ...prev!, imageUrl: url }));
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Failed to upload image. Make sure "journal" storage bucket exists and is public.');
        } finally {
            setUploading(false);
        }
    };

    // AI Prompts
    // AI Prompts & Logic
    const generateJournalTopics = async () => {
        setSuggestingTopics(true);
        setShowTopicModal(true);
        try {
            const prompt = `Generate 5 engaging, high-end luxury lifestyle blog post titles for a luxury car rental service (Velo Luxury) in Malaysia. 
            Focus on topics like: Hidden Gems, Luxury Travel, Supercar Experiences, Chauffeur Services, Wedding Cars.
            Optimize for SEO and "Generative Engine Optimization" (GEO).
            Return a valid JSON array of objects, where each object has "en" (English Title) and "ar" (Arabic Title).
            Example: [{"en": "Top 5 Luxury Drives", "ar": "أفضل 5 جولات فاخرة"}]`;

            // Dynamic import to avoid SSR issues if any
            const { generateContent } = await import('../../lib/gemini');
            const response = await generateContent(prompt);

            const cleanText = response.replace(/```json|```/g, '').trim();
            const topics = JSON.parse(cleanText);
            setSuggestedTopics(topics);
        } catch (error) {
            console.error("Failed to generate topics:", error);
            alert("Failed to generate topics. Please try again.");
            setShowTopicModal(false);
        } finally {
            setSuggestingTopics(false);
        }
    };

    const genContentPrompt = (lang: 'en' | 'ar') => {
        const title = lang === 'en' ? editingPost?.title?.en : editingPost?.title?.ar;
        if (!title) return '';
        const base = `Write a comprehensive, SEO-optimized luxury lifestyle blog post about "${title}". Include relevant keywords for luxury car rental in Malaysia, Kuala Lumpur, and chauffeur services. Optimize for AI Search (GEO) by answering common user questions directly.`;
        return lang === 'en'
            ? `${base} Use Markdown formatting (h2, h3, lists). Tone: Sophisticated, exclusive, inviting. English.`
            : `${base} Use Markdown formatting. Tone: Sophisticated, exclusive, inviting. Arabic.`;
    };

    const genImagePrompt = () => {
        if (!editingPost?.title?.en) return '';
        return `Editorial magazine style illustration for a luxury article about "${editingPost.title.en}", high fashion, elegant, cinematic lighting, 8k, photorealistic, luxury car lifestyle context.`;
    };


    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-serif text-white">Journal Manager</h1>
                    <button
                        onClick={() => setEditingPost({ title: { en: '', ar: '' }, content: { en: '', ar: '' }, imageUrl: '', slug: '' })}
                        className="flex items-center gap-2 bg-gold-500 text-black px-4 py-2 rounded hover:bg-gold-400 transition-colors"
                    >
                        <Plus size={20} /> New Post
                    </button>
                </div>

                {loading ? (
                    <div className="text-white">Loading journal posts...</div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {posts.map(post => (
                            <div key={post.id} className="bg-dark-800 p-4 rounded border border-white/5 flex flex-col md:flex-row gap-4 items-start">
                                <img src={post.imageUrl} alt={post.title.en} className="w-full md:w-32 h-32 object-cover rounded bg-white/5" />
                                <div className="flex-grow">
                                    <h3 className="text-xl text-white font-serif">{post.title.en}</h3>
                                    <p className="text-neutral-400 text-sm mb-1">{post.slug}</p>
                                    <p className="text-neutral-500 text-xs">{post.publishedDate}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setEditingPost(post)}
                                        className="p-2 text-gold-500 hover:bg-white/5 rounded"
                                    >
                                        <Edit2 size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="p-2 text-red-500 hover:bg-white/5 rounded"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                        {posts.length === 0 && <div className="text-neutral-500 italic">No journal posts found. Create one.</div>}
                    </div>
                )}

                {/* Edit Modal */}
                {editingPost && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
                        <div className="bg-dark-900 border border-white/10 rounded-lg p-6 w-full max-w-2xl space-y-4 max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <h2 className="text-xl text-white font-serif">{editingPost.id ? 'Edit Post' : 'New Post'}</h2>
                                <button onClick={() => setEditingPost(null)} className="text-neutral-400 hover:text-white"><X size={24} /></button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="block text-xs uppercase tracking-wider text-neutral-500">Title (EN)</label>
                                        <button
                                            type="button"
                                            onClick={generateJournalTopics}
                                            className="text-[10px] text-gold-500 hover:text-white flex items-center gap-1"
                                        >
                                            <Loader2 size={10} className={suggestingTopics ? "animate-spin" : "hidden"} />
                                            Suggest Topics
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        value={editingPost.title?.en || ''}
                                        onChange={e => setEditingPost({ ...editingPost, title: { ...editingPost.title!, en: e.target.value } })}
                                        className="w-full bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Title (AR)</label>
                                    <input
                                        type="text"
                                        value={editingPost.title?.ar || ''}
                                        onChange={e => setEditingPost({ ...editingPost, title: { ...editingPost.title!, ar: e.target.value } })}
                                        className="w-full bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none dir-rtl"
                                        dir="rtl"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Slug (URL)</label>
                                <input
                                    type="text"
                                    value={editingPost.slug || ''}
                                    onChange={e => setEditingPost({ ...editingPost, slug: e.target.value })}
                                    className="w-full bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none"
                                />
                            </div>

                            <div className="border-t border-b border-white/5 py-4 my-2">
                                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Featured Image</label>
                                <div className="flex gap-4 items-start">
                                    {editingPost.imageUrl && (
                                        <img src={editingPost.imageUrl} alt="Preview" className="w-24 h-24 object-cover rounded border border-white/10" />
                                    )}
                                    <div className="flex-grow flex flex-col items-start gap-2">
                                        <SmartImageButton
                                            prompt={genImagePrompt()}
                                            bucket="journal"
                                            onImageGenerated={(url) => setEditingPost(prev => ({ ...prev!, imageUrl: url }))}
                                        />
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={handleImageUpload}
                                                className="hidden"
                                                accept="image/*"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => fileInputRef.current?.click()}
                                                disabled={uploading}
                                                className="text-xs text-neutral-400 hover:text-white underline"
                                            >
                                                or upload manually
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-xs uppercase tracking-wider text-neutral-500">Content (EN) - Use Markdown</label>
                                    <SmartTextButton
                                        prompt={genContentPrompt('en')}
                                        onGenerate={(text) => setEditingPost(prev => ({ ...prev!, content: { ...prev!.content!, en: text } }))}
                                    />
                                </div>
                                <textarea
                                    value={editingPost.content?.en || ''}
                                    onChange={e => setEditingPost({ ...editingPost, content: { ...editingPost.content!, en: e.target.value } })}
                                    className="w-full h-32 bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none font-mono text-sm"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-xs uppercase tracking-wider text-neutral-500">Content (AR) - Use Markdown</label>
                                    <SmartTextButton
                                        prompt={genContentPrompt('ar')}
                                        onGenerate={(text) => setEditingPost(prev => ({ ...prev!, content: { ...prev!.content!, ar: text } }))}
                                    />
                                </div>
                                <textarea
                                    value={editingPost.content?.ar || ''}
                                    onChange={e => setEditingPost({ ...editingPost, content: { ...editingPost.content!, ar: e.target.value } })}
                                    className="w-full h-32 bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none font-mono text-sm dir-rtl"
                                    dir="rtl"
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
                                <button onClick={() => setEditingPost(null)} className="px-4 py-2 text-neutral-400 hover:text-white">Cancel</button>
                                <button onClick={handleSave} className="flex items-center gap-2 bg-gold-500 text-black px-6 py-2 rounded hover:bg-gold-400 transition-colors font-bold">
                                    <Save size={18} /> Save Post
                                </button>
                            </div>

                        </div>
                    </div>
                )}

                {/* Topic Suggestion Modal */}
                {showTopicModal && (
                    <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
                        <div className="bg-dark-900 border border-gold-500/30 rounded-lg p-6 w-full max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl text-gold-500 font-serif">AI Topic Suggestions</h3>
                                <button onClick={() => setShowTopicModal(false)} className="text-neutral-500 hover:text-white"><X size={20} /></button>
                            </div>

                            {suggestingTopics ? (
                                <div className="flex flex-col items-center justify-center py-8 text-neutral-400">
                                    <Loader2 className="animate-spin mb-2" size={32} />
                                    <p>Analyzing SEO Trends & Brainstorming...</p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {suggestedTopics.map((topic, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                setEditingPost(prev => ({
                                                    ...prev!,
                                                    title: { en: topic.en, ar: topic.ar },
                                                    // Auto-generate a slug from English title
                                                    slug: topic.en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                                                }));
                                                setShowTopicModal(false);
                                            }}
                                            className="w-full text-left p-3 rounded bg-white/5 hover:bg-gold-500/10 border border-white/5 hover:border-gold-500/50 transition-colors group"
                                        >
                                            <div className="text-white font-medium group-hover:text-gold-400">{topic.en}</div>
                                            <div className="text-neutral-500 text-xs text-right mt-1" dir="rtl">{topic.ar}</div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};
