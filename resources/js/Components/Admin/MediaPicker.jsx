import { useRef, useState } from 'react';
import Modal from './Modal';
import { Upload as UploadIcon, ImageOff, Check } from 'lucide-react';

export default function MediaPicker({ open, onClose, uploads = [], onSelect, onUploadNew }) {
    const fileInputRef = useRef(null);
    const [dragOver, setDragOver] = useState(false);

    const handleFiles = (fileList) => {
        const file = fileList?.[0];
        if (!file) return;
        onUploadNew(file);
    };

    return (
        <Modal open={open} onClose={onClose} title="Choose Featured Image" maxWidth="max-w-2xl">
            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    handleFiles(e.dataTransfer.files);
                }}
                onClick={() => fileInputRef.current?.click()}
                className={`mb-5 cursor-pointer rounded-xl border-2 border-dashed px-6 py-6 text-center transition-colors ${
                    dragOver ? 'border-[#73aa3c] bg-[#f2f8ec]' : 'border-slate-200 hover:border-[#73aa3c]/40'
                }`}
            >
                <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={(e) => handleFiles(e.target.files)} />
                <UploadIcon size={18} className="mx-auto mb-2 text-[#73aa3c]" />
                <p className="text-xs font-semibold text-[#003567]">Drop an image here or click to upload new</p>
            </div>

            {uploads.length === 0 ? (
                <div className="text-center py-10">
                    <ImageOff size={22} className="mx-auto mb-2 text-slate-300" />
                    <p className="text-sm text-slate-400">No images in the library yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-80 overflow-y-auto pr-1">
                    {uploads.map((upload) => (
                        <button
                            key={upload.id}
                            type="button"
                            onClick={() => onSelect(upload)}
                            className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200 hover:border-[#73aa3c] transition-colors"
                        >
                            <img src={upload.url} alt={upload.original_name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-[#003567]/0 group-hover:bg-[#003567]/30 transition-colors flex items-center justify-center">
                                <Check size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </Modal>
    );
}
