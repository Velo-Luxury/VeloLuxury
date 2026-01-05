import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language } from '../types';
import { SEO } from '../components/SEO';
import { supabase } from '../lib/supabase';
import { Calendar, User, ArrowLeft, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Props {
    lang: Language;
}

export const JournalPost: React.FC<Props> = ({ lang }) => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;
            try {
                const { data, error } = await supabase
                    .from('journal_posts')
                    .select('*')
                    .eq('slug', slug)
                    .single();

                if (error) throw error;
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-dark-900 flex items-center justify-center text-gold-500">
                <Loader2 className="animate-spin" size={32} />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center text-white pt-24">
                <h1 className="text-4xl font-serif mb-4">Post Not Found</h1>
                <Link to="/journal" className="text-gold-500 hover:text-white transition-colors">Back to Journal</Link>
            </div>
        );
    }

    const title = (lang === 'en' ? post.title_en : post.title_ar) || post.title_en || 'Untitled';
    const content = (lang === 'en' ? post.content_en : post.content_ar) || post.content_en || '';

    return (
        <div className="min-h-screen bg-dark-900 pt-24 pb-20">
            <SEO
                title={`${title} | VELO Luxury Journal`}
                description={content ? content.substring(0, 160) : ''}
                image={post.image_url}
            />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/journal" className={`inline-flex items-center gap-2 text-neutral-400 hover:text-gold-500 mb-8 transition-colors ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <ArrowLeft size={16} className={`rtl:rotate-180 ${lang === 'ar' ? 'rotate-180' : ''}`} /> {lang === 'en' ? 'Back to Journal' : 'عودة للمجلة'}
                </Link>

                <div className="text-center mb-12">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-4 block">
                        {lang === 'en' ? 'Editorial' : 'التحرير'}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                        {title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-neutral-500">
                        <span className="flex items-center gap-2 flex-row-reverse"><Calendar size={14} /> {post.published_date}</span>
                        <span className="flex items-center gap-2 flex-row-reverse"><User size={14} /> VELO Editorial</span>
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden mb-12 aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent z-10"></div>
                    <img src={post.image_url} alt={title} className="w-full h-full object-cover" />
                </div>

                <div
                    className={`prose prose-invert prose-lg max-w-none ${lang === 'ar' ? 'rtl text-right' : ''}`}
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                >
                    {/* Render Markdown Content */}
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-gold-500 font-serif" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-gold-500 font-serif mt-12 mb-6" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-white font-serif mt-8 mb-4" {...props} />,
                            strong: ({ node, ...props }) => <strong className="text-gold-400" {...props} />,
                            a: ({ node, ...props }) => <a className="text-gold-500 hover:text-white transition-colors no-underline border-b border-gold-500/30 hover:border-white" {...props} />,
                            ul: ({ node, ...props }) => <ul className={`list-disc marker:text-gold-500 space-y-2 my-6 ${lang === 'ar' ? 'pr-6' : 'pl-6'}`} {...props} />,
                            ol: ({ node, ...props }) => <ol className={`list-decimal marker:text-gold-500 space-y-2 my-6 ${lang === 'ar' ? 'pr-6' : 'pl-6'}`} {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className={`border-gold-500 italic text-neutral-400 my-8 ${lang === 'ar' ? 'border-r-4 pr-6' : 'border-l-4 pl-6'}`} {...props} />,
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
};
