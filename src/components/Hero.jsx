import {motion} from "framer-motion"
export default function Hero() {
  return (
    <motion.section 
    id="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    className="py-2 text-center">
      {/* <img src="/avatar.jpg" alt="Rohan" className="w-32 h-32 rounded-full mx-auto border border gray-200" /> */}
      <h1 className="mt-4 text-4xl font-bold">Jignesh Gurav</h1>
      <p className="mt-2 text-xl text-gray-600">Full‑stack developer building clean, fast & user-first web apps.</p>
      <p className="mt-1 text-gray-500">Mumbai, India</p>
    </motion.section>
  );
}
