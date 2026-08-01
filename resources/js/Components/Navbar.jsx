import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-6 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href={route('home')}>
                        <img src="/Nova PLus Logo.png" alt="Nova Plus" className="h-10 w-auto object-contain" />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#003567]">
                    <Link href={route('home')} className="hover:text-[#73aa3c] transition-colors">Home</Link>
                    <Link href={route('about-us')} className="hover:text-[#73aa3c] transition-colors">About Us</Link>
                    <Link href={route('services')} className="hover:text-[#73aa3c] transition-colors">Services</Link>
                    <Link href={route('services.corporate-training')} className="hover:text-[#73aa3c] transition-colors">ESG Corporate Training</Link>
                    <Link href={route('insights')} className="hover:text-[#73aa3c] transition-colors">ESG Insights</Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href={route('contact-us')} className="bg-[#003567] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#73aa3c] transition-colors shadow-lg shadow-[#003567]/20 inline-block">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#003567] text-2xl focus:outline-none z-50 relative p-1"
                    aria-label="Toggle Menu"
                >
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} transition-transform duration-300`}></i>
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`fixed inset-0 top-[72px] h-[calc(100vh-72px)] bg-[#003567] text-white z-40 md:hidden flex flex-col justify-between p-8 transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'} overflow-y-auto`}>
                {/* Background glow effects */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-[#73aa3c]/30 blur-3xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
                </div>

                {/* Links */}
                <div className="relative z-10 flex flex-col gap-6 text-xl font-serif mt-4">
                    <Link
                        href={route('home')}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-[#73aa3c] transition-colors border-b border-white/10 pb-4 text-left"
                    >
                        Home
                    </Link>
                    <Link
                        href={route('about-us')}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-[#73aa3c] transition-colors border-b border-white/10 pb-4 text-left"
                    >
                        About Us
                    </Link>
                    <Link
                        href={route('services')}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-[#73aa3c] transition-colors border-b border-white/10 pb-4 text-left"
                    >
                        Services
                    </Link>
                    <Link
                        href={route('services.corporate-training')}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-[#73aa3c] transition-colors border-b border-white/10 pb-4 text-left"
                    >
                        ESG Corporate Training
                    </Link>
                    <Link
                        href={route('insights')}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-[#73aa3c] transition-colors border-b border-white/10 pb-4 text-left"
                    >
                        ESG Insights
                    </Link>
                </div>

                {/* Bottom Actions */}
                <div className="relative z-10 flex flex-col gap-6 mt-auto">
                    <Link
                        href={route('contact-us')}
                        onClick={() => setIsOpen(false)}
                        className="bg-[#73aa3c] hover:bg-white text-white hover:text-[#003567] py-4 rounded-full text-center font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#73aa3c]/20"
                    >
                        Contact Us
                    </Link>

                    <div className="flex flex-col gap-2 text-xs text-white/60 font-light text-center">
                        <a href="tel:+6590882853" className="flex items-center gap-2 justify-center hover:text-[#73aa3c] transition-colors">
                            <i className="fa-solid fa-phone text-[#73aa3c]"></i> +65 9088 2853
                        </a>
                        <a href="mailto:sales@novaplus.sg" className="flex items-center gap-2 justify-center hover:text-[#73aa3c] transition-colors">
                            <i className="fa-regular fa-envelope text-[#73aa3c]"></i> sales@novaplus.sg
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
