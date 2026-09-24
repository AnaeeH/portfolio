import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';
import ProjectsSection from '../components/ProjectsSection';
import Skills from '../components/Skills';
import { asset } from '../utils/asset';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <section id="presentation">
        <div
          className="h-72 w-full bg-cover bg-center md:h-96"
          style={{ backgroundImage: `url(${asset('/images/pageAccueil/banniereLinkedin.png')})`, }}
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
