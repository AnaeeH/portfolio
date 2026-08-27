import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';
import { useState } from 'react';

const YEAR_TAG_REGEX = /^\d+(er|ère|ème|e)?\s+année$/i;

/**
 * Clickable project card. Clicking navigates to /projets/:id (no more direct PDF popup).
 */
export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const yearTag = project.tags.find((tag) => YEAR_TAG_REGEX.test(tag));
  const otherTags = project.tags.filter((tag) => !YEAR_TAG_REGEX.test(tag));

  return (
    <Link
      to={asset(`/projets/${project.id}`)}
      className="group flex w-full flex-col overflow-hidden rounded-2xl bg-surface-block transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
      aria-label={`Voir le projet ${project.title}`}
    >
      <div className="relative">
        {project.image && !imageError ? (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={asset(project.image)}
              alt={project.imageAlt || project.title}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="flex flex-col aspect-video w-full items-center justify-center bg-neutral-200 text-neutral-500"
            aria-hidden="true"
          >
            <span className="text-sm"> { project.imageAlt } </span>
            <span className="text-sm"> Aperçu indisponible </span>
          </div>
        )}

        {yearTag && (
          <span className="absolute right-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            {yearTag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 text-center">
        <h4 className="mb-3 text-xl font-semibold text-navy">
          {project.title}
        </h4>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-700">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {otherTags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {otherTags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
