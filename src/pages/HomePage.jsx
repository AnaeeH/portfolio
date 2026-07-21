import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';
import ProjectsSection from '../components/ProjectsSection';
import Skills from '../components/Skills';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    }
  }, [location]);

  return (
    <>
       <section id="presentation">
        <div
          className="h-72 w-full bg-cover bg-center md:h-96"
          style={{ backgroundImage: "url('./images/pageAccueil/banniereLinkedin.png')" }}
          role="img"
          aria-label="Bannière personnelle"
        />
      </section>
      <About />
      <div className="divider" aria-hidden="true" />
      <ProjectsSection />
      <div className="divider" aria-hidden="true" />
      <Skills />
    </>
  );
}
