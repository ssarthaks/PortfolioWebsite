import React, { useEffect, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import tailwindCertificate from "../assets/certificates/Tailwind CSS 3 Training.png";
import reactCertificate from "../assets/certificates/ReactJS_EssentialTraining.png";
import jsCertificate from "../assets/certificates/Learning ECMAScript 6+ (ES6+).png";
import reduxToolKitCertificate from "../assets/certificates/Learning Redux Toolkit.png";
import mernTraining from "../assets/certificates/MernTraining.png";
import fullstackTraining from "../assets/certificates/FullStackTraining.png";
import awsCloudPractitioner from "../assets/certificates/AWS/Cloud Practitioner.png";
import awsCloudFoundations from "../assets/certificates/AWS/Cloud Foundations.png";
import awsDataEngineering from "../assets/certificates/AWS/Data Engineering.png";
import awsMachineLearningFoundations from "../assets/certificates/AWS/ML Foundations.png";
import awsMachineLearningNLP from "../assets/certificates/AWS/ML for NLP.png";

const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Fullstack"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    image: string;
    credId?: string;
    category: string;
    link: string;
  } | null>(null);

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

  const certifications = [
    {
      title: "React.js Essential Training",
      issuer: "LinkedIn Learning",
      date: "Jul 25, 2024",
      description:
        "Learned the essentials of React.js, a JavaScript library for building user interfaces.",
      skills: ["React.js", "Component-based Development"],
      credential:
        "19a0c5b5accfd07dca6aefd730056c7012e22061607c3b70e9be8699241321b7",
      category: "Frontend",
      image: reactCertificate,
    },
    {
      title: "Learning ECMAScript 6+ (ES6+)",
      issuer: "LinkedIn Learning",
      date: "Aug 12, 2024",
      description:
        "Learned the essentials of ECMAScript 6+, the latest version of JavaScript.",
      skills: ["JavaScript", "ECMAScript 6+"],
      credential:
        "8ae8002205be346e25b9abe8801ba802c08339a1de012b520251ffa8c0de500f",
      category: "Frontend",
      image: jsCertificate,
    },
    {
      title: "Learning Redux Toolkit",
      issuer: "LinkedIn Learning",
      date: "Aug 04, 2024",
      description:
        "Learned how to build scalable React applications using Redux Toolkit.",
      skills: ["React.js", "Redux.js"],
      credential:
        "8a0c36168afef5fc6a2453828bc44b86b0743c037d1928dd066f50d2029d1642",
      category: "Frontend",
      image: reduxToolKitCertificate,
    },
    {
      title: "Tailwind CSS 3 Essential Training",
      issuer: "LinkedIn Learning",
      date: "August 03, 2024",
      description:
        "Learned how to build responsive websites using Tailwind CSS, a utility-first CSS framework.",
      skills: ["Tailwind CSS", "Responsive Design"],
      credential:
        " dd8c2274c13c4ececeb696fcb3cab790e294f673410b9c50e4cbbdec6e6e9d98",
      category: "Frontend",
      image: tailwindCertificate,
    },
    {
      title: "Creating and Hosting a FullStack Site",
      issuer: "LinkedIn Learning",
      date: "Aug 27, 2024",
      description:
        "Learned how to build a fullstack application using React, Node.js, and MongoDB.",
      skills: ["Full-Stack Development"],
      credential:
        "46ae43431814875dfcb14ac5bed23030f18b927908868efc44e821eb07a7f151",
      category: "Fullstack",
      image: fullstackTraining,
    },
    {
      title: "MERN Essential Training",
      issuer: "LinkedIn Learning",
      date: "Nov 29, 2024",
      description:
        "Learned how to build fullstack applications using the MERN stack.",
      skills: ["React.js", "Node", "Express.js", "MongoDB"],
      credential:
        "9b802cc763d2c8a3be39cd8b7e75d85266dbc940cdb546e72fc3d9e4abdb3e2e",
      category: "Fullstack",
      image: mernTraining,
    },
    {
      title: "AWS- Cloud Practitioner",
      issuer: "Amazon Web Services Training and Certification",
      date: "September 2023",
      description:
        "AWS Certified Cloud Practitioner certification validates the ability to define what the AWS Cloud is and the basic global infrastructure.",
      skills: ["AWS Cloud Practitioner"],
      link: "https://www.credly.com/badges/7659cb80-37d3-431a-a874-7c5d057ff1dc/public_url",
      category: "AWS",
      image: awsCloudPractitioner,
    },
    {
      title: "AWS- Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      date: "September 2023",
      description:
        "AWS Certified Cloud Foundations certification validates the ability to define what the AWS Cloud is and the basic global infrastructure.",
      skills: ["AWS Cloud Foundations"],
      link: "https://www.credly.com/badges/576c2b6e-bbe9-4897-aaec-415f15dd07d6/public_url",
      category: "AWS",
      image: awsCloudFoundations,
    },
    {
      title: "AWS- Machine Learning Foudations",
      issuer: "Amazon Web Services Training and Certification",
      date: "September 2023",
      description:
        "AWS Certified Machine Learning Foudations certification validates the ability to define what the AWS Cloud is and the basic global infrastructure.",
      skills: ["AWS Machine Learning Foudations"],
      link: "https://www.credly.com/badges/e8201b33-150a-4dfa-a28e-32ec92bd06f0/public_url",
      category: "AWS",
      image: awsMachineLearningFoundations,
    },
    {
      title: "AWS- Machine Learning for Natural Language Processing",
      issuer: "Amazon Web Services Training and Certification",
      date: "September 2023",
      description:
        "AWS Certified Machine Learning for Natural Language Processing certification validates the ability to define what the AWS Cloud is and the basic global infrastructure.",
      skills: ["AWS Machine Learning for Natural Language Processing"],
      link: "https://www.credly.com/badges/671f45d5-5e9c-4c77-a46c-224b48ee0400/public_url",
      category: "AWS",
      image: awsMachineLearningNLP,
    },
    {
      title: "AWS- Data Engineering",
      issuer: "Amazon Web Services Training and Certification",
      date: "September 2023",
      description:
        "AWS Certified Data Engineering certification validates the ability to define what the AWS Cloud is and the basic global infrastructure.",
      skills: ["AWS Data Engineering"],
      link: "https://www.credly.com/badges/030dd7b3-516d-412b-90ab-4e603f9fb5b1/public_url",
      category: "AWS",
      image: awsDataEngineering,
    },
  ];

  const categories = Array.from(
    new Set(certifications.map((cert) => cert.category))
  );

  const openModal = (cert: {
    title: string;
    image: string;
    credId: string;
    link: string;
    category: string;
  }) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 reveal opacity-0">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 reveal opacity-0">
            Professional certifications that validate my skills and expertise in
            various technologies.
          </p>
        </div>

        <div className=" mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 mx-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Certificate Cards */}
          <div
            className="
              grid grid-cols-1 md:grid-cols-2 `
                gap-6"
          >
            {certifications
              .filter(
                (cert) =>
                  selectedCategory === null ||
                  cert.category === selectedCategory
              )
              .map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mx-auto w-full"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                        <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                          {cert.title}
                        </h3>

                        <div className="xl:flex hidden items-center  text-indigo-600 dark:text-indigo-400 font-medium text-sm lg:text-base">
                          <p>
                            <span>{cert.issuer}</span>
                            <span> • </span>
                            {cert.date}
                          </p>
                        </div>
                        <div className="xl:hidden flex flex-col  text-indigo-600 dark:text-indigo-400 font-medium text-sm lg:text-base">
                          <p>{cert.issuer}</p>
                          <p>{cert.date}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {cert.description}
                    </p>

                    <button
                      onClick={() =>
                        openModal({
                          title: cert.title,
                          image: cert.image,
                          credId: cert.credential || "",
                          link: cert.link || "",
                          category: cert.category,
                        })
                      }
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      <span className="mr-1">View Certificate</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedCert.title}
              </h3>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className={`${
                  selectedCert.category === "AWS"
                    ? `w-64 h-64 mx-auto`
                    : `w-full`
                } rounded-lg `}
              />
              {selectedCert.credId && selectedCert.credId.length > 5 && (
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Credential ID:{" "}
                  <p className="break-words">
                    <span className="font-medium">{selectedCert.credId}</span>
                  </p>
                </div>
              )}
              {selectedCert.link && (
                <a href={selectedCert.link} target="_blank">
                  <div className="text-sm bg-indigo-600 px-4 py-1 w-fit text-white font-medium rounded-full">
                    Certificate Link
                  </div>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
