import React, { useEffect, useRef, useState } from "react";


function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

    useEffect(() => {
        const handle = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);

    }, []);
    return width;
};

function useInView(threshold = 0.05) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) setVisible(true);
        }, { threshold });

        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();

    }, []);
    return [ref, visible];
};


const ACCENT = "#0084FF";

const contactInfo = [
    { icon: HiMail, label: "Email", value: "yashodagunawardhana15@gmail.com" },
    { icon: HiPhone, label: "Phone", value: "+94 77 123 4567" },
    { icon: HiLocationMarker, label: "Location", value: "Ratnapura, Sri Lanka" },
];

const socials = [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
];

function InfoCard({ Icon, label, value, delay, visible }) {
    const [hovered, setHovered] = useState(false);


    return (
        <div
            onMouseEnter={() => setHovered(treu)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 20px", borderRadius: 14,
                background: "rgba(255,255,255,0.02)",

                // border brightens on hover to highlight the card
                border: `1px solid ${hovered ? "rgba(0,132,255,0.5)" : "rgba(0,132,255,0.15)"}`,

                // slides right slightly on hover for a tactile feel
                transform: hovered ? "translateX(6px)" : "translateX(0)",
                transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
                cursor: "default",

                // fade in when section scrolls into view, with a staggered delay per card
                opacity: visible ? 1 : 0,
                transitionDelay: `${delay}s`,
            }}>

        </div>
    )
}