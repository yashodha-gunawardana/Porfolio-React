import React, { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaGithub, FaPaperPlane, FaFacebook, FaReact, FaNodeJs, FaDocker, FaJava, FaFigma, FaPython } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { SiTypescript, SiMongodb, SiTailwindcss, SiSpringboot, SiMysql, SiFirebase } from "react-icons/si";
import emailjs from "@emailjs/browser";


function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
    useEffect(() => {
        const handle = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);
    }, []);
    return width;
}

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
}

const ACCENT = "#0084FF";

const contactInfo = [
    { icon: HiMail, label: "Email", value: "yashodagunawardhana15@gmail.com" },
    { icon: HiLocationMarker, label: "Location", value: "Ratnapura, Sri Lanka" },
];

const socials = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/yashoda-gunawardhana-6302073a8/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/yashodha-gunawardana", label: "GitHub" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
];

const leftIcons = [
    { icon: FaReact, color: "#61DAFB", duration: 5.5, delay: 0,   label: "React" },
    { icon: FaNodeJs, color: "#68A063", duration: 7,   delay: 1.2, label: "Node.js" },
    { icon: SiTypescript, color: "#3178C6", duration: 6.2, delay: 2.1, label: "TypeScript" },
    { icon: SiMongodb, color: "#47A248", duration: 8,   delay: 0.7, label: "MongoDB" },
    { icon: FaDocker, color: "#2496ED", duration: 6.5, delay: 1.8, label: "Docker" },
    { icon: FaFigma, color: "#F24E1E", duration: 7.5, delay: 3.2, label: "Figma" },
];

const rightIcons = [
    { icon: SiTailwindcss, color: "#38BDF8", duration: 6,   delay: 0.5, label: "Tailwind" },
    { icon: FaJava, color: "#F89820", duration: 7.2, delay: 1.1, label: "Java" },
    { icon: SiSpringboot, color: "#6DB33F", duration: 8.1, delay: 2.3, label: "Spring Boot" },
    { icon: SiMysql, color: "#4479A1", duration: 6.5, delay: 0.3, label: "MySQL" },
    { icon: SiFirebase, color: "#FFCA28", duration: 7.3, delay: 2.8, label: "Firebase" },
    { icon: FaPython, color: "#3776AB", duration: 5.8, delay: 1.6, label: "Python" },
];

function InfoCard({ Icon, label, value, delay, visible }) {
    const [hovered, setHovered] = useState(false);

    
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 20px", borderRadius: 14,
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${hovered ? "rgba(0,132,255,0.5)" : "rgba(0,132,255,0.15)"}`,
                transform: hovered ? "translateX(6px)" : "translateX(0)",
                transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
                cursor: "default",
                opacity: visible ? 1 : 0,
                transitionDelay: `${delay}s`,
            }}>

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
                <div style={{ fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>
                    {label}
                </div>

                <div style={{ fontSize: 14, fontWeight: 600, color: hovered ? "#ffffff" : "#e2e8f0", transition: "color .3s" }}>
                    {value}
                </div>
            </div>
        </div>
    );
}

function Field({ tag: Tag = "input", placeholder, type, rows, name }) {
    const [focused, setFocused] = useState(false);
    return (
        <Tag
            name={name}
            type={type}
            placeholder={placeholder}
            rows={rows}

            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
                width: "100%", boxSizing: "border-box",
                padding: "13px 16px", borderRadius: 12,
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${focused ? "rgba(0,132,255,0.5)" : "rgba(0,132,255,0.15)"}`,
                color: "#e2e8f0", fontSize: 13, fontWeight: 500,
                outline: "none",
                resize: Tag === "textarea" ? "none" : undefined,
                transition: "border-color .3s ease",
                fontFamily: "inherit",
            }}
        />
    );
}

