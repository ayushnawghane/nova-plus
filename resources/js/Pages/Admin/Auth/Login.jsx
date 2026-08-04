import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Lock, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.login.store'));
    };

    return (
        <div className="min-h-screen bg-[#003567] relative overflow-hidden flex items-center justify-center px-6">
            <Head title="Admin Login" />

            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#73aa3c]/20 blur-3xl animate-pulse-slow" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(white 1.2px, transparent 1.2px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-md">
                <div className="text-center mb-8">
                    <img
                        src="/Nova PLus Logo.png"
                        alt="Nova Plus"
                        className="h-11 w-auto object-contain mx-auto mb-6"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <h1 className="font-serif text-2xl font-bold text-white">Admin Login</h1>
                    <p className="text-white/50 text-sm mt-2">Sign in to manage Nova Plus content</p>
                </div>

                <form onSubmit={submit} className="bg-white rounded-3xl p-8 sm:p-9 shadow-2xl">
                    <div className="mb-5">
                        <label className="block text-xs font-bold uppercase tracking-wide text-[#003567]/70 mb-1.5">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="you@novaplus.sg"
                                autoFocus
                                className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-[#f9fbfa] text-sm text-[#1a2e3a] outline-none transition-colors focus:bg-white ${
                                    errors.email ? 'border-red-300' : 'border-slate-200 focus:border-[#73aa3c]'
                                }`}
                            />
                        </div>
                        {errors.email && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.email}</p>}
                    </div>

                    <div className="mb-5">
                        <label className="block text-xs font-bold uppercase tracking-wide text-[#003567]/70 mb-1.5">
                            Password
                        </label>
                        <div className="relative">
                            <Lock size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="••••••••"
                                className={`w-full pl-11 pr-11 py-3 rounded-xl border bg-[#f9fbfa] text-sm text-[#1a2e3a] outline-none transition-colors focus:bg-white ${
                                    errors.password ? 'border-red-300' : 'border-slate-200 focus:border-[#73aa3c]'
                                }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#003567]"
                            >
                                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                            </button>
                        </div>
                        {errors.password && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.password}</p>}
                    </div>

                    <label className="flex items-center gap-2 mb-7 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="w-4 h-4 rounded border-slate-300 text-[#73aa3c] focus:ring-[#73aa3c]"
                        />
                        <span className="text-sm text-slate-500">Keep me signed in</span>
                    </label>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-[#003567] hover:bg-[#73aa3c] text-white py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-[#003567]/20 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                        {processing ? 'Signing in…' : 'Sign In'}
                        {!processing && <ArrowRight size={16} />}
                    </button>
                </form>

                <p className="text-center text-white/30 text-xs mt-6">© 2026 Nova Plus. All rights reserved.</p>
            </div>
        </div>
    );
}
