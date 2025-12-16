import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="py-12 bg-gray-900 border-t border-gray-700">
    <div className="container mx-auto max-w-6xl px-6 text-center text-gray-400">
      <div className="flex justify-center space-x-8 mb-6">
        {/* GitHub */}
        <a 
          href="https://github.com/devansh3445" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group hover:opacity-80 transition-all duration-300 transform hover:-translate-y-1" 
          aria-label="GitHub Profile"
        >
          <img 
            src="https://cdn.simpleicons.org/github/white" 
            alt="GitHub logo" 
            className="w-8 h-8"
            onError={(e) => e.target.style.display='none'} 
          />
        </a>
        
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/devansh-sharma-629381231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group hover:opacity-80 transition-all duration-300 transform hover:-translate-y-1" 
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="w-8 h-8 text-white hover:text-gray-400 transition" />
        </a>

        

        {/* Email */}
        <a 
          href="mailto:devanshsharma9280@gmail.com" 
          className="group hover:opacity-80 transition-all duration-300 transform hover:-translate-y-1" 
          aria-label="Email Alex"
        >
          <img 
            src="https://cdn.simpleicons.org/gmail/white" 
            alt="Email icon" 
            className="w-8 h-8"
            onError={(e) => e.target.style.display='none'}
          />
        </a>
      </div>
      
    </div>
  </footer>
);
export default Footer;
