import { useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Admin/Modal';
import ConfirmDialog from '@/Components/Admin/ConfirmDialog';
import { Field, TextInput, Toggle, Button } from '@/Components/Admin/FormField';
import { Plus, Pencil, Trash2, Tags, Newspaper } from 'lucide-react';

const emptyForm = { name: '', is_active: true };

export default function CategoriesIndex({ categories }) {
    const { auth } = usePage().props;
    const can = (p) => (auth?.user?.permissions || []).includes(p);

    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [confirmId, setConfirmId] = useState(null);

    const { data, setData, post, put, processing, errors, reset, clearErrors } = useForm(emptyForm);

    const openCreate = () => {
        setEditingId(null);
        setData(emptyForm);
        clearErrors();
        setModalOpen(true);
    };

    const openEdit = (category) => {
        setEditingId(category.id);
        setData({ name: category.name, is_active: category.is_active });
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
            put(route('admin.categories.update', editingId), options);
        } else {
            post(route('admin.categories.store'), options);
        }
    };

    const destroyForm = useForm({});
    const confirmDelete = () => {
        destroyForm.delete(route('admin.categories.destroy', confirmId), { onFinish: () => setConfirmId(null) });
    };

    return (
        <AdminLayout title="Categories">
            <Head title="Blog Categories" />

            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-400">Organize blog posts into categories visitors can filter by.</p>
                {can('categories.manage') && (
                    <Button onClick={openCreate}>
                        <Plus size={16} /> New Category
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#f2f8ec] text-[#73aa3c] flex items-center justify-center">
                                <Tags size={20} />
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => openEdit(category)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#003567] transition-colors"
                                >
                                    <Pencil size={14} />
                                </button>
                                <button
                                    onClick={() => setConfirmId(category.id)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>

                        <h3 className="font-serif text-lg font-bold text-[#003567] mb-1">{category.name}</h3>
                        <p className="text-xs text-slate-400 flex items-center gap-1.5">
                            <Newspaper size={12} /> {category.blogs_count} blog{category.blogs_count === 1 ? '' : 's'}
                        </p>

                        {!category.is_active && (
                            <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-amber-50 text-amber-600">
                                Inactive
                            </span>
                        )}
                    </div>
                ))}

                {categories.length === 0 && (
                    <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-100 text-slate-400 text-sm">
                        No categories yet. Create your first one.
                    </div>
                )}
            </div>

            <Modal open={modalOpen} onClose={closeModal} title={editingId ? 'Edit Category' : 'New Category'} maxWidth="max-w-sm">
                <form onSubmit={submit} className="space-y-5">
                    <Field label="Category Name" required error={errors.name}>
                        <TextInput value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="e.g. Decarbonisation" />
                    </Field>

                    <Toggle checked={data.is_active} onChange={(v) => setData('is_active', v)} label="Active" />

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                        <Button type="button" variant="outline" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving…' : editingId ? 'Update Category' : 'Create Category'}
                        </Button>
                    </div>
                </form>
            </Modal>

            <ConfirmDialog
                open={confirmId !== null}
                onClose={() => setConfirmId(null)}
                onConfirm={confirmDelete}
                title="Delete this category?"
                description="Categories that have blogs assigned to them can't be deleted."
                confirmLabel="Delete"
            />
        </AdminLayout>
    );
}
