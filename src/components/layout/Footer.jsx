import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-700">
    <div className="container mx-auto max-w-6xl px-6 py-6 text-center">

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/devansh3445"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:-translate-y-1"
        >
          <FaGithub className="w-6 h-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/devansh-sharma-629381231"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:-translate-y-1"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>

        <a
          href="mailto:devanshsharma9280@gmail.com"
          className="text-gray-400 hover:text-white transition transform hover:-translate-y-1"
        >
          <MdEmail className="w-6 h-6" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-xs">
        © {new Date().getFullYear()} Devansh Sharma
      </p>

    </div>
  </footer>
);

export default Footer;
