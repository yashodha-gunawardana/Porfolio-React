import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const ACCENT       = "#0084FF";
const BORDER_HOVER = "rgba(0,132,255,0.5)";
const BORDER_BASE  = "rgba(0,132,255,0.2)";

const IMAGE_CONFIG = {
    mobile: { height: "auto", objectFit: "contain", bg: "#0c1220" },
    web:    { height: "220px", objectFit: "cover",   bg: "transparent" },
};


function CyclingImage({ images, hovered, type }) {
    const [imgIndex, setImgIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const cfg = IMAGE_CONFIG[type] || IMAGE_CONFIG.web;
    const isMobile = type === "mobile";
    const step = isMobile ? 2 : 1;
    const total = images ? Math.ceil(images.length / step) : 0;

    useEffect(() => {
        if (!images || images.length <= step) return;
        const interval = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setImgIndex(prev => (prev + step) % images.length);
                setFading(false);
            }, 300);
        }, 2500);
        return () => clearInterval(interval);
    }, [images, step]);


    if (isMobile) {
        const img1 = images[imgIndex];
        const img2 = images[(imgIndex + 1) % images.length];
        const dotIndex = Math.floor(imgIndex / 2);

        return (
            <div 
                style={{
                    position: "relative", flexShrink: 0,
                    background: cfg.bg,
                    height: "340px",
                    padding: "12px 12px 28px",
                    display: "flex", gap: 10,
                    alignItems: "stretch", justifyContent: "center",
                    overflow: "hidden",
                }}>

                {/* ender two images side-by-side */}
                {[img1, img2].map((src, i) => (
                    <div 
                        key={i} 
                        style={{

                            // individual image container
                            flex: 1, borderRadius: 12, overflow: "hidden",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",

                            // fade animation when image changes
                            opacity: fading ? 0 : 1,
                            transform: fading ? "translateY(4px)" : "translateY(0)",
                            transition: "opacity .3s ease, transform .3s ease",
                        }}>

                        <img
                            src={src}
                            alt="project"
                            draggable={false}
                            style={{
                                width: "100%", height: "100%",
                                objectFit: "contain", objectPosition: "center",
                                display: "block",

                                // slight brightness change on hover
                                filter: hovered ? "brightness(1.05)" : "brightness(0.92)",
                                transition: "filter .4s ease",

                                // prevent image selection or interaction
                                userSelect: "none", pointerEvents: "none",
                            }}
                            
                            // handle image loading errors
                            onError={e => {
                                e.target.parentNode.style.background = "rgba(0,132,255,0.08)";
                                e.target.style.display = "none";
                            }}
                        />
                    </div>
                ))}

                {/* dot indicators for image groups */}
                {total > 1 && (
                    <div 
                        style={{

                            // position dots at the bottom center
                            position: "absolute",
                            bottom: 8,
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            gap: 5,
                            zIndex: 2,
                        }}>

                        {/* create dots dynamically based on total image groups */}
                        {Array.from({ length: total }).map((_, i) => (
                            <div 
                                key={i} 
                                style={{

                                    // active dot is wider and highlighted
                                    width: i === dotIndex ? 14 : 4,
                                    height: 4,
                                    borderRadius: 999,
                                    background: i === dotIndex
                                        ? ACCENT
                                        : "rgba(255,255,255,0.3)",

                                    // smooth animation when active dot changes
                                    transition: "all .3s ease",
                                }} 
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };
}


// project card
const ProjectCard = ({ project, index, isDragging = false }) => {
    const [hovered, setHovered] = useState(false);
    const { title, description, images, tech, github, live, type = "web" } = project;

    const active = hovered && !isDragging;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                width: "400px",
                flexShrink: 0,
                borderRadius: 18,
                overflow: "hidden",
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${active ? BORDER_HOVER : BORDER_BASE}`,
                transform: active ? "translateY(-6px)" : "translateY(0)",
                transition: "border-color .3s ease, transform .4s cubic-bezier(.34,1.56,.64,1)",
                display: "flex",
                flexDirection: "column",
                userSelect: "none",
            }}>

            <CyclingImage images={images} hovered={active} type={type} />

            <div 
                style={{
                    padding: "16px 20px 14px",
                    display: "flex", flexDirection: "column", gap: 8,
                    flex: 1, position: "relative",
                }}>

                {/* ghost number */}
                <span 
                    style={{
                        fontSize: "3.5rem", fontWeight: 900, lineHeight: 1,
                        color: "transparent",
                        WebkitTextStroke: "1px rgba(0,132,255,0.15)",
                        userSelect: "none",
                        position: "absolute", top: 8, right: 16, zIndex: 0,
                    }}>

                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* type badge */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div 
                        style={{
                            width: active ? "48px" : "22px", height: "2px",
                            background: ACCENT, borderRadius: 2,
                            transition: "width .3s ease",
                        }} 
                    />
                    <span 
                        style={{
                            fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#60a5fa",
                            background: "rgba(96,165,250,0.08)",
                            border: "1px solid rgba(96,165,250,0.25)",
                            padding: "2px 8px", borderRadius: 999,
                        }}>

                        {type === "mobile" ? "Mobile App" : "Web App"}
                    </span>
                </div>

                {/* title */}
                <h3 
                    style={{
                        fontSize: 17, fontWeight: 800,
                        color: active ? "#ffffff" : "#e2e8f0",
                        margin: 0, lineHeight: 1.3,
                        transition: "color .3s", position: "relative", zIndex: 1,
                    }}>

                    {title}
                </h3>

                {/* description */}
                <p 
                    style={{
                        fontSize: 12.5, lineHeight: 1.6,
                        color: active ? "#94a3b8" : "#475569",
                        margin: 0, transition: "color .3s",
                        position: "relative", zIndex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 7,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}>

                    {description}
                </p>

                {/* tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, position: "relative", zIndex: 1 }}>
                    {tech.map((t, i) => (
                        <span 
                            key={i} 
                            style={{
                                fontSize: 11, fontWeight: 600,
                                padding: "2px 9px", borderRadius: 999,
                                background: "rgba(255,255,255,0.04)",
                                color: active ? ACCENT : "#64748b",
                                border: `1px solid ${active ? BORDER_HOVER : "rgba(255,255,255,0.08)"}`,
                                transition: "color .3s ease, border-color .3s ease",
                            }}>

                            {t}
                        </span>
                    ))}
                </div>

                {/* divider */}
                <div 
                    style={{
                        height: 1,
                        background: active ? "rgba(0,132,255,0.2)" : "rgba(255,255,255,0.05)",
                        transition: "background .3s",
                    }} 
                />

                {/* links */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, position: "relative", zIndex: 1 }}>
                    <a
                        href={github} target="_blank" rel="noreferrer"
                        onClick={e => isDragging && e.preventDefault()}
                        style={{
                            display: "flex", alignItems: "center", gap: 6,
                            fontSize: 13, fontWeight: 600,
                            color: active ? "#e2e8f0" : "#475569",
                            textDecoration: "none",
                            transition: "color .3s, transform .2s",
                        }}

                        onMouseEnter={e => { if (!isDragging) e.currentTarget.style.transform = "translateY(-2px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                        <FaGithub size={14} /> Code
                    </a>

                    {live && (
                        <a
                            href={live} target="_blank" rel="noreferrer"
                            onClick={e => isDragging && e.preventDefault()}
                            style={{
                                display: "flex", alignItems: "center", gap: 6,
                                fontSize: 13, fontWeight: 600,
                                color: active ? ACCENT : "#475569",
                                textDecoration: "none",
                                transition: "color .3s, transform .2s",
                            }}
                            onMouseEnter={e => { if (!isDragging) e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                            <FaExternalLinkAlt size={12} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};


export default ProjectCard;