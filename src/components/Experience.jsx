import { motion } from "framer-motion";

const experiences = [
  {
    company: "Nadcab Labs",
    role: "Frontend Engineer",
    period: "Apr 2024 – Apr 2025",
    tech: ["Next.js", "Web3", "React"],
    description:
      "Built scalable and responsive UIs for blockchain-based applications, collaborating with backend and product teams.",
  },
  {
    company: "Hackingly",
    role: "Frontend Intern",
    period: "Dec 2023 – Mar 2024",
    tech: ["Next.js", "Node.js", "React"],
    description:
      "Worked on a modern SaaS dashboard using Next.js and integrated backend APIs to enhance user experience.",
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jul 2020 – Mar 2024",
    tech: ["Next.js", "Node.js", "React"],
    description:
      "Delivered full-stack web apps for startups and creators, focusing on performance, scalability, and maintainability.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 text-white"
    >
      <h2 className="text-2xl font-semibold mb-8 text-center">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold">{exp.company}</h3>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>

            <p className="text-sm text-cyan-400 mb-2">{exp.role}</p>

            <p className="text-sm text-gray-300 mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2 text-xs">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 px-2 py-1 rounded-full text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

