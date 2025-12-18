import React, { useEffect, useRef, useState } from "react";
import SkillCard from "../../ui/SkillCard";

const skillsData = [
  { name: "JavaScript", tag: "JS" },
  { name: "React", tag: "Re" },
  { name: "CSS3", tag: "CSS" },
  { name: "HTML5", tag: "HTM" },
  { name: "Tailwind CSS", tag: "TS" },
  { name: "Git & GitHub", tag: "Git" },
];

const Skills = () => {
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 sm:py-20 md:py-32 bg-gray-950"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-white ${
            isVisible ? "fade-in-section is-visible" : "fade-in-section"
          }`}
        >
          My Technical <span className="text-emerald-400">Skills</span>
        </h2>

        <div className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4 sm:gap-6 lg:gap-8
          mt-10
          
          md:active:scale-100
        ">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              tag={skill.tag}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
