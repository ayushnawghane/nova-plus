export default function Hero() {
    return (
        <header className="relative w-full bg-white pt-24 pb-4">
            {/* Hero Main Card */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative w-full rounded-[2rem] overflow-hidden bg-[#07162c] text-white min-h-[70vh] lg:min-h-[75vh] flex flex-col justify-center p-8 md:p-12 lg:p-16 shadow-2xl">
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
                        style={{ backgroundImage: "url('/hero-bg.png')" }}
                    ></div>

                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031122]/95 via-[#051c35]/85 to-[#0e271a]/55 z-10"></div>

                    {/* Ambient Glows */}
                    <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#73aa3c]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
                    <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#89c8e7]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>

                    {/* Content Grid */}
                    <div className="relative z-20 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Column: Headline & Actions */}
                        <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-reveal">
                            {/* Welcome Tag */}
                            <div className="flex items-center gap-3 text-[#73aa3c] font-bold text-xs uppercase tracking-widest">
                                <span className="w-8 h-[2px] bg-[#73aa3c]"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#73aa3c] animate-pulse"></span>
                                <span>Welcome to</span>
                            </div>

                            {/* Headline */}
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight">
                                Singapore's Trusted <br />
                                <span className="text-[#b6cf7c] font-sans">ESG Partner</span>
                            </h1>

                            {/* Subheading */}
                            <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed font-light">
                                Align with SGX, MAS, and IFRS sustainability requirements through structured carbon accounting, climate-risk advisory services, and a net-zero strategy built for long-term business resilience.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button className="bg-[#73aa3c] text-white px-7 py-3.5 rounded-full text-sm md:text-base font-bold hover:bg-[#b6cf7c] hover:text-[#003567] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-[#73aa3c]/20 cursor-pointer">
                                    Schedule ESG Consultation
                                    <span className="w-6 h-6 rounded-full bg-white text-[#73aa3c] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <i className="fa-solid fa-arrow-up-right text-xs"></i>
                                    </span>
                                </button>
                                
                                <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-7 py-3.5 rounded-full text-sm md:text-base font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm cursor-pointer">
                                    Download ESG Solutions Brochure
                                    <i className="fa-solid fa-download text-xs opacity-70 group-hover:translate-y-0.5 transition-transform"></i>
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Stats badge inside the Hero card */}
                        <div className="lg:col-span-5 flex flex-col justify-center w-full animate-reveal delay-200">
                            <div className="w-full max-w-md lg:ml-auto space-y-4">
                                {/* Stat block 1 */}
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors duration-350">
                                    <p className="text-3xl md:text-4xl font-extrabold text-[#b6cf7c] tracking-tight mb-1">10+ Years</p>
                                    <p className="text-xs md:text-sm text-gray-300 font-medium">of Experience in ESG Consultancy</p>
                                </div>

                                {/* Stat block 2 */}
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors duration-350">
                                    <p className="text-3xl md:text-4xl font-extrabold text-[#89c8e7] tracking-tight mb-1">Serving 20+</p>
                                    <p className="text-xs md:text-sm text-gray-300 font-medium">Industrial & Infrastructure Industry Segments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frameworks strip - light background, directly output logos with no boxes */}
            <div className="w-full max-w-7xl mx-auto px-6 py-12 lg:py-16 animate-reveal delay-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-2.5 text-[#003567] font-bold text-sm uppercase tracking-wider shrink-0">
                        <span className="text-[#73aa3c] text-lg">✦</span>
                        <span>We support all these frameworks</span>
                    </div>
                    <div className="flex flex-wrap gap-8 md:gap-12 items-center justify-start lg:justify-end">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <img 
                                key={num}
                                src={`/frameworks/${num}.png`} 
                                alt={`Framework Logo ${num}`} 
                                className="h-11 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

