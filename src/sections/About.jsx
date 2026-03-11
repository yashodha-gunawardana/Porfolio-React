import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaReact, FaNodeJs, FaDocker, FaJava, FaFigma, FaPython } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiTailwindcss, SiSpringboot, SiMysql, SiFirebase } from "react-icons/si";



function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
    useEffect(() => {
        const handle = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);
    }, []);
    return width;
}

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
                    position: "absolute", top: 0, bottom: 0, width: "100%",
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
                        display: "flex", alignItems: "center",
                        flexDirection: isLeft ? "row" : "row-reverse",
                        gap: 6,
                        animation: `floatIcon ${duration}s ${delay}s ease-in-out infinite`,
                        pointerEvents: "auto", cursor: "default",
                    }}

                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}>
                
                    <div 
                        style={{
                            width: 38, height: 38, borderRadius: 11,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: hoveredIdx === i ? "rgba(0,132,255,0.12)" : "rgba(255,255,255,0.03)",
                            border: `1px solid ${hoveredIdx === i ? color + "55" : "rgba(255,255,255,0.07)"}`,
                            boxShadow: hoveredIdx === i ? `0 0 16px ${color}33` : "none",
                            opacity: hoveredIdx === i ? 0.95 : 0.4,
                            transition: "all .3s ease",
                        }}>

                        <Icon size={17} color={color} />
                    </div>

                    {/* dash connector */}
                    <div 
                        style={{
                            width: "8px", height: "1px",
                            background: hoveredIdx === i ? `${color}88` : "rgba(0,132,255,0.2)",
                            transition: "background .3s ease",
                        }} 
                    />

                    {/* tooltip */}
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
                                boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
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

