import React, { useEffect, useRef, useState } from "react";
import CodeBackground from "../components/CodeBackground";


const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";


const Icons = {
    Html5:      { src: `${D}/html5/html5-original.svg`,              name: "HTML",         color: "#E34F26", glow: "rgba(227,79,38,0.35)"   },
    Css3:       { src: `${D}/css3/css3-original.svg`,                name: "CSS",          color: "#1572B6", glow: "rgba(21,114,182,0.35)"  },
    JavaScript: { src: `${D}/javascript/javascript-original.svg`,    name: "JavaScript",   color: "#F7DF1E", glow: "rgba(247,223,30,0.35)"  },
    TypeScript: { src: `${D}/typescript/typescript-original.svg`,    name: "TypeScript",   color: "#3178C6", glow: "rgba(49,120,198,0.35)"  },
    React:      { src: `${D}/react/react-original.svg`,              name: "React",        color: "#61DAFB", glow: "rgba(97,218,251,0.35)"  },
    Tailwind:   { src: `${D}/tailwindcss/tailwindcss-original.svg`,  name: "Tailwind",     color: "#38BDF8", glow: "rgba(56,189,248,0.35)"  },
    Bootstrap:  { src: `${D}/bootstrap/bootstrap-original.svg`,      name: "Bootstrap",    color: "#7952B3", glow: "rgba(121,82,179,0.35)"  },
    Responsive: { src: `${D}/chrome/chrome-original.svg`,            name: "Responsive",   color: "#4285F4", glow: "rgba(66,133,244,0.35)"  },
    ReactNative:{ src: `${D}/react/react-original.svg`,              name: "React Native", color: "#61DAFB", glow: "rgba(97,218,251,0.35)"  },
    Expo:       { src: `${D}/expo/expo-original.svg`,                name: "Expo",         color: "#e2e8f0", glow: "rgba(226,232,240,0.2)"  },
    NodeJS:     { src: `${D}/nodejs/nodejs-original.svg`,            name: "Node.js",      color: "#3C873A", glow: "rgba(60,135,58,0.35)"   },
    Express:    { src: `${D}/express/express-original.svg`,          name: "Express.js",   color: "#aaaaaa", glow: "rgba(200,200,200,0.2)"  },
    SpringBoot: { src: `${D}/spring/spring-original.svg`,            name: "Spring Boot",  color: "#6DB33F", glow: "rgba(109,179,63,0.35)"  },
    Java:       { src: `${D}/java/java-original.svg`,                name: "Java",         color: "#f89820", glow: "rgba(248,152,32,0.35)"  },
    Python:     { src: `${D}/python/python-original.svg`,            name: "Python",       color: "#3776AB", glow: "rgba(55,118,171,0.35)"  },
    MySQL:      { src: `${D}/mysql/mysql-original.svg`,              name: "MySQL",        color: "#00758F", glow: "rgba(0,117,143,0.35)"   },
    MongoDB:    { src: `${D}/mongodb/mongodb-original.svg`,          name: "MongoDB",      color: "#47A248", glow: "rgba(71,162,72,0.35)"   },
    Figma:      { src: `${D}/figma/figma-original.svg`,              name: "Figma",        color: "#F24E1E", glow: "rgba(242,78,30,0.35)"   },
    Wireframe:  { src: `${D}/sketch/sketch-original.svg`,            name: "Wireframing",  color: "#F7B500", glow: "rgba(247,181,0,0.35)"   },
    Prototype:  { src: `${D}/xd/xd-original.svg`,                   name: "Prototyping",  color: "#FF2BC2", glow: "rgba(255,43,194,0.35)"  },
};


const EduIcons = {
    University: ({ size = 20, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" fill={color}>
            <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-10.3-4.4-22.1-4.4-32.4 0zM128 224l-64 0 0 196.3c-11.6 6.9-20.4 18.2-23.6 32.1L36 464c-3.3 14.4 7.3 28 22.1 28l395.8 0c14.8 0 25.4-13.6 22.1-28l-4.4-11.6c-3.2-13.9-12-25.2-23.6-32.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
        </svg>
    ),
    School: ({ size = 20, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 640 512" fill={color}>
            <path d="M0 224v272c0 8.8 7.2 16 16 16l608 0c8.8 0 16-7.2 16-16l0-272c0-8.8-7.2-16-16-16L480 208l0 80-48 0 0-80-160 0 0 80-48 0 0-80L16 208c-8.8 0-16 7.2-16 16zM208 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l80 0 0 48-48 0c-8.8 0-16 7.2-16 16l0 32 192 0 0-32c0-8.8-7.2-16-16-16l-48 0 0-48 80 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L208 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm288 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
        </svg>
    ),
    GradCap: ({ size = 20, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 640 512" fill={color}>
            <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l280.6 101.3c7.5 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496 262.6l-166.9 60.3c-2.7 1-5.5 1.8-8.3 2.4c-11.5 2.6-23.5 2.6-35 0c-2.8-.6-5.6-1.4-8.3-2.4L112 262.6 128 408z"/>
        </svg>
    ),
};


const education = [
    { iconKey: "University", name: "IJSE",                       degree: "Software Engineering", year: "2024 – Present", color: "#38bdf8" },
    { iconKey: "School",     name: "R/Vidyakara Maha Vidyalaya", degree: "Advanced Level",        year: "2019 – 2021",   color: "#818cf8" },
    { iconKey: "GradCap",    name: "R/Vidyakara Maha Vidyalaya", degree: "Ordinary Level",        year: "2015 – 2019",   color: "#61DAFB" },
];

const skills = [
    { category: "Frontend", accent: "#0084FF",  techs: ["Html5","Css3","JavaScript","TypeScript","React","Tailwind","Bootstrap","Responsive"] },
    { category: "Mobile",   accent: "#38bdf8",  techs: ["React","Expo"] },
    { category: "Backend",  accent: "#6DB33F",  techs: ["NodeJS","Express","SpringBoot","Java","Python"] },
    { category: "Database", accent: "#47A248",  techs: ["MySQL","MongoDB"] },
    { category: "Design",   accent: "#F24E1E",  techs: ["Figma","Wireframe","Prototype"] },
];


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
            <CodeBackground />

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
                        {education.map(({ iconKey, name, degree, year, color }, i) => {
                            const Icon = EduIcons[iconKey];
                            return (
                                <TimelineCard
                                    key={name + year}
                                    Icon={Icon}
                                    name={name}
                                    degree={degree}
                                    year={year}
                                    color={color}
                                    isLast={i === education.length - 1}
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