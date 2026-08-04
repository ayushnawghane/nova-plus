import { Head, Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Newspaper, CheckCircle2, FileEdit, Eye, Users, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function Dashboard({ stats, recentBlogs }) {
    const { auth } = usePage().props;
    const firstName = (auth?.user?.name || 'Admin').split(' ')[0];

    const cards = [
        { label: 'Total Blogs', value: stats.total_blogs, icon: Newspaper, color: '#003567' },
        { label: 'Published', value: stats.published_blogs, icon: CheckCircle2, color: '#73aa3c' },
        { label: 'Drafts', value: stats.draft_blogs, icon: FileEdit, color: '#b6832c' },
        { label: 'Total Views', value: stats.total_views, icon: Eye, color: '#2f7ec7' },
        { label: 'Users', value: stats.total_users, icon: Users, color: '#7a4fd1' },
        { label: 'Roles', value: stats.total_roles, icon: Shield, color: '#d1543f' },
    ];

    return (
        <AdminLayout title="Dashboard">
            <Head title="Admin Dashboard" />

            <div className="relative overflow-hidden rounded-3xl bg-[#003567] px-6 sm:px-9 py-8 sm:py-10 mb-8">
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#73aa3c]/25 blur-3xl animate-pulse-slow" />
                    <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-blue-400/15 blur-3xl" />
                    <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{ backgroundImage: 'radial-gradient(white 1.2px, transparent 1.2px)', backgroundSize: '22px 22px' }}
                    />
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/10 text-[#a9d17a] font-bold text-[11px] uppercase tracking-widest border border-white/10">
                            <Sparkles size={12} />
                            Welcome back
                        </div>
                        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                            Hi {firstName}, here&rsquo;s what&rsquo;s happening
                        </h1>
                        <p className="text-white/50 text-sm mt-2 max-w-md">
                            A quick snapshot of your content and team activity across Nova Plus.
                        </p>
                    </div>
                    {(stats.total_blogs === 0) && (
                        <Link
                            href={route('admin.blogs.index')}
                            className="inline-flex items-center gap-2 bg-[#73aa3c] hover:bg-white text-white hover:text-[#003567] px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-[#73aa3c]/20 shrink-0 w-fit"
                        >
                            Write your first blog <ArrowRight size={15} />
                        </Link>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
                {cards.map((c) => (
                    <div
                        key={c.label}
                        className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                            style={{ backgroundColor: `${c.color}14`, color: c.color }}
                        >
                            <c.icon size={20} />
                        </div>
                        <div className="font-serif text-2xl sm:text-3xl font-black text-[#003567]">{c.value}</div>
                        <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">{c.label}</div>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                    <h2 className="font-serif text-lg font-bold text-[#003567]">Recent Blogs</h2>
                    <Link
                        href={route('admin.blogs.index')}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#73aa3c] hover:text-[#003567] transition-colors"
                    >
                        View all <ArrowRight size={14} />
                    </Link>
                </div>

                {recentBlogs.length === 0 ? (
                    <div className="px-6 py-14 text-center text-slate-400 text-sm">No blogs yet. Create your first post.</div>
                ) : (
                    <div className="divide-y divide-slate-50">
                        {recentBlogs.map((b) => (
                            <div key={b.id} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50/70 transition-colors">
                                <div className="min-w-0">
                                    <p className="font-semibold text-[#003567] text-sm truncate">{b.title}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        by {b.author?.name || '—'} · {new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 shrink-0 ml-4">
                                    <span className="flex items-center gap-1 text-xs text-slate-400">
                                        <Eye size={13} /> {b.views}
                                    </span>
                                    <span
                                        className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                                            b.is_published ? 'bg-[#f2f8ec] text-[#73aa3c]' : 'bg-amber-50 text-amber-600'
                                        }`}
                                    >
                                        {b.is_published ? 'Published' : 'Draft'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
