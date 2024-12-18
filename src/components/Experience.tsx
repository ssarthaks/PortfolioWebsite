import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../data/portfolio";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center dark:text-white mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {experience.map((exp, index) => {
            // Declare the `useInView` hook here
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={exp.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6"
              >
                <h4 className="text-2xl font-bold dark:text-white mb-2">
                  {exp.role}
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {exp.address}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.duration}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
