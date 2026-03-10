import React, { useEffect, useRef, useState, useCallback } from "react";
import { projects } from "../data/projectsDetails";
import ProjectCard from "../components/ProjectCard";


// constant
const ACCENT = "#0084FF";

// hooks
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
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}


// project section
const Projects = () => {
    const [secRef, secVis] = useInView(0.05);
    const trackRef = useRef(null);
    const width = useWindowWidth();
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    const isDragging = useRef(false);
    const startX     = useRef(0);
    const scrollLeft = useRef(0);
    const [dragging, setDragging] = useState(false);
    const dragMoved  = useRef(false);

    const onMouseDown = useCallback((e) => {
        if (!trackRef.current) return;
        isDragging.current = true;
        dragMoved.current  = false;
        startX.current     = e.pageX - trackRef.current.offsetLeft;
        scrollLeft.current = trackRef.current.scrollLeft;
        setDragging(true);
    }, []);

    const onMouseMove = useCallback((e) => {
        if (!isDragging.current || !trackRef.current) return;
        e.preventDefault();
        const x    = e.pageX - trackRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.2;
        trackRef.current.scrollLeft = scrollLeft.current - walk;
        if (Math.abs(walk) > 4) dragMoved.current = true;
    }, []);

    const onMouseUp = useCallback(() => {
        isDragging.current = false;
        setDragging(false);
    }, []);

    const touchStart = useRef(0);
    const onTouchStart = useCallback((e) => {
        if (!trackRef.current) return;
        touchStart.current = e.touches[0].pageX;
        scrollLeft.current = trackRef.current.scrollLeft;
    }, []);

    const onTouchMove = useCallback((e) => {
        if (!trackRef.current) return;
        const walk = (touchStart.current - e.touches[0].pageX) * 1.2;
        trackRef.current.scrollLeft = scrollLeft.current + walk;
    }, []);

    useEffect(() => {
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("mousemove", onMouseMove);
        return () => {
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [onMouseUp, onMouseMove]);

    const [scrollProgress, setScrollProgress] = useState(0);
    const onScroll = () => {
        if (!trackRef.current) return;
        const el  = trackRef.current;
        const max = el.scrollWidth - el.clientWidth;
        setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
    };

    return (
        <section
            id="projects"
            ref={secRef}
            className="w-full flex flex-col items-center py-30 relative overflow-hidden px-20"
            style={{ background: "#0A0F1E", minHeight: "100vh" }}>

            {/* heading */}
            <div 
                style={{
                    textAlign: "center",
                    marginBottom: isMobile ? 32 : 52,
                    position: "relative", zIndex: 1,
                    opacity: secVis ? 1 : 0,
                    transform: secVis ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity .6s ease, transform .6s cubic-bezier(.22,1,.36,1)",
                }}>

                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A0AEC0", marginBottom: 8 }}>
                    My Work
                </p>

                <h2 
                    style={{
                        fontSize: isMobile ? "2rem" : isTablet ? "2.6rem" : "3.2rem",
                        fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.15,
                    }}>

                    Featured <span style={{ color: ACCENT }}>Projects</span>
                </h2>

                <div style={{ width: 60, height: 3, background: ACCENT, borderRadius: 2, margin: "14px auto 0" }} />
            </div>

            {/* drag hint */}
            <div 
                style={{
                    display: "flex", alignItems: "center", gap: 8,
                    marginBottom: 20,
                    marginTop: -28,
                    opacity: secVis ? 0.5 : 0,
                    transition: "opacity .6s ease .3s",
                    fontSize: 11, color: "#64748b", fontWeight: 500, letterSpacing: "0.05em",
                }}>

                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path d="M1 5h14M10 1l4 4-4 4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                drag to explore

                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ transform: "scaleX(-1)" }}>
                    <path d="M1 5h14M10 1l4 4-4 4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            {/* ribbon */}
            <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
                <div 
                    style={{
                        position: "absolute", left: 0, top: 0, bottom: 0,
                        width: isMobile ? "24px" : "72px", zIndex: 2, pointerEvents: "none",
                        background: "linear-gradient(to right, #0A0F1E, transparent)",
                    }} 
                />

                <div 
                    style={{
                        position: "absolute", right: 0, top: 0, bottom: 0,
                        width: isMobile ? "24px" : "72px", zIndex: 2, pointerEvents: "none",
                        background: "linear-gradient(to left, #0A0F1E, transparent)",
                    }} 
                />

                <div
                    ref={trackRef}
                    onMouseDown={onMouseDown}
                    onScroll={onScroll}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    style={{
                        display: "flex",
                        gap: isMobile ? 16 : 24,
                        overflowX: "auto",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        paddingLeft:  isMobile ? "24px" : isTablet ? "48px" : "88px",
                        paddingRight: isMobile ? "24px" : isTablet ? "48px" : "88px",
                        paddingTop: "10px",
                        paddingBottom: "20px",
                        cursor: dragging ? "grabbing" : "grab",
                        opacity: secVis ? 1 : 0,
                        transition: "opacity .6s ease .2s",
                        WebkitOverflowScrolling: "touch",
                    }}>

                    <style>{`div::-webkit-scrollbar { display: none; }`}</style>

                    {projects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            project={project}
                            index={i}
                            isDragging={dragging}
                        />
                    ))}
                </div>
            </div>

            {/* progress bar */}
            <div 
                style={{
                    marginTop: 10,
                    width: isMobile ? "80%" : "360px",
                    height: 3,
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.06)",
                    position: "relative", zIndex: 1,
                    opacity: secVis ? 1 : 0,
                    transition: "opacity .6s ease .4s",
                    overflow: "hidden",
                }}>

                <div 
                    style={{
                        position: "absolute", top: 0, left: 0, height: "100%",
                        width: `${Math.max(10, 100 / projects.length)}%`,
                        borderRadius: 999,
                        background: ACCENT,
                        transform: `translateX(${scrollProgress * (projects.length - 1) * 100}%)`,
                        transition: "transform .1s linear",
                    }} 
                />
            </div>
        </section>
    );
};


export default Projects;