import { AlertTriangle } from 'lucide-react';
import Modal from './Modal';

export default function ConfirmDialog({
    open,
    onClose,
    onConfirm,
    title = 'Are you sure?',
    description = 'This action cannot be undone.',
    confirmLabel = 'Confirm',
    tone = 'danger',
}) {
    return (
        <Modal open={open} onClose={onClose} title="" maxWidth="max-w-sm">
            <div className="text-center -mt-2">
                <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        tone === 'danger' ? 'bg-red-50 text-red-500' : 'bg-[#f2f8ec] text-[#73aa3c]'
                    }`}
                >
                    <AlertTriangle size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#003567] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{description}</p>
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2.5 rounded-full text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`flex-1 px-4 py-2.5 rounded-full text-sm font-semibold text-white transition-colors ${
                            tone === 'danger' ? 'bg-red-500 hover:bg-red-600' : 'bg-[#003567] hover:bg-[#73aa3c]'
                        }`}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </Modal>
    );
}
