import { useRef, useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import ConfirmDialog from '@/Components/Admin/ConfirmDialog';
import { Button } from '@/Components/Admin/FormField';
import { Upload as UploadIcon, Trash2, Copy, Check, ImageOff } from 'lucide-react';

function formatSize(bytes) {
    if (!bytes) return '0 KB';
    const kb = bytes / 1024;
    return kb < 1024 ? `${kb.toFixed(0)} KB` : `${(kb / 1024).toFixed(1)} MB`;
}

export default function MediaIndex({ uploads }) {
    const { auth } = usePage().props;
    const can = (p) => (auth?.user?.permissions || []).includes(p);

    const fileInputRef = useRef(null);
    const [dragOver, setDragOver] = useState(false);
    const [confirmId, setConfirmId] = useState(null);
    const [copiedId, setCopiedId] = useState(null);

    const { setData, post, processing } = useForm({ files: [] });

    const uploadFiles = (fileList) => {
        const files = Array.from(fileList || []);
        if (!files.length) return;
        setData('files', files);
        post(route('admin.media.store'), {
            forceFormData: true,
            onSuccess: () => setData('files', []),
        });
    };

    const destroyForm = useForm({});
    const confirmDelete = () => {
        destroyForm.delete(route('admin.media.destroy', confirmId), { onFinish: () => setConfirmId(null) });
    };

    const copyUrl = (upload) => {
        navigator.clipboard?.writeText(upload.url);
        setCopiedId(upload.id);
        setTimeout(() => setCopiedId(null), 1500);
    };

    return (
        <AdminLayout title="Media Library">
            <Head title="Media Library" />

            {can('media.manage') && (
                <div
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                        e.preventDefault();
                        setDragOver(false);
                        uploadFiles(e.dataTransfer.files);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`mb-6 cursor-pointer rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
                        dragOver ? 'border-[#73aa3c] bg-[#f2f8ec]' : 'border-slate-200 bg-white hover:border-[#73aa3c]/40'
                    }`}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        hidden
                        onChange={(e) => uploadFiles(e.target.files)}
                    />
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#f2f8ec] text-[#73aa3c] flex items-center justify-center">
                        <UploadIcon size={20} />
                    </div>
                    <p className="text-sm font-semibold text-[#003567]">
                        {processing ? 'Uploading…' : 'Drop images here or click to upload'}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">PNG, JPG, or WEBP — up to 4MB each</p>
                </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {uploads.map((upload) => (
                    <div
                        key={upload.id}
                        className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        <div className="aspect-square bg-slate-100">
                            <img src={upload.url} alt={upload.original_name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3">
                            <p className="text-xs font-semibold text-[#003567] truncate">{upload.original_name}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">{formatSize(upload.size)}</p>
                        </div>

                        <div className="absolute inset-x-0 top-0 p-2 flex justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => copyUrl(upload)}
                                className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center text-slate-500 hover:text-[#003567] shadow-sm"
                                title="Copy URL"
                            >
                                {copiedId === upload.id ? <Check size={14} className="text-[#73aa3c]" /> : <Copy size={14} />}
                            </button>
                            {can('media.manage') && (
                                <button
                                    onClick={() => setConfirmId(upload.id)}
                                    className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center text-slate-500 hover:text-red-500 shadow-sm"
                                    title="Delete"
                                >
                                    <Trash2 size={14} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {uploads.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                        <ImageOff size={22} className="text-slate-300" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#003567] mb-1">No media yet</h3>
                    <p className="text-slate-500 text-sm">Uploaded images will appear here and can be reused across blogs.</p>
                </div>
            )}

            <ConfirmDialog
                open={confirmId !== null}
                onClose={() => setConfirmId(null)}
                onConfirm={confirmDelete}
                title="Delete this image?"
                description="Images currently used as a blog's featured image can't be deleted."
                confirmLabel="Delete"
            />
        </AdminLayout>
    );
}
