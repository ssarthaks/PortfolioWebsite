import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Sarthak Sharma</h2>
            <p className="text-gray-400">Frontend & Full Stack Developer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/ssarthaks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ssarthaks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ssarthakxd@gmail.com"
              className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sarthak Sharma. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Education
            </a>
            <a
              href="#certifications"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Certifications
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
