import React, { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const rings = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function generateRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    class Ring {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 3;
        this.maxRadius = Math.random() * 50 + 30;
        this.growSpeed = 0.1; // Adjust the value to control the animation speed
        this.color = generateRandomColor();
        this.opacity = 0.2; // Adjust the opacity value (between 0 and 1)
        this.opacitySpeed = 0.1; // Adjust the value to control the opacity animation speed
        this.lineWidth = 3; // Adjust the width of the ring
      }

      draw() {
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.globalAlpha = this.opacity;
        context.stroke();
        context.restore();
      }

      update() {
        if (this.radius < this.maxRadius) {
          this.radius += this.growSpeed;
        } else if (this.opacity > 0) {
          this.opacity -= this.opacitySpeed;
        } else {
          rings.splice(rings.indexOf(this), 1);
        }
      }
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      rings.forEach((ring) => {
        ring.update();
        ring.draw();
      });

      requestAnimationFrame(animate);
    }

    // Function to generate rings at random intervals
    function generateRing() {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      rings.push(new Ring(x, y));
      setTimeout(generateRing, Math.random() * 2000 + 1000);
    }

    generateRing();

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  });

  return (
    <canvas ref={canvasRef} className='backgroundCanvas' />
  );
};

export default CanvasAnimation;
