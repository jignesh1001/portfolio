import { motion } from "framer-motion";
const projects = [
  {
    name: "Jobsy",
    description: " full-stack job board application that allows users to browse, post, and manage job listings with a clean, responsive UI and secure authentication..",
    link: "https://jobsy-delta.vercel.app/",
    tech: ["Reactjs", "Expressjs", "Tailwind", "MongoDB"],
  },
  
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-6"
    >
      <h2 className="  text-2xl font-semibold mb-8 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className=" text-white rounded-xl p-6 shadow hover:border border-gray-700 "
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className=" bg-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
      <br/>
    </motion.section>
    

  );
}
