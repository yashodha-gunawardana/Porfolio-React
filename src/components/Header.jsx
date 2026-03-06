import { useState } from "react";

const Header = () => {
    const [active, setActive] = useState();

    return (
        <>
            <style>{`
                .nav-link { position: relative; }
                .nav-link::after {
                content: '';
                position: absolute; bottom: -2px; left: 0;
                width: 0; height: 2px;
                background: #0084FF;
                transition: width 0.3s ease;
                }
                .nav-link:hover::after { width: 100%; }
                .nav-link.active::after { width: 100%; }
            `}
            </style>

            <nav
                className="flex top-0 items-center justify-between px-50 py-5 w-full"
                style={{ background: "linear-gradient(to right, #112240, #0F1628, #0A0F1E, #090D1A)" }}>
            
                {/* Logo */}
                 <div className="flex items-center gap-1">
                    <span className="ml-1 w-1.5 h-6 rounded-full inline-block" style={{ background: "#0084FF", boxShadow: "0 0 8px #0084FF" }} />
                    <span className="font-black text-2xl" style={{ color: "#0084FF" }}>YASH</span>
                    <span className="text-white font-black text-2xl tracking-tight">ODA</span>
                </div>

                {/* Nav Links + Button */}
                <div className="flex items-center gap-8">
                    {["HOME", "ABOUT", "EDUCATION", "PROJECTS", "CONTACT"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            onClick={() => setActive(link)}
                            className={`nav-link text-xs font-semibold tracking-widest transition-colors duration-200 ${
                                active === link ? "active text-white" : "text-white hover:text-white"
                            }`}>
                        
                            {link}
                        </a>
                    ))}

                    <button
                        className="px-5 py-2 rounded-full text-xs font-bold tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: "#0084FF", boxShadow: "0 0 20px rgba(59,130,246,0.4)" }}

                        onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 30px rgba(59,130,246,0.7)"}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.4)"}>
                    
                        LET'S TALK
                    </button>
                </div>
            </nav>
        </>
    );
}


export default Header;