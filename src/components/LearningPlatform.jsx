export default function LearningPlatform() {
    return (
        <section className="py-24 bg-[#f5f4dd] relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 bg-white opacity-40 gradient-mesh z-0"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left: Text content */}
                <div className="animate-reveal">
                    <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">
                        Learning Management System
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#003567] font-bold mb-5 leading-tight">
                        ESG Learning Platform
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                        Our Learning Management System delivers scalable ESG education for your entire organization. From
                        board members to front-line staff, ensure everyone understands their role in your sustainability
                        journey.
                    </p>

                    {/* 6-item Checklist */}
                    <ul className="lms-check-list mb-10">
                        {[
                            'Self-paced ESG & sustainability modules',
                            'Interactive learning experiences',
                            'Progress tracking & certifications',
                            'Multi-language support',
                            'Custom content for your organization',
                            'Analytics & reporting dashboard',
                        ].map((item, i) => (
                            <li key={i}>
                                <span className="lms-check-icon"><i className="fa-solid fa-check"></i></span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* 2x2 Feature Cards Grid */}
                    <div className="grid grid-cols-2 gap-3 my-10">
                        {[
                            { icon: 'fa-solid fa-laptop', title: 'Online Courses', desc: 'Accessible anytime, anywhere' },
                            { icon: 'fa-solid fa-film', title: 'Rich Content', desc: 'Videos, quizzes & resources' },
                            { icon: 'fa-solid fa-certificate', title: 'Certifications', desc: 'Recognized credentials' },
                            { icon: 'fa-solid fa-users', title: 'Team Learning', desc: 'Collaborative features' },
                        ].map((feat, i) => (
                            <div key={i} className="lms-feat-card">
                                <div className="lms-feat-icon"><i className={feat.icon}></i></div>
                                <div>
                                    <p className="lms-feat-title">{feat.title}</p>
                                    <p className="lms-feat-desc">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="bg-[#003567] text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-xl shadow-[#003567]/20 hover:bg-[#73aa3c] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                        Request a Demo <i className="fa-solid fa-arrow-right text-sm"></i>
                    </button>
                </div>

                {/* Right: UI Mockup / Visual */}
                <div className="relative animate-reveal delay-200 pl-8 pt-8 md:pl-12 md:pt-12">
                    {/* Main Background Image */}
                    <div className="absolute inset-0 right-8 bottom-8 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            alt="Professional learning"
                        />
                        <div className="absolute inset-0 bg-[#003567]/20 mix-blend-multiply"></div>
                    </div>

                    {/* Main App Window (Overlay) */}
                    <div className="relative bg-[#003567]/95 backdrop-blur-md opacity-90 rounded-3xl p-8 shadow-2xl overflow-hidden border border-white/10 group hover:-translate-y-2 transition-transform duration-500 mt-16 -ml-8 mb-[-2rem] z-10">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-[#73aa3c]"></div>
                            </div>
                            <span className="text-white/40 text-xs font-mono tracking-widest uppercase">Learning Portal</span>
                        </div>

                        {/* Course Items */}
                        <div className="space-y-4">
                            {/* Active course */}
                            <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer border border-white/5 relative overflow-hidden group/item">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#73aa3c]"></div>
                                <div className="w-10 h-10 rounded-lg bg-[#73aa3c] flex text-white items-center justify-center shadow-lg shadow-[#73aa3c]/20 group-hover/item:scale-110 transition-transform">
                                    <i className="fa-solid fa-play text-sm ml-0.5"></i>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white text-sm font-bold">Introduction to ESG</h4>
                                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                                        <div className="w-3/4 h-full bg-gradient-to-r from-[#73aa3c] to-green-300 rounded-full relative">
                                            <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-white/50 text-xs text-right w-12 font-mono">75%</span>
                            </div>

                            {/* Locked courses */}
                            {[
                                { title: 'Carbon Accounting Basics', progress: '0%' },
                                { title: 'Supply Chain Risk Management', progress: '0%' },
                            ].map((course, i) => (
                                <div key={i} className="bg-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer border border-white/5 group/item">
                                    <div className="w-10 h-10 rounded-lg bg-[#89c8e7]/20 flex text-[#89c8e7] items-center justify-center group-hover/item:bg-[#89c8e7] group-hover/item:text-white transition-colors">
                                        <i className="fa-solid fa-lock text-sm"></i>
                                    </div>
                                    <div className="flex-1 opacity-60">
                                        <h4 className="text-white text-sm font-bold">{course.title}</h4>
                                        <div className="w-full bg-white/10 h-1.5 rounded-full mt-2"></div>
                                    </div>
                                    <span className="text-white/30 text-xs text-right w-12 font-mono">{course.progress}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating decorative element */}
                    <div className="absolute -bottom-10 -right-4 lg:-right-12 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-float">
                        <div className="w-12 h-12 rounded-full bg-[#f2f2ec] flex text-[#73aa3c] items-center justify-center text-xl">
                            <i className="fa-solid fa-award"></i>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Earned</p>
                            <p className="text-sm font-bold text-[#003567]">Foundation Badge</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
