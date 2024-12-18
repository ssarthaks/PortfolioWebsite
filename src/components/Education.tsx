import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { education, certificates } from '../data/portfolio';
import { Award, GraduationCap } from 'lucide-react';
import { CertificateModal } from './CertificateModal';

export const Education: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    image: string;
  } | null>(null);

  return (
    <section id="education" className="py-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center dark:text-white mb-12"
        >
          Education & Certificates
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold dark:text-white mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300"
              >
                <h4 className="text-xl font-bold dark:text-white">
                  {edu.institution}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.field}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">{edu.year}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold dark:text-white mb-6 flex items-center">
              <Award className="mr-2" /> Certificates
            </h3>
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCertificate({
                  title: cert.title,
                  image: cert.image
                })}
              >
                <h4 className="text-xl font-bold dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400">{cert.date}</p>
                <button
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-2 inline-block"
                >
                  View Certificate
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        certificate={selectedCertificate}
      />
    </section>
  );
};