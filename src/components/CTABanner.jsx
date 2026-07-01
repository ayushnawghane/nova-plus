import { useState } from 'react';

export default function CTABanner({
    title = "Let’s Discuss Your ESG Priorities",
    description = "Every organisation has unique ESG challenges. Let's explore your priorities and identify the right approach to support your sustainability journey.",
    theme = "default", // "default", "consulting", "training"
    primaryText = "Book an ESG Consultation",
    primaryHref = "#/contact-us",
    secondaryText = "",
    secondaryHref = "",
    onSecondaryClick = null,
    showContact = true
}) {
    return (
        <section className="py-24 bg-[#f8fafc] border-t border-b border-slate-100 relative overflow-hidden">
            {/* Soft, atmospheric background accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 animate-reveal">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Content Block */}
                    <div className="lg:col-span-7 text-left">
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-[0.25em] mb-4 block">
                            {theme === 'training' ? 'CAPABILITY BUILDING' : theme === 'consulting' ? 'CONSULTING SERVICES' : 'GET IN TOUCH'}
                        </span>
                        
                        <h2 className="font-serif text-3xl md:text-4.5xl text-[#003567] font-extrabold leading-tight mb-5 tracking-tight">
                            {title}
                        </h2>

                        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-light">
                            {description}
                        </p>
                    </div>

                    {/* Actions Block */}
                    <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6 w-full">
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-start lg:justify-end flex-wrap items-center">
                            {/* Primary Button */}
                            <a 
                                href={primaryHref}
                                className="bg-[#003567] hover:bg-[#73aa3c] text-white px-8 py-4 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shadow-sm shadow-[#003567]/5 flex items-center justify-center gap-2 group shrink-0"
                            >
                                {primaryText}
                                <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                            </a>

                            {/* Secondary Link */}
                            {secondaryText && (
                                <a 
                                    href={secondaryHref || '#'}
                                    onClick={onSecondaryClick}
                                    className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#003567] text-[#003567] px-8 py-4 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shrink-0"
                                >
                                    {secondaryText}
                                    <i className="fa-solid fa-file-pdf text-[10px] text-[#73aa3c]"></i>
                                </a>
                            )}
                        </div>

                        {/* Minimalist Contact Grid */}
                        {showContact && (
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 font-light justify-start lg:justify-end w-full">
                                <a href="tel:+6590882853" className="hover:text-[#003567] transition-colors flex items-center gap-1.5">
                                    <i className="fa-solid fa-phone text-[#73aa3c]"></i> +65 9088 2853
                                </a>
                                <span className="text-slate-200 hidden sm:inline">|</span>
                                <a href="mailto:sales@novaplus.sg" className="hover:text-[#003567] transition-colors flex items-center gap-1.5">
                                    <i className="fa-regular fa-envelope text-[#73aa3c]"></i> sales@novaplus.sg
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
