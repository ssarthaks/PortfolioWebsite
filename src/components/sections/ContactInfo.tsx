import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactItem {
  Icon: typeof Mail;
  title: string;
  content: string;
}

const contactItems: ContactItem[] = [
  {
    Icon: Mail,
    title: 'Email',
    content: 'your.email@example.com'
  },
  {
    Icon: Phone,
    title: 'Phone',
    content: '+1 234 567 890'
  },
  {
    Icon: MapPin,
    title: 'Location',
    content: 'City, Country'
  }
];

export const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-4">
          <item.Icon className="text-blue-600 dark:text-blue-400" />
          <div>
            <h3 className="text-lg font-semibold dark:text-white">{item.title}</h3>
            <p className="dark:text-gray-300">{item.content}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};