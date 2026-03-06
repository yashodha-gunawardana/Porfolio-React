import React, { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const roles = ["Designer", "Developer", "Creative"];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);


    useEffect(() => {
        const current = roles[roleIndex];

        if (typing) {
            if (charIndex < current.length) {

                // add one character every 100ms
                const time = setTimeout(() => {
                    setDisplayed(current.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);

                }, 100);

                return () => clearTimeout(time);

            } else {

                // finished typing the full word — pause 1.5s before deleting
                const time = setTimeout(() => setTyping(false), 1500);
                return () => clearTimeout(time);
            }

        } else {
            if (charIndex > 0) {

                // remove one character every 60ms
                const time = setTimeout(() => {
                    setDisplayed(current.slice(0, charIndex - 1));
                    setCharIndex(charIndex -1);

                }, 60);

                return () => clearTimeout(time);

            } else {

                // move to the next role and start typing again
                setRoleIndex((roleIndex + 1) % roles.length);
                setTyping(true);
            }
        }
    }, [charIndex, typing, roleIndex]);


    return (
        <>
            <style>{`

                
            `}
            </style>

            <div 
                className="relative flex items-center justify-between px-50 pt-8 pb-0 overflow-hidden"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(to right, #112240, #0F1628, #0A0F1E, #090D1A)"
                }}>

                
                {/* left side */}
                <div className="flex flex-col gap-5 z-10">

                    <div className="fade-up-2 w-fit">
                        <span 
                            className="px-2 rounded text-sm font-semibold tracking-widest text-white"
                            style={{ background: "#0084ff56"}}>
                            
                            FRONTEND  DEVELOPER
                        </span>
                    </div>

                    {/* main heading */}
                    <div className="fade-up-3">
                        <h1 className="font-extrabold text-6xl text-white tracking-wider">
                            HAY! I'M YASHODA
                        </h1>

                        <h2 className="font-black text-6xl text-blue-500 leading-relaxed mt-1 tracking-wider"
                            style={{ color: "#0084FF" }}>
                            
                            I'M A {displayed}
                            
                            <span className="ml-2 inline-block" style={{ color: "#0084FF" }}>|</span>
                        </h2>
                    </div>

                    <p
                        className="fade-up-4 text-sm leading-relaxed mt-1"
                        style={{ color: "#A0AEC0", maxWidth: "700px" }}>

                        I build modern, interactive websites that look great,
                        perform flawlessly, and tell your story.<br />
                        I love turning ideas into digital experiences that delight users and make an impact.<br />
                        Passionate about clean design, responsive layouts, and creating seamless user experiences that bring ideas to life.
                    </p>

                    <div className="fade-up-5 flex items-center gap-5 mt-5">

                        {/* hero btn */}
                        <button
                            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white
                                        transition-all duraation-300 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5"
                                        
                            style={{ background: "#0084FF" }}>

                            GET IN TOUCH

                            <HiArrowRight size={14} />
                        </button>


                        {/* social icons */}
                        <div className="flex items-center gap-3">

                            {[
                                { icon: <FaFacebookF  size={14} />, color: "#0a66c2" },
                                { icon: <FaGithub  size={16} />, color: "#0a66c2" },
                                { icon: <FaLinkedinIn size={14} />, color: "#0a66c2" },

                            ].map(({ icon, color }, i) => (
                                <button
                                    key={i}
                                    className="social-btn w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200"
                                    style={{ background: color, border: "2px solid rgb(245, 241, 241)" }}
                                    
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-4px) scale(1.1)";
                                        e.currentTarget.style.boxShadow = `0 8px 20px ${color}99`;
                                        e.currentTarget.style.border = "2px solid white";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0px) scale(1)";
                                        e.currentTarget.style.boxShadow = "none";
                                        e.currentTarget.style.border = "2px solid rgba(255,255,255,0.5)";
                                    }}>
                                
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* right side */}
                

            </div>
        </>
    )
}


export default Hero;