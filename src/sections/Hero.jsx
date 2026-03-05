import React, { useEffect, useState } from "react";
import { FaS } from "react-icons/fa6";

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
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');
                * { font-family: 'Poppins', sans-serif; }

                
            `}
            </style>

            <div 
                className="relative flex items-center justify-between px-10 pt-8 pb-0 overflow-hidden"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(to right, #112240, #0F1628, #0A0F1E, #090D1A)"
                }}>

                
                {/* left side */}
                <div className="flex flex-col gap-5 z-10 max-w-lg">

                    <div className="fade-up-2 w-fit">
                        <span 
                            className="px-3 py-1 rounded text-ts font-semibold tracking-widest text-white"
                            style={{ background: "#0084FF"}}>
                            
                            YASHODA GUNAWARDHANA
                        </span>
                    </div>

                </div>

            </div>
        </>
    )
}