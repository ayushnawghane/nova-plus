import { useState } from "react";
import { Link } from "@inertiajs/react";
import BrochureModal from "@/Components/BrochureModal";

export default function Hero() {
    const [showBrochureModal, setShowBrochureModal] = useState(false);

    const stats = [
        { icon: "fa-industry", value: "15+", label: "Years of Industry Experience" },
        { icon: "fa-leaf", value: "10+", label: "Years of ESG Consultancy Experience" },
    ];

    return (
        <header className="relative w-full bg-[#07162c] text-white overflow-hidden">
            {/* Background Image - full bleed, no card, no margins */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            ></div>

            {/* Gradient overlays for legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#031122] via-[#031122]/88 to-[#031122]/15"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#031122]/90 via-transparent to-[#031122]/20"></div>

            {/* Subtle grid texture for depth */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            ></div>

            {/* Ambient glows */}
            <div className="absolute top-1/3 left-0 w-[32rem] h-[32rem] bg-[#73aa3c]/10 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#89c8e7]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>

            {/* Content */}
            <div className="relative z-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pt-[140px] md:pt-[160px] pb-16 md:pb-24 min-h-[640px] lg:min-h-[82vh] flex items-center">
                <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Headline & Actions */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-7 animate-reveal">
                        {/* Welcome Tag */}
                        <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full pl-3 pr-4 py-1.5 text-[#b6cf7c] font-bold text-[11px] md:text-xs uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-[#73aa3c] animate-pulse"></span>
                            <span>Nova Plus &mdash; ESG Consultancy</span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.18] text-white tracking-tight">
                            Practical ESG Solutions for{" "}
                            <span className="relative inline-block font-sans bg-gradient-to-r from-[#b6cf7c] to-[#89c8e7] bg-clip-text text-transparent">
                                Industrial &amp; Infrastructure
                                <svg
                                    className="absolute left-0 -bottom-2 w-full h-3 text-[#73aa3c]/70"
                                    viewBox="0 0 300 12"
                                    preserveAspectRatio="none"
                                    fill="none"
                                >
                                    <path d="M2 9C60 2 240 2 298 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>{" "}
                            Businesses
                        </h1>

                        {/* Subheading */}
                        <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
                            Helping industrial and infrastructure businesses strengthen ESG reporting, governance, supply chain performance, and sustainable business growth across Singapore, the UAE, and Southeast Asia.
                        </p>

                        {/* Stats row */}
                        <div className="flex flex-wrap items-center gap-x-9 gap-y-4 py-1">
                            {stats.map((s, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b6cf7c]">
                                        <i className={`fa-solid ${s.icon} text-lg`}></i>
                                    </span>
                                    <div className="leading-tight">
                                        <p className="text-xl md:text-2xl font-extrabold text-white">{s.value}</p>
                                        <p className="text-[11px] md:text-xs text-gray-400 font-medium max-w-[10rem]">{s.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link
                                href={route('contact-us')}
                                className="bg-[#73aa3c] text-white px-7 py-3.5 rounded-full text-sm md:text-base font-bold hover:bg-[#b6cf7c] hover:text-[#003567] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-[#73aa3c]/25 cursor-pointer"
                            >
                                Schedule ESG Consultation
                                <span className="w-6 h-6 rounded-full bg-white text-[#73aa3c] flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300">
                                    <i className="fa-solid fa-arrow-up-right text-xs"></i>
                                </span>
                            </Link>

                            <button
                                type="button"
                                onClick={() => setShowBrochureModal(true)}
                                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 px-7 py-3.5 rounded-full text-sm md:text-base font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm cursor-pointer"
                            >
                                Download ESG Solutions Brochure
                                <i className="fa-solid fa-download text-xs opacity-70 group-hover:translate-y-0.5 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: keep it open for the photo, one quiet trust marker */}
                    <div className="lg:col-span-5 relative hidden lg:flex justify-end animate-reveal delay-200">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-6 py-5 shadow-lg animate-float">
                            <p className="text-[10px] uppercase tracking-widest text-[#89c8e7] font-bold mb-2">Where we operate</p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                <i className="fa-solid fa-location-dot text-[#73aa3c] text-xs"></i>
                                Singapore &nbsp;&middot;&nbsp; UAE &nbsp;&middot;&nbsp; Southeast Asia
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frameworks strip - full-bleed, flush against the hero, no card */}
            <div className="relative z-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10">
                    <div className="flex flex-wrap gap-x-12 gap-y-7 md:gap-x-16 items-center justify-center lg:justify-between">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <img
                                key={num}
                                src={`/frameworks/trimmed/${num}.png`}
                                alt={`Sustainability Framework ${num}`}
                                className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <BrochureModal open={showBrochureModal} onClose={() => setShowBrochureModal(false)} />
        </header>
    );
}
