import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">Skills & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6  text-white">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
