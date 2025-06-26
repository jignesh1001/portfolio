
import "./App.css";
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CursorDot from "./components/CursorDot";

function App() {
  return (
    <div className="relative">
    <CursorDot />
    <Layout>
      <Hero />
      <About />
      {/* <Skills/> */}
      <Projects/>
      <Experience />
      <Footer />
    </Layout>
    
    </div>
  );
}

export default App;
