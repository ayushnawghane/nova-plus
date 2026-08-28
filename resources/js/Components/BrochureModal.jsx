import { useEffect } from 'react';
import { useForm } from '@inertiajs/react';

const BROCHURE_URL = '/brochures/nova-plus-esg-solutions.pdf';

export default function BrochureModal({ open, onClose }) {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
    });

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

    const submit = (e) => {
        e.preventDefault();
        post(route('brochure.download'), {
            preserveScroll: true,
            onSuccess: () => {
                window.open(BROCHURE_URL, '_blank');
                reset();
            },
        });
    };

    const handleClose = () => {
        reset();
        onClose?.();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
            <div
                className="fixed inset-0 bg-[#003567]/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
                onClick={handleClose}
            />
            <div className="relative w-full max-w-md bg-white sm:rounded-3xl shadow-2xl my-0 sm:my-auto max-h-full sm:max-h-[90vh] flex flex-col animate-[modalIn_0.25s_cubic-bezier(0.2,0.8,0.2,1)]">
                <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-100 shrink-0">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#003567]">
                        {wasSuccessful ? 'Download Started' : 'Download the Brochure'}
                    </h3>
                    <button
                        onClick={handleClose}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-[#003567] transition-colors cursor-pointer"
                        aria-label="Close"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="px-6 sm:px-8 py-7 overflow-y-auto">
                    {wasSuccessful ? (
                        <div className="py-4 text-center animate-reveal">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#f2f8ec] text-[#73aa3c] flex items-center justify-center text-2xl">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed mb-6">
                                Thanks! Your download should have opened in a new tab. If it didn&apos;t start automatically,
                                use the button below.
                            </p>
                            <a
                                href={BROCHURE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="git-submit"
                                style={{ display: 'inline-flex', width: 'auto', padding: '12px 28px' }}
                            >
                                Download Again
                                <i className="fa-solid fa-download text-sm"></i>
                            </a>
                        </div>
                    ) : (
                        <form onSubmit={submit}>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Share a few details and we&apos;ll unlock the brochure for instant download.
                            </p>

                            <div className="mb-5">
                                <label className="git-field-label" htmlFor="brochure-name">Full Name</label>
                                <input
                                    id="brochure-name"
                                    type="text"
                                    className="git-input"
                                    placeholder="Your full name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                            </div>

                            <div className="mb-5">
                                <label className="git-field-label" htmlFor="brochure-email">Email Address</label>
                                <input
                                    id="brochure-email"
                                    type="email"
                                    className="git-input"
                                    placeholder="you@company.com"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                            </div>

                            <div className="mb-7">
                                <label className="git-field-label" htmlFor="brochure-phone">Contact No.</label>
                                <input
                                    id="brochure-phone"
                                    type="tel"
                                    className="git-input"
                                    placeholder="+65 9088 2853"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                            </div>

                            <button className="git-submit" type="submit" disabled={processing}>
                                {processing ? 'Preparing Download…' : 'Get the Brochure'}
                                {!processing && <i className="fa-solid fa-download text-sm"></i>}
                            </button>

                            <p className="text-center text-gray-400 text-xs mt-5">
                                <i className="fa-solid fa-lock text-[0.65rem] mr-1"></i>
                                Your information is kept strictly confidential and never shared.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
