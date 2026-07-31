/**
 * Neural Network & Robotic Synapses Interactive Canvas Simulation
 * Dark Cyber Tech Edition: Emerald & Cyan Glowing Neurons with Interactive Synapse Pulses.
 * High performance, zero dependencies.
 */

export function initNeuralBg() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Dark Cyber Configuration
    const config = {
        primaryColor: '#10b981',       // Emerald Neon
        secondaryColor: '#06b6d4',     // Cyan Electric
        linePrimaryRGB: '16, 185, 129',
        lineSecondaryRGB: '6, 182, 212',
        maxDistance: 140,
        mouseRadius: 210,
        nodeCountDensity: 0.00008,
        maxNodes: 110,
        minNodes: 35
    };

    let nodes = [];
    let pulses = [];
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };
    let animId = null;

    // Node particle class
    class Node {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2 + 1.2;
            this.energy = Math.random() * 0.4 + 0.3; // Glow intensity
            this.color = Math.random() > 0.35 ? config.primaryColor : config.secondaryColor;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off boundaries
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse proximity interaction
            if (mouse.active) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);

                if (dist < config.mouseRadius) {
                    const factor = (1 - dist / config.mouseRadius);
                    this.energy = Math.min(1.6, 0.4 + factor * 1.2);
                    
                    // Gentle attraction to cursor
                    const force = factor * 0.03;
                    this.x += dx * force;
                    this.y += dy * force;
                } else {
                    this.energy = Math.max(0.3, this.energy - 0.02);
                }
            } else {
                this.energy = Math.max(0.3, this.energy - 0.02);
            }
        }

        draw() {
            ctx.save();
            ctx.beginPath();
            const currentRadius = this.radius * (this.energy > 0.8 ? 1.35 : 1);
            ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = this.energy * 14;
            ctx.fill();
            ctx.restore();
        }
    }

    // Pulse/Photon travelling along synapses
    class SynapsePulse {
        constructor(fromNode, toNode) {
            this.from = fromNode;
            this.to = toNode;
            this.progress = 0;
            this.speed = Math.random() * 0.03 + 0.015;
            this.color = Math.random() > 0.5 ? config.primaryColor : config.secondaryColor;
        }

        update() {
            this.progress += this.speed;
        }

        draw() {
            const currentX = this.from.x + (this.to.x - this.from.x) * this.progress;
            const currentY = this.from.y + (this.to.y - this.from.y) * this.progress;

            ctx.save();
            ctx.beginPath();
            ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.restore();
        }
    }

    function resize() {
        dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.scale(dpr, dpr);

        const targetCount = Math.min(
            config.maxNodes,
            Math.max(config.minNodes, Math.floor(width * height * config.nodeCountDensity))
        );

        nodes = [];
        for (let i = 0; i < targetCount; i++) {
            nodes.push(new Node(Math.random() * width, Math.random() * height));
        }
    }

    function drawSynapses() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const n1 = nodes[i];
                const n2 = nodes[j];

                const dx = n1.x - n2.x;
                const dy = n1.y - n2.y;
                const dist = Math.hypot(dx, dy);

                if (dist < config.maxDistance) {
                    const baseAlpha = (1 - dist / config.maxDistance) * 0.35;
                    const isGlowing = (n1.energy > 0.8 || n2.energy > 0.8);

                    ctx.beginPath();
                    ctx.moveTo(n1.x, n1.y);
                    ctx.lineTo(n2.x, n2.y);

                    if (isGlowing) {
                        ctx.strokeStyle = `rgba(${config.lineSecondaryRGB}, ${baseAlpha * 2.2})`;
                        ctx.lineWidth = 1.2;
                    } else {
                        ctx.strokeStyle = `rgba(${config.linePrimaryRGB}, ${baseAlpha})`;
                        ctx.lineWidth = 0.8;
                    }

                    ctx.stroke();

                    // Randomly spawn pulses on active synapses
                    if (isGlowing && Math.random() < 0.004 && pulses.length < 25) {
                        pulses.push(new SynapsePulse(n1, n2));
                    }
                }
            }

            // Direct line to mouse cursor
            if (mouse.active) {
                const mDist = Math.hypot(mouse.x - nodes[i].x, mouse.y - nodes[i].y);
                if (mDist < config.mouseRadius) {
                    const mAlpha = (1 - mDist / config.mouseRadius) * 0.6;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(${config.lineSecondaryRGB}, ${mAlpha})`;
                    ctx.lineWidth = 1.4;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse tracking
        mouse.x += (mouse.targetX - mouse.x) * 0.16;
        mouse.y += (mouse.targetY - mouse.y) * 0.16;

        // Draw nodes
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].update();
            nodes[i].draw();
        }

        // Draw synapses
        drawSynapses();

        // Update pulses
        for (let i = pulses.length - 1; i >= 0; i--) {
            pulses[i].update();
            pulses[i].draw();
            if (pulses[i].progress >= 1) {
                pulses.splice(i, 1);
            }
        }

        animId = requestAnimationFrame(animate);
    }

    // Listeners
    window.addEventListener('resize', resize);

    window.addEventListener('mousemove', (e) => {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
        mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
        mouse.active = false;
    });

    window.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
            mouse.targetX = e.touches[0].clientX;
            mouse.targetY = e.touches[0].clientY;
            mouse.active = true;
        }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouse.targetX = e.touches[0].clientX;
            mouse.targetY = e.touches[0].clientY;
            mouse.active = true;
        }
    }, { passive: true });

    window.addEventListener('touchend', () => {
        mouse.active = false;
    });

    resize();
    animate();
}
