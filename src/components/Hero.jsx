export default function Hero() {
    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden gradient-mesh">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f5f4dd] rounded-full blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/4 animate-float -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#73aa3c] rounded-full blur-[120px] opacity-20 translate-y-1/4 -translate-x-1/4 animate-pulse-slow -z-10"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl relative z-10">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[#003567] font-bold text-xs uppercase tracking-wider mb-6 animate-reveal delay-100 opacity-0">
                        <span className="w-2 h-2 rounded-full bg-[#73aa3c] animate-pulse"></span>
                        For progressive and responsible businesses
                    </div>

                    {/* Headline */}
                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#003567] mb-8 animate-reveal delay-200 opacity-0 relative">
                        Practical ESG.<br />
                        Regulatory<br />
                        <span className="text-gradient italic relative inline-block">Confidence.
                            {/* Decorative spark */}
                            <div className="absolute -right-8 -top-4 text-[#73aa3c] opacity-40 text-4xl rotate-12">✦</div>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light animate-reveal delay-300 opacity-0">
                        The comprehensive platform for companies to manage sustainability data, ensuring absolute compliance
                        and driving actionable insights.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-reveal delay-400 opacity-0">
                        <button className="bg-[#003567] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#73aa3c] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[#003567]/20 flex items-center justify-center gap-2">
                            Build your strategy <i className="fa-solid fa-arrow-right -rotate-45"></i>
                        </button>
                        <button className="glass-panel text-[#003567] px-8 py-4 rounded-full text-base font-bold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group">
                            View Demo
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <i className="fa-solid fa-play text-xs"></i>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right: Image Composition */}
                <div className="relative hidden lg:block animate-reveal delay-300">
                    {/* Image 1: Wind Farm */}
                    <div className="relative z-20 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white w-4/5 ml-auto animate-float">
                        <img
                            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
                            alt="Wind Turbines"
                            className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Image 2: Green Finance */}
                    <div className="absolute -bottom-24 -left-8 z-30 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white w-2/3"
                        style={{ animation: 'float 7s ease-in-out infinite reverse' }}>
                        <img
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                            alt="ESG Investing & Green Finance"
                            className="w-full h-auto object-cover aspect-square transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#003567]/10 animate-reveal delay-500 opacity-0 relative z-10">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Trusted by industry leaders globally</p>
                <div className="flex flex-wrap gap-10 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="font-serif text-xl font-bold tracking-tight">EcoSphere</div>
                    <div className="font-sans text-xl font-black italic">Volt<span className="text-[#73aa3c]">Tech</span></div>
                    <div className="font-serif text-xl font-medium tracking-widest uppercase">Lumina</div>
                    <div className="font-sans text-lg font-bold">Nexus Group</div>
                </div>
            </div>
        </header>
    );
}
