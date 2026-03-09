import React, { useState } from "react";


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