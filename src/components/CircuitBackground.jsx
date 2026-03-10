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

            }
        }
    })
}