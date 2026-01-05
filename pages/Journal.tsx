import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { SEO } from '../components/SEO';
import { supabase } from '../lib/supabase';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface Props {
    lang: Language;
}

export const Journal: React.FC<Props> = ({ lang }) => {
    const [posts, setPosts] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase.from('journal_posts').select('*').order('published_date', { ascending: false });
            if (!error && data) {
                const mappedData = data.map(item => ({
                    id: item.id,
                    slug: item.slug,
                    title: lang === 'en' ? item.title_en : item.title_ar,
                    excerpt: lang === 'en' ? item.content_en.substring(0, 150) + '...' : item.content_ar.substring(0, 150) + '...',
                    image: item.image_url,
                    date: item.published_date,
                    author: 'VELO Editorial'
                }));
                setPosts(mappedData);
            }
            setLoading(false);
        };
        fetchPosts();
    }, [lang]);

    return (
        <div className="min-h-screen bg-dark-900 pt-24">
            <SEO
                title={lang === 'en' ? 'The VELO Journal | Luxury Lifestyle Malaysia' : 'مجلة فيلو | نمط الحياة الفاخر في ماليزيا'}
                description={lang === 'en'
                    ? 'Discover the latest in luxury mobility. Reviews, guides, and lifestyle articles for the refined traveler in Kuala Lumpur.'
                    : 'اكتشف أحدث ما في التنقل الفاخر. مراجعات وأدلة ومقالات نمط الحياة للمسافر الراقي في كوالالمبور.'}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-3 block">{lang === 'en' ? 'Editorial' : 'التحرير'}</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        {lang === 'en' ? 'The Journal' : 'المجلة'}
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <Link to={`/journal/${post.slug}`} key={post.id} className="group bg-dark-800 rounded-xl overflow-hidden border border-white/5 hover:border-gold-500 transition-all duration-300">
                            <div className="aspect-video overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold-500 transition-colors">{post.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                                <span className="text-gold-500 text-sm font-bold flex items-center gap-2">
                                    {lang === 'en' ? 'Read Article' : 'اقرأ المقال'} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
