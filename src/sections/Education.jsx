import React from "react";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiFigma, SiNodedotjs, SiMysql } from "react-icons/si";


const education = [
    {
        icon: <FaUniversity size={28} />,
        name: "IJSE",
        degree: "Software Engineering",
        year: "2024 – Present",
        color: "#0084FF",
    },
    {
        icon: <FaSchool size={28} />,
        name: "R/Vidyakara Maha Vidyalaya",
        degree: "Advanced Level",
        year: "2019 – 2021",
        color: "#38BDF8",
    },
    {
        icon: <FaGraduationCap size={28} />,
        name: "R/Vidyakara Maha Vidyalaya",
        degree: "Ordinary Level",
        year: "2015 – 2019",
        color: "#61DAFB",
    },
];


const skills = [
    {
        category: "Frontend",
        techs: [ 
            { iconKey: "Html5", name: "HTML", color: "#E34F26", glow: "rgba(227,79,38,0.35)" }, 
            { iconKey: "Css3", name: "CSS", color: "#1572B6", glow: "rgba(21,114,182,0.35)" }, 
            { iconKey: "JavaScript", name: "JavaScript", color: "#F7DF1E", glow: "rgba(247,223,30,0.35)" }, 
            { iconKey: "TypeScript", name: "TypeScript", color: "#3178C6", glow: "rgba(49,120,198,0.35)" }, 
            { iconKey: "React", name: "React", color: "#61DAFB", glow: "rgba(97,218,251,0.35)" }, 
            { iconKey: "Tailwind", name: "Tailwind", color: "#38BDF8", glow: "rgba(56,189,248,0.35)" }, 
            { iconKey: "Bootstrap", name: "Bootstrap", color: "#7952B3", glow: "rgba(121,82,179,0.35)" }, 
            { iconKey: "Responsive", name: "Responsive", color: "#f472b6", glow: "rgba(244,114,182,0.35)" },
        ],
    },
    { 
        category: "Mobile", 
        techs: [ 
            { iconKey: "React", name: "React Native", color: "#61DAFB", glow: "rgba(97,218,251,0.35)" }, 
            { iconKey: "Expo", name: "Expo", color: "#e2e8f0", glow: "rgba(226,232,240,0.2)" }, 
        ], 
    },
    { 
        category: "Backend", 
        techs: [ 
            { iconKey: "NodeJS", name: "Node.js", color: "#3C873A", glow: "rgba(60,135,58,0.35)" }, 
            { iconKey: "Express", name: "Express.js", color: "#aaaaaa", glow: "rgba(200,200,200,0.2)" }, 
            { iconKey: "SpringBoot", name: "Spring Boot", color: "#6DB33F", glow: "rgba(109,179,63,0.35)" }, 
            { iconKey: "Java", name: "Java", color: "#f89820", glow: "rgba(248,152,32,0.35)" }, 
            { iconKey: "Python", name: "Python", color: "#3776AB", glow: "rgba(55,118,171,0.35)" }, 
        ], 
    }, 
    { 
        category: "Database", 
        techs: [ 
            { iconKey: "MySQL", name: "MySQL", color: "#00758F", glow: "rgba(0,117,143,0.35)" }, 
            { iconKey: "MongoDB", name: "MongoDB", color: "#47A248", glow: "rgba(71,162,72,0.35)" }, 
        ], 
    },
    { 
        category: "Design", 
        techs: [ 
            { iconKey: "Figma", name: "Figma", color: "#F24E1E", glow: "rgba(242,78,30,0.35)" }, 
            { iconKey: "Wireframe", name: "Wireframing", color: "#a78bfa", glow: "rgba(167,139,250,0.35)" }, 
            { iconKey: "Prototype", name: "Prototyping", color: "#fb923c", glow: "rgba(251,146,60,0.35)" }, 
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


const Education = () => {
    return (
        <section id="education"
            className="w-full flex flex-col items-center px-50 py-30"
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
                {/* ── LEFT — Education ── */}
                    <div className="edu-fade-2 flex flex-col gap-4 flex-1">

                        {/* Left heading */}
                        <div className="flex items-center gap-4 mb-2">
                            <span className="text-sm font-bold tracking-widest uppercase"
                                style={{ color: "#0084FF" }}>
                                Education
                            </span>
                            <div className="flex-1 h-px"
                                style={{ background: "rgba(0,132,255,0.15)" }} />
                        </div>

                        {/* Education cards */}
                        {education.map(({ icon, name, degree, year, color }) => (
                            <div
                                key={name + year}
                                className="edu-card flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300"
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                {/* Icon circle */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{
                                        background: "rgba(0,132,255,0.1)",
                                        border: "1px solid rgba(0,132,255,0.2)",
                                    }}>
                                    <span style={{ color }}>{icon}</span>
                                </div>

                                {/* Text */}
                                <div className="flex flex-col gap-0.5 flex-1">
                                    <span className="text-sm font-bold text-white">{name}</span>
                                    <span className="text-xs" style={{ color: "#94a3b8" }}>{degree}</span>
                                </div>

                                {/* Year badge */}
                                <span className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
                                    style={{
                                        background: "rgba(0,132,255,0.1)",
                                        color: "#0084FF",
                                        border: "1px solid rgba(0,132,255,0.2)",
                                    }}>
                                    {year}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Vertical divider */}
                    <div className="self-stretch w-px"
                        style={{ background: "rgba(0,132,255,0.1)" }} />

                    {/* ── RIGHT — Skills & Technologies ── */}
                    <div className="edu-fade-3 flex flex-col gap-8 flex-1">

                        {skills.map(({ category, techs }) => (
                            <div key={category}>

                                {/* Category label + line */}
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-sm font-bold tracking-widest uppercase"
                                        style={{ color: "#0084FF" }}>
                                        {category}
                                    </span>
                                    <div className="flex-1 h-px"
                                        style={{ background: "rgba(0,132,255,0.15)" }} />
                                </div>

                                {/* Tech icon cards */}
                                <div className="flex flex-wrap gap-3">
                                    {techs.map(({ icon, name, color }) => (
                                        <div
                                            key={name}
                                            className="tech-card flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-xl transition-all duration-300"
                                            style={{
                                                background: "rgba(255,255,255,0.03)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                minWidth: "80px",
                                                cursor: "default",
                                            }}
                                        >
                                            <span style={{ color }}>{icon}</span>
                                            <span className="text-xs font-semibold"
                                                style={{ color: "#94a3b8" }}>
                                                {name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

            </div>



        </section>
    )
}


export default Education;