import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { JournalPost } from '../../types';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import { AdminLayout } from '../../components/AdminLayout';

export const JournalManager: React.FC = () => {
    const [posts, setPosts] = useState<JournalPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingPost, setEditingPost] = useState<Partial<JournalPost> | null>(null);

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
                                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Title (EN)</label>
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

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Image URL</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={editingPost.imageUrl || ''}
                                        onChange={e => setEditingPost({ ...editingPost, imageUrl: e.target.value })}
                                        className="w-full bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none"
                                    />
                                    {editingPost.imageUrl && <img src={editingPost.imageUrl} alt="Preview" className="w-10 h-10 object-cover rounded" />}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Content (EN) - Use Markdown</label>
                                <textarea
                                    value={editingPost.content?.en || ''}
                                    onChange={e => setEditingPost({ ...editingPost, content: { ...editingPost.content!, en: e.target.value } })}
                                    className="w-full h-32 bg-dark-800 border border-white/10 rounded p-2 text-white focus:border-gold-500 outline-none font-mono text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1">Content (AR) - Use Markdown</label>
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
            </div>
        </AdminLayout>
    );
};
