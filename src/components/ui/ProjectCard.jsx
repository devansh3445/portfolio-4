import React, { useRef, useState, useEffect } from "react";

const ProjectCard = ({ project, delay }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
      className={`bg-gray-800 rounded-xl shadow-xl overflow-hidden relative group
        transition-all duration-300 hover:shadow-emerald-500/30 border border-transparent hover:border-emerald-500/50
        fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ "--animation-delay": `${delay}s` }}
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) =>
          (e.target.src =
            "https://placehold.co/600x400/333/fff?text=Project+Image")
        }
      />

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-6 text-center
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <h3 className="text-2xl font-bold mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-emerald-900 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Default Visible Content */}
      <div className="p-6 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
