import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";


const About = () => {

    const stats = [
        { number: "10+", label: "Projects Done" },
        { number: "2+", label: "Years Learning" },
        { number: "5+", label: "Technologies" },
    ];


    return (
        <section id="about"
            className="w-full flex items-start justify-between px-50 py-50"
            style={{
                minHeight: "100vh",
                background: "#0A0F1E"
            }}>

            <div className="flex gap-40 max-w-5xl w-full">

                {/* profile image with frame */}
                <div className="about-fade-1 relative flex-shrink-0">

                    <div
                        className="absolute"
                        style={{
                            width: "100%", height: "100%",
                            border: "2px solid #A0AEC0",
                            top: "0px", right: "0px",
                            borderRadius: "4px",
                            zIndex: 0
                        }}>
                    </div>

                    <div
                        className="img-frame relative z-10"
                        style={{
                            width: "500px", height: "600px"
                        }}>

                        <img
                            src="src/assets/profile.png"
                            alt="Yashoda"
                            style={{
                                width: "100%", height: "100%",
                                objectFit: "cover", objectPosition: "top",
                                borderRadius: "4px", display: "block",
                            }}>
                        </img>

                        <div 
                            style={{
                                position: "absolute",
                                top: "-20px", right: "-20px",
                                width: "40px", height: "40px",
                                borderTop: "3px solid #0084FF",
                                borderRight: "3px solid #0084FF",
                                zIndex: 20,
                            }}>
                        </div>

                        <div 
                            style={{
                                position: "absolute",
                                bottom: "-20px", left: "-20px",
                                width: "40px", height: "40px",
                                borderBottom: "3px solid #0084FF",
                                borderLeft: "3px solid #0084FF",
                                zIndex: 20,
                            }}>
                        </div>
                    </div>
                </div>

                {/* text content */}
                <div className="flex flex-col gap-5">

                    <div className="about-fade-2">
                        <p
                            className="text-xs font semibold tracking-widest uppercase mb-1"
                            style={{ color: "#A0AEC0" }}>

                            Get TO Know

                        </p>

                        <h2 
                            className="text-5xl font-bold text-white">
                            
                            About <span style={{ color: "#0084FF"}}>Me</span>
                        </h2>
                    </div>

                    {/* divider */}
                    <div 
                        className="about-fade-2"
                        style={{
                            width: "60px", height: "3px",
                            background: "#0084FF", borderRadius: "2px"
                        }}>
                    </div>

                    {/* description */}
                    <div className="about-fade-3 relative" style={{ minWidth: "850px", left: "20px", top: "20px" }}>

                        {/* opening quote mark */}
                        <div className="relative max-w-3xl">
                        
                            {/* first paragraph with opening quote */}
                            <p
                                className="text-m leading-relaxed"
                                style={{
                                color: "#ffffff",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "15px",
                                marginTop: "10px", 
                                }}>
                            
                                <FaQuoteLeft size={32} style={{ color: "#0084FF", opacity: 0.3, flexShrink: 0, marginTop: "6px" }}/>

                                <span>
                                    I'm Yashoda Gunawardhana, a passionate Software Engineering undergraduate and aspiring UI/UX Designer from Sri Lanka. 
                                    I am committed to crafting modern, engaging, and user-friendly digital experiences.
                                </span>
                            </p>

                            {/* subsequent paragraphs aligned with first paragraph */}
                            <p
                                className="text-m leading-relaxed mt-3"
                                style={{ color: "#ffffff", paddingLeft: "45px" }}>
                            
                                I enjoy building responsive web and mobile applications, leveraging both frontend and backend development skills while creating intuitive, 
                                user-centered designs. I have a strong interest in UI/UX design and use tools like Figma to bring creative ideas to life.
                            </p>

                            <p
                                className="text-m leading-relaxed mt-3"
                                style={{ color: "#ffffff", paddingLeft: "45px" }}>
                            
                                Currently, I’m studying Software Engineering at IJSE, continuously expanding my knowledge in software development and emerging technologies. 
                                I strive to create digital solutions that are efficient, impactful, and enhance the user experience.
                            </p>

                            {/* closing quote */}
                            <div className="flex justify-end mt-2">
                                <FaQuoteRight size={32} style={{ color: "#0084FF", opacity: 0.3 }} />
                            </div>
                        </div>
                    </div>

                    {/* stats row */}
                    <div className="about-fade-4 flex gap-4 pl-20">
                        {stats.map(({ number, label }) => (
                            <div
                                key={label}
                                className="flex flex-col items-center px-12 py-4 rounded-xl transition-all duration-300"
                                style={{
                                    background: "rgba(0,132,255,0.06)",
                                    border: "1px solid rgba(0,132,255,0.2)",
                                    minWidth: "100px",
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
                            
                                <span className="text-2xl font-black" style={{ color: "#0084FF" }}>{number}</span>
                                <span className="text-xs text-center mt-1 font-medium" style={{ color: "#ffffff" }}>{label}</span>
                            </div>
                        ))}
                    </div>

                    
                    {/* buttons */}
                    <div className="about-fade-5 flex items-center gap-5 mt-2 pl-20">
                        
                        {/* hire me btn */}
                        <button
                            className="hire-btn flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white
                            transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,132,255,0.7)]"
                            style={{ background: "#0084FF", boxShadow: "0 0 20px rgba(0,132,255,0.4)" }}>
                            
                            HIRE ME <HiArrowRight size={14} />
                        </button>

                        {/* download cv btn */}
                        <button
                            className="cv-btn flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold
                            transition-all duration-300 hover:bg-[#0084FF] hover:text-white hover:scale-105"
                            style={{
                                background: "transparent",
                                color: "#0084FF",
                                border: "2px solid #0084FF",
                            }}>
                            
                            DOWNLOAD CV <FaDownload size={13} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;