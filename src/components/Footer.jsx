import { FaGithub, FaLinkedin } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="text-center py-8 text-gray-500 text-sm">
//       <p>© {new Date().getFullYear()} Jignesh — Building ❤️ in India.</p>
//       <p>
//         <a href="https://github.com/jignesh1001" className="mr-4 hover:underline">GitHub</a>
//         <a href="https://twitter.com/sudorohan" className="hover:underline">LinkedIn</a>
//       </p>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer className=" py-8 text-gray-400 text-sm">
      <div className="flex justify-center gap-6 text-xl">
        <a href="https://github.com/jignesh1001" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jignesh-gurav-7172111a4/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaLinkedin />
        </a>
      </div>
      {/* <p className="mt-4 text-xs">© {new Date().getFullYear()} Jignesh Gurav. Built with ❤️</p> */}
    </footer>
  );
}