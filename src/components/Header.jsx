import React, { useState } from "react";

const Header = () => {
    const [active, setActive] = useState("home");

    const navLinks = [
        { label: "Home", href: "#home", id: "home" },
        { label: "About", href: "#about", id: "about" },
        { label: "Education", href: "#education", id: "education" },
        { label: "Projects", href: "#projects", id: "projects" },
        { label: "Contact", href: "#contact", id: "contact" },
    ];

    return (
        // Applied your specific hex colors in a 4-stop linear gradient
        <nav className="fixed top-0 w-full z-50 bg-[linear-gradient(to_right,_#112240,_#0F1628,_#0A0F1E,_#090D1A)] backdrop-blur-md border-b border-white/10 px-10 py-4 font-montserrat">

            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-tighter text-white">
                    YASHODA
                </h1>

                {/* nav links + button */}
                <div className="flex items-center gap-10">

                    <ul className="hidden md:flex space-x-8 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    href={link.href}
                                    onClick={() => setActive(link.id)}
                                    className="relative pb-1 cursor-pointer text-slate-400 transition-all duration-300 group hover:text-white"
                                >
                                    {link.label}
                                    
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0084FF] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#0084FF]"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* button */}
                    <button
                        className="
                            bg-[#0084FF] 
                            hover:bg-[#1a4fd6] 
                            text-white 
                            text-sm 
                            font-semibold 
                            px-6 py-2.5 
                            rounded-full 
                            shadow-[0_0_20px_rgba(0,132,255,0.4)] 
                            hover:shadow-[0_0_30px_rgba(0,132,255,0.7)] 
                            transition-all duration-300
                        "
                    >
                        LET'S TALK
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Header;