import React, { useEffect, useRef, useState } from "react";
import { Icons, EduIcons, educations, skills } from "../data/educationSkills";
import CursorGridBackground from "../components/CursorGridBackground";


// responsive hook
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


// technologies card in skills
function TechCard({ iconKey, compact }) {
    const [hovered, setHovered] = useState(false);
    const { src, name, color, glow } = Icons[iconKey];
    const fallback = src.replace("-original.svg", "-plain.svg");

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex", alignItems: "center", gap: compact ? 7 : 10,
                padding: compact ? "8px 13px" : "10px 18px",
                borderRadius: compact ? 10 : 12,
                background: hovered
                    ? `radial-gradient(ellipse at left, ${glow}, transparent 70%), rgba(255,255,255,.05)`
                    : "rgba(255,255,255,.03)",
                border: `1px solid ${hovered ? color + "55" : "rgba(255,255,255,.08)"}`,
                boxShadow: hovered ? `0 4px 16px ${glow}, 0 0 0 1px ${color}22` : "none",
                transform: hovered ? "translateY(-3px) scale(1.04)" : "translateY(0) scale(1)",
                transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
                cursor: "default",
                whiteSpace: "nowrap",
            }}>

            <span 
                style={{
                    display: "block",
                    filter: hovered ? `drop-shadow(0 0 6px ${color}99)` : "none",
                    transform: hovered ? "scale(1.15)" : "scale(1)",
                    transition: "all .3s ease", flexShrink: 0,
                }}>
                <img src={src} width={compact ? 18 : 22} height={compact ? 18 : 22} alt={name}
                    style={{ display: "block", objectFit: "contain" }}
                    onError={(e) => { if (e.target.src !== fallback) e.target.src = fallback; }}
                />
            </span>

            <span 
                style={{
                    fontSize: compact ? 11 : 13, fontWeight: 600, letterSpacing: ".02em",
                    color: hovered ? "#e2e8f0" : "#64748b",
                    transition: "color .3s",
                }}>

                {name}
            </span>
        </div>
    );
}


// timeline for education side
function TimelineCard({ Icon, name, degree, year, color, isLast, index, visible, compact }) {
    const [hovered, setHovered] = useState(false);
    const glow = color + "55";
    const dotSize  = compact ? 38 : 44;
    const iconSize = compact ? 17 : 20;

    return (
        <div 
            style={{
                display: "flex", gap: 0,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-24px)",
                transition: `opacity .6s ease ${0.2 + index * 0.15}s, transform .6s cubic-bezier(.22,1,.36,1) ${0.2 + index * 0.15}s`,
            }}>
            
            {/* timeline spine */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: compact ? 42 : 48, flexShrink: 0 }}>
                <div   
                    style={{
                        width: dotSize, height: dotSize, borderRadius: "50%", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: hovered ? `${color}22` : "rgba(0,132,255,0.08)",
                        border: `2px solid ${hovered ? color : "rgba(0,132,255,0.3)"}`,
                        boxShadow: hovered ? `0 0 20px ${glow}` : "none",
                        transition: "all .3s ease", zIndex: 1,
                    }}>

                    <Icon size={iconSize} color={hovered ? color : "#60a5fa"} />
                </div>

                {!isLast && (
                    <div style={{
                        width: 1, flex: 1, minHeight: 24,
                        background: "linear-gradient(to bottom, rgba(0,132,255,0.3), rgba(0,132,255,0.05))",
                        marginTop: 4,
                    }} />
                )}
            </div>

            {/* card content */}
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    flex: 1, marginLeft: compact ? 10 : 12,
                    marginBottom: isLast ? 0 : (compact ? 20 : 28),
                    padding: compact ? "13px 16px" : "16px 20px",
                    borderRadius: 14,
                    background: hovered
                        ? `radial-gradient(ellipse at left, ${color}18, transparent 70%), rgba(255,255,255,0.04)`
                        : "rgba(255,255,255,0.02)",
                    border: `1px solid ${hovered ? color + "44" : "rgba(255,255,255,0.07)"}`,
                    boxShadow: hovered ? `0 6px 24px ${color}22` : "none",
                    transform: hovered ? "translateX(4px)" : "translateX(0)",
                    transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
                    cursor: "default",
                }}>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <div>
                        <div 
                            style={{
                                fontSize: compact ? 13 : 15, fontWeight: 700,
                                color: hovered ? "#ffffff" : "#e2e8f0",
                                transition: "color .3s", marginBottom: 4,
                            }}>

                            {name}
                        </div>

                        <div 
                            style={{
                                fontSize: compact ? 11 : 13,
                                color: hovered ? "#94a3b8" : "#475569",
                                transition: "color .3s",
                            }}>

                            {degree}
                        </div>
                    </div>

                    <span 
                        style={{
                            fontSize: compact ? 10 : 12, fontWeight: 600,
                            padding: compact ? "3px 10px" : "4px 12px", borderRadius: 999,
                            background: hovered ? `${color}20` : "rgba(0,132,255,0.08)",
                            color: hovered ? color : "#0084FF",
                            border: `1px solid ${hovered ? color + "44" : "rgba(0,132,255,0.2)"}`,
                            transition: "all .3s ease",
                            whiteSpace: "nowrap", flexShrink: 0,
                        }}>

                        {year}
                    </span>
                </div>
            </div>
        </div>
    );
}


