import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "../../ui/ProjectCard";

const projectsData = [
  {
    title: "FinTech (UptoSkill)",
    description:
      "UptoSkill Lead Generation CRM is a scalable web application that enables businesses to capture, organize, and track leads in real time. It features secure authentication, dynamic lead management, and a responsive dashboard optimized for sales workflows.",
    img: "screen 1.png",
    tags: ["React", "TailwindCss", "Firebase(Auth)"],
    
  },
  {
    title: "Tour and Travel ",
    description:
      "A responsive tour and travel website built to present destinations and packages with optimized performance and seamless user interaction.",
    img: "screen 2.png",
    tags: ["React", "Tailwind"],
    
  },
  {
    title: "Portfolio Website ",
    description: "My first personal portfolio website, designed to showcase foundational frontend skills.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "TailwindCss"],
    liveUrl: "#",
    codeUrl: "#",
  },
  
];

const Projects = () => {
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
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2
          className={`text-4xl font-bold text-center mb-12 text-white fade-in-section ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ "--animation-delay": "0s" }}
        >
          My Latest <span className="text-emerald-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
