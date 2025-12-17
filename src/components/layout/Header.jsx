import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-sm shadow-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto max-w-6xl px-6 py-5 flex justify-between items-center">
        <a
          href="#home"
          className="text-3xl font-extrabold text-emerald-400 tracking-tight"
        >
          Devansh
        </a>
        <div className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-gray-600 hover:text-emerald-800 transition-colors duration-300 font-medium "
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-600 hover:text-emerald-800 transition-colors duration-300 font-medium "
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-emerald-800 transition-colors duration-300 font-medium "
          >
            Projects
          </a>
          
          <a
            href="#contact"
            className="text-gray-600 hover:text-emerald-800 transition-colors duration-300 font-medium "
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 text-white font-semiboldpy-2.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500"
        >
          Let's Connect
        </a>

        {/* Mobile menu buttton */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-orange-800 text-4xl focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <span className="w-8 h-8 items-center justify-center">
                &times;
              </span>
            ) : (
              <span className="w-8 h-8 items-center justify-center">
                &#9776;
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-950/95 backdeop-blur-lg z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-center items-center`}
      >
        <a
          href="#about"
          onClick={closeMobileMenu}
          className="text-gray-600 hover:text-emerald-800 transition-colors duration-300 font-medium text-3xl py-4"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={closeMobileMenu}
          className="text-gray-600 hover:text-emerald-800 transition-colors duration-300 font-medium text-3xl py-4"
        >
          Skills
        </a>
        <a
          href="Projects"
          onClick={closeMobileMenu}
          className="text-gray-600 hover:text-emerald-800 transition-colors duration-300 font-medium text-3xl py-4"
        >
          Projects
        </a>
        
        <a
          href="Contact"
          onClick={closeMobileMenu}
          className="text-gray-600 hover:text-emerald-800 transition-colors duration-300 font-medium text-3xl py-4"
        >
          Contact
        </a>
        <a
          href="#contact"
          onClick={closeMobileMenu}
          className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py- px-8 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20"
        >
          Let's Connect
        </a>
      </div>
    </header>
  );
};

export default Header;
