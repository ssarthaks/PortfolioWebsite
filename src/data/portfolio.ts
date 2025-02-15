import certificate1 from "../assets/Certifications/MernTraining.jpg";
import certificate2 from "../assets/Certifications/ReactTraining.jpg";
import certificate3 from "../assets/Certifications/ReactEssentialTraining.jpg";

import mernblog from "../assets/Projects/MernBlog.jpg";
import smartpetstore from "../assets/Projects/LogoDesign.png";
import ecommerce from "../assets/Projects/Ecommerce.jpg";
import luxurymandu from "../assets/Projects/luxurymandu.jpg";
import kanbanboard from "../assets/Projects/kanbanboard.jpg";

export const projects = [
  {
    id: 1,
    title: "Smart Pet Store (FYP)- 80%",
    description:
      "Smart Pet Store is a MERN web app for pet owners to book and manage veterinary and grooming services. It features user profiles, appointment tracking, and reminders. Admins can manage schedules, availability, and service queries, while users can also provide feedback.",
    note: "Private GitHub Repository due to ongoing development.",
    technologies: [
      "React",
      "Node",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "MySQL",
      "TailwindCSS",
      "Nodemailer",
      "Cloudinary",
    ],
    image: smartpetstore,
  },
  {
    id: 2,
    title: "Luxurymandu Frontend",
    description:
      "Luxurymandu is a frontend-only web application that emphasizes clean, modern UI/UX design. It offers a seamless user experience without backend functionality or payment integrations, focusing solely on intuitive design and user-centric interactions.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "ShadCN",
      "Framer-motion",
    ],
    image: luxurymandu,
    github: "https://github.com/ssarthaks/Luxurymandu",
    livelink: "https://luxurymandu-sarthak.netlify.app/",
  },
  {
    id: 3,
    title: "Full Stack Social Media Application",
    description:
      "A personal project focused on user authentication and CRUD operations for posts and profiles. Currently in progress...",
    technologies: [
      "React",
      "TypeScript",
      "Node",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
    ],
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJraTlpMzZtNHN1dzRxZjV2MHhhYnpsaXJsejQzeDNnejIyODdhdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jZeZtoObz3wPPcjAhj/giphy.gif",
    github: "https://github.com/ssarthaks/MERN_SocialMediaApp",
  },
  {
    id: 4,
    title: "Full Stack Blog Application",
    description:
      "As part of my learning journey, I built a full-stack blog app using the MERN stack (MongoDB, Express, React, Node.js).",
    technologies: [
      "React.js",
      "JavaScript",
      "Node",
      "Express.js",
      "MongoDB",
      "Vanilla CSS",
    ],
    image: mernblog,
    github: "https://github.com/ssarthaks/MERN_BlogApp",
  },
  {
    id: 5,
    title: "Dynamic E-commerce Web Application",
    description:
      "Utilizing modern web technologies and the MVC architecture, we ensured efficiency, scalability, and future expandability, demonstrating our dedication to software engineering principles and innovation in niche markets.",
    technologies: ["JAVA", "JavaScript", "HTML", "CSS"],
    image: ecommerce,
    github:
      "https://github.com/ssarthaks/Development_of_an_Ecommerce_Platform_JAVA",
  },

  {
    id: 6,
    title: "Kanban Board Drag and Drop",
    description:
      "The Kanban Board is a task management app built with React and TypeScript, featuring drag-and-drop, customizable columns, and local storage persistence. It uses @hello-pangea/dnd for task movement, Zustand for state management, and TailwindCSS for styling.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "@hello-pangea/dnd",
    ],
    image: kanbanboard,
    github: "https://github.com/ssarthaks/KanbanBoardDnD",
    livelink: "https://kanbanboard-sarthak.netlify.app/",
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
