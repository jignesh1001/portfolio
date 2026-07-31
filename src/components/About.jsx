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
      <h2 className="text-xl font-semibold mb-4">About Me</h2>
      <p>
        Full-stack developer who ships clean, production-ready web apps end to end. I like solving real problems with pragmatic architecture — React/Node on the frontend and backend, with a growing focus on scalable, queue-driven systems.
      </p>
      <br />
    </motion.section>
  );
}
