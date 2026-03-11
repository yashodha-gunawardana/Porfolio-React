import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";


const ACCENT = "#0084FF";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/yashoda-gunawardhana-6302073a8/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/yashodha-gunawardana", label: "GitHub" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
];


const Footer = () => {
    const [showTop, setShowTop] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });


    return (
        <footer 
            style={{
                width: "100%",
                background: "#060a14",
                borderTop: "1px solid rgba(0,132,255,0.1)",
                position: "relative",
                overflow: "hidden",
            }}>

            {/* grid texture */}
            <div 
                style={{
                    position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                    backgroundImage: `
                        linear-gradient(rgba(0,132,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,132,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }} 
            />

            {/* glow */}
            <div 
                style={{
                    position: "absolute", top: 0, left: "50%",
                    transform: "translateX(-50%)",
                    width: "600px", height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(0,132,255,0.4), transparent)",
                    zIndex: 0,
                }} 
            />

            <div 
                style={{
                    maxWidth: 1100, margin: "0 auto",
                    padding: "52px 40px 28px",
                    position: "relative", zIndex: 1,
                }}>

                {/* top row*/}
                <div 
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 40,
                        marginBottom: 44,
                    }}>

                    {/* brand */}
                    <div style={{ maxWidth: 300 }}>
                        <div 
                            style={{
                                fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em",
                                color: "#fff", marginBottom: 12,
                                display: "flex", alignItems: "center", gap: 2,
                            }}>

                            <span style={{ color: ACCENT }}>|</span>
                            <span>YASH</span>
                            <span style={{ color: ACCENT }}>ODA</span>
                        </div>

                        <p 
                            style={{
                                fontSize: 13, lineHeight: 1.7, color: "#475569",
                                margin: 0,
                            }}>

                            Full-stack developer passionate about building clean, performant, and user-friendly applications.
                        </p>

                        {/* socials */}
                        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    title={label}
                                    style={{
                                        width: 36, height: 36, borderRadius: "50%",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        background: "rgba(0,132,255,0.06)",
                                        border: "1px solid rgba(0,132,255,0.15)",
                                        color: "#475569",
                                        textDecoration: "none",
                                        transition: "all .3s ease",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = "rgba(0,132,255,0.15)";
                                        e.currentTarget.style.borderColor = "rgba(0,132,255,0.5)";
                                        e.currentTarget.style.color = ACCENT;
                                        e.currentTarget.style.transform = "translateY(-3px)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = "rgba(0,132,255,0.06)";
                                        e.currentTarget.style.borderColor = "rgba(0,132,255,0.15)";
                                        e.currentTarget.style.color = "#475569";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}>
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* nav links */}
                    <div>
                        <p 
                            style={{
                                fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                                textTransform: "uppercase", color: ACCENT, marginBottom: 16, margin: "0 0 16px 0",
                            }}>

                            Navigation
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {navLinks.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    onMouseEnter={() => setHoveredLink(label)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    style={{
                                        fontSize: 13, fontWeight: 500,
                                        color: hoveredLink === label ? "#e2e8f0" : "#475569",
                                        textDecoration: "none",
                                        display: "flex", alignItems: "center", gap: 6,
                                        transition: "color .2s ease",
                                    }}>

                                    <span 
                                        style={{
                                            width: hoveredLink === label ? 14 : 6,
                                            height: 1.5,
                                            background: hoveredLink === label ? ACCENT : "#334155",
                                            borderRadius: 2,
                                            transition: "width .2s ease, background .2s ease",
                                            display: "inline-block",
                                            flexShrink: 0,
                                        }}
                                    />

                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* contact quick info */}
                    <div>
                        <p 
                            style={{
                                fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                                textTransform: "uppercase", color: ACCENT, margin: "0 0 16px 0",
                            }}>

                            Contact
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {[
                                { label: "yashodagunawardhana15@gmail.com" },
                                { label: "+94 77 123 4567" },
                                { label: "Ratnapura, Sri Lanka" },

                            ].map(({ label }) => (

                                <span key={`footer-contact-${label}`} style={{
                                    fontSize: 13, color: "#475569", lineHeight: 1.5,
                                }}>

                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/*divider*/}
                <div 
                    style={{
                        height: 1,
                        background: "linear-gradient(to right, transparent, rgba(0,132,255,0.15), transparent)",
                        marginBottom: 24,
                    }} 
                />

                {/* bottom row */}
                <div 
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 12,
                    }}>

                    <p style={{ fontSize: 12, color: "#334155", margin: 0 }}>
                        © {new Date().getFullYear()} <span style={{ color: "#475569" }}>Yashodha Gunawardana</span>. All rights reserved.
                    </p>

                    <p style={{ fontSize: 12, color: "#334155", margin: 0 }}>
                        Designed & Built with <span style={{ color: ACCENT }}>♥</span> using React & TailwindCSS
                    </p>
                </div>
            </div>

            {/* scroll to top */}
            <button
                onClick={scrollToTop}
                style={{
                    position: "fixed", bottom: 32, right: 32,
                    width: 42, height: 42, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: ACCENT,
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    opacity: showTop ? 1 : 0,
                    transform: showTop ? "translateY(0)" : "translateY(16px)",
                    transition: "opacity .3s ease, transform .3s ease",
                    pointerEvents: showTop ? "all" : "none",
                    zIndex: 999,
                    boxShadow: "0 4px 20px rgba(0,132,255,0.35)",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            
                <HiArrowUp size={18} />
            </button>
        </footer>
    );
};


export default Footer;