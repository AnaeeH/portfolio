import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * FilterBar — reusable search + category filter.
 *
 * Props:
 *  - projects: full list of projects (used to build tag suggestions)
 *  - search / setSearch: controlled search input state
 *  - category / setCategory: controlled category select state
 *  - categories: array of { value, label } for the select options
 */
export default function FilterBar({
  projects,
  search,
  setSearch,
  category,
  setCategory,
  categories,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  // Build the sorted, deduplicated list of all tags across all projects
  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((project) => project.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'fr'));
  }, [projects]);

  // Compute autocomplete suggestions matching the current search input
  const suggestions = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return [];
    return allTags.filter((tag) => tag.toLowerCase().includes(query));
  }, [search, allTags]);

  // Close the suggestions dropdown when clicking outside the container
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (tag) => {
    setSearch(tag);
    setShowSuggestions(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mb-12 flex max-w-3xl flex-col gap-3 sm:flex-row"
    >
      {/* Search input with autocomplete */}
      <div className="relative flex-1">
        <label htmlFor="filter-search" className="sr-only">
          Rechercher un projet
        </label>
        <input
          id="filter-search"
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Rechercher un tag ou un mot-clé…"
          className="w-full rounded-2xl bg-surface-block px-5 py-3 text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-navy/30"
          autoComplete="off"
        />

        {showSuggestions && suggestions.length > 0 && (
          <ul
            role="listbox"
            className="absolute left-0 right-0 top-full z-20 mt-2 max-h-72 overflow-y-auto rounded-2xl bg-white py-2 shadow-lg ring-1 ring-navy/10"
          >
            {suggestions.map((tag) => (
              <li
                key={tag}
                role="option"
                aria-selected="false"
                className="cursor-pointer px-5 py-2 text-neutral-800 transition-colors hover:bg-surface-block"
                onClick={() => handleSuggestionClick(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Category select */}
      <div className="sm:w-auto">
        <label htmlFor="filter-category" className="sr-only">
          Filtrer par catégorie
        </label>
        <select
          id="filter-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full cursor-pointer appearance-none rounded-2xl bg-surface-block px-5 py-3 pr-10 text-base text-neutral-800 focus:outline-none focus:ring-2 focus:ring-navy/30 sm:w-auto"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232f3e5e' stroke-width='2'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3e%3c/svg%3e\")",
            backgroundPosition: 'right 0.75rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.25rem',
          }}
        >
          {categories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
