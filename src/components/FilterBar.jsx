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
      className="relative mx-auto my-10 flex max-w-3xl flex-wrap items-center justify-center gap-3 px-4"
    >
      {/* Search input with autocomplete */}
      <div className="relative w-full md:flex-1">
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
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-base transition-colors focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          autoComplete="off"
        />

        {showSuggestions && suggestions.length > 0 && (
          <ul
            role="listbox"
            className="absolute left-0 right-0 top-full z-20 mt-1 max-h-72 overflow-y-auto rounded-lg border border-neutral-300 bg-white shadow-lg"
          >
            {suggestions.map((tag) => (
              <li
                key={tag}
                role="option"
                aria-selected="false"
                className="cursor-pointer px-4 py-2 transition-colors hover:bg-neutral-100"
                onClick={() => handleSuggestionClick(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Category select */}
      <div className="w-full md:w-auto">
        <label htmlFor="filter-category" className="sr-only">
          Filtrer par catégorie
        </label>
        <select
          id="filter-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-base transition-colors focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy md:w-auto"
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
