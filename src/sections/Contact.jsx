import React, { useEffect, useRef, useState } from "react";


function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

    useEffect(() => {
        const handle = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);

    }, []);
    return width;
};

function useInView(threshold = 0.05) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) setVisible(true);
        }, { threshold });

        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();

    }, []);
    return [ref, visible];
};


const ACCENT = "#0084FF";

const contactInfo = [
    { icon: HiMail, label: "Email", value: "yashodagunawardhana15@gmail.com" },
    { icon: HiPhone, label: "Phone", value: "+94 77 123 4567" },
    { icon: HiLocationMarker, label: "Location", value: "Ratnapura, Sri Lanka" },
];

const socials = [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
];

function InfoCard({ Icon, label, value, delay, visible }) {
    const [hovered, setHovered] = useState(false);


    return (
        <div
            onMouseEnter={() => setHovered(treu)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 20px", borderRadius: 14,
                background: "rgba(255,255,255,0.02)",

                // border brightens on hover to highlight the card
                border: `1px solid ${hovered ? "rgba(0,132,255,0.5)" : "rgba(0,132,255,0.15)"}`,

                // slides right slightly on hover for a tactile feel
                transform: hovered ? "translateX(6px)" : "translateX(0)",
                transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
                cursor: "default",

                // fade in when section scrolls into view, with a staggered delay per card
                opacity: visible ? 1 : 0,
                transitionDelay: `${delay}s`,
            }}>

            {/* circular icon container */}
            <div 
                style={{
                    width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: hovered ? "rgba(0,132,255,0.15)" : "rgba(0,132,255,0.08)",
                    border: `1px solid ${hovered ? "rgba(0,132,255,0.5)" : "rgba(0,132,255,0.2)"}`,
                    transition: "all .3s ease",
                }}>

                <Icon size={18} color={ACCENT} />
            </div>

            <div>
                <div 
                    style={{ 
                        fontSize: 11, fontWeight: 600, 
                        color: "#64748b", letterSpacing: "0.08em", 
                        textTransform: "uppercase", marginBottom: 2 
                    }}>

                    {label}
                </div>

                <div 
                    style={{ 
                        fontSize: 14, fontWeight: 600, 
                        color: hovered ? "#ffffff" : "#e2e8f0", 
                        transition: "color .3s" 
                    }}>

                    {value}
                </div>
            </div>
        </div>
    );
};


function Field({ tag: Tag = "input", placeholder, type, rows }) {
    const [focused, setFocused] = useState(false); 

    return (
        <Tag
            type={type}
            placeholder={placeholder}
            rows={rows}
            onFocus={() => setFocused(true)}   
            onBlur={() => setFocused(false)}    
            style={{
                width: "100%", boxSizing: "border-box",
                padding: "13px 16px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.03)",

                // blue border on focus, subtle border at rest
                border: `1px solid ${focused ? "rgba(0,132,255,0.5)" : "rgba(0,132,255,0.15)"}`,
                color: "#e2e8f0",
                fontSize: 13, fontWeight: 500,
                outline: "none",              
                resize: Tag === "textarea" ? "none" : undefined, 
                transition: "border-color .3s ease",
                fontFamily: "inherit",        
            }}
        />
    );
};


const Contact = () => {
    const [secRef, secVis] = useInView(0.05); 
    const width = useWindowWidth();

    const isMobile  = width < 640;
    const isTablet  = width >= 640 && width < 1024;
    const isStacked = width < 1024;

    // form submission state
    const [sending, setSending] = useState(false); 
    const [sent, setSent]       = useState(false);  

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSending(true);
        setTimeout(() => { setSending(false); setSent(true); }, 1800);
        setTimeout(() => setSent(false), 4000);
    };


    return (
        <section
            id="contact"
            ref={secRef} 
            className="w-full flex flex-col items-center py-30 relative overflow-hidden"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #112240, #0F1628, #0A0F1E, #090D1A)",
                paddingLeft:  isMobile ? "20px" : isTablet ? "40px" : "80px",
                paddingRight: isMobile ? "20px" : isTablet ? "40px" : "80px",
            }}>

            {/* subtle dot grid texture overlay for depth */}
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

            {/* heading */}
            <div 
                style={{
                    textAlign: "center", marginBottom: isMobile ? 36 : 56,
                    position: "relative", zIndex: 1,
                    opacity: secVis ? 1 : 0,
                    transform: secVis ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity .6s ease, transform .6s cubic-bezier(.22,1,.36,1)",
                }}>

                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A0AEC0", marginBottom: 8 }}>
                    Get In Touch
                </p>

                <h2 
                    style={{
                        fontSize: isMobile ? "2rem" : isTablet ? "2.6rem" : "3.2rem",
                        fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.15,
                    }}>

                    Contact <span style={{ color: ACCENT }}>Me</span>
                </h2>

                {/* blue underline bar */}
                <div style={{ width: 60, height: 3, background: ACCENT, borderRadius: 2, margin: "14px auto 0" }} />
            </div>


            {/* two column layout */}
            <div 
                style={{
                    display: "flex",
                    flexDirection: isStacked ? "column" : "row",
                    gap: isMobile ? 36 : 48,
                    width: "100%", maxWidth: 1000,
                    position: "relative", zIndex: 1,
                    opacity: secVis ? 1 : 0,
                    transition: "opacity .5s ease .15s",
                }}>

                
                {/* left side */}
                <div style={{ flex: "0 0 340px", display: "flex", flexDirection: "column", gap: 0, width: isStacked ? "100%" : undefined }}>

                    {/* "Let's Connect" label */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, whiteSpace: "nowrap" }}>
                            Let's Connect
                        </span>
                        <div style={{ flex: 1, height: 1, background: "rgba(0,132,255,0.15)" }} />
                    </div>

                    <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "#64748b", marginBottom: 28, margin: "0 0 28px 0" }}>
                        I'm open to freelance work, collaborations, or just a friendly chat. Feel free to reach out anytime!
                    </p>

                    {/* info cards*/}
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {contactInfo.map(({ icon: Icon, label, value }, i) => (
                            <InfoCard
                                key={label}
                                Icon={Icon}
                                label={label}
                                value={value}
                                delay={0.1 + i * 0.1} 
                                visible={secVis}
                            />
                        ))}
                    </div>

                    {/* social icon buttons row */}
                    <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                title={label}
                                style={{
                                    width: 42, height: 42, borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    background: "rgba(0,132,255,0.08)",
                                    border: "1px solid rgba(0,132,255,0.2)",
                                    color: "#64748b",
                                    textDecoration: "none",
                                    transition: "all .3s ease",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "rgba(0,132,255,0.15)";
                                    e.currentTarget.style.borderColor = "rgba(0,132,255,0.5)";
                                    e.currentTarget.style.color = ACCENT;
                                    e.currentTarget.style.transform = "translateY(-4px)"; // Lift up
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "rgba(0,132,255,0.08)";
                                    e.currentTarget.style.borderColor = "rgba(0,132,255,0.2)";
                                    e.currentTarget.style.color = "#64748b";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}>

                                <Icon size={15} />
                            </a>
                        ))}
                    </div>
                </div>

                

            </div>

        </section>
    );
}