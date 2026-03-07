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
            { icon: <SiHtml5 size={28} />,       name: "HTML5",      color: "#E34F26" },
            { icon: <SiCss size={28} />,         name: "CSS3",       color: "#1572B6" },
            { icon: <SiJavascript size={28} />,   name: "JavaScript", color: "#F7DF1E" },
            { icon: <SiReact size={28} />,        name: "React",      color: "#61DAFB" },
            { icon: <SiTailwindcss size={28} />,  name: "Tailwind",   color: "#38BDF8" },
        ],
    },
    {
        category: "Design",
        techs: [
            { icon: <SiFigma size={28} />,        name: "Figma",      color: "#F24E1E" },
        ],
    },
    {
        category: "Backend",
        techs: [
            { icon: <SiNodedotjs size={28} />,    name: "Node.js",    color: "#3C873A" },
            { icon: <SiMysql size={28} />,        name: "MySQL",      color: "#00758F" },
        ],
    },
];


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