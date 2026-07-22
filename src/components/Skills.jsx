import { SKILLS_TECH, SKILLS_OTHER } from '../data/skills';
import { asset } from '../utils/asset';

export default function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="section-title">Mes compétences</h2>

      <h3 className="mb-8 text-xl text-center font-medium uppercase tracking-wide text-navy-soft">
        Compétences informatiques
      </h3>

      <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS_TECH.map((block) => (
          <article
            key={block.title}
            className="flex flex-col rounded-2xl bg-surface-block p-6 transition-all duration-200 hover:-translate-y-1"
          >
            <p className="mb-3 text-xl font-semibold text-navy">{block.title}</p>
            <ul className="list-disc space-y-2 pl-5 leading-tight text-neutral-800">
              {block.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded px-1 leading-tight transition-transform duration-200 hover:translate-x-1"
                >
                  {item.url ? (
                    <a href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-navy hover:underline"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span>{item.name}</span>
                  )}
                  {item.description && (
                    <div className="mt-0 text-sm italic leading-tight text-neutral-500">
                      {item.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="mb-8 text-xl text-center font-medium uppercase tracking-wide text-navy-soft">
        Autres compétences
      </h3>

      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="w-full md:w-2/5">
          <img
            src={asset('/images/portfolio/langageProgrammation.jpg')}
            alt="Illustration compétences"
            className="w-full rounded-2xl object-cover"
          />
        </div>
        <div className="w-full md:w-3/5">
          <ul className="list-disc space-y-2 pl-6 text-lg text-neutral-800">
            {SKILLS_OTHER.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
