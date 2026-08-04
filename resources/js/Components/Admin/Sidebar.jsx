import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, Newspaper, Tags, Images, MessageSquare, HelpCircle, Shield, Users, X } from 'lucide-react';

const navGroups = [
    {
        items: [
            { label: 'Dashboard', href: () => route('admin.dashboard'), icon: LayoutDashboard, match: 'admin.dashboard', permission: null },
        ],
    },
    {
        label: 'Content',
        items: [
            { label: 'Blogs', href: () => route('admin.blogs.index'), icon: Newspaper, match: 'admin.blogs.*', permission: 'blogs.view' },
            { label: 'Categories', href: () => route('admin.categories.index'), icon: Tags, match: 'admin.categories.*', permission: 'categories.manage' },
            { label: 'Media', href: () => route('admin.media.index'), icon: Images, match: 'admin.media.*', permission: 'media.manage' },
            { label: 'FAQs', href: () => route('admin.faqs.index'), icon: HelpCircle, match: 'admin.faqs.*', permission: 'faqs.manage' },
        ],
    },
    {
        label: 'Administration',
        items: [
            { label: 'Enquiries', href: () => route('admin.enquiries.index'), icon: MessageSquare, match: 'admin.enquiries.*', permission: 'enquiries.manage' },
            { label: 'Roles', href: () => route('admin.roles.index'), icon: Shield, match: 'admin.roles.*', permission: 'roles.manage' },
            { label: 'Users', href: () => route('admin.users.index'), icon: Users, match: 'admin.users.*', permission: 'users.manage' },
        ],
    },
];

export default function Sidebar({ open, onClose }) {
    const { auth } = usePage().props;
    const permissions = auth?.user?.permissions || [];

    const groups = navGroups
        .map((group) => ({
            ...group,
            items: group.items.filter((item) => !item.permission || permissions.includes(item.permission)),
        }))
        .filter((group) => group.items.length > 0);

    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose} />
            )}

            <aside
                className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-[#003567] text-white z-50 flex flex-col transition-transform duration-300 shrink-0 ${
                    open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}
            >
                <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#73aa3c]/20 blur-3xl" />
                </div>

                <div className="relative flex items-center justify-between px-6 py-6 border-b border-white/10">
                    <img
                        src="/Nova PLus Logo.png"
                        alt="Nova Plus"
                        className="h-8 w-auto object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <button onClick={onClose} className="lg:hidden text-white/70 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                <nav className="relative flex-1 px-4 py-6 space-y-6 overflow-y-auto">
                    {groups.map((group) => (
                        <div key={group.label || 'root'}>
                            {group.label && (
                                <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                                    {group.label}
                                </p>
                            )}
                            <div className="space-y-1">
                                {group.items.map((item) => {
                                    const active = route().current(item.match);
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href()}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                                                active
                                                    ? 'bg-[#73aa3c] text-white shadow-lg shadow-[#73aa3c]/20'
                                                    : 'text-white/65 hover:bg-white/10 hover:text-white'
                                            }`}
                                        >
                                            <Icon size={18} />
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                <div className="relative px-6 py-5 border-t border-white/10 text-[11px] text-white/35">
                    Nova Plus Admin
                </div>
            </aside>
        </>
    );
}
