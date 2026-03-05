export default function Footer() {
    const linkStyle = {
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.85rem',
        textDecoration: 'none',
        transition: 'color 0.2s',
        lineHeight: 1.4,
    };

    const handleMouseOver = (e) => { e.currentTarget.style.color = '#73aa3c'; };
    const handleMouseOut = (e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; };

    const contactLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.85rem',
        textDecoration: 'none',
        transition: 'color 0.2s',
    };

    const iconBoxStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    };

    return (
        <footer style={{ background: '#003567', position: 'relative', overflow: 'hidden' }} className="pt-16 pb-0 text-white">
            {/* Giant watermark "NOVA" text in the background */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    zIndex: 0,
                    opacity: 0.06,
                    width: 'clamp(400px, 60vw, 800px)',
                }}
            >
                <img
                    src="/Nova PLus Logo.png"
                    alt=""
                    style={{ width: '100%', height: 'auto', filter: 'brightness(0) invert(1)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main grid: Brand block + Nav columns */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-14">
                    {/* Left: Brand + Contact (3/5) */}
                    <div className="lg:col-span-3 flex flex-col gap-8">
                        {/* Logo */}
                        <div>
                            <div className="mb-5">
                                <a href="#">
                                    <img
                                        src="/Nova PLus Logo.png"
                                        alt="Nova Plus"
                                        className="h-9 w-auto object-contain"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '340px' }}>
                                Singapore's trusted ESG consultancy helping organizations navigate sustainability with
                                clarity, credibility, and execution focus.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="flex flex-col gap-4">
                            <a
                                href="mailto:sales@novaplus.sg"
                                style={contactLinkStyle}
                                onMouseOver={(e) => { e.currentTarget.style.color = '#73aa3c'; }}
                                onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                            >
                                <span style={iconBoxStyle}>
                                    <i className="fa-regular fa-envelope" style={{ fontSize: '0.75rem' }}></i>
                                </span>
                                sales@novaplus.sg
                            </a>
                            <a
                                href="tel:+6590882853"
                                style={contactLinkStyle}
                                onMouseOver={(e) => { e.currentTarget.style.color = '#73aa3c'; }}
                                onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                            >
                                <span style={iconBoxStyle}>
                                    <i className="fa-solid fa-phone" style={{ fontSize: '0.7rem' }}></i>
                                </span>
                                +65 9088 2853
                            </a>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                                <span style={{ ...iconBoxStyle, marginTop: '2px' }}>
                                    <i className="fa-solid fa-location-dot" style={{ fontSize: '0.75rem' }}></i>
                                </span>
                                <span>25 International Business Park<br />#04-103B German Centre<br />Singapore 609916</span>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-3">
                            {[
                                { href: '#', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
                                { href: 'mailto:sales@novaplus.sg', icon: 'fa-regular fa-envelope', label: 'Email' },
                            ].map(({ href, icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    style={{
                                        width: '38px', height: '38px',
                                        border: '1.5px solid rgba(255,255,255,0.15)',
                                        borderRadius: '8px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'rgba(255,255,255,0.6)',
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                        transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.borderColor = '#73aa3c';
                                        e.currentTarget.style.color = '#73aa3c';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                                    }}
                                    aria-label={label}
                                >
                                    <i className={icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Nav columns (2/5) */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-10 pt-1">
                        {/* Services column */}
                        <div>
                            <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 800, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>
                                Services
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['ESG Consultancy', 'Carbon Accounting & Net Zero', 'Training', 'LMS', 'Products'].map((item) => (
                                    <li key={item}>
                                        <a href="#" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company column */}
                        <div>
                            <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 800, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>
                                Company
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['Why Nova Plus', 'About Us', 'Contact Us'].map((item) => (
                                    <li key={item}>
                                        <a href="#" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '18px 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px', position: 'relative', zIndex: 1 }}>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', margin: 0 }}>© 2026 Nova Plus. All rights reserved.</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>
                        <span style={{ width: '6px', height: '6px', background: '#73aa3c', borderRadius: '50%', display: 'inline-block' }}></span>
                        Singapore
                    </div>
                </div>
            </div>
        </footer>
    );
}
