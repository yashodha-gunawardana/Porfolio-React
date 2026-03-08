import React, { useEffect, useRef } from "react";


const CODE_SNIPPETS = [
    "const [state, setState] = useState(null);",
    "import React from 'react';",
    "useEffect(() => { fetchData(); }, []);",
    "npm install react-router-dom",
    "git commit -m 'feat: add education section'",
    "const res = await fetch('/api/data');",
    "export default function App() {",
    "const [data, setData] = useState([]);",
    "axios.get('/api/data').then(res => {});",
];

const COLORS = ["#38bdf8", "#60a5fa", "#93c5fd", "#818cf8"];

const CodeBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let cols = [];

        const init = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            cols = [];
            const numCols = Math.floor(canvas.width / 150);

            for (let i = 0; i < numCols; i++) {
                const xBase = i * 150 + Math.random() * 50;
                for (let j = 0; j < 3; j++) {
                    cols.push({
                        x: xBase,
                        y: Math.random() * canvas.height,
                        speed: 0.2 + Math.random() * 0.6,
                        angle: Math.random() * 0.3 - 0.15, // slight horizontal drift
                        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
                        color: COLORS[Math.floor(Math.random() * COLORS.length)],
                        alpha: 0.03 + Math.random() * 0.05,
                        size: 14 + Math.random() * 6,
                    });
                }
            }
        };

        init();

        let raf;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            cols.forEach((col) => {
                ctx.font = `${col.size}px 'Fira Code', monospace`;
                ctx.fillStyle = col.color;
                ctx.globalAlpha = col.alpha;
                ctx.fillText(col.text, col.x, col.y);

                // move upward with slight horizontal drift
                col.y -= col.speed;
                col.x += col.angle;

                // reset if offscreen
                if (col.y < -20) {
                    col.y = canvas.height + 20;
                    col.x = Math.random() * canvas.width;
                    col.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
                    col.color = COLORS[Math.floor(Math.random() * COLORS.length)];
                    col.alpha = 0.03 + Math.random() * 0.05;
                    col.size = 14 + Math.random() * 6;
                    col.angle = Math.random() * 0.3 - 0.15;
                }
            });

            ctx.globalAlpha = 1;
            raf = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => init();
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                display: "block",
                zIndex: 0,
            }}
        />
    );
};


export default CodeBackground;