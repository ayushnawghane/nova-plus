import { useMemo, useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Admin/Modal';
import ConfirmDialog from '@/Components/Admin/ConfirmDialog';
import { Search, Trash2, Mail, Building2, Tag, Eye, MessageSquareOff } from 'lucide-react';

export default function EnquiriesIndex({ enquiries }) {
    const { auth } = usePage().props;
    const can = (p) => (auth?.user?.permissions || []).includes(p);

    const [search, setSearch] = useState('');
    const [viewing, setViewing] = useState(null);
    const [confirmId, setConfirmId] = useState(null);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return enquiries;
        return enquiries.filter(
            (e) =>
                e.name.toLowerCase().includes(q) ||
                e.email.toLowerCase().includes(q) ||
                (e.company_name || '').toLowerCase().includes(q) ||
                (e.query_type || '').toLowerCase().includes(q)
        );
    }, [enquiries, search]);

    const destroyForm = useForm({});
    const confirmDelete = () => {
        destroyForm.delete(route('admin.enquiries.destroy', confirmId), {
            onFinish: () => setConfirmId(null),
            onSuccess: () => setViewing(null),
        });
    };

    const formatDate = (d) =>
        new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });

    return (
        <AdminLayout title="Enquiries">
            <Head title="Contact Enquiries" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <p className="text-sm text-slate-400">Submissions from the website's "Get In Touch" form.</p>
                <div className="relative w-full sm:max-w-xs">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search enquiries…"
                        className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white text-sm outline-none focus:border-[#73aa3c] transition-colors"
                    />
                </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-100 text-left text-[11px] uppercase tracking-wide text-slate-400">
                                <th className="px-6 py-4 font-bold">Contact</th>
                                <th className="px-4 py-4 font-bold">Company</th>
                                <th className="px-4 py-4 font-bold">Inquiry Type</th>
                                <th className="px-4 py-4 font-bold">Received</th>
                                <th className="px-6 py-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filtered.map((e) => (
                                <tr key={e.id} className="hover:bg-slate-50/60 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-semibold text-[#003567]">{e.name}</p>
                                        <p className="text-xs text-slate-400 flex items-center gap-1">
                                            <Mail size={11} /> {e.email}
                                        </p>
                                    </td>
                                    <td className="px-4 py-4 text-slate-500">{e.company_name || '—'}</td>
                                    <td className="px-4 py-4 text-slate-500">{e.query_type || '—'}</td>
                                    <td className="px-4 py-4 text-slate-500 whitespace-nowrap">{formatDate(e.created_at)}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-1">
                                            <button
                                                onClick={() => setViewing(e)}
                                                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#003567] transition-colors"
                                            >
                                                <Eye size={15} />
                                            </button>
                                            {can('enquiries.manage') && (
                                                <button
                                                    onClick={() => setConfirmId(e.id)}
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={15} />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filtered.length === 0 && (
                        <div className="px-6 py-16 text-center">
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                                <MessageSquareOff size={22} className="text-slate-300" />
                            </div>
                            <p className="text-slate-400 text-sm">
                                {enquiries.length === 0 ? 'No enquiries yet.' : 'No enquiries match your search.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <Modal open={!!viewing} onClose={() => setViewing(null)} title="Enquiry Details" maxWidth="max-w-lg">
                {viewing && (
                    <div className="space-y-5">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#003567]/60 mb-1">Name</p>
                            <p className="text-sm font-semibold text-[#003567]">{viewing.name}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#003567]/60 mb-1">Email</p>
                            <a href={`mailto:${viewing.email}`} className="text-sm font-semibold text-[#73aa3c] hover:underline">
                                {viewing.email}
                            </a>
                        </div>
                        {viewing.company_name && (
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wide text-[#003567]/60 mb-1 flex items-center gap-1.5">
                                    <Building2 size={12} /> Company
                                </p>
                                <p className="text-sm text-slate-600">{viewing.company_name}</p>
                            </div>
                        )}
                        {viewing.query_type && (
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wide text-[#003567]/60 mb-1 flex items-center gap-1.5">
                                    <Tag size={12} /> Inquiry Type
                                </p>
                                <p className="text-sm text-slate-600">{viewing.query_type}</p>
                            </div>
                        )}
                        {viewing.message && (
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wide text-[#003567]/60 mb-1">Message</p>
                                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap rounded-xl bg-slate-50 p-4">
                                    {viewing.message}
                                </p>
                            </div>
                        )}
                        <p className="text-xs text-slate-400 pt-2 border-t border-slate-100">
                            Received {formatDate(viewing.created_at)}
                        </p>
                    </div>
                )}
            </Modal>

            <ConfirmDialog
                open={confirmId !== null}
                onClose={() => setConfirmId(null)}
                onConfirm={confirmDelete}
                title="Delete this enquiry?"
                description="This will permanently remove the submission."
                confirmLabel="Delete"
            />
        </AdminLayout>
    );
}
