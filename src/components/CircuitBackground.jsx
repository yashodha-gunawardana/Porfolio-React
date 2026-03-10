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
            }
        }
    })
}