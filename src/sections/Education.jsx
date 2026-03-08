import React, { useEffect, useRef, useState } from "react";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const Icons = { 
    Html5: { 
        src: `${D}/html5/html5-original.svg`,              
        name: "HTML",         
        color: "#E34F26", 
        glow: "rgba(227,79,38,0.35)"   
    },
    Css3: { 
        src: `${D}/css3/css3-original.svg`,                
        name: "CSS",          
        color: "#1572B6", 
        glow: "rgba(21,114,182,0.35)"  
    },
    JavaScript: { 
        src: `${D}/javascript/javascript-original.svg`,    
        name: "JavaScript",   
        color: "#F7DF1E", 
        glow: "rgba(247,223,30,0.35)"  
    },
    TypeScript: { 
        src: `${D}/typescript/typescript-original.svg`,    
        name: "TypeScript",   
        color: "#3178C6", 
        glow: "rgba(49,120,198,0.35)"  
    },
    React: { 
        src: `${D}/react/react-original.svg`,              
        name: "React",        
        color: "#61DAFB", 
        glow: "rgba(97,218,251,0.35)"  
    },
    Tailwind: { 
        src: `${D}/tailwindcss/tailwindcss-original.svg`,  
        name: "Tailwind",     
        color: "#38BDF8", 
        glow: "rgba(56,189,248,0.35)"  
    },
    Bootstrap: { 
        src: `${D}/bootstrap/bootstrap-original.svg`,      
        name: "Bootstrap",    
        color: "#7952B3", 
        glow: "rgba(121,82,179,0.35)"  
    },
    Responsive: { 
        src: `${D}/chrome/chrome-original.svg`,            
        name: "Responsive",   
        color: "#4285F4", 
        glow: "rgba(66,133,244,0.35)"  
    },
    ReactNative:{ 
        src: `${D}/react/react-original.svg`,              
        name: "React Native", 
        color: "#61DAFB", 
        glow: "rgba(97,218,251,0.35)"  
    },
    Expo: { 
        src: `${D}/expo/expo-original.svg`,                
        name: "Expo",         
        color: "#e2e8f0", 
        glow: "rgba(226,232,240,0.2)"  
    },
    NodeJS: { 
        src: `${D}/nodejs/nodejs-original.svg`,            
        name: "Node.js",      
        color: "#3C873A", 
        glow: "rgba(60,135,58,0.35)"   
    },
    Express: { 
        src: `${D}/express/express-original.svg`,          
        name: "Express.js",   
        color: "#aaaaaa", 
        glow: "rgba(200,200,200,0.2)"  
    },
    SpringBoot: { 
        src: `${D}/spring/spring-original.svg`,            
        name: "Spring Boot",  
        color: "#6DB33F", 
        glow: "rgba(109,179,63,0.35)"  
    },
    Java: { 
        src: `${D}/java/java-original.svg`,                
        name: "Java",         
        color: "#f89820", 
        glow: "rgba(248,152,32,0.35)"  
    },
    Python: { 
        src: `${D}/python/python-original.svg`,            
        name: "Python",       
        color: "#3776AB", 
        glow: "rgba(55,118,171,0.35)"  
    },
    MySQL: { 
        src: `${D}/mysql/mysql-original.svg`,              
        name: "MySQL",        
        color: "#00758F", 
        glow: "rgba(0,117,143,0.35)"   
    },
    MongoDB: { 
        src: `${D}/mongodb/mongodb-original.svg`,          
        name: "MongoDB",      
        color: "#47A248", 
        glow: "rgba(71,162,72,0.35)"   
    },
    Figma: { 
        src: `${D}/figma/figma-original.svg`,              
        name: "Figma",        
        color: "#F24E1E", 
        glow: "rgba(242,78,30,0.35)"   
    },
    Wireframe: { 
        src: `${D}/sketch/sketch-original.svg`,            
        name: "Wireframing",  
        color: "#F7B500", 
        glow: "rgba(247,181,0,0.35)"   
    },
    Prototype: { 
        src: `${D}/xd/xd-original.svg`,                   
        name: "Prototyping",  
        color: "#FF2BC2", 
        glow: "rgba(255,43,194,0.35)"  
    },
};


