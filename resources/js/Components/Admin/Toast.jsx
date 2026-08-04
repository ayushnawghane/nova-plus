import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

export default function Toast() {
    const { flash } = usePage().props;
    const [toast, setToast] = useState(null);
    const [seenFlash, setSeenFlash] = useState(() => ({}));

    if (flash !== seenFlash) {
        setSeenFlash(flash);
        if (flash?.success) setToast({ type: 'success', message: flash.success });
        else if (flash?.error) setToast({ type: 'error', message: flash.error });
    }

    useEffect(() => {
        if (!toast) return;
        const timer = setTimeout(() => setToast(null), 4000);
        return () => clearTimeout(timer);
    }, [toast]);

    if (!toast) return null;

    const isSuccess = toast.type === 'success';

    return (
        <div className="fixed top-6 right-6 z-[200] animate-[modalIn_0.25s_cubic-bezier(0.2,0.8,0.2,1)]">
            <div
                className={`flex items-center gap-3 pl-4 pr-3 py-3.5 rounded-2xl shadow-xl border max-w-sm ${
                    isSuccess ? 'bg-white border-[#73aa3c]/20' : 'bg-white border-red-200'
                }`}
            >
                {isSuccess ? (
                    <CheckCircle2 size={20} className="text-[#73aa3c] shrink-0" />
                ) : (
                    <XCircle size={20} className="text-red-500 shrink-0" />
                )}
                <p className="text-sm font-semibold text-[#003567] leading-snug">{toast.message}</p>
                <button
                    onClick={() => setToast(null)}
                    className="ml-2 text-slate-300 hover:text-slate-500 transition-colors shrink-0"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
