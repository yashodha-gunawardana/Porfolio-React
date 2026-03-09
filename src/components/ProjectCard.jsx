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

                
            </div>
        );
    };



}