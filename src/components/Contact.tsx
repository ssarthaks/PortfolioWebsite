import React, { FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // Email regex pattern for basic email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the email value from the form
    const formData = new FormData(formRef.current!);
    const email = formData.get("user_email") as string;

    // Validate email using regex
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Show a toast notification to inform the user that the mail is being sent
    toast.info("Sending your message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current!,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Mail Sent Successfully!");
          if (formRef.current) {
            formRef.current.reset(); // Reset fields in the form
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center dark:text-white mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold dark:text-white">Email</h3>
                <p className="dark:text-gray-300">ssarthakxd@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold dark:text-white">
                  Location
                </h3>
                <p className="dark:text-gray-300">Syuchatar, Kathmandu</p>
              </div>
            </div>
          </motion.div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  required
                  name="user_name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  required
                  name="user_email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  name="message"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                type="submit"
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
