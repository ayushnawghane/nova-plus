import { useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../Layout';
import { Calendar, Clock, Eye, ArrowLeft, ArrowRight } from 'lucide-react';

function TwitterIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M18.9 2.5h3.2l-7 8 8.2 11h-6.4l-5-6.6-5.7 6.6H2l7.5-8.6-7.9-10.4h6.6l4.5 6.1zm-1.1 17.1h1.8L6.3 4.3H4.4z" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6.2h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" />
        </svg>
    );
}

function FacebookIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7C16.5 3.6 15.5 3.5 14.4 3.5c-2.4 0-4 1.5-4 4.1v2.3H7.8V13h2.6v8z" />
        </svg>
    );
}

export default function BlogArticle({ article, related = [] }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const a = article || {};

    const formatDate = (d) =>
        d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = encodeURIComponent(a.title || 'Nova Plus Blog');
    const shareEncodedUrl = encodeURIComponent(shareUrl);

    return (
        <Layout>
            <Head title={a.title || 'Blog'} />

            <div className="w-full bg-white overflow-hidden">
                <section className="pt-32 pb-6 px-6 bg-[#f8fafc] border-b border-slate-100">
                    <div className="max-w-5xl mx-auto">
                        <Link
                            href={route('blog.index')}
                            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#73aa3c] transition-colors"
                        >
                            <ArrowLeft size={15} /> Back to Blog
                        </Link>
                    </div>
                </section>

                <section className="pt-12 pb-10 px-6 bg-[#f8fafc]">
                    <div className="max-w-5xl mx-auto animate-reveal">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            {a.category && (
                                <span className="px-3 py-1.5 rounded-full bg-[#003567] text-white font-bold text-[10px] uppercase tracking-widest">
                                    {a.category}
                                </span>
                            )}
                            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={13} /> {formatDate(a.published_at)}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={13} /> {a.read_time}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Eye size={13} /> {a.views} views
                                </span>
                            </div>
                        </div>

                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#003567] tracking-tight max-w-4xl">
                            {a.title}
                        </h1>

                        {a.excerpt && (
                            <p className="mt-6 text-base md:text-lg text-slate-500 leading-relaxed max-w-3xl font-light">
                                {a.excerpt}
                            </p>
                        )}
                    </div>
                </section>

                <section className="pb-20 px-6 bg-white">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-8">
                            {a.featured_image_url && (
                                <div className="rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm mb-10">
                                    <div className="aspect-[16/9] w-full">
                                        <img src={a.featured_image_url} alt={a.title} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            )}

                            <div
                                className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-[#003567] prose-a:text-[#73aa3c] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#003567] prose-blockquote:border-[#73aa3c] prose-blockquote:text-slate-600"
                                dangerouslySetInnerHTML={{ __html: a.content || '' }}
                            />

                            <div className="mt-12 rounded-3xl border border-[#e0ebe5] bg-[#f4f7f5] p-7 text-center">
                                <p className="font-serif text-base font-bold text-[#003567] mb-4">Share this article</p>
                                <div className="flex justify-center gap-3">
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareEncodedUrl}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-11 h-11 rounded-full bg-[#003567] text-white flex items-center justify-center hover:bg-[#73aa3c] transition-colors"
                                    >
                                        <TwitterIcon width={16} height={16} />
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareEncodedUrl}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-11 h-11 rounded-full bg-[#003567] text-white flex items-center justify-center hover:bg-[#73aa3c] transition-colors"
                                    >
                                        <LinkedinIcon width={16} height={16} />
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareEncodedUrl}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-11 h-11 rounded-full bg-[#003567] text-white flex items-center justify-center hover:bg-[#73aa3c] transition-colors"
                                    >
                                        <FacebookIcon width={16} height={16} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <aside className="lg:col-span-4">
                            <div className="rounded-3xl border border-[#e0ebe5] bg-[#f4f7f5] p-6 lg:sticky lg:top-28">
                                <div className="flex items-end justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="font-serif text-lg font-bold text-[#003567]">Related Posts</h3>
                                        <div className="mt-2 h-1 w-10 rounded-full bg-[#73aa3c]" />
                                    </div>
                                    <Link href={route('blog.index')} className="text-xs font-bold text-slate-500 hover:text-[#73aa3c] transition-colors">
                                        View all
                                    </Link>
                                </div>

                                <div className="space-y-3">
                                    {related.map((r) => (
                                        <Link
                                            key={r.id}
                                            href={route('blog.show', r.slug)}
                                            className="group block rounded-2xl border border-[#e0ebe5] bg-white p-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                                        >
                                            {r.category && (
                                                <span className="inline-block mb-2 text-[9px] font-bold uppercase tracking-widest text-[#73aa3c]">
                                                    {r.category}
                                                </span>
                                            )}
                                            <p className="text-sm font-bold text-[#003567] leading-snug line-clamp-2 group-hover:text-[#73aa3c] transition-colors">
                                                {r.title}
                                            </p>
                                            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={11} /> {formatDate(r.published_at)}
                                                </span>
                                                <ArrowRight size={13} className="text-slate-300 group-hover:text-[#73aa3c] group-hover:translate-x-0.5 transition-all" />
                                            </div>
                                        </Link>
                                    ))}

                                    {related.length === 0 && (
                                        <p className="text-sm text-slate-400 italic">No related posts yet.</p>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
