import { useEffect, useMemo, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../Layout';
import PageHeader from '../Components/PageHeader';
import { Search, Calendar, Clock, ArrowRight, Star } from 'lucide-react';

export default function Blog({ blogs = [], categories = [] }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeCategory, setActiveCategory] = useState('all');
    const [query, setQuery] = useState('');

    const allCategories = useMemo(
        () => [{ label: 'All Posts', count: blogs.length }, ...categories],
        [categories, blogs.length]
    );

    const filtered = useMemo(() => {
        let list = [...blogs];

        if (activeCategory !== 'all') {
            list = list.filter((b) => b.category === activeCategory);
        }

        const q = query.trim().toLowerCase();
        if (q) {
            list = list.filter(
                (b) => b.title.toLowerCase().includes(q) || (b.excerpt || '').toLowerCase().includes(q)
            );
        }

        return list;
    }, [blogs, activeCategory, query]);

    const featured = activeCategory === 'all' && !query ? filtered.filter((b) => b.is_featured) : [];
    const rest = featured.length ? filtered.filter((b) => !b.is_featured) : filtered;

    const formatDate = (d) =>
        d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

    return (
        <Layout>
            <Head title="Blog" />
            <div className="w-full bg-[#f8fafc] overflow-hidden">
                <PageHeader
                    eyebrow="Resources & News"
                    title="ESG Insights, Perspectives & Practical Guidance"
                    description="Deep dives, explainers, and updates across ESG, sustainability, carbon accounting and governance — written for teams building real programs, not just reports."
                />

                {/* Search + Category Filter */}
                <section className="py-10 px-6 bg-white border-b border-slate-100">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between">
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search articles…"
                                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-[#f9fbfa] text-sm text-slate-700 outline-none focus:border-[#73aa3c] focus:bg-white transition-colors"
                            />
                        </div>

                        <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-end">
                            {allCategories.map((c) => {
                                const value = c.label === 'All Posts' ? 'all' : c.label;
                                const active = activeCategory === value;
                                return (
                                    <button
                                        key={c.label}
                                        onClick={() => setActiveCategory(value)}
                                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                                            active
                                                ? 'bg-[#003567] text-white shadow-md shadow-[#003567]/20'
                                                : 'bg-white text-slate-500 border border-slate-200 hover:border-[#73aa3c]/40 hover:text-[#003567]'
                                        }`}
                                    >
                                        {c.label} <span className="opacity-60">({c.count})</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Featured */}
                {featured.length > 0 && (
                    <section className="py-20 px-6 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-10">
                                <span className="esg-eyebrow">Editor&rsquo;s Picks</span>
                                <h2 className="font-serif text-3xl md:text-4xl text-[#003567] font-extrabold">Featured Posts</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {featured.map((b) => (
                                    <BlogCard key={b.id} b={b} featured formatDate={formatDate} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Grid */}
                <section className="py-20 px-6 bg-[#f8fafc] relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
                            <div>
                                <span className="esg-eyebrow">
                                    {activeCategory === 'all' ? 'Latest Posts' : activeCategory}
                                </span>
                                <h2 className="font-serif text-3xl md:text-4xl text-[#003567] font-extrabold">
                                    {rest.length} article{rest.length !== 1 ? 's' : ''}
                                </h2>
                            </div>
                        </div>

                        {rest.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-[2.5rem] border border-[#e0ebe5]">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                                    <Search className="h-7 w-7 text-slate-300" />
                                </div>
                                <h3 className="font-serif text-lg font-bold text-[#003567] mb-1">No articles found</h3>
                                <p className="text-slate-500 text-sm">Try a different search term or category.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {rest.map((b) => (
                                    <BlogCard key={b.id} b={b} formatDate={formatDate} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </Layout>
    );
}

function BlogCard({ b, featured = false, formatDate }) {
    return (
        <Link
            href={route('blog.show', b.slug)}
            className="flex flex-col bg-[#f4f7f5] border border-[#e0ebe5] rounded-[2.5rem] overflow-hidden group hover:shadow-xl hover:border-[#73aa3c]/20 hover:-translate-y-1.5 transition-all duration-500"
        >
            <div className={`relative w-full overflow-hidden bg-slate-100 ${featured ? 'aspect-[16/9]' : 'aspect-[16/9]'}`}>
                {b.featured_image_url ? (
                    <img
                        src={b.featured_image_url}
                        alt={b.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#e8f0e8] to-[#dbe8db] flex items-center justify-center">
                        <span className="text-[#73aa3c]/50 text-sm font-semibold">Nova Plus</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-[#003567]/10 mix-blend-multiply" />
                {b.category && (
                    <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#003567] text-white font-bold text-[9px] uppercase tracking-widest">
                        {b.category}
                    </span>
                )}
                {b.is_featured && (
                    <span className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                        <Star size={14} className="text-amber-400 fill-amber-400" />
                    </span>
                )}
            </div>

            <div className={`p-8 ${featured ? 'md:p-10' : ''} flex flex-col justify-between flex-grow text-left`}>
                <div>
                    <div className="flex items-center gap-3 text-slate-400 text-xs mb-4">
                        <span className="flex items-center gap-1">
                            <Calendar size={12} /> {formatDate(b.published_at)}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="flex items-center gap-1">
                            <Clock size={12} /> {b.read_time}
                        </span>
                    </div>
                    <h3
                        className={`font-serif text-[#003567] font-bold leading-snug mb-4 group-hover:text-[#73aa3c] transition-colors duration-300 ${
                            featured ? 'text-xl md:text-2xl' : 'text-xl'
                        }`}
                    >
                        {b.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light mb-8 line-clamp-3">{b.excerpt}</p>
                </div>

                <div className="flex items-center gap-2 text-[#003567] font-bold text-xs uppercase tracking-wider group-hover:text-[#73aa3c] transition-colors duration-300 mt-auto">
                    Read Article <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