const About = () => {
    const width = useWindowWidth();
    const isMobile  = width < 640;
    const isTablet  = width >= 640 && width < 1024;
    const isDesktop = width >= 1024;


    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current
                        ?.querySelectorAll(".about-fade-1, .about-fade-2, .about-fade-3, .about-fade-4, .about-fade-5")
                        .forEach(el => el.classList.add("animate"));
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: "10+", label: "Projects Done"   },
        { number: "2+",  label: "Years Learning"  },
        { number: "5+",  label: "Technologies"    },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="w-full flex items-start justify-between lg:px-50 lg:py-50 md:px-16 md:py-35 px-6 py-30"
            style={{ minHeight: "100vh", background: "#0A0F1E", position: "relative", overflow: "hidden" }}>

            <style>{`
                @keyframes floatIcon {
                    0%, 100% { transform: translateY(0px) scale(1);     }
                    50%       { transform: translateY(-9px) scale(1.03); }
                }
            `}</style>

            {/* fine dot grid */}
            <div 
                style={{
                    position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(rgba(0,132,255,0.07) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }} 
            />

            {/* center radial glow */}
            <div 
                style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "800px", height: "600px",
                    background: "radial-gradient(ellipse, rgba(0,132,255,0.04) 0%, transparent 70%)",
                    pointerEvents: "none", zIndex: 0,
                }} 
            />

            {/* top edge glow line */}
            <div 
                style={{
                    position: "absolute", top: 0, left: "15%",
                    width: "70%", height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(0,132,255,0.25), transparent)",
                    zIndex: 0,
                }} 
            />

            {/* icon strips — desktop only */}
            {isDesktop && <IconStrip icons={leftIcons}  side="left"  />}
            {isDesktop && <IconStrip icons={rightIcons} side="right" />}

            {/* content */}
            <div className="flex flex-col lg:flex-row lg:gap-40 gap-12 max-w-5xl w-full" style={{ position: "relative", zIndex: 1 }}>

                {/* profile image */}
                <div className="about-fade-1 relative flex-shrink-0 flex justify-center lg:block">
                    <div className="img-frame relative z-10 lg:w-[500px] lg:h-[600px] md:w-[250px] md:h-[280px] w-[200px] h-[200px]">
                        
                        <div className="absolute inset-0" style={{ border: "2px solid #A0AEC0", borderRadius: "4px", zIndex: 0 }} />
                        
                        <img
                            src="src/assets/profile.png"
                            alt="Yashoda"
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", borderRadius: "4px", display: "block" }}
                        />

                        {/* top corner */}
                        <div 
                            className="absolute lg:-top-[20px] lg:-right-[20px] lg:w-[40px] lg:h-[40px] md:-top-[15px] md:-right-[15px] md:w-[30px] md:h-[30px] -top-[10px] -right-[10px] w-[22px] h-[22px]"
                            style={{ borderTop: "3px solid #0084FF", borderRight: "3px solid #0084FF", zIndex: 20 }} 
                        />

                        {/* bottom corner */}
                        <div 
                            className="absolute lg:-bottom-[20px] lg:-left-[20px] lg:w-[40px] lg:h-[40px] md:-bottom-[15px] md:-left-[15px] md:w-[30px] md:h-[30px] -bottom-[10px] -left-[10px] w-[22px] h-[22px]"
                            style={{ borderBottom: "3px solid #0084FF", borderLeft: "3px solid #0084FF", zIndex: 20 }} 
                        />
                    </div>
                </div>

                {/* text content */}
                <div className="flex flex-col gap-5">

                    <div className="about-fade-2 lg:text-left text-center">
                        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#A0AEC0" }}>
                            Get To Know
                        </p>

                        <h2 className="lg:text-5xl font-bold text-white md:text-5xl text-3xl">
                            About <span style={{ color: "#0084FF" }}>Me</span>
                        </h2>
                    </div>

                    {/* divider */}
                    <div className="about-fade-2 mx-auto lg:mx-0"
                        style={{ width: "60px", height: "3px", background: "#0084FF", borderRadius: "2px" }} />

                    {/* description */}
                    <div
                        className="about-fade-3 w-full"
                        style={{
                            position: "relative",
                            top:      isMobile ? 0 : isTablet ? "10px" : "20px",
                            left:     isMobile ? 0 : isTablet ? "10px" : "20px",
                            maxWidth: isMobile ? "100%" : isTablet ? "100%" : undefined,
                            minWidth: isMobile ? "unset" : isTablet ? "unset" : "850px",
                        }}>

                        <div className="relative max-w-3xl">
                            <p className="leading-relaxed flex items-start gap-3 md:gap-4 mt-2"
                                style={{ color: "#ffffff", fontSize: isMobile ? "0.8rem" : isTablet ? "0.875rem" : "1rem" }}>
                                
                                <FaQuoteLeft className="flex-shrink-0 mt-[6px]" size={isMobile ? 18 : 24} style={{ color: "#0084FF", opacity: 0.3 }} />
                                
                                <span>
                                    I'm Yashoda Gunawardhana, a passionate Software Engineering undergraduate and aspiring UI/UX Designer from Sri Lanka.
                                    I am committed to crafting modern, engaging, and user-friendly digital experiences.
                                </span>
                            </p>

                            <p className="leading-relaxed mt-3"
                                style={{ color: "#ffffff", fontSize: isMobile ? "0.8rem" : isTablet ? "0.875rem" : "1rem", paddingLeft: isMobile ? "28px" : "45px" }}>
                                I enjoy building responsive web and mobile applications, leveraging both frontend and backend development skills while creating intuitive,
                                user-centered designs. I have a strong interest in UI/UX design and use tools like Figma to bring creative ideas to life.
                            </p>

                            <p className="leading-relaxed mt-3"
                                style={{ color: "#ffffff", fontSize: isMobile ? "0.8rem" : isTablet ? "0.875rem" : "1rem", paddingLeft: isMobile ? "28px" : "45px" }}>
                                Currently, I'm studying Software Engineering at IJSE, continuously expanding my knowledge in software development and emerging technologies.
                                I strive to create digital solutions that are efficient, impactful, and enhance the user experience.
                            </p>

                            <div className="flex justify-end mt-2">
                                <FaQuoteRight size={isMobile ? 18 : 24} style={{ color: "#0084FF", opacity: 0.3 }} />
                            </div>
                        </div>
                    </div>

                    {/* stats */}
                    <div className="about-fade-4 flex flex-wrap gap-4"
                        style={{ justifyContent: isMobile || isTablet ? "center" : "flex-start", paddingLeft: isMobile ? 0 : isTablet ? 0 : "80px" }}>
                        {stats.map(({ number, label }) => (
                            
                            <div 
                                key={label}
                                className="flex flex-col items-center rounded-xl transition-all duration-300"
                                style={{
                                    background: "rgba(0,132,255,0.06)", border: "1px solid rgba(0,132,255,0.2)",
                                    minWidth: isMobile ? "80px" : "100px",
                                    paddingLeft:  isMobile ? "16px" : isTablet ? "28px" : "48px",
                                    paddingRight: isMobile ? "16px" : isTablet ? "28px" : "48px",
                                    paddingTop: "16px", paddingBottom: "16px",
                                }}
                                onMouseEnter={e => { 
                                    e.currentTarget.style.background = "rgba(0,132,255,0.12)"; 
                                    e.currentTarget.style.borderColor = "rgba(0,132,255,0.5)"; 
                                    e.currentTarget.style.transform = "translateY(-4px)"; 
                                }}
                                onMouseLeave={e => { 
                                    e.currentTarget.style.background = "rgba(0,132,255,0.06)"; 
                                    e.currentTarget.style.borderColor = "rgba(0,132,255,0.2)"; 
                                    e.currentTarget.style.transform = "translateY(0px)"; 
                                }}>
                                
                                <span className="font-black" style={{ color: "#0084FF", fontSize: isMobile ? "1.25rem" : "1.5rem" }}>{number}</span>
                                <span className="text-center mt-1 font-medium" style={{ color: "#ffffff", fontSize: isMobile ? "0.65rem" : "0.75rem" }}>{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* buttons */}
                    <div className="about-fade-5 flex flex-wrap items-center gap-5 mt-2"
                        style={{ justifyContent: isMobile || isTablet ? "center" : "flex-start", paddingLeft: isMobile ? 0 : isTablet ? 0 : "80px" }}>
                        
                        <button
                            className="hire-btn flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,132,255,0.7)]"
                            style={{ background: "#0084FF", boxShadow: "0 0 20px rgba(0,132,255,0.4)" }}
                            onClick={() => window.open("https://www.linkedin.com/in/yashoda-gunawardhana-6302073a8/")}>
                            
                            HIRE ME 

                            <HiArrowRight size={14} />
                        </button>

                        <a
                            href="public/cv/Yashoda Gunawardhana's Cv.pdf"
                            download="Yashoda_Gunawardhana_Cv.pdf"
                            className="cv-btn flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:bg-[#0084FF] hover:text-white hover:scale-105"
                            style={{ background: "transparent", color: "#0084FF", border: "2px solid #0084FF" }}>
                            
                            DOWNLOAD CV 
                            
                            <FaDownload size={13} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;