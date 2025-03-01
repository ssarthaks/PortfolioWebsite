import React, { useEffect } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education: React.FC = () => {
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

  const education = [
    {
      degree: "School",
      institution: "Meridian International School",
      location: "Baluwatar, Kathmandu, Nepal",
      period: "2020",
      description:
        "Completed my primary and secondary education with a focus on science and mathematics. I was actively involved in extracurricular activities and sports.",
      score: "GPA: 3.85",
    },
    {
      degree: "+2 in Science",
      institution: "GEMS Institute of Higher Education",
      location: "Dhapakhel, Lalitpur, Nepal",
      period: "2020 - 2022",
      description:
        "Completed my higher secondary education with a focus on science and mathematics. I was actively involved in extracurricular activities and sports.",
      score: "GPA: 3.52",
    },
    {
      degree: "Bachelor's (Hons.) in Computing",
      institution: "Islington College, London Metropolitan University",
      location: "Kamalpokhari, Kathmandu, Nepal",
      period: "2022 - 2025",
      description:
        "Focusing on software development, algorithms, and web technologies. I have developed a strong foundation in computer science and software engineering.",
      score: "Running...",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 reveal opacity-0">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6 reveal opacity-0"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 reveal opacity-0">
            My academic background and the knowledge I've gained through formal
            education.
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden reveal opacity-0"
            >
              <div className="p-6">
                <div className="flex flex-col justify-between mb-6">
                  <div className="flex mb-4 md:mb-0">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4 h-fit">
                      <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm lg:text-base">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col space-y-1 mt-4 text-sm lg:text-base">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {edu.description}
                </p>
                {edu.score && (
                  <p className="text-indigo-600 dark:text-indigo-400">
                    {edu.score}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
