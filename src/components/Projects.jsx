import { motion } from "framer-motion";
const projects = [
  {
    name: "Jobsy",
    description: " full-stack job board application that allows users to browse, post, and manage job listings with a clean, responsive UI and secure authentication..",
    link: "https://jobsy-kappa.vercel.app/",
    tech: ["Reactjs", "Expressjs", "Tailwind", "MongoDB"],
    githubLink: "https://github.com/jignesh1001/jobsy",
    isLive : true
  },
  {
    name: "easypark",
    description: "A Django-based parking app offering real-time spot availability, secure payments, reservations, navigation assistance, user profiles, and reviews.",
    link: "",
    tech: ["Django", "HTML", "CSS", "Bootstrap"],
    githubLink: "https://github.com/jignesh1001/easypark",
    isLive : false
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
      className=""
    >
      <h2 className="  text-l  ">Projects</h2>

      <div className="grid md:grid-cols ">
        {projects.map((project) => (
          <div
            key={project.name}
            className=" p-3 shadow-md border border-transparent hover:border-gray-700 transition-colors duration-300 "
          >
            <h3 className="text-sm mb-2">
              <a
              href={project.isLive ? project.link : project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline text-sm"
            
            >
              {project.name}
            </a>
            </h3>
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
            
          </div>
        ))}
      </div>
      <br/>
    </motion.section>
    

  );
}
