import { useMemo, useState } from 'react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';

// Category filter options shown in the select dropdown.
// Extend this list to add new filters.
const FILTER_OPTIONS = [
  { value: 'all', label: 'Tous les projets' },
  { value: 'annee1', label: 'annee1' },
  { value: '2ème année', label: '2ème année' },
  { value: 'Java', label: 'Java' },
  { value: 'C#', label: 'C#' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Python', label: 'Python' },
  { value: 'HTML / CSS', label: 'HTML / CSS' },
  { value: 'Arduino', label: 'Arduino' },
];

export default function ProjectsSection() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  // Filter projects based on search text (title, description, tags) and category tag
  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    const cat = category.toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesCategory =
        cat === 'all' ||
        project.tags.some((tag) => tag.toLowerCase() === cat);

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  // Group filtered projects by their `category` field (iut / hackathon / personnel)
  const groupedProjects = useMemo(() => {
    const groups = {};
    Object.keys(CATEGORIES).forEach((key) => {
      groups[key] = filteredProjects.filter((project) => project.category === key);
    });
    return groups;
  }, [filteredProjects]);

  return (
    <section id="projets" className="bg-surface-bg py-16">
      <h2 className="section-title">Mes projets</h2>

      <FilterBar
        projects={PROJECTS}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={FILTER_OPTIONS}
      />

      {filteredProjects.length === 0 ? (
        <p className="mt-12 text-center text-neutral-500">
          Aucun projet ne correspond à ta recherche.
        </p>
      ) : (
        Object.entries(CATEGORIES).map(([key, label]) => {
          const items = groupedProjects[key];
          if (!items || items.length === 0) return null;

          return (
            <div key={key} className="mb-14">
              <h3 className="mb-8 text-center text-xl font-semibold text-navy">
                {label}
              </h3>
              <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 px-4">
                {items.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          );
        })
      )}
    </section>
  );
}
