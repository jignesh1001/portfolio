import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-3"
    >
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p>
       I'm a Full Stack Developer with 1 year of experience building web applications using modern technologies like React, Node.js, and MongoDB. I enjoy working on both frontend and backend, creating user-friendly interfaces and robust APIs. I'm always eager to learn and take on new challenges to grow as a developer.
      </p>
    </motion.section>
  );
}