// Improved icon strip — icons with label tooltip + glow dot + connecting dashes
function IconStrip({ icons, side }) {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const isLeft = side === "left";

    return (
        <div 
            style={{
                position: "absolute",
                top: 0, bottom: 0,
                [side]: 0,
                width: "68px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                zIndex: 0,
                pointerEvents: "none",
                maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}>

            {/* background glow column */}
            <div 
                style={{
                    position: "absolute", top: 0, bottom: 0,
                    width: "100%",
                    background: isLeft
                        ? "linear-gradient(to right, rgba(0,132,255,0.04), transparent)"
                        : "linear-gradient(to left, rgba(0,132,255,0.04), transparent)",
                }} 
            />

            {/* connector line */}
            <div 
                style={{
                    position: "absolute", top: 0, bottom: 0,
                    [isLeft ? "right" : "left"]: "10px",
                    width: "1px",
                    background: "linear-gradient(to bottom, transparent, rgba(0,132,255,0.25) 15%, rgba(0,132,255,0.25) 85%, transparent)",
                }} 
            />

            {icons.map(({ icon: Icon, color, duration, delay, label }, i) => (
                <div
                    key={i}
                    style={{
                        position: "relative", zIndex: 1,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: isLeft ? "row" : "row-reverse",
                        gap: 6,
                        animation: `floatIcon ${duration}s ${delay}s ease-in-out infinite`,
                        pointerEvents: "auto",
                        cursor: "default",
                    }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}>
                
                    {/* icon box */}
                    <div 
                        style={{
                            width: 38, height: 38,
                            borderRadius: 11,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: hoveredIdx === i
                                ? `rgba(${color === "#61DAFB" ? "97,218,251" : "0,132,255"},0.12)`
                                : "rgba(255,255,255,0.03)",
                            border: `1px solid ${hoveredIdx === i ? color + "55" : "rgba(255,255,255,0.07)"}`,
                            boxShadow: hoveredIdx === i ? `0 0 16px ${color}33` : "none",
                            opacity: hoveredIdx === i ? 0.95 : 0.4,
                            transition: "all .3s ease",
                        }}>

                        <Icon size={17} color={color} />
                    </div>

                    {/* connector dash to line */}
                    <div 
                        style={{
                            width: "8px", height: "1px",
                            background: hoveredIdx === i ? `${color}88` : "rgba(0,132,255,0.2)",
                            transition: "background .3s ease",
                        }} 
                    />

                    {/* tooltip label on hover */}
                    {hoveredIdx === i && (
                        <div 
                            style={{
                                position: "absolute",
                                [isLeft ? "left" : "right"]: "54px",
                                background: "rgba(9,13,26,0.95)",
                                border: `1px solid ${color}44`,
                                borderRadius: 7,
                                padding: "4px 10px",
                                fontSize: 11, fontWeight: 600,
                                color: color,
                                whiteSpace: "nowrap",
                                letterSpacing: "0.06em",
                                boxShadow: `0 4px 16px rgba(0,0,0,0.4)`,
                                zIndex: 10,
                            }}>

                            {label}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const Contact = () => {
    const [secRef, secVis] = useInView(0.05);
    const width = useWindowWidth();
    const isMobile  = width < 640;
    const isTablet  = width >= 640 && width < 1024;
    const isStacked = width < 1024;

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        const form = formRef.current;
        const templateParams = {
            from_name:  form.from_name.value,
            from_email: form.from_email.value,
            subject:    form.subject.value,
            message:    form.message.value,
        };

        emailjs.send(
            "service_um7z4yl",
            "template_j8dwdbz",
            templateParams,
            "pPMbodLc4NNChP4pN"
        )
        .then(() => {
            setSending(false);
            setSent(true);
            form.reset();
            setTimeout(() => setSent(false), 4000);
        })
        .catch((err) => {
            console.error("EmailJS error:", err);

            setSending(false);
            alert("Failed to send. Please try again.")
        });
    };


    return (
        <section
            id="contact"
            ref={secRef}
            className="w-full flex flex-col items-center py-30 relative overflow-hidden"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #0d1b2e 0%, #0a1020 40%, #090d1a 70%, #0c1528 100%)",
                paddingLeft:  isMobile ? "20px" : isTablet ? "60px" : "100px",
                paddingRight: isMobile ? "20px" : isTablet ? "60px" : "100px",
            }}>

            <style>{`
                @keyframes floatIcon {
                    0%, 100% { transform: translateY(0px) scale(1);    }
                    50%       { transform: translateY(-9px) scale(1.03); }
                }
            `}</style>

            {/* fine dot grid */}
            <div 
                style={{
                    position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(rgba(0,132,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }} 
            />

            {/* center radial glow */}
            <div 
                style={{
                    position: "absolute", top: "40%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "700px", height: "500px",
                    background: "radial-gradient(ellipse, rgba(0,132,255,0.05) 0%, transparent 70%)",
                    pointerEvents: "none", zIndex: 0,
                }} 
            />

            {/* top edge glow line */}
            <div 
                style={{
                    position: "absolute", top: 0, left: "15%",
                    width: "70%", height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(0,132,255,0.3), transparent)",
                    zIndex: 0,
                }} 
            />

            {/* icon strips — desktop only */}
            {!isMobile && !isTablet && <IconStrip icons={leftIcons}  side="left"  />}
            {!isMobile && !isTablet && <IconStrip icons={rightIcons} side="right" />}

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

                {/* left col */}
                <div style={{ flex: "0 0 340px", display: "flex", flexDirection: "column", width: isStacked ? "100%" : undefined }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                        
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, whiteSpace: "nowrap" }}>
                            Let's Connect
                        </span>

                        <div style={{ flex: 1, height: 1, background: "rgba(0,132,255,0.15)" }} />
                    </div>

                    <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "#64748b", margin: "0 0 28px 0" }}>
                        I'm open to freelance work, collaborations, or just a friendly chat. Feel free to reach out anytime!
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {contactInfo.map(({ icon: Icon, label, value }, i) => (

                            <InfoCard 
                                key={`contact-info-${label}`} 
                                Icon={Icon} 
                                label={label} 
                                value={value} 
                                delay={0.1 + i * 0.1} 
                                visible={secVis} 
                            />

                        ))}
                    </div>

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
                                    color: "#64748b", textDecoration: "none",
                                    transition: "all .3s ease",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "rgba(0,132,255,0.15)";
                                    e.currentTarget.style.borderColor = "rgba(0,132,255,0.5)";
                                    e.currentTarget.style.color = ACCENT;
                                    e.currentTarget.style.transform = "translateY(-4px)";
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

                {/* divider */}
                {!isStacked && <div style={{ alignSelf: "stretch", width: 1, background: "rgba(0,132,255,0.1)", flexShrink: 0 }} />}
                {isStacked  && <div style={{ width: "100%", height: 1, background: "rgba(0,132,255,0.1)" }} />}

                {/* right col */}
                <div style={{ flex: 1, width: isStacked ? "100%" : undefined }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                        
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, whiteSpace: "nowrap" }}>
                            Send a Message
                        </span>

                        <div style={{ flex: 1, height: 1, background: "rgba(0,132,255,0.15)" }} />
                    </div>


                    <form 
                        ref={formRef} 
                        onSubmit={handleSubmit} 
                        style={{ 
                            display: "flex", flexDirection: "column", gap: 14 
                        }}>

                        {/* fields */}
                        <div style={{ display: "flex", gap: 14, flexDirection: isMobile ? "column" : "row" }}>

                            <div style={{ flex: 1 }}>
                                <Field name="from_name" tag="input" type="text"  placeholder="Your Name" />
                            </div>

                            <div style={{ flex: 1 }}>
                                <Field name="from_email" tag="input" type="email" placeholder="Your Email" />
                            </div>
                        </div>

                        <Field name="subject" tag="input" type="text" placeholder="Subject" />
                        <Field name="message" tag="textarea" placeholder="Your Message" rows={6} />

                        {/* submit btn */}
                        <button
                            type="submit"
                            disabled={sending || sent}
                            style={{
                                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                padding: "13px 28px", borderRadius: 12,
                                background: sent ? "rgba(34,197,94,0.15)" : ACCENT,
                                border: `1px solid ${sent ? "rgba(34,197,94,0.4)" : ACCENT}`,
                                color: sent ? "#4ade80" : "#fff",
                                fontSize: 13.5, fontWeight: 700, letterSpacing: "0.04em",
                                cursor: sending || sent ? "not-allowed" : "pointer",
                                opacity: sending ? 0.75 : 1,
                                transition: "all .3s ease",
                                alignSelf: "flex-start",
                            }}

                            onMouseEnter={e => { if (!sending && !sent) e.currentTarget.style.opacity = "0.88"; }}
                            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}>
                            {sent ? (
                                <>✓ Message Sent!</>
                            ) : sending ? (
                                <>
                                    <svg width="14" height="14" viewBox="0 0 14 14" style={{ animation: "spin 1s linear infinite" }}>
                                        <circle cx="7" cy="7" r="5" fill="none" stroke="white" strokeWidth="2" strokeDasharray="20" strokeDashoffset="5" />
                                    </svg>
                                    Sending…
                                </>
                            ) : (
                                <><FaPaperPlane size={13} /> Send Message</>
                            )}
                        </button>
                        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;