const EduIcons = {
    University: ({ size = 22, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" fill={color}>
            <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-10.3-4.4-22.1-4.4-32.4 0zM128 224l-64 0 0 196.3c-11.6 6.9-20.4 18.2-23.6 32.1L36 464c-3.3 14.4 7.3 28 22.1 28l395.8 0c14.8 0 25.4-13.6 22.1-28l-4.4-11.6c-3.2-13.9-12-25.2-23.6-32.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
        </svg>
    ),
    School: ({ size = 22, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 640 512" fill={color}>
            <path d="M0 224v272c0 8.8 7.2 16 16 16l608 0c8.8 0 16-7.2 16-16l0-272c0-8.8-7.2-16-16-16L480 208l0 80-48 0 0-80-160 0 0 80-48 0 0-80L16 208c-8.8 0-16 7.2-16 16zM208 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l80 0 0 48-48 0c-8.8 0-16 7.2-16 16l0 32 192 0 0-32c0-8.8-7.2-16-16-16l-48 0 0-48 80 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L208 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm288 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
        </svg>
    ),
    GradCap: ({ size = 22, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 640 512" fill={color}>
            <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l280.6 101.3c7.5 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496 262.6l-166.9 60.3c-2.7 1-5.5 1.8-8.3 2.4c-11.5 2.6-23.5 2.6-35 0c-2.8-.6-5.6-1.4-8.3-2.4L112 262.6 128 408z"/>
        </svg>
    ),
};


const education = [ 
    { 
        iconKey: "University", 
        name: "IJSE", 
        degree: "Software Engineering", 
        year: "2024 – Present", 
        color: "#38bdf8"
    }, 
    { 
        iconKey: "School", 
        name: "R/Vidyakara Maha Vidyalaya", 
        degree: "Advanced Level", 
        year: "2019 – 2021", 
        color: "#818cf8"
    }, 
    { 
        iconKey: "GradCap", 
        name: "R/Vidyakara Maha Vidyalaya", 
        degree: "Ordinary Level", 
        year: "2015 – 2019", 
        color: "#61DAFB"
    }, 
];


const skills = [
    {
        category: "Frontend",
        accent: "#0084FF",
        techs: [ 
            { iconKey: "Html5" }, 
            { iconKey: "Css3" }, 
            { iconKey: "JavaScript" }, 
            { iconKey: "TypeScript" }, 
            { iconKey: "React" }, 
            { iconKey: "Tailwind" }, 
            { iconKey: "Bootstrap" }, 
            { iconKey: "Responsive" },
        ],
    },
    { 
        category: "Mobile",
        accent: "#0084FF", 
        techs: [ 
            { iconKey: "React" }, 
            { iconKey: "Expo" }, 
        ], 
    },
    { 
        category: "Backend", 
        accent: "#0084FF",
        techs: [ 
            { iconKey: "NodeJS" }, 
            { iconKey: "Express" }, 
            { iconKey: "SpringBoot" }, 
            { iconKey: "Java" }, 
            { iconKey: "Python" }, 
        ], 
    }, 
    { 
        category: "Database", 
        accent: "#0084FF",
        techs: [ 
            { iconKey: "MySQL" }, 
            { iconKey: "MongoDB" }, 
        ], 
    },
    { 
        category: "Design", 
        accent: "#0084FF",
        techs: [ 
            { iconKey: "Figma" }, 
            { iconKey: "Wireframe" }, 
            { iconKey: "Prototype" }, 
        ], 
    },
];


function useInView(threshold = 0.05) { 
    const ref = useRef(null); 
    const [visible, setVisible] = useState(false); 

    useEffect(() => { 
        const obs = new IntersectionObserver( ([e]) => { 
            if (e.isIntersecting) setVisible(true); 
        }, { threshold } ); 

        if (ref.current) obs.observe(ref.current); 
        return () => obs.disconnect(); 

    }, []); 
        
    return [ref, visible]; 
}


function TechCard({ iconKey }) { 
    const [hovered, setHovered] = useState(false); 
    const { src, name, color, glow } = Icons[iconKey];
    const fallback = src.replace("-original.svg", "-plain.svg");


    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: 8, padding: "16px 12px", borderRadius: 14, minWidth: 72,
                background: hovered
                    ? `radial-gradient(ellipse at top, ${glow}, transparent 70%), rgba(255,255,255,.05)`
                    : "rgba(255,255,255,.03)",
                border: `1px solid ${hovered ? color + "55" : "rgba(255,255,255,.08)"}`,
                boxShadow: hovered
                    ? `0 8px 24px ${glow}, 0 0 0 1px ${color}22`
                    : "none",
                transform: hovered
                    ? "translateY(-6px) scale(1.08)"
                    : "translateY(0) scale(1)",
                transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
                cursor: "default",
            }}>

            {/* icon */}
            <span style={{
                display: "block",
                transition: "all .3s ease",
                filter: hovered ? `drop-shadow(0 0 8px ${color}99)` : "none",
                transform: hovered ? "scale(1.2)" : "scale(1)",
            }}>
                <img
                    src={src}
                    width={24}
                    height={24}
                    alt={name}
                    style={{ display: "block", objectFit: "contain" }}
                    onError={(e) => { if (e.target.src !== fallback) e.target.src = fallback; }}
                />
            </span>

            {/* label below the icon */}
            <span
                style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: ".02em",
                    color: hovered ? "#e2e8f0" : "#475569", 
                    transition: "color .3s",
                    textAlign: "center",
                }}>
            
                {name}
            </span>
        </div>
    ); 
}


function EduCard({ Icon, name, degree, year, color, glow }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 20px", borderRadius: 14,
                background: hovered
                    ? `radial-gradient(ellipse at left, ${glow}, transparent 70%), rgba(255,255,255,0.05)`
                    : "rgba(255,255,255,0.03)",
                border: `1px solid ${hovered ? color + "55" : "rgba(255,255,255,0.08)"}`,
                boxShadow: hovered
                    ? `0 8px 32px ${glow}, 0 0 0 1px ${color}22`
                    : "none",
                transform: hovered ? "translateY(-3px)" : "translateY(0)",
                transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
                cursor: "default",
            }}>

            {/* icon circle */}
            <div
                style={{
                    flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: hovered ? `${color}22` : "rgba(0,132,255,0.1)",
                    border: `1px solid ${hovered ? color + "55" : "rgba(0,132,255,0.2)"}`,
                    boxShadow: hovered ? `0 0 16px ${color}55` : "none",
                    transition: "all .3s ease",
                }}>

                <Icon size={22} color={hovered ? color : "#60a5fa"} />
            </div>

            {/* text */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <span style={{
                    fontSize: 14, fontWeight: 700,
                    color: hovered ? "#ffffff" : "#e2e8f0",
                    transition: "color .3s",
                }}>

                    {name}
                </span>

                <span style={{
                    fontSize: 12,
                    color: hovered ? "#94a3b8" : "#475569",
                    transition: "color .3s",
                }}>

                    {degree}
                </span>
            </div>

            {/* year badge */}
            <span style={{
                fontSize: 11, fontWeight: 600,
                padding: "4px 12px", borderRadius: 999,
                background: hovered ? `${color}22` : "rgba(0,132,255,0.1)",
                color: hovered ? color : "#0084FF",
                border: `1px solid ${hovered ? color + "55" : "rgba(0,132,255,0.2)"}`,
                transition: "all .3s ease",
                whiteSpace: "nowrap",
            }}>
                
                {year}
            </span>
        </div>
    );
}


const Education = () => {
    const [secRef, secVis] = useInView(0.05);

    // delay - controls how long the animation waits before starting
    const fadeUp = (delay) => ({
        opacity: secVis ? 1 : 0,
        transform: secVis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .65s ease ${delay}s, transform .65s cubic-bezier(.22,1,.36,1) ${delay}s`,
    });


    return (
        <section id="education"
            ref={secRef}
            className="w-full flex flex-col items-center px-50 py-30 relative overflow-hidden"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #112240, #0F1628, #0A0F1E, #090D1A)"
            }}>

            {/* heading */}
            <div className="edu-fade-1 text-center mb-16">
                <p className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: "#A0AEC0" }}>
                        
                    My Journey
                </p>

                <h2 className="text-5xl font-black text-white" style={{ fontWeight: 900 }}>
                    Education & <span style={{ color: "#0084FF" }}>Skills</span>
                </h2>

                <div className="mx-auto mt-4" 
                    style={{
                        width: "60px", height: "3px",
                        background: "#0084FF", borderRadius: "2px",
                    }}>
                </div>
            </div>

            {/* two column layout */}
            <div className="flex items-start gap-16 w-full max-w-5xl">

                {/* education side */}
                <div className="flex flex-col gap-5 flex-1">

                    {/* heading */}
                    <div className="flex items-center gap-4 mb-4">
                        <span
                            className="text-sm font-bold tracking-widest uppercase"
                            style={{ color: "#0084FF" }}>
                        
                            Education
                        </span>

                        <div
                            className="flex-1 h-px"
                            style={{ background: "rgba(0,132,255,0.15)" }}
                        />
                    </div>

                    {/* education cards */}
                    {education.map(({ iconKey, name, degree, year, color, glow }) => {
                        const Icon = EduIcons[iconKey];

                        return (
                             <EduCard
                                key={name + year}
                                Icon={Icon}
                                name={name}
                                degree={degree}
                                year={year}
                                color={color}
                                glow={glow}
                            />
                        );
                    })}
                </div>

                {/* vertical divider */}
                <div className="self-stretch w-4px"
                    style={{ background: "rgba(0,132,255,0.1)" }}>
                </div>

                {/* right side — skills & technologies */}
                <div className="flex flex-col gap-8 flex-1">

                    {skills.map(({ category, accent, techs }) => (
                        <div key={category}>

                            {/* skill heading */}
                            <div className="flex items-center gap-3 mb-4">
                                <span
                                    className="text-xs font-bold uppercase tracking-widest"
                                    style={{ color: accent }}>
                                
                                    {category}
                                </span>

                                <div
                                    className="flex-1 h-px"
                                    style={{ background: `${accent}25` }}
                                />
                            </div>

                            {/* skill cards */}
                            <div className="flex flex-wrap gap-2">
                                {techs.map(({ iconKey }) => (
                                    <TechCard key={iconKey} iconKey={iconKey} />
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