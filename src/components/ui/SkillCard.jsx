import React, { useEffect, useRef, useState } from "react";

const SkillCard = ({ name, tag, delay }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false); // 👈 smooth mobile

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      /* 📱 Mobile smooth press */
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
      className={`flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg
        border border-transparent
        transition-transform transition-colors duration-300 ease-out
        hover:scale-105 hover:bg-emerald-900 hover:border-emerald-500
        ${isPressed ? "scale-105 bg-emerald-900 border-emerald-500" : ""}
        ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
      style={{ "--animation-delay": `${delay}` }}
    >
      <div
        className={`h-20 w-20 mb-4 rounded-full flex items-center justify-center
        text-3xl font-bold text-emerald-400
        transition-colors duration-300
        ${isPressed ? "bg-emerald-900" : "bg-gray-700"}`}
      >
        {tag}
      </div>

      <h3 className="text-xl font-semibold text-white text-center mt-2">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;
