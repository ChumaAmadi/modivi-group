"use client";

import React, { useEffect, useRef } from 'react';

interface StarBackgroundProps {
  starCount?: number;
  connectionDistance?: number;
  opacityMultiplier?: number;
  showLogo?: boolean;
}

export default function StarBackground({ 
  starCount = 150, 
  connectionDistance = 150,
  opacityMultiplier = 1,
  showLogo = true
}: StarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    class Star {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      opacity: number;
      twinkleSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity += this.twinkleSpeed;

        if (this.opacity > 1 || this.opacity < 0.2) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }

        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8 * opacityMultiplier})`;
        ctx.fill();
      }
    }

    const init = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.25 * opacityMultiplier;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starCount, connectionDistance, opacityMultiplier]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
      {/* Centered Logo Background Piece */}
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-64 h-64 md:w-lg md:h-128 animate-pulse-slow">
            <img 
              src="/assets/MG-White.png" 
              alt="" 
              className="w-full h-full object-contain grayscale opacity-100"
            />
          </div>
        </div>
      )}
    </div>
  );
}

