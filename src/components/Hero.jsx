import {motion} from "framer-motion"
export default function Hero() {
  return (
    <motion.section 
    id="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    className="py-10 ">
      {/* <img src="/avatar.jpg" alt="Rohan" className="w-32 h-32 rounded-full mx-auto border border gray-200" /> */}
      <h1 className="mt-4 text-xl ">Jignesh Gurav</h1>
      <p className="mt-1  text-sm text-gray-500">Mumbai, India</p>
      <p className="mt-2 text-l text-gray-600">Full‑stack developer building clean, fast & user-first web apps.
         With 1 year of experience in designing and developing web applications using modern 
        technologies. Skilled in both frontend and backend development.  </p>
    </motion.section>
  );
}
