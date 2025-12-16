import React, { useEffect, useState } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const words = [
    "captivating interfaces.",
    "responsive web apps.",
    "beautiful user experiences.",
    "innovative solutons.",
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delay = 2000;

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentWord.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, delay);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutId = setTimeout(type, typingSpeed);
      } else {
        timeoutId = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    };
    timeoutId = setTimeout(type, typingSpeed + 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="home"
      className=" min-h-screen h-screen flex items-center justify-center relative overflow-hidden bg-blue-50"
    >
      <div className="home-blob-bg"></div>
      <div className=" relative z-10 text-center px-6">
        <div className="glass-card p-8 md:12 rounded-3xl max-w-3xl mx-auto border-2 border-emerald-400/30">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-4 leading-tight">
            Hi, I'm <span className="text-emerald-400">Devansh Sharma</span>
          </h1>
          <h2 className="text2xl md:text-3xl lg:text-4xl font-semibold text-gray-600">
            I build <span className="text-teal-400">{typedText}</span>
            <span className="typing-cursor"></span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg md:text-xl">
            A passionate frontend developer and aspiring innovator.
          </p>
        </div>
      </div>

      {/* scroll down arrow text */}
      <a
        href="#about"
        className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <span className=" text-5xl text-emerald-400" aria-label="Scroll down">
          ↓
        </span>
      </a>
    </section>
  );
};

export default Home;
