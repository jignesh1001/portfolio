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
        I’m a full-stack dev with 1yr of product experience and 3yrs freelance.
        I build scalable frontends with great UX and collaborating closely with
        core teams.
      </p>
    </motion.section>
  );
}
