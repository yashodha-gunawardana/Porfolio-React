import React, { useEffect, useRef, useState } from "react";


function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

    useEffect(() => {
        const handle = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);

    }, []);
    return width;
}

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
}