import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CATEGORIES, PROJECTS, getProjectById } from '../data/projects';
import { asset } from '../utils/asset';
import Carousel from '../components/Carousel';

export default function ProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(projectId);

  // Scroll to top whenever we open a new project
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  // Project not found — friendly fallback
  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-navy">Projet introuvable</h2>
        <p className="mb-8 text-neutral-700">
          Le projet demandé n'existe pas ou a été déplacé.
        </p>
        <Link
          to="/"
          state={{ scrollTo: 'projets' }}
          className="mb-8 inline-flex items-center gap-2 text-navy transition-colors hover:underline"
        >
          <span aria-hidden="true">←</span>
          <span>Retour aux projets</span>
        </Link>
      </div>
    );
  }

  // Pick the next project (in the array order) for the "Next project" link
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      {/* Back button — uses history when possible, falls back to home */}
      <Link
        to="/"
        state={{ scrollTo: 'projets' }}
        className="mb-8 inline-flex items-center gap-2 text-navy transition-colors hover:underline"
      >
        <span aria-hidden="true">←</span>
        <span>Retour aux projets</span>
      </Link>

      <header className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-navy-soft">
          {CATEGORIES[project.category]}
        </p>
        <h1 className="mb-4 text-3xl font-semibold text-navy md:text-4xl">
          {project.title}
        </h1>
        <p className="text-lg text-neutral-700">{project.shortDescription}</p>
      </header>

      {(() => {
        const images = project.images
          ? project.images
          : project.image
            ? [{ src: project.image, alt: project.imageAlt || project.title }]
            : [];

        return <Carousel images={images} />;
      })()}

      {/* Quick facts panel */}
      <dl className="mb-10 grid gap-4 rounded-2xl bg-surface-block p-6 sm:grid-cols-3">
        <div>
          <dt className="text-sm font-semibold text-navy">Rôle</dt>
          <dd className="mt-1 whitespace-pre-line text-neutral-800">{project.role}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-navy">Durée</dt>
          <dd className="mt-1 text-neutral-800">{project.duration}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-navy">Technologies</dt>
          <dd className="mt-1 text-neutral-800">
            {project.technologies.join(', ')}
          </dd>
        </div>
      </dl>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-navy">Contexte</h2>
        <p className="whitespace-pre-line leading-relaxed text-neutral-800">
          {project.context}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-navy">Description</h2>
        {project.longDescription.map((block, idx) => (
          <div key={idx} className="mb-6 last:mb-0">
            {
              block.intro && (
                <p className="whitespace-pre-line leading-relaxed text-neutral-800">
                  {block.intro}
                </p>
              )
            }
            {
              block.list && block.list.length > 0 && (
                <ul className="list-disc space-y-1 pl-6 leading-relaxed text-neutral-800">
                  {block.list.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              )
            }
          </div>
        ))}
      </section>

      {project.workDistribution && (
        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-navy">Répartition du travail</h2>
          {project.workDistribution.map((block, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              {
                block.intro && (
                  <p className="whitespace-pre-line leading-relaxed text-neutral-800">
                    {block.intro}
                  </p>
                )
              }
              {
                block.list && block.list.length > 0 && (
                  <ul className="list-disc space-y-1 pl-6 leading-relaxed text-neutral-800">
                    {block.list.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                )
              }
            </div>
          ))}
        </section>
      )}

      <dl className="mb-10 grid gap-4 p-6 sm:grid-cols-2">
        <div>
          {project.technical && project.technical.length > 0 && (
            <section className="mb-8">
              <h2 className="mb-3 text-xl font-semibold text-navy">Compétences techniques</h2>
              <ul className="list-disc space-y-1 pl-6 leading-relaxed text-neutral-800">
                {project.technical.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
        <div>
          {project.soft && project.soft.length > 0 && (
            <section className="mb-8">
              <h2 className="mb-3 text-xl font-semibold text-navy">Autres compétences</h2>
              <ul className="list-disc space-y-1 pl-6 leading-relaxed text-neutral-800">
                {project.soft.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </dl>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold text-navy">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Download / open PDF actions */}
      {project.pdfUrl && (
        <div className="mb-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={asset(project.pdfUrl)} download className="btn-primary">
            Télécharger le PDF
          </a>
          <a
            href={asset(project.pdfUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ouvrir le PDF
          </a>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.192 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"
                />
              </svg>
              {project.codeUrl.includes('github.com') ? 'Voir sur GitHub' : 'Voir le code'}
            </a>
          )}
        </div>
      )}

      {/* Navigation between projects */}
      <nav className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-300 pt-8 sm:flex-row">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-navy hover:underline"
        >
          ← Retour
        </button>
        {nextProject && (
          <Link
            to={`/projets/${nextProject.id}`}
            className="text-right text-navy hover:underline"
          >
            Projet suivant : {nextProject.title} →
          </Link>
        )}
      </nav>
    </article>
  );
}
