import { useMemo, useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Admin/Modal';
import ConfirmDialog from '@/Components/Admin/ConfirmDialog';
import MediaPicker from '@/Components/Admin/MediaPicker';
import RichTextEditor from '@/Components/Admin/RichTextEditor';
import { Field, TextInput, TextArea, Select, Toggle, Button } from '@/Components/Admin/FormField';
import { Plus, Pencil, Trash2, Search, Star, Eye, ImagePlus, X, FolderOpen } from 'lucide-react';

const emptyForm = {
    title: '',
    excerpt: '',
    content: '',
    category_id: '',
    published_at: new Date().toISOString().slice(0, 10),
    is_featured: false,
    is_published: true,
    featured_image: null,
    featured_image_path: '',
    remove_featured_image: false,
};

export default function BlogsIndex({ blogs, categories, uploads = [] }) {
    const { auth } = usePage().props;
    const permissions = auth?.user?.permissions || [];
    const can = (p) => permissions.includes(p);

    const [search, setSearch] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [pickerOpen, setPickerOpen] = useState(false);
    const [confirmId, setConfirmId] = useState(null);

    const { data, setData, post, processing, errors, reset, clearErrors, transform } = useForm(emptyForm);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return blogs;
        return blogs.filter(
            (b) =>
                b.title.toLowerCase().includes(q) ||
                (b.category_name || '').toLowerCase().includes(q) ||
                (b.author || '').toLowerCase().includes(q)
        );
    }, [blogs, search]);

    const openCreate = () => {
        setEditingId(null);
        reset();
        setData(emptyForm);
        setImagePreview(null);
        clearErrors();
        setModalOpen(true);
    };

    const openEdit = (blog) => {
        setEditingId(blog.id);
        setData({
            title: blog.title,
            excerpt: blog.excerpt,
            content: blog.content,
            category_id: blog.category_id ?? '',
            published_at: blog.published_at,
            is_featured: blog.is_featured,
            is_published: blog.is_published,
            featured_image: null,
            featured_image_path: '',
            remove_featured_image: false,
        });
        setImagePreview(blog.featured_image_url);
        clearErrors();
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setEditingId(null);
        reset();
        setImagePreview(null);
        clearErrors();
    };

    const onFilePick = (e) => {
        const file = e.target.files?.[0] || null;
        setData((prev) => ({ ...prev, featured_image: file, featured_image_path: '', remove_featured_image: false }));
        setImagePreview(file ? URL.createObjectURL(file) : null);
    };

    const pickFromLibrary = (upload) => {
        setData((prev) => ({ ...prev, featured_image: null, featured_image_path: upload.path, remove_featured_image: false }));
        setImagePreview(upload.url);
        setPickerOpen(false);
    };

    const uploadNewFromPicker = (file) => {
        setData((prev) => ({ ...prev, featured_image: file, featured_image_path: '', remove_featured_image: false }));
        setImagePreview(URL.createObjectURL(file));
        setPickerOpen(false);
    };

    const removeImage = () => {
        setData((prev) => ({ ...prev, featured_image: null, featured_image_path: '', remove_featured_image: true }));
        setImagePreview(null);
    };

    const submit = (e) => {
        e.preventDefault();

        if (editingId) {
            transform((d) => ({ ...d, _method: 'put' }));
            post(route('admin.blogs.update', editingId), {
                forceFormData: true,
                onSuccess: closeModal,
            });
        } else {
            transform((d) => d);
            post(route('admin.blogs.store'), {
                forceFormData: true,
                onSuccess: closeModal,
            });
        }
    };

    const destroyForm = useForm({});
    const confirmDelete = () => {
        destroyForm.delete(route('admin.blogs.destroy', confirmId), {
            onFinish: () => setConfirmId(null),
        });
    };

    return (
        <AdminLayout title="Blogs">
            <Head title="Manage Blogs" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="relative w-full sm:max-w-xs">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search blogs…"
                        className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white text-sm outline-none focus:border-[#73aa3c] transition-colors"
                    />
                </div>

                {can('blogs.create') && (
                    <Button onClick={openCreate}>
                        <Plus size={16} /> New Blog
                    </Button>
                )}
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-100 text-left text-[11px] uppercase tracking-wide text-slate-400">
                                <th className="px-6 py-4 font-bold">Blog</th>
                                <th className="px-4 py-4 font-bold">Category</th>
                                <th className="px-4 py-4 font-bold">Date</th>
                                <th className="px-4 py-4 font-bold">Views</th>
                                <th className="px-4 py-4 font-bold">Status</th>
                                <th className="px-6 py-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filtered.map((b) => (
                                <tr key={b.id} className="hover:bg-slate-50/60 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className="w-14 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                                                {b.featured_image_url ? (
                                                    <img src={b.featured_image_url} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                        <ImagePlus size={16} />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-semibold text-[#003567] truncate max-w-[240px]">{b.title}</p>
                                                <p className="text-xs text-slate-400 truncate max-w-[240px]">by {b.author || '—'}</p>
                                            </div>
                                            {b.is_featured && <Star size={14} className="text-amber-400 fill-amber-400 shrink-0" />}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-slate-500">{b.category_name || '—'}</td>
                                    <td className="px-4 py-4 text-slate-500 whitespace-nowrap">
                                        {new Date(b.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="px-4 py-4 text-slate-500">
                                        <span className="inline-flex items-center gap-1">
                                            <Eye size={13} /> {b.views}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                                                b.is_published ? 'bg-[#f2f8ec] text-[#73aa3c]' : 'bg-amber-50 text-amber-600'
                                            }`}
                                        >
                                            {b.is_published ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-1">
                                            {can('blogs.edit') && (
                                                <button
                                                    onClick={() => openEdit(b)}
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#003567] transition-colors"
                                                >
                                                    <Pencil size={15} />
                                                </button>
                                            )}
                                            {can('blogs.delete') && (
                                                <button
                                                    onClick={() => setConfirmId(b.id)}
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
                        <div className="px-6 py-16 text-center text-slate-400 text-sm">No blogs found.</div>
                    )}
                </div>
            </div>

            <Modal open={modalOpen} onClose={closeModal} title={editingId ? 'Edit Blog' : 'New Blog'} maxWidth="max-w-3xl">
                <form onSubmit={submit} className="space-y-5">
                    <Field label="Title" required error={errors.title}>
                        <TextInput value={data.title} onChange={(e) => setData('title', e.target.value)} placeholder="Blog title" />
                    </Field>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Category" error={errors.category_id}>
                            <Select value={data.category_id} onChange={(e) => setData('category_id', e.target.value)}>
                                <option value="">No category</option>
                                {categories.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.name}
                                    </option>
                                ))}
                            </Select>
                        </Field>
                        <Field label="Publish Date" required error={errors.published_at}>
                            <TextInput
                                type="date"
                                value={data.published_at}
                                onChange={(e) => setData('published_at', e.target.value)}
                            />
                        </Field>
                    </div>

                    <Field label="Excerpt" required error={errors.excerpt} hint="Short summary shown on listing cards">
                        <TextArea rows={2} value={data.excerpt} onChange={(e) => setData('excerpt', e.target.value)} placeholder="A brief summary…" />
                    </Field>

                    <Field label="Featured Image" error={errors.featured_image} hint="Recommended ratio 16:9">
                        <div className="flex items-center gap-4">
                            <div className="w-28 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    <ImagePlus size={20} className="text-slate-300" />
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer w-fit">
                                        Choose File
                                        <input type="file" accept="image/*" onChange={onFilePick} className="hidden" />
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => setPickerOpen(true)}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 w-fit"
                                    >
                                        <FolderOpen size={13} /> Library
                                    </button>
                                </div>
                                {imagePreview && (
                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="text-xs text-red-400 hover:text-red-500 font-semibold inline-flex items-center gap-1 w-fit"
                                    >
                                        <X size={12} /> Remove
                                    </button>
                                )}
                            </div>
                        </div>
                    </Field>

                    <Field label="Content" required error={errors.content}>
                        <RichTextEditor
                            key={editingId || 'new'}
                            value={data.content}
                            onChange={(html) => setData('content', html)}
                            error={errors.content}
                        />
                    </Field>

                    <div className="flex flex-wrap items-center gap-6 pt-1">
                        <Toggle checked={data.is_published} onChange={(v) => setData('is_published', v)} label="Published" />
                        <Toggle checked={data.is_featured} onChange={(v) => setData('is_featured', v)} label="Featured" />
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                        <Button type="button" variant="outline" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving…' : editingId ? 'Update Blog' : 'Publish Blog'}
                        </Button>
                    </div>
                </form>
            </Modal>

            <MediaPicker
                open={pickerOpen}
                onClose={() => setPickerOpen(false)}
                uploads={uploads}
                onSelect={pickFromLibrary}
                onUploadNew={uploadNewFromPicker}
            />

            <ConfirmDialog
                open={confirmId !== null}
                onClose={() => setConfirmId(null)}
                onConfirm={confirmDelete}
                title="Delete this blog?"
                description="This blog will be removed from the site. This action can be reversed only by a developer."
                confirmLabel="Delete"
            />
        </AdminLayout>
    );
}
