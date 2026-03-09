import { motion } from "framer-motion";

const experiences = [
  {
    company: "Zeel Infotech",
    role: "Software Engineer",
    period: "June 2024 – May 2025",
    tech: ["Delphi", "MySQL", "PLSQL","pascal"],
    description:
      "Design, develop, and maintain high-end customized communication and networking solutions using Delphi, focusing on regulatory compliance, network management, and monitoring systems.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-white"
    >
      <h2 className="">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className=" p-3 shadow-md border border-transparent hover:border-gray-700 transition-colors duration-300"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className=" ">{exp.company}</h3>
              <span className=" text-gray-400">{exp.period}</span>
            </div>

            <p className=" text-cyan-400 mb-2">{exp.role}</p>

            <p className=" text-gray-300 mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2 ">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 px-2 py-1 rounded-full text-gray-200"
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
