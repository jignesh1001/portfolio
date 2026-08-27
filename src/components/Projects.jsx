import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
const projects = [
  {
    name: "Jobsy",
    description: "Full-stack job board with secure auth, employer/candidate roles, and job posting & application workflows. Built for a clean, fast browsing experience across devices.",
    link: "https://jobsy-kappa.vercel.app/",
    tech: ["Reactjs", "Expressjs", "Tailwind", "MongoDB"],
    githubLink: "https://github.com/jignesh1001/jobsy",
    isLive: true
  },
  {
    name: "Data-pusher",
    description: "Webhook delivery service that ingests JSON events per account and reliably fans them out to multiple destination URLs — built with a Redis-backed queue (BullJS) for retry handling and async processing at scale.",
    link: "https://datapusher-zind.onrender.com/",
    tech: ["Bulljs", "Expressjs", "Redis", "MongoDB"],
    githubLink: "https://github.com/jignesh1001/datapusher",
    isLive: false
  },
  {
    name: "Expense-tracker",
    description: "Travel expense reimbursement platform with role-based access — employees submit expenses, admins review and process reimbursements with a full audit trail. Deployed on AWS EC2.",
    link: "http://ec2-13-232-66-239.ap-south-1.compute.amazonaws.com",
    tech: ["React", "Expressjs", "PostgreSQL",'AWS ec2'],
    githubLink: "https://github.com/jignesh1001/expense-tracker",
    isLive: false
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
              {/* <h3 className=" mb-2">
              <a
                href={project.isLive ? project.link : project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline text-sm"

              >
                {project.name}
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <span><FaGithub /></span>
              </a>
            </h3>  */}
            <h3 className="mb-1 flex items-center gap-2">
              {/* Project Name */}
              <a
                href={project.isLive ? project.link : project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline text-sm"
              >
                {project.name}
              </a>

              {/* GitHub Link */}
              {/* <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <FaGithub />
              </a> */}

              {/* Live Link */}
              {project.isLive && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 text-sm"
                >
                  <GoArrowUpRight />
                </a>
              )}
            </h3>
            <p className=" text-gray-300 mb-4">{project.description}</p>
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
      <br />
    </motion.section>


  );
}
