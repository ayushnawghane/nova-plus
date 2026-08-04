import { useState } from 'react';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Admin/Modal';
import ConfirmDialog from '@/Components/Admin/ConfirmDialog';
import { Field, TextInput, TextArea, Toggle, Button } from '@/Components/Admin/FormField';
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown, HelpCircle } from 'lucide-react';

const emptyForm = { question: '', answer: '', is_active: true };

export default function FaqsIndex({ faqs }) {
    const { auth } = usePage().props;
    const can = (p) => (auth?.user?.permissions || []).includes(p);

    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [confirmId, setConfirmId] = useState(null);

    const { data, setData, put, processing, errors, reset, clearErrors } = useForm(emptyForm);

    const openCreate = () => {
        setEditingId(null);
        setData(emptyForm);
        clearErrors();
        setModalOpen(true);
    };

    const openEdit = (faq) => {
        setEditingId(faq.id);
        setData({ question: faq.question, answer: faq.answer, is_active: faq.is_active });
        clearErrors();
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        reset();
        clearErrors();
    };

    const submit = (e) => {
        e.preventDefault();
        const options = { onSuccess: closeModal };
        if (editingId) {
            put(route('admin.faqs.update', editingId), options);
        } else {
            const nextOrder = faqs.length ? Math.max(...faqs.map((f) => f.sort_order)) + 1 : 0;
            router.post(route('admin.faqs.store'), { ...data, sort_order: nextOrder }, options);
        }
    };

    const destroyForm = useForm({});
    const confirmDelete = () => {
        destroyForm.delete(route('admin.faqs.destroy', confirmId), { onFinish: () => setConfirmId(null) });
    };

    const move = (faq, direction) => {
        const index = faqs.findIndex((f) => f.id === faq.id);
        const swapWith = faqs[index + direction];
        if (!swapWith) return;

        router.put(route('admin.faqs.update', faq.id), { ...faq, sort_order: swapWith.sort_order }, { preserveScroll: true });
        router.put(route('admin.faqs.update', swapWith.id), { ...swapWith, sort_order: faq.sort_order }, { preserveScroll: true });
    };

    return (
        <AdminLayout title="FAQs">
            <Head title="Frequently Asked Questions" />

            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-400">Manage the FAQ accordion shown on the homepage.</p>
                {can('faqs.manage') && (
                    <Button onClick={openCreate}>
                        <Plus size={16} /> New FAQ
                    </Button>
                )}
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl divide-y divide-slate-50 overflow-hidden">
                {faqs.map((faq, index) => (
                    <div key={faq.id} className="flex items-start gap-4 px-6 py-5">
                        <div className="flex flex-col gap-1 pt-0.5 shrink-0">
                            <button
                                onClick={() => move(faq, -1)}
                                disabled={index === 0}
                                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#003567] disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
                            >
                                <ArrowUp size={14} />
                            </button>
                            <button
                                onClick={() => move(faq, 1)}
                                disabled={index === faqs.length - 1}
                                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#003567] disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
                            >
                                <ArrowDown size={14} />
                            </button>
                        </div>

                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1.5">
                                <p className="font-semibold text-[#003567] text-sm">{faq.question}</p>
                                {!faq.is_active && (
                                    <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 shrink-0">
                                        Hidden
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{faq.answer}</p>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                            <button
                                onClick={() => openEdit(faq)}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#003567] transition-colors"
                            >
                                <Pencil size={15} />
                            </button>
                            <button
                                onClick={() => setConfirmId(faq.id)}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                            >
                                <Trash2 size={15} />
                            </button>
                        </div>
                    </div>
                ))}

                {faqs.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                            <HelpCircle size={22} className="text-slate-300" />
                        </div>
                        <p className="text-slate-400 text-sm">No FAQs yet. Create your first one.</p>
                    </div>
                )}
            </div>

            <Modal open={modalOpen} onClose={closeModal} title={editingId ? 'Edit FAQ' : 'New FAQ'} maxWidth="max-w-lg">
                <form onSubmit={submit} className="space-y-5">
                    <Field label="Question" required error={errors.question}>
                        <TextInput value={data.question} onChange={(e) => setData('question', e.target.value)} placeholder="e.g. Is ESG only for large listed companies?" />
                    </Field>

                    <Field label="Answer" required error={errors.answer}>
                        <TextArea rows={5} value={data.answer} onChange={(e) => setData('answer', e.target.value)} placeholder="Write a clear, concise answer…" />
                    </Field>

                    <Toggle checked={data.is_active} onChange={(v) => setData('is_active', v)} label="Visible on site" />

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                        <Button type="button" variant="outline" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving…' : editingId ? 'Update FAQ' : 'Create FAQ'}
                        </Button>
                    </div>
                </form>
            </Modal>

            <ConfirmDialog
                open={confirmId !== null}
                onClose={() => setConfirmId(null)}
                onConfirm={confirmDelete}
                title="Delete this FAQ?"
                description="This will remove it from the homepage immediately."
                confirmLabel="Delete"
            />
        </AdminLayout>
    );
}
