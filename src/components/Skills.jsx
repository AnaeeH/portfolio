import { SKILLS_TECH, SKILLS_OTHER } from '../data/skills';
import { asset } from '../utils/asset';

export default function Skills() {
  return (
    <section id="competences" className="px-4 py-16">
      <h2 className="section-title">Mes compétences</h2>

      <h3 className="mb-8 text-center text-xl font-semibold text-navy">
        Compétences informatiques
      </h3>

      <div className="mx-auto mb-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS_TECH.map((block) => (
          <article
            key={block.title}
            className="flex flex-col rounded-lg bg-surface-block p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <p className="mb-3 text-lg font-semibold text-navy">{block.title}</p>
            <ul className="list-disc space-y-1 pl-5 text-neutral-800">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="cursor-default rounded px-1 transition-transform duration-200 hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="mb-8 text-center text-xl font-semibold text-navy">
        Autres compétences
      </h3>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={asset('/images/portfolio/langageProgrammation.jpg')}
            alt="Illustration compétences"
            className="w-full rounded-3xl object-cover shadow-card"
          />
        </div>
        <div className="w-full md:w-1/2">
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
