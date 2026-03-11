import React, { useEffect, useRef } from "react";


const WORDS = [
    "const", "let", "var", "fn()", "=>", "null",
    "true", "[]", "{}", "async", "0x1A", "npm",
    "git", "API", "UI", "dev", "int", "str",
];

const CursorGridBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let cursors = [];
        let raf;

        const CELL = 110; // grid cell size

        const init = () => {
            canvas.width  = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            cursors = [];

            const cols = Math.floor(canvas.width  / CELL);
            const rows = Math.floor(canvas.height / CELL);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {

                    // only ~35% of cells get a cursor
                    if (Math.random() > 0.35) continue;

                    const word = WORDS[Math.floor(Math.random() * WORDS.length)];

                    cursors.push({
                        // position within the cell with small random offset
                        x: c * CELL + CELL * 0.3 + Math.random() * (CELL * 0.4),
                        y: r * CELL + CELL * 0.5 + Math.random() * (CELL * 0.3),

                        word,                        // word to type out
                        typed:    0,                 // how many chars currently shown
                        state:   "typing",           // typing | blinking | clearing
                        timer:    Math.random() * 80,// frame countdown for next action
                        blinks:   0,                 // blink counter
                        blinkOn:  true,              // cursor visible or hidden
                        alpha:    0.12 + Math.random() * 0.18, // base opacity
                        size:     10 + Math.random() * 4,      // font size
                    });
                }
            }
        };

        init();

        let frame = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            cursors.forEach(cur => {
                cur.timer--;

                // state
                if (cur.state === "typing") {
                    if (cur.timer <= 0) {
                        cur.typed++;
                        cur.timer = 5 + Math.random() * 10; // delay between chars
                        if (cur.typed >= cur.word.length) {

                            // finished typing — start blinking
                            cur.state  = "blinking";
                            cur.timer  = 20;
                            cur.blinks = 0;
                        }
                    }

                } else if (cur.state === "blinking") {
                    if (cur.timer <= 0) {
                        cur.blinkOn = !cur.blinkOn;
                        cur.timer   = 18;
                        cur.blinks++;
                        if (cur.blinks > 5) {

                            // after a few blinks — start clearing
                            cur.state   = "clearing";
                            cur.blinkOn = true;
                            cur.timer   = 8;
                        }
                    }

                } else if (cur.state === "clearing") {
                    if (cur.timer <= 0) {
                        cur.typed--;
                        cur.timer = 4 + Math.random() * 6;
                        if (cur.typed <= 0) {

                            // pick a new word and start over
                            cur.word  = WORDS[Math.floor(Math.random() * WORDS.length)];
                            cur.state = "typing";
                            cur.timer = 40 + Math.random() * 120; // pause before retyping
                        }
                    }
                }

                // render 
                ctx.font        = `${cur.size}px 'Fira Code', monospace`;
                ctx.fillStyle   = "#0084FF";
                ctx.shadowColor = "#60a5fa";
                ctx.shadowBlur  = 6;
                ctx.globalAlpha = cur.alpha;

                // draw the typed portion of the word
                const displayText = cur.word.slice(0, cur.typed);
                ctx.fillText(displayText, cur.x, cur.y);

                // draw blinking cursor bar after the text
                if (cur.blinkOn) {
                    const textW = ctx.measureText(displayText).width;
                    ctx.fillRect(
                        cur.x + textW + 1,
                        cur.y - cur.size + 2,
                        Math.max(1.5, cur.size * 0.08), // thin cursor bar
                        cur.size,
                    );
                }
            });

            ctx.shadowBlur  = 0;
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
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                pointerEvents: "none",
                display: "block",
                zIndex: 0,
                opacity: 0.45,
            }}
        />
    );
};


export default CursorGridBackground;