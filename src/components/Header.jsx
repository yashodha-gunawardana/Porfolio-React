import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [active, setActive] = useState("HOME");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <style>{`
                
            `}</style>

            <nav
                className="fixed top-0 left-0 w-full z-50"
                style={{ background: "linear-gradient(to right, #112240, #0F1628, #0A0F1E, #090D1A)" }}>
            
                {/* ── main row ── */}
                <div className="flex items-center justify-between px-6 md:px-16 lg:px-50 py-8">

                    {/* logo */}
                    <div className="flex items-center gap-1">
                        <span className="w-1.5 h-6 rounded-full inline-block"
                            style={{ background: "#0084FF", boxShadow: "0 0 8px #0084FF" }} />

                        <span className="font-black text-2xl" style={{ color: "#0084FF" }}>YASH</span>
                        <span className="text-white font-black text-2xl tracking-tight">ODA</span>
                    </div>

                    {/* desktop nav links + button */}
                    <div className="hidden md:flex items-center gap-10">
                        {["HOME", "ABOUT", "EDUCATION", "PROJECTS", "CONTACT"].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setActive(link)}
                                className={`nav-link text-xs font-semibold tracking-widest transition-colors duration-200 ${
                                    active === link ? "active text-white" : "text-gray-400 hover:text-white"
                                }`}>
                            
                                {link}
                            </a>
                        ))}

                        <button
                            className="px-5 py-2 rounded-full text-xs font-bold tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5"
                            style={{ background: "#0084FF", boxShadow: "0 0 20px rgba(0,132,255,0.4)" }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 30px rgba(0,132,255,0.7)"}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(0,132,255,0.4)"}>
                        
                            LET'S TALK
                        </button>
                    </div>

                    {/* mobile hamburger button */}
                    <button
                        className="md:hidden text-white p-1"
                        onClick={() => setMenuOpen(!menuOpen)}>
                    
                        {menuOpen
                            ? <HiX size={26} />
                            : <HiMenu size={26} />
                        }
                    </button>
                </div>

                {/* ── mobile menu ── */}
                {menuOpen && (
                    <div
                        className="mobile-menu md:hidden flex flex-col px-6 pb-6 gap-5 border-t"
                        style={{
                            background: "linear-gradient(to right, #112240, #0A0F1E)",
                            borderColor: "rgba(0,132,255,0.15)",
                        }}>
                    
                        {["HOME", "ABOUT", "EDUCATION", "PROJECTS", "CONTACT"].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => { setActive(link); setMenuOpen(false); }}
                                className={`text-xs font-semibold tracking-widest transition-colors duration-200 pt-4 ${
                                    active === link ? "text-white" : "text-gray-400"
                                }`}
                            >
                                {link}
                            </a>
                        ))}

                        <button
                            className="w-full px-5 py-2.5 rounded-full text-xs font-bold tracking-wider text-white mt-2"
                            style={{ background: "#0084FF", boxShadow: "0 0 20px rgba(0,132,255,0.4)" }}>
                        
                            LET'S TALK
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Header;