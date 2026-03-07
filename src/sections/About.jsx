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
            className="w-full flex items-start justify-between lg:px-50 lg:py-50 md:px-16 md:py-35 px-6 py-30"
            style={{
                minHeight: "100vh",
                background: "#0A0F1E"
            }}>

            <div className="flex flex-col lg:flex-row lg:gap-40 gap-12 max-w-5xl w-full">

                {/* profile image with frame */}
                <div className="about-fade-1 relative flex-shrink-0 flex justify-center lg:block">

                    <div className="img-frame relative z-10 lg:w-[500px] lg:h-[600px] md:w-[300px] md:h-[320px] w-[200px] h-[200px]">

                        {/* frame */}
                        <div
                            className="absolute inset-0"
                            style={{
                                border: "2px solid #A0AEC0",
                                borderRadius: "4px",
                                zIndex: 0
                            }}>
                        </div>

                        {/* image */}
                        <img
                            src="src/assets/profile.png"
                            alt="Yashoda"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "top",
                                borderRadius: "4px",
                                display: "block",
                            }}
                        />

                        {/* top corner */}
                        <div
                            className="
                            absolute 
                            lg:-top-[20px] lg:-right-[20px] lg:w-[40px] lg:h-[40px]
                            md:-top-[15px] md:-right-[15px] md:w-[30px] md:h-[30px]
                            -top-[10px] -right-[10px] w-[22px] h-[22px]
                            "
                            style={{
                                borderTop: "3px solid #0084FF",
                                borderRight: "3px solid #0084FF",
                                zIndex: 20,
                            }}>
                        </div>

                        {/* bottom corner */}
                        <div
                            className="
                            absolute
                            lg:-bottom-[20px] lg:-left-[20px] lg:w-[40px] lg:h-[40px]
                            md:-bottom-[15px] md:-left-[15px] md:w-[30px] md:h-[30px]
                            -bottom-[10px] -left-[10px] w-[22px] h-[22px]
                            "
                            style={{
                                borderBottom: "3px solid #0084FF",
                                borderLeft: "3px solid #0084FF",
                                zIndex: 20,
                            }}>
                        </div>
                    </div>
                </div>

                {/* text content */}
                <div className="flex flex-col gap-5">

                    <div className="about-fade-2 lg:text-left text-center">
                        <p
                            className="text-xs font semibold tracking-widest uppercase mb-1"
                            style={{ color: "#A0AEC0" }}>

                            Get To Know
                        </p>

                        <h2 
                            className="lg:text-5xl font-bold text-white text-3xl md:text-4xl">
                            
                            About <span style={{ color: "#0084FF"}}>Me</span>
                        </h2>
                    </div>

                    {/* divider */}
                    <div 
                        className="about-fade-2 mx-auto lg:mx-0"
                        style={{
                            width: "60px", height: "3px",
                            background: "#0084FF", borderRadius: "2px"
                        }}>
                    </div>

                    {/* description */}
                    <div className="about-fade-3 relative lg:top-[20px] lg:left-[20px] w-full md:max-w-[750px] lg:min-w-[850px]">
                        
                        {/* opening quote mark */}
                        <div className="relative max-w-3xl">

                            {/* first paragraph */}
                            <p
                                className="leading-relaxed flex items-start gap-3 md:gap-4 mt-2 text-sm md:text-base"
                                style={{ color: "#ffffff" }}>

                                <FaQuoteLeft
                                    className="flex-shrink-0 mt-[6px]"
                                    size={24}
                                    style={{ color: "#0084FF", opacity: 0.3 }}
                                />

                                <span>
                                    I'm Yashoda Gunawardhana, a passionate Software Engineering undergraduate and aspiring UI/UX Designer from Sri Lanka.
                                    I am committed to crafting modern, engaging, and user-friendly digital experiences.
                                </span>
                            </p>

                            {/* paragraph 2 */}
                            <p
                                className="leading-relaxed mt-3 text-sm md:text-base pl-8 md:pl-[45px]"
                                style={{ color: "#ffffff" }}>
                                
                                I enjoy building responsive web and mobile applications, leveraging both frontend and backend development skills while creating intuitive,
                                user-centered designs. I have a strong interest in UI/UX design and use tools like Figma to bring creative ideas to life.
                            </p>

                            {/* paragraph 3 */}
                            <p
                                className="leading-relaxed mt-3 text-sm md:text-base pl-8 md:pl-[45px]"
                                style={{ color: "#ffffff" }}>

                                Currently, I’m studying Software Engineering at IJSE, continuously expanding my knowledge in software development and emerging technologies.
                                I strive to create digital solutions that are efficient, impactful, and enhance the user experience.
                            </p>

                            {/* closing quote */}
                            <div className="flex justify-end mt-2">
                                <FaQuoteRight
                                    size={24}
                                    style={{ color: "#0084FF", opacity: 0.3 }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* stats row */}
                    <div className="about-fade-4 flex flex-wrap justify-center lg:justify-start gap-4 lg:pl-20">
                        {stats.map(({ number, label }) => (
                            <div
                                key={label}
                                className="flex flex-col items-center px-6 md:px-10 lg:px-12 py-4 rounded-xl transition-all duration-300"
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
                    <div className="about-fade-5 flex flex-wrap justify-center lg:justify-start items-center gap-5 mt-2 lg:pl-20">
                        
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