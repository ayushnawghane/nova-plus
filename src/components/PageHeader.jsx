import { useEffect } from 'react';

export default function PageHeader({
    eyebrow = "",
    title = "",
    description = "",
    image = ""
}) {
    return (
        <section className="pt-36 pb-20 px-6 bg-[#003567] text-white relative overflow-hidden">
            {/* Background Atmosphere (spotlights, radial grid, mesh blur) */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#73aa3c]/20 blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
                {/* Engineering style radial grid pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.04]"
                    style={{ 
                        backgroundImage: 'radial-gradient(white 1.2px, transparent 1.2px)',
                        backgroundSize: '24px 24px'
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Content Block */}
                <div className="lg:col-span-7 text-left animate-reveal">
                    {eyebrow && (
                        <div className="flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/10 text-[#73aa3c] font-bold text-xs uppercase tracking-widest w-fit border border-white/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#73aa3c] animate-pulse"></span>
                            {eyebrow}
                        </div>
                    )}
                    <h1 className="font-serif text-3.5xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl tracking-tight text-white">
                        {title}
                    </h1>
                    <div className="w-20 h-1.5 bg-[#73aa3c] my-8 rounded-full"></div>
                    <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed font-light">
                        {description}
                    </p>
                </div>

                {/* Right Side: Interactive Offset Image Card */}
                {image && (
                    <div className="lg:col-span-5 relative group hidden lg:block animate-reveal delay-200">
                        {/* Shadow Backplates */}
                        <div className="absolute inset-0 bg-[#73aa3c] rounded-[2.5rem] transform translate-x-3 translate-y-3 opacity-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
                        <div className="absolute inset-0 border border-white/20 rounded-[2.5rem] transform -translate-x-2 -translate-y-2 opacity-60"></div>
                        
                        {/* Frame Wrapper */}
                        <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                            <img 
                                src={image} 
                                alt={title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="eager"
                            />
                            {/* Linear Gradient Shadow overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#003567]/30 to-transparent"></div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
