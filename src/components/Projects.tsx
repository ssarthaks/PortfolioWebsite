import React, { useState, useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import smartpetstore from "../assets/Projects/Smartpetstore.png";
import luxurymandu from "../assets/Projects/luxurymandu.jpg";
import mernblog from "../assets/Projects/MernBlog.jpg";
import nitronics from "../assets/Projects/nitronics.jpg";
import ecommerce from "../assets/Projects/Ecommerce.jpg";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (index: number) => {
    setSelectedProject(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const projects = [
    {
      title: "Smart Pet Store (FYP)",
      description:
        "Smart Pet Store is a full-stack web application for pet owners to book and manage veterinary and grooming services. It features user profiles, appointment tracking, feedback, and an admin panel for managing schedules and queries.",
      image: smartpetstore, // Replace with actual image path if needed
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "TailwindCSS",
        "Nodemailer",
        "Cloudinary",
      ],
      liveLink: null,
      githubLink: null, // Private repo due to ongoing development
      details: {
        challenge:
          "Building a complete service booking platform with both user and admin workflows, including appointment rescheduling and notifications.",
        solution:
          "Developed a React frontend with Context API for state management, a Node.js/Express backend with RESTful APIs, and a MySQL database for data persistence. Integrated email notifications with Nodemailer and image uploads with Cloudinary.",
        features: [
          "User registration and profile management",
          "Service booking and appointment tracking",
          "Automated email reminders",
          "Admin dashboard for managing schedules and appointments",
          "Feedback system for users to share reviews",
        ],
        technologies: [
          "React",
          "Node.js",
          "Express.js",
          "JavaScript",
          "TypeScript",
          "MySQL",
          "TailwindCSS",
          "Nodemailer",
          "Cloudinary",
        ],
      },
    },
    {
      title: "Nitronics Ecommerce Project",
      description:
        "Nitronics Store is a full-stack electronics e-commerce platform with user order management and an admin panel for product & order control.",
      image: nitronics,
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "JavaScript",
        "MySQL",
        "TailwindCSS",
        "Nodemailer",
        "Framer-motion",
      ],
      liveLink: null,
      githubLink: "https://github.com/ssarthaks/NitronicsEcommerce",
      details: {
        challenge:
          "Developing a scalable e-commerce platform with efficient product management and order tracking for both users and admins.",
        solution:
          "Built a responsive frontend using React and TailwindCSS, backed by a secure Node.js/Express.js API. MySQL was used to store products, users, and orders. Added dynamic animations with Framer Motion.",
        features: [
          "User authentication and order history",
          "Product browsing, searching, and filtering",
          "Shopping cart with real-time updates",
          "Admin dashboard for managing products and orders",
          "Order confirmation emails via Nodemailer",
        ],
        technologies: [
          "React",
          "Node.js",
          "Express.js",
          "JavaScript",
          "MySQL",
          "TailwindCSS",
          "Nodemailer",
          "Framer-motion",
        ],
      },
    },
    {
      title: "Luxurymandu Frontend",
      description:
        "Luxurymandu is a frontend-only web application focused on delivering a modern and elegant UI/UX for a luxury food brand.",
      image: luxurymandu,
      tags: [
        "React",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
        "ShadCN",
        "Framer-motion",
      ],
      liveLink: "https://luxurymandu-sarthak.netlify.app/",
      githubLink: "https://github.com/ssarthaks/Luxurymandu",
      details: {
        challenge:
          "Designing a visually appealing, user-friendly frontend that captures the luxury brand's aesthetic while ensuring responsiveness.",
        solution:
          "Created modern, interactive interfaces using React with TypeScript, styled with TailwindCSS and ShadCN. Added fluid animations with Framer Motion.",
        features: [
          "Elegant product showcasing",
          "Smooth page transitions and animations",
          "Mobile-friendly responsive design",
          "Minimalist navigation and UI components",
          "Component library integration with ShadCN",
        ],
        technologies: [
          "React",
          "JavaScript",
          "TypeScript",
          "TailwindCSS",
          "ShadCN",
          "Framer-motion",
        ],
      },
    },
    {
      title: "Full Stack Social Media Application",
      description:
        "A personal project to build a full-stack social media platform with user profiles and CRUD operations for posts.",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJraTlpMzZtNHN1dzRxZjV2MHhhYnpsaXJsejQzeDNnejIyODdhdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jZeZtoObz3wPPcjAhj/giphy.gif",
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      liveLink: null,
      githubLink: "https://github.com/ssarthaks/MERN_SocialMediaApp",
      details: {
        challenge:
          "Implementing user authentication, post creation, and profile management with real-time updates.",
        solution:
          "Built a React + TailwindCSS frontend with a secure Node.js/Express backend. Used MongoDB for data storage, ensuring flexible schema for user posts and profiles.",
        features: [
          "User authentication and profile creation",
          "Post creation, editing, and deletion",
          "Image uploads",
          "Feed display with dynamic updates",
          "Responsive UI design",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "TailwindCSS",
        ],
      },
    },
    {
      title: "Full Stack Blog Application",
      description:
        "A full-stack blog application developed as part of my learning process using the MERN stack.",
      image: mernblog,
      tags: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vanilla CSS",
      ],
      liveLink: null,
      githubLink: "https://github.com/ssarthaks/MERN_BlogApp",
      details: {
        challenge:
          "Building a basic yet functional blog application with user-authored posts and simple styling.",
        solution:
          "Developed the frontend with React.js and styled it with vanilla CSS. Created backend APIs with Express.js and MongoDB for data storage.",
        features: [
          "User authentication",
          "Create, read, update, and delete blog posts",
          "Simple and clean UI",
          "Individual post pages",
        ],
        technologies: [
          "React.js",
          "JavaScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Vanilla CSS",
        ],
      },
    },
    {
      title: "Dynamic E-commerce Web Application",
      description:
        "A dynamic e-commerce platform demonstrating MVC architecture principles, built using Java.",
      image: ecommerce,
      tags: ["Java", "JavaScript", "HTML", "CSS"],
      liveLink: null,
      githubLink:
        "https://github.com/ssarthaks/Development_of_an_Ecommerce_Platform_JAVA",
      details: {
        challenge:
          "Developing a scalable, well-structured e-commerce platform following the MVC design pattern.",
        solution:
          "Built the application using Java for backend processing, with a clean separation of concerns. Frontend was developed using HTML, CSS, and JavaScript for a dynamic user experience.",
        features: [
          "Product catalog with search and filter",
          "User registration and authentication",
          "Shopping cart functionality",
          "Order placement and tracking",
        ],
        technologies: ["Java", "JavaScript", "HTML", "CSS"],
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 reveal opacity-0">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6 reveal opacity-0"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 reveal opacity-0">
            A showcase of my work, personal projects, and contributions that
            demonstrate my skills and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow reveal opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openModal(index)}
                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    View Details
                  </button>

                  <div className="flex space-x-3">
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg  transition-colors"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        <span>Private</span>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                  {projects[selectedProject].title}
                </h3>

                <div className="flex space-x-4">
                  {projects[selectedProject].githubLink ? (
                    <a
                      href={projects[selectedProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg  transition-colors"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      <span>Private</span>
                    </a>
                  )}
                  {projects[selectedProject].liveLink && (
                    <a
                      href={projects[selectedProject].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selectedProject].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Project Overview
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {projects[selectedProject].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    The Challenge
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {projects[selectedProject].details.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    The Solution
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {projects[selectedProject].details.solution}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {projects[selectedProject].details.features.map(
                    (feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].details.technologies.map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
