
import "./App.css";
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CursorDot from "./components/CursorDot";

// function App() {
//   return (
//     <div className="relative">
//     <CursorDot />
//     <Layout>
//       <Hero />
//       {/* <About /> */}
//       {/* <Skills/> */}
//       <Projects/>
//       <Experience />
//       <Footer />
//     </Layout>
    
//     </div>
//   );
// }

function App() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <CursorDot />
      <div className="max-w-3xl mx-auto px-4"> {/* <-- key layout styling */}
        <Layout>
          <Hero />
          <Projects />
          <Experience />
          <Footer />
        </Layout>
      </div>
    </div>
  );
}

export default App;
