import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { Button } from '../ui/Button';

export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <Input label="Name" type="text" required />
      <Input label="Email" type="email" required />
      <TextArea label="Message" rows={4} required />
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </motion.form>
  );
};