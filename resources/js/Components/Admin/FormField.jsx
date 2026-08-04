export function Field({ label, error, required, children, hint }) {
    return (
        <div>
            {label && (
                <label className="block text-xs font-bold uppercase tracking-wide text-[#003567]/70 mb-1.5">
                    {label} {required && <span className="text-red-400">*</span>}
                </label>
            )}
            {children}
            {hint && !error && <p className="mt-1.5 text-xs text-slate-400">{hint}</p>}
            {error && <p className="mt-1.5 text-xs font-semibold text-red-500">{error}</p>}
        </div>
    );
}

const baseInput =
    'w-full px-4 py-2.5 rounded-xl border bg-[#f9fbfa] text-sm text-[#1a2e3a] outline-none transition-colors placeholder:text-slate-400 focus:bg-white';

export function TextInput({ error, className = '', ...props }) {
    return (
        <input
            className={`${baseInput} ${
                error ? 'border-red-300 focus:border-red-400' : 'border-slate-200 focus:border-[#73aa3c]'
            } ${className}`}
            {...props}
        />
    );
}

export function TextArea({ error, className = '', ...props }) {
    return (
        <textarea
            className={`${baseInput} resize-none ${
                error ? 'border-red-300 focus:border-red-400' : 'border-slate-200 focus:border-[#73aa3c]'
            } ${className}`}
            {...props}
        />
    );
}

export function Select({ error, className = '', children, ...props }) {
    return (
        <select
            className={`${baseInput} ${
                error ? 'border-red-300 focus:border-red-400' : 'border-slate-200 focus:border-[#73aa3c]'
            } ${className}`}
            {...props}
        >
            {children}
        </select>
    );
}

export function Toggle({ checked, onChange, label }) {
    return (
        <button
            type="button"
            onClick={() => onChange(!checked)}
            className="flex items-center gap-3 select-none"
        >
            <span
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                    checked ? 'bg-[#73aa3c]' : 'bg-slate-200'
                }`}
            >
                <span
                    className={`inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow transition-transform ${
                        checked ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
            </span>
            {label && <span className="text-sm font-semibold text-[#003567]">{label}</span>}
        </button>
    );
}

export function Button({ variant = 'primary', className = '', children, ...props }) {
    const variants = {
        primary: 'bg-[#003567] text-white hover:bg-[#73aa3c] shadow-md shadow-[#003567]/15',
        outline: 'border border-slate-200 text-slate-600 hover:bg-slate-50',
        ghost: 'text-slate-500 hover:bg-slate-100',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    return (
        <button
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
