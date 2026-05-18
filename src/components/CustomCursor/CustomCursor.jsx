import { useEffect, useState } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth linear-interpolated (lerp) trailing effect for outer ring
  useEffect(() => {
    let active = true;
    const updateTrail = () => {
      if (!active) return;
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16
        };
      });
      requestAnimationFrame(updateTrail);
    };
    updateTrail();
    return () => {
      active = false;
    };
  }, [position]);

  // Expand and change cursor style when hovering over interactive elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".floating-logo") ||
        target.closest(".nav-logo") ||
        target.closest(".theme-toggle") ||
        target.closest(".social-links a") ||
        target.closest(".blog-card") ||
        target.closest(".project-link-btn") ||
        target.closest(".contact-icon") ||
        target.closest("input") ||
        target.closest("textarea");
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (isHidden) return null;

  return (
    <>
      <div 
        className={`custom-cursor-dot ${isHovering ? "hover" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-ring ${isHovering ? "hover" : ""}`}
        style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }}
      />
    </>
  );
}

export default CustomCursor;
