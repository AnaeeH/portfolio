import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CATEGORIES, PROJECTS, getProjectById } from '../data/projects';
import { asset } from '../utils/asset';

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
        <Link to={asset('/#projets')} className="btn-primary">
          Retour aux projets
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
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 text-navy transition-colors hover:underline"
      >
        <span aria-hidden="true">←</span>
        <span>Retour</span>
      </button>

      <header className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-navy-soft">
          {CATEGORIES[project.category]}
        </p>
        <h1 className="mb-4 text-3xl font-semibold text-navy md:text-4xl">
          {project.title}
        </h1>
        <p className="text-lg text-neutral-700">{project.shortDescription}</p>
      </header>

      {project.image && (
        <img
          src={asset(project.image)}
          alt={project.imageAlt || project.title}
          className="mb-10 w-full rounded-3xl object-cover shadow-card"
        />
      )}

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
        <p className="whitespace-pre-line leading-relaxed text-neutral-800">
          {project.longDescription}
        </p>
      </section>

      <dl className="mb-10 grid gap-4 p-6 sm:grid-cols-2">
        <div>
          {project.technical && project.technical.length > 0 && (
            <section className="mb-8">
              <h2 className="mb-3 text-xl font-semibold text-navy">Compétences techniques</h2>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed text-neutral-800">
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
              <ul className="list-disc space-y-2 pl-6 leading-relaxed text-neutral-800">
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
            Ouvrir dans un nouvel onglet
          </a>
        </div>
      )}

      {/* Navigation between projects */}
      <nav className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-300 pt-8 sm:flex-row">
        <Link to={asset('/#projects')} className="text-navy hover:underline">
          ← Tous les projets
        </Link>
        {nextProject && (
          <Link
            to={asset(`/projets/${nextProject.id}`)}
            className="text-right text-navy hover:underline"
          >
            Projet suivant : {nextProject.title} →
          </Link>
        )}
      </nav>
    </article>
  );
}
