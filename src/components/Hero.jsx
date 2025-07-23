import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-10 "
    >
      {/* Typing effect on H1 */}
      <TypeAnimation
        sequence={[
          "Jignesh Gurav", // text to type
          1000, // wait 1s
          // erase
          // wait 0.5s
        ]}
        wrapper="h1"
        cursor={false}
      
        className="mt-4 text-xl"
      />
      <TypeAnimation
        sequence={[
          "Mumbai, India", // text to type
          1000, // wait 1s
          // erase
          // wait 0.5s
        ]}
        wrapper="p"
        cursor={false}
        
        className="mt-1 text-sm text-gray-500"
      />

      {/* <p className="mt-1 text-sm text-gray-500">Mumbai, India</p> */}
      <p className="mt-2 text-l text-gray-600">
        Full‑stack developer building clean, fast & user-first web apps. With 1
        year of experience in designing and developing web applications using
        modern technologies. Skilled in both frontend and backend development.
      </p>
    </motion.section>
  );
}
