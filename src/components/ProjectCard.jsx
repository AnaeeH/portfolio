import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

/**
 * Clickable project card. Clicking navigates to /projets/:id (no more direct PDF popup).
 */
export default function ProjectCard({ project }) {
  return (
    <Link
      to={asset(`/projets/${project.id}`)}
      className="group flex w-full max-w-xs flex-col overflow-hidden rounded-tl-3xl rounded-br-3xl bg-surface-block p-5 shadow-card transition-all duration-300 hover:scale-[1.02] hover:bg-sky-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
      aria-label={`Voir le projet ${project.title}`}
    >
      {project.image ? (
        <img
          src={asset(project.image)}
          alt={project.imageAlt || project.title}
          className="mb-4 aspect-video w-full rounded-lg object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="mb-4 flex aspect-video w-full items-center justify-center rounded-lg bg-neutral-200 text-neutral-500"
          aria-hidden="true"
        >
          <span className="text-sm">Aperçu à venir</span>
        </div>
      )}

      <h4 className="mb-2 text-center text-lg font-semibold text-navy">
        {project.title}
      </h4>
      <p className="mb-4 flex-1 text-center text-sm text-neutral-700">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
