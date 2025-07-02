import { useEffect, useRef } from "react";

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const createParticle = (x, y) => {
      const size = Math.random() * 6 + 2;
      const speedX = (Math.random() - 0.5) * 1;
      const speedY = (Math.random() - 0.5) * 1;
      const color = `hsl(${Math.random() * 360}, 70%, 80%)`;

      particles.current.push({ x, y, size, speedX, speedY, color, alpha: 1 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.01;

        if (p.alpha <= 0) {
          particles.current.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < 4; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
    />
  );
};

export default CursorTrail;
