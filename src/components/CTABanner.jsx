export default function CTABanner() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle engineering line/dot overlay background */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{ 
                    backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                    backgroundSize: '32px 32px'
                }}
            ></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 animate-reveal">
                {/* Main Card Container */}
                <div className="bg-[#003567] rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-slate-100/10">
                    
                    {/* Atmospheric Clean Energy Background Image Overlay */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay pointer-events-none" 
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop')" }}
                    ></div>

                    {/* Glowing backdrops */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#73aa3c] rounded-full blur-[100px] opacity-35 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#89c8e7] rounded-full blur-[100px] opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        {/* Dynamic Leaf/Priority Icon Badge */}
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/10 shadow-lg">
                            <i className="fa-solid fa-leaf text-2xl text-[#73aa3c]"></i>
                        </div>

                        {/* Title */}
                        <h2 className="font-serif text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-white">
                            Let’s Discuss Your ESG Priorities
                        </h2>

                        {/* Subheading */}
                        <p className="text-[#e2e8f0] text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed font-light">
                            Every organisation has unique ESG challenges. Let's explore your priorities and identify the right approach to support your sustainability journey.
                        </p>

                        {/* CTA and Contact Grid */}
                        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 pt-4 border-t border-white/10 mt-2">
                            {/* Primary Button */}
                            <a 
                                href="#/contact-us"
                                className="bg-[#73aa3c] text-white hover:bg-white hover:text-[#003567] px-8 py-4 rounded-2xl text-sm md:text-base font-bold transition-all duration-300 shadow-lg shadow-[#73aa3c]/10 hover:shadow-xl inline-flex items-center gap-3 cursor-pointer group"
                            >
                                Book an ESG Consultation
                                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i className="fa-solid fa-arrow-up-right text-[10px]"></i>
                                </span>
                            </a>

                            {/* Contact items */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-[#cbd5e1] font-semibold">
                                {/* Phone Row */}
                                <a 
                                    href="tel:+6590882853"
                                    className="flex items-center gap-3.5 hover:text-[#73aa3c] transition-colors duration-300 py-1.5"
                                >
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                        <i className="fa-solid fa-phone text-xs text-[#73aa3c]"></i>
                                    </span>
                                    +65 9088 2853
                                </a>

                                {/* Email Row */}
                                <a 
                                    href="mailto:sales@novaplus.sg"
                                    className="flex items-center gap-3.5 hover:text-[#73aa3c] transition-colors duration-300 py-1.5"
                                >
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                        <i className="fa-regular fa-envelope text-xs text-[#73aa3c]"></i>
                                    </span>
                                    sales@novaplus.sg
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
