export default function CTABanner() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-[#003567] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#73aa3c] rounded-full blur-[80px] opacity-40 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#89c8e7] rounded-full blur-[80px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                            <i className="fa-solid fa-rocket text-2xl text-[#73aa3c]"></i>
                        </div>
                        <h2 className="font-serif text-4xl font-bold mb-4">Ready to Start?</h2>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                            Whether you're preparing for ISSB-aligned reporting, building your net-zero roadmap, or
                            strengthening ESG governance—Nova Plus is ready to support you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mx-auto max-w-lg">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1 w-full px-6 py-4 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#73aa3c] placeholder-gray-400 min-w-0"
                            />
                            <button className="bg-[#73aa3c] px-8 py-4 rounded-full text-white font-bold hover:bg-green-600 transition-colors whitespace-nowrap shadow-lg shrink-0">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
