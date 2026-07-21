{/* 
<header>
  <div><a href="index.html">
    <h1>Anaée Herbillon </h1>
  </a>

  </div>

  <label for="toggle">☰</label>
  <input type="checkbox" id="toggle">

    <nav id="menu" role="navigation">
      <ul>
        <li><a href="index.html#presentation">Qui-suis-je ?</a></li>
        <li><a href="index.html#projets">Mes projets</a> </li>
        <li><a href="index.html#competences">Mes compétences</a> </li>
        <li><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=a.herbillon33@gmail.com"
          target="_blank" id="contact">Contactez-moi</a></li>
      </ul>
    </nav>
</header> 
*/}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Qui suis-je ?', anchor: 'presentation' },
  { label: 'Mes projets', anchor: 'projets' },
  { label: 'Mes compétences', anchor: 'competences' },
];

const EMAIL = 'a.herbillon33@gmail.com';
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${EMAIL}`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  // Build the correct href for anchor links depending on the current route
  const buildAnchorHref = (anchor) => (isHome ? `#${anchor}` : `/#${anchor}`);

  return (
    <header className="fixed top-0 z-50 w-full bg-surface-bg shadow-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link
          to="/"
          onClick={closeMenu}
          className="transition-colors hover:text-navy"
          aria-label="Accueil"
        >
          <h1 className="text-xl font-medium leading-tight md:text-2xl">
            Anaée Herbillon
          </h1>
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-4xl text-navy md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop nav */}
        <nav
          id="main-menu"
          role="navigation"
          className="hidden md:flex md:items-center"
        >
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.anchor}>
                <a
                  href={buildAnchorHref(link.anchor)}
                  className="text-base transition-colors hover:font-semibold hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Contactez-moi
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile nav (slide-down panel) */}
      <nav
        role="navigation"
        aria-label="Menu mobile"
        className={`overflow-hidden bg-surface-bg transition-[max-height] duration-300 md:hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <ul className="flex flex-col gap-3 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <li key={link.anchor}>
              <a
                href={buildAnchorHref(link.anchor)}
                onClick={closeMenu}
                className="block py-2 text-center transition-colors hover:font-semibold hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-primary block"
            >
              Contactez-moi
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
