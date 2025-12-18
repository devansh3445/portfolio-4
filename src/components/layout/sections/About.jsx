import React, { useEffect, useRef, useState } from "react";


const About = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersection) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
    <section id="about" className="py-20 md:py-32 bg-gray-900" ref={ref}>
      <div className="container mx-auto max-w-6xl px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
            isVisible ? "fade-in-section is-visible" : "fade-in-section"
          }`}
        >
          <div
            className="order-2 md:order-1"
            style={{ "--animation-delay": "0.2s" }}
          >
            <img
              src="/img 1.jpeg"
              alt="Code on screen"
              className="rounded-xl shadow-2xl w-full h-auto object-cover border bprder-emerald-500/30"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/600x400/1a2a2f/e5e5e5?text=About+Image")
              }
            />
          </div>
          <div
            className="order-1 md:order-2"
            style={{ "--animation-delay": "0s" }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              About <span className="text-emerald-400">Me</span>
            </h2>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              {" "}
              Hello! I'm Devansh Sharma, an enthusiastic frontend developer with practical experience from a completed internship. I’m driven to create intuitive, visually engaging, and high-performance web applications.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I am eager to learn new skills, solving complex UI challenges, and
              bringing ideas to life pixel by pixel. My journey is driven by
              curiosity and a desire to build web solutions that make a real
              impact. I'm eager to contribute to innovative projects and grow
              with a forward-thinking team.
            </p>

            <a
  href="/Devansh.pdf"
  download
  className="
    w-full sm:w-auto
    flex items-center justify-center
    gap-2
    bg-gradient-to-r from-emerald-500 to-teal-500
    hover:from-emerald-600 hover:to-teal-600

    active:from-emerald-700 active:to-teal-700

    text-white font-medium
    text-sm sm:text-base
    py-3 sm:py-3.5
    px-6 sm:px-8
    rounded-full
    transition-all duration-300
    shadow-lg shadow-emerald-500/20
    active:scale-95
  "
>
  Download My Resume
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
