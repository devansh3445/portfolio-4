import React, { useEffect, useRef, useState } from "react";

const SkillCard = ({ name, tag, delay }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-900 hover:border-emerald-500 border-transparent ${
        isVisible ? "fade-in-section is-visible" : "fade-in-section"
      }`}
      style={{ "--animation-delay": `${delay}` }}
    >
      <div className="h-20 w-20 mb-4 rounded-full bg-gray-700 flex items-center justify-center text-3xl font-bold text-emerald-400 transition-all duration-300 group-hover:bg-emerald-900">
        {tag}
      </div>
      <h3 className="text-xl font-semibold text-white text-center mt-2">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;
