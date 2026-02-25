import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Education />
      <Certifications />
      <Footer />
    </main>
  );
}
