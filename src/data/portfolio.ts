import certificate1 from "../assets/Certifications/MernTraining.jpg";
import certificate2 from "../assets/Certifications/ReactTraining.jpg";
import certificate3 from "../assets/Certifications/ReactEssentialTraining.jpg";

import project1 from "../assets/Projects/MernBlog.jpg";
import project2 from "../assets/Projects/TaskMng.jpg";
import project3 from "../assets/Projects/TodoList.jpg";
import project4 from "../assets/Projects/Ecommerce.jpg";

export const projects = [
  {
    id: 1,
    title: "Full Stack Blog Application",
    description:
      "As part of my learning journey, I built a full-stack blog app using the MERN stack (MongoDB, Express, React, Node.js).",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    image: project1,
    github: "https://github.com/ssarthaks/MERN_BlogApp",
  },
  {
    id: 2,
    title: "Dynamic Task Management System",
    description:
      "This project is a task management system developed using React and Redux as part of my college summer class assignment.",
    technologies: ["React", "JavaScript", "TailwindCSS"],
    image: project2,
    github: "https://github.com/ssarthaks/React_TaskManagementSystem",
  },
  {
    id: 3,
    title: "Dynamic Todo Web Application",
    description:
      "This project is a web-based to-do list application crafted with React and the Context API. It features seamless state management and leverages local storage with JSON for persistent data handling.",
    technologies: ["React", "JavaScript", "TailwindCSS"],
    image: project3,
    github: "https://github.com/ssarthaks/P07_React_ContextAPI_LocalStorage",
  },
  {
    id: 4,
    title: "Dynamic E-commerce Web Application",
    description:
      "Utilizing modern web technologies and the MVC architecture, we ensured efficiency, scalability, and future expandability, demonstrating our dedication to software engineering principles and innovation in niche markets.",
    technologies: ["JAVA", "JavaScript", "HTML", "CSS"],
    image: project4,
    github:
      "https://github.com/ssarthaks/Development_of_an_Ecommerce_Platform_JAVA",
  },
];

export const certificates = [
  {
    id: 1,
    title: "MERN Essential Training",
    issuer: "Linkedin Learning",
    date: "29 Nov 2024",
    image: certificate1,
  },
  {
    id: 2,
    title: "React: Creating and Hosting a FullStack Site",
    issuer: "Linkedin Learning",
    date: "27 Aug 2024",
    image: certificate2,
  },
  {
    id: 3,
    title: "React.js Essential Training",
    issuer: "Linkedin Learning",
    date: "24 Jul 2024",
    image: certificate3,
  },
];

export const education = [
  {
    id: 1,
    institution: "Islington College",
    degree: "Bsc. (Hons) Computing",
    field: "Information Technology",
    year: "2022-Present",
  },
  {
    id: 2,
    institution: "GEMS Institute of Higher Education (GIHE)",
    degree: "+2 (Science)",
    field: "High School",
    year: "2020-2022",
  },
  {
    id: 3,
    institution: "Meridian International School",
    degree: "SEE",
    field: "School",
    year: "2020",
  },
];

export const experience = [
  {
    id: 1,
    role: "React JS Intern",
    company: "Prince Lab Pvt. Ltd.",
    address: "Budanilkantha, Kathmandu",
    duration: "Jul 2024 - November 2024",
  },
  {
    id: 2,
    role: "Animation Intern",
    company: "InnovateTech",
    address: "Baluwatar, Kathmandu",
    duration: "March 2024 - September 2024",
  },
];