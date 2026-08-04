import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, title, children, maxWidth = 'max-w-2xl' }) {
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e) => e.key === 'Escape' && onClose?.();
        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
            <div
                className="fixed inset-0 bg-[#003567]/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
                onClick={onClose}
            />
            <div
                className={`relative w-full ${maxWidth} bg-white sm:rounded-3xl shadow-2xl my-0 sm:my-auto max-h-full sm:max-h-[90vh] flex flex-col animate-[modalIn_0.25s_cubic-bezier(0.2,0.8,0.2,1)]`}
            >
                <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100 shrink-0">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#003567]">{title}</h3>
                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#003567] transition-colors"
                        aria-label="Close"
                    >
                        <X size={18} />
                    </button>
                </div>
                <div className="px-6 sm:px-8 py-6 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}
