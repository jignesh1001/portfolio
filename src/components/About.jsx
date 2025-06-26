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
        Full Stack Developer with 1 year of experience in designing and developing web applications using modern technologies. Skilled in both frontend and backend development, with a strong focus on building scalable, user-centric solutions. Committed to continuous learning and delivering high-quality code.
      </p>
      <br />
    </motion.section>
  );
}
