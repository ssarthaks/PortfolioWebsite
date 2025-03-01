import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const texts = [
      "Full Stack JS Developer",
      "UI/UX Enthusiast",
      "AI & ML Aspirant",
    ];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let textToWrite = "";

    const typeEffect = () => {
      const currentText = texts[index];

      if (isDeleting) {
        textToWrite = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textToWrite = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (textRef.current) {
        textRef.current.textContent = textToWrite;
      }

      let typeSpeed = isDeleting ? 50 : 150;

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        typeSpeed = 500;
      }

      setTimeout(typeEffect, typeSpeed);
    };

    const timer = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <motion.div
        className="container mx-auto px-4 md:px-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-6 inline-block p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Sarthak Sharma
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 h-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            I'm a{" "}
            <span
              ref={textRef}
              className="text-indigo-600 dark:text-indigo-400"
            ></span>
          </motion.div>

          <motion.p
            className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Crafting Seamless Experiences with Code & Creativity
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="flex space-x-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://github.com/ssarthaks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ssarthaks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ssarthakxd@gmail.com"
              className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>

          <a
            href="#about"
            className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