// education section
const Education = () => {
    const [secRef, secVis] = useInView(0.05);
    const width = useWindowWidth();

    const isMobile  = width < 640;           // < 640px  → mobile
    const isTablet  = width >= 640 && width < 1024; // 640–1023 → tablet
    const isStacked = width < 1024;          // tablet + mobile → single column

    const sectionPadding = isMobile ? "20px" : isTablet ? "40px" : undefined;

    return (
        <section
            id="education"
            ref={secRef}
            className={`w-full flex flex-col items-center py-30 relative overflow-hidden ${!isStacked ? "px-50" : ""}`}
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #112240, #0F1628, #0A0F1E, #090D1A)",
                ...(isStacked && { paddingLeft: sectionPadding, paddingRight: sectionPadding }),
            }}>

            {/* fine dot grid */}
            <div 
                style={{
                    position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(rgba(0,132,255,0.07) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }} 
            />

            <CursorGridBackground />

            {/* top edge glow line */}
            <div 
                style={{
                    position: "absolute", top: 0, left: "15%",
                    width: "70%", height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(0,132,255,0.25), transparent)",
                    zIndex: 0,
                }} 
            />

            {/* heading */}
            <div 
                style={{
                    textAlign: "center",
                    marginBottom: isMobile ? 36 : isTablet ? 44 : 56,
                    opacity: secVis ? 1 : 0,
                    transform: secVis ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity .6s ease, transform .6s cubic-bezier(.22,1,.36,1)",
                }}>

                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A0AEC0", marginBottom: 8 }}>
                    My Journey
                </p>

                <h2 
                    style={{
                        fontSize: isMobile ? "2rem" : isTablet ? "2.6rem" : "3.2rem",
                        fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.15,
                    }}>

                    Education &amp; <span style={{ color: "#0084FF" }}>Skills</span>
                </h2>

                <div style={{ width: 60, height: 3, background: "#0084FF", borderRadius: 2, margin: "14px auto 0" }} />
            </div>

            {/* two-column (desktop) / stacked (tablet+mobile) layout */}
            <div 
                style={{
                    display: "flex",
                    flexDirection: isStacked ? "column" : "row",
                    alignItems: "flex-start",
                    gap: isMobile ? 36 : isTablet ? 44 : 52,
                    width: "100%",
                    maxWidth: isStacked ? "100%" : 1100,
                    opacity: secVis ? 1 : 0,
                    transition: "opacity .5s ease .1s",
                }}>

                {/* left / top: education timeline */}
                <div 
                    style={{
                        flex: isStacked ? "none" : "0 0 420px",
                        width: isStacked ? "100%" : undefined,
                        minWidth: 0,
                    }}>

                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0084FF", whiteSpace: "nowrap" }}>
                            
                            Education
                        </span>
                        <div style={{ flex: 1, height: 1, background: "rgba(0,132,255,0.15)" }} />
                    </div>

                    <div>
                        {educations.map(({ iconKey, name, degree, year, color }, i) => {
                            const Icon = EduIcons[iconKey];
                            return (
                                <TimelineCard
                                    key={name + year}
                                    Icon={Icon}
                                    name={name}
                                    degree={degree}
                                    year={year}
                                    color={color}
                                    isLast={i === educations.length - 1}
                                    index={i}
                                    visible={secVis}
                                    compact={isMobile}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* divider: horizontal when stacked, vertical on desktop */}
                {isStacked
                    ? <div style={{ width: "100%", height: 1, background: "rgba(0,132,255,0.1)", flexShrink: 0 }} />
                    : <div style={{ alignSelf: "stretch", width: 1, background: "rgba(0,132,255,0.1)", flexShrink: 0 }} />
                }

                {/* right / bottom: skills */}
                <div 
                    style={{
                        flex: 1,
                        width: isStacked ? "100%" : undefined,
                        minWidth: 0,
                        display: "flex", flexDirection: "column",
                        gap: isMobile ? 18 : isTablet ? 20 : 24,
                    }}>

                    {skills.map(({ category, accent, techs }, si) => (
                        <div 
                            key={category} 
                            style={{
                                opacity: secVis ? 1 : 0,
                                transform: secVis ? "translateX(0)" : "translateX(20px)",
                                transition: `opacity .6s ease ${0.25 + si * 0.1}s, transform .6s cubic-bezier(.22,1,.36,1) ${0.25 + si * 0.1}s`,
                            }}>

                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: isMobile ? 8 : 12 }}>
                                <span 
                                    style={{
                                        fontSize: 12, fontWeight: 700, letterSpacing: "0.14em",
                                        textTransform: "uppercase", color: accent, whiteSpace: "nowrap",
                                    }}>

                                    {category}
                                </span>

                                <div style={{ flex: 1, height: 1, background: `${accent}25` }} />
                            </div>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 7 : 10 }}>
                                {techs.map((iconKey) => (
                                    <TechCard key={iconKey} iconKey={iconKey} compact={isMobile} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;