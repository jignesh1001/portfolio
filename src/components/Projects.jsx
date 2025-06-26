import { motion } from "framer-motion";
const projects = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    link: "https://sudorohan.xyz",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    name: "E-commerce Store",
    description: "A modern online store with cart, auth and Stripe payments.",
    link: "https://github.com/jignesh1001/ecommerce",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
  },
  {
    name: "Dev Blog Platform",
    description: "A blog platform with Markdown support and admin panel.",
    link: "https://github.com/jignesh1001/dev-blog",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
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
      <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 text-white rounded-xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-xs px-2 py-1 rounded-full"
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
    </motion.section>
    

  );
}
