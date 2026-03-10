import React, { useEffect, useRef } from "react";


function CircuitBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2nd");

        // resize handler
        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resize();
        window.addEventListener("resize", resize);


        // grid setup
        const GRID = 80;
        const cols = Math.ceil(canvas.width / GRID) + 1;
        const rows = Math.ceil(canvas.height / GRID) + 1;

        // build traces
        const traces = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                if (c < cols - 1 && Math.random() < 0.35) {
                    traces.push({
                        x1: c * GRID,       y1: r * GRID,  // start node
                        x2: (c + 1) * GRID, y2: r * GRID,  // end node
                        progress: Math.random(),           // signal start position (0–1)
                        speed:    0.002 + Math.random() * 0.003, // how fast the signal moves
                        active:   Math.random() < 0.4,    // whether a signal is currently travelling
                        delay:    Math.random() * 200,     // frame delay before the signal starts
                    });
                }

                if (r < rows - 1 && Math.random() < 0.35) {
                    traces.push({
                        x1: c * GRID, y1: r * GRID,
                        x2: c * GRID, y2: (r + 1) * GRID,
                        progress: Math.random(),
                        speed:    0.002 + Math.random() * 0.003,
                        active:   Math.random() < 0.4,
                        delay:    Math.random() * 200,
                    });
                }
            }
        }

        // build nodes
        const nodeSet = new Set();
        traces.forEach(t => {
            nodeSet.add(`${t.x1},${t.y1}`);
            nodeSet.add(`${t.x2},${t.y2}`);
        });

        const nodes = [...nodeSet].map(k => {
            const [x, y] = k.split(",").map(Number);
            return {
                x, y,
                pulse: Math.random() * Math.PI * 2, // random starting phase for pulsing animation
            };
        });


        // animation loop
        let frame = 0;
        let animId;  // stores requestAnimationFrame id

        const draw = () => {

            // clear the previous frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            // draw traces
            traces.forEach(t => {
                ctx.beginPath();
                ctx.moveTo(t.x1, t.y1);
                ctx.lineTo(t.x2, t.y2);
                ctx.strokeStyle = "rgba(0,132,255,0.07)";
                ctx.lineWidth   = 1;
                ctx.stroke();


                // travelling signals
                if (t.active && frame > t.delay) {

                    t.progress += t.speed;

                    // when signal passes the end, reset it and randomly deactivate
                    if (t.progress > 1.2) {
                        t.progress = -0.2;
                        t.active   = Math.random() < 0.6; 

                    }

                    // clamp progress to 0–1 to get the actual position on the trace
                    const p  = Math.max(0, Math.min(1, t.progress));
                    const sx = t.x1 + (t.x2 - t.x1) * p; 
                    const sy = t.y1 + (t.y2 - t.y1) * p; 

                    // radial glow around the signal dot
                    const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 10);
                    grad.addColorStop(0, "rgba(0,132,255,0.5)"); 
                    grad.addColorStop(1, "rgba(0,132,255,0)");   
                    ctx.beginPath();
                    ctx.arc(sx, sy, 10, 0, Math.PI * 2);
                    ctx.fillStyle = grad;
                    ctx.fill();

                    // bright signal dot on top of the glow
                    ctx.beginPath();
                    ctx.arc(sx, sy, 2, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(0,180,255,0.9)";
                    ctx.fill();

                } else if (!t.active && Math.random() < 0.001) {
                    // small chance each frame to reactivate an idle trace
                    t.active   = true;
                    t.progress = 0;
                }
            });

            // draw nodes
            nodes.forEach(n => {
                n.pulse += 0.03; 
                const alpha = 0.15 + Math.sin(n.pulse) * 0.1; 

                ctx.beginPath();
                ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,132,255,${alpha})`;
                ctx.fill();
            });

            // schedule the next frame
            animId = requestAnimationFrame(draw);
        };

    })
}