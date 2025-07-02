import  { useEffect } from "react";

const CursorAnimation = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 800); // Remove after animation
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return null;
};

export default CursorAnimation;
