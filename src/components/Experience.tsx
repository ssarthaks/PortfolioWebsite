import React, { useEffect } from "react";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
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

  const experiences = [
    {
      title: "Animation Intern",
      company: "InnovateTech Pvt. Ltd.",
      address: "Baluwatar, Kathmandu, Nepal",
      period: "March 2024 - September 2024",
      description:
        "Developed eBooks for MySecondTeacherNepal of Grade 11 and 12 using Adobe Photoshop, Illustrator and InDesign. Created custom 2D character animations for the eBooks.",
      skills: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      achievements: [
        "Developed 2D character animations for the eBooks",
        "Created Designs from scratch using Adobe Illustrator",
        "Designed books for MySecondTeacherNepal in Adobe InDesign",
      ],
    },
    {
      title: "React JS Intern",
      company: "Prince Lab Pvt. Ltd.",
      address: "Budanilkantha, Kathmandu, Nepal",
      period: "July 2024 - November 2024",
      description:
        "Worked on a CMS project using React JS, TypeScript, TailwindCSS. Developed reuseable UI components with redux implementation and API integration. for the company.",
      skills: [
        "React",
        "TailwindCSS",
        "JavaScript",
        "TypeScript",
        "Axios",
        "Redux",
      ],
      achievements: [
        "Developed a responsive website for the CMS project",
        "Learned about implementation of redux for state management",
        "Learned about Axios, API integration and data fetching",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 reveal opacity-0">
            Work{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6 reveal opacity-0"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 reveal opacity-0">
            My professional journey and the valuable experience I've gained
            along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-indigo-900"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative reveal opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-800 z-10">
                  <Briefcase className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Content */}
                <div
                  className={`md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:items-end mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="xl:flex hidden items-center  text-indigo-600 dark:text-indigo-400 font-medium text-sm lg:text-base">
                        <p>
                          <span>{exp.company}</span>
                          <span> • </span>
                          {exp.period}
                        </p>
                      </div>
                      <div className="xl:hidden flex flex-col items-start md:items-end  text-indigo-600 dark:text-indigo-400 font-medium text-sm lg:text-base">
                        <p>{exp.company}</p>
                        <p>{exp.period}</p>
                      </div>
                      <div className="md:flex hidden items-center space-x-2 text-indigo-700 dark:text-indigo-500 font-medium text-xs md:text-sm lg:text-base">
                        <span>{exp.address}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-left">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-left">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
