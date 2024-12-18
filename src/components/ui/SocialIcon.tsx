import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  href: string;
  Icon: LucideIcon;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="dark:text-gray-300 hover:dark:text-white text-2xl"
    >
      <Icon size={24} />
    </motion.a>
  );
};