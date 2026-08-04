import { useForm } from '@inertiajs/react';

export default function GetInTouch() {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        company_name: '',
        query_type: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact-us.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <section className="git-section py-24 relative overflow-hidden">
            {/* Subtle grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,53,103,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,53,103,0.04) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14 animate-reveal">
                    <div>
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Contact</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#003567] font-bold leading-tight">Get In Touch</h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Partner with Nova Plus to strengthen ESG performance through sustainability reporting, carbon accounting, supplier sustainability, and governance solutions tailored to your business needs.
                        </p>
                    </div>
                </div>

                {/* Two columns: Info card + Form */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-reveal delay-100">
                    {/* Left: Contact info card (2/5) */}
                    <div className="lg:col-span-2">
                        <div className="git-info-card">
                            <p className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-6">Contact Information</p>

                            <div className="git-contact-row">
                                <div className="git-contact-icon"><i className="fa-solid fa-envelope"></i></div>
                                <div>
                                    <p className="git-contact-label">Email</p>
                                    <a href="mailto:sales@novaplus.sg" className="git-contact-value">sales@novaplus.sg</a>
                                </div>
                            </div>

                            <div className="git-contact-row">
                                <div className="git-contact-icon"><i className="fa-solid fa-phone"></i></div>
                                <div>
                                    <p className="git-contact-label">Phone</p>
                                    <a href="tel:+6590882853" className="git-contact-value">+65 9088 2853</a>
                                </div>
                            </div>

                            <div className="git-contact-row">
                                <div className="git-contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                                <div>
                                    <p className="git-contact-label">Singapore Office</p>
                                    <p className="git-contact-value">
                                        Nova Plus Pte Ltd<br />
                                        25 International Business Park, German Centre,<br />
                                        Singapore 609916
                                    </p>
                                </div>
                            </div>

                            <div className="git-contact-row">
                                <div className="git-contact-icon"><i className="fa-regular fa-clock"></i></div>
                                <div>
                                    <p className="git-contact-label">Response Time</p>
                                    <p className="git-contact-value">Typically within 24 business hours</p>
                                </div>
                            </div>

                            {/* Decorative map silhouette strip */}
                            <div className="mt-8 rounded-2xl overflow-hidden h-[110px] relative opacity-80">
                                <img
                                    src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop"
                                    alt="Singapore"
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-[#003567]/60 flex items-end pl-4 pb-3">
                                    <span className="text-white/70 text-xs font-bold uppercase tracking-widest">📍 Singapore · GCC · EU · India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Inquiry form (3/5) */}
                    <div className="lg:col-span-3">
                        <div className="git-form-card">
                            {wasSuccessful ? (
                                <div className="py-10 text-center animate-reveal">
                                    <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#f2f8ec] text-[#73aa3c] flex items-center justify-center text-2xl">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <h3 className="font-serif text-2xl text-[#003567] font-bold mb-2">Message Sent</h3>
                                    <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
                                        Thanks for reaching out — our team will get back to you within 24 business hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={submit}>
                                    <p className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-6">Inquiry Details</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label className="git-field-label" htmlFor="git-name">Full Name</label>
                                            <input
                                                id="git-name"
                                                type="text"
                                                className="git-input"
                                                placeholder="Your full name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="git-field-label" htmlFor="git-email">Email Address</label>
                                            <input
                                                id="git-email"
                                                type="email"
                                                className="git-input"
                                                placeholder="you@company.com"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label className="git-field-label" htmlFor="git-company">Company</label>
                                        <input
                                            id="git-company"
                                            type="text"
                                            className="git-input"
                                            placeholder="Your organisation name"
                                            value={data.company_name}
                                            onChange={(e) => setData('company_name', e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <label className="git-field-label" htmlFor="git-inquiry">Inquiry Type</label>
                                        <div className="relative">
                                            <select
                                                id="git-inquiry"
                                                className="git-input"
                                                style={{ appearance: 'none', WebkitAppearance: 'none', paddingRight: '40px' }}
                                                value={data.query_type}
                                                onChange={(e) => setData('query_type', e.target.value)}
                                            >
                                                <option value="">Select a service</option>
                                                <option>ESG &amp; Sustainability Reporting</option>
                                                <option>GHG Accounting &amp; Carbon Footprinting</option>
                                                <option>ESG Data Management &amp; Dashboard Development</option>
                                                <option>Supplier ESG Assessment</option>
                                                <option>ESG Policy Development</option>
                                                <option>EcoVadis &amp; Sustainability Ratings Support</option>
                                                <option>ESG Consulting &amp; Implementation</option>
                                                <option>ESG Strategy &amp; Roadmap Development</option>
                                                <option>ESG Training &amp; Capacity Building</option>
                                                <option>Other / General Inquiry</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#003567] text-xs">
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-7">
                                        <label className="git-field-label" htmlFor="git-message">Message</label>
                                        <textarea
                                            id="git-message"
                                            rows={5}
                                            className="git-input"
                                            style={{ resize: 'vertical' }}
                                            placeholder="Tell us about your ESG needs and how we can help…"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                        ></textarea>
                                    </div>

                                    <button className="git-submit" type="submit" disabled={processing}>
                                        {processing ? 'Sending…' : 'Send Message'}
                                        {!processing && <i className="fa-solid fa-arrow-right text-sm"></i>}
                                    </button>

                                    <p className="text-center text-gray-400 text-xs mt-5">
                                        <i className="fa-solid fa-lock text-[0.65rem] mr-1"></i>
                                        Your information is kept strictly confidential and never shared.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
