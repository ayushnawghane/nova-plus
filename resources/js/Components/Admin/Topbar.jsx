import { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { Menu, ChevronDown, LogOut, User as UserIcon } from 'lucide-react';

export default function Topbar({ title, onMenuClick }) {
    const { auth } = usePage().props;
    const [open, setOpen] = useState(false);
    const user = auth?.user;

    const initials = (user?.name || 'A')
        .split(' ')
        .map((w) => w[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

    return (
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 sm:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#003567] hover:bg-slate-100"
                >
                    <Menu size={20} />
                </button>
                <h1 className="font-serif text-lg sm:text-xl font-bold text-[#003567]">{title}</h1>
            </div>

            <div className="relative">
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors"
                >
                    <span className="w-8 h-8 rounded-full bg-[#003567] text-white text-xs font-bold flex items-center justify-center">
                        {initials}
                    </span>
                    <span className="hidden sm:block text-sm font-semibold text-[#003567]">{user?.name}</span>
                    <ChevronDown size={14} className="text-slate-400" />
                </button>

                {open && (
                    <>
                        <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-20">
                            <div className="px-4 py-2.5 border-b border-slate-100 mb-1">
                                <p className="text-sm font-semibold text-[#003567] truncate">{user?.name}</p>
                                <p className="text-xs text-slate-400 truncate">{user?.email}</p>
                                <span className="inline-block mt-1.5 text-[10px] font-bold uppercase tracking-wide text-[#73aa3c] bg-[#f2f8ec] px-2 py-0.5 rounded-full">
                                    {user?.role}
                                </span>
                            </div>
                            <Link
                                href={route('admin.dashboard')}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                            >
                                <UserIcon size={15} /> Dashboard
                            </Link>
                            <button
                                onClick={() => router.post(route('admin.logout'))}
                                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                            >
                                <LogOut size={15} /> Logout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}
