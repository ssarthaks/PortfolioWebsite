import React, { useEffect, useRef } from "react";
import {
  Code,
  Server,
  Database,
  Github as Git,
  Palette,
  Zap,
  Globe,
} from "lucide-react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      items: [
        "React",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
        "HTML/CSS",
        "Responsive Design",
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    {
      category: "Database",
      icon: (
        <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      ),
      items: [
        "MySQL",
        "SQLite",
        "MongoDB",
        "Database Schema Design & Management",
      ],
    },
    {
      category: "Tools & Others",
      icon: <Git className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      items: ["Git", "GitHub", "VS Code", "Visual Studio"],
    },
    {
      category: "Design",
      icon: (
        <Palette className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      ),
      items: [
        "UI/UX Principles",
        "Figma",
        "Responsive Design",
        "Accessibility",
      ],
    },
    {
      category: "Other Languages",
      icon: <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      items: ["Java", "Python", "DotNet (C#)"],
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 reveal opacity-0">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6 reveal opacity-0"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 reveal opacity-0">
            I'm a passionate developer focused on creating beautiful,
            functional, and user-centered digital experiences. With a strong
            foundation in both frontend and backend technologies, I bring ideas
            to life with clean code and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="reveal opacity-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a dedicated Full Stack Developer with a strong passion for
              creating seamless user experiences. My journey in web development
              started with a curiosity about how websites work, which quickly
              evolved into a deep love for coding and problem-solving.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest technologies and best practices. My
              approach combines technical expertise with creative thinking to
              deliver solutions that not only work flawlessly but also delight
              users.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Apart from coding, I love to travel, play football and try new
              experiences. I'm always eager to learn and grow, both personally
              and professionally, and I'm excited to take on new challenges and
              opportunities.
            </p>
          </div>

          <div className="reveal opacity-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Approach
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                  <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    User-Centered Design
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I prioritize the end-user experience in everything I build,
                    ensuring intuitive and accessible interfaces.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                  <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Clean Code
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I write maintainable, well-documented code that follows best
                    practices and industry standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                  <Palette className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Creative Problem Solving
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I approach challenges with creativity and persistence,
                    finding elegant solutions to complex problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10 reveal opacity-0">
          My Skills & Expertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-3">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skill.category}
                </h4>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
