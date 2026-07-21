{/*
<section>
    <article>
        <h2>Qui-suis-je ?</h2>
    </article>
    <article>
        <div>
            <img src="images/portfolio/langageProgrammation.jpg" alt="photo de codage">
        </div>
        <div class="texte">
            <p>Etudiante en <span>IUT informatique</span> à Bordeaux, actuellement en 2ème année.</p>
            <p>Je souhaite mettre mes compétences en informatique au services des causes qui ont du sens pour moi : <span>la
                santé</span>, l'<span>ESS</span> (l'économie sociale et solidaire),
                l'<span>humanitaire</span> ou bien l'<span>écologie / environnement</span>.</p>
            <p>Vous trouverez dans ce portfolio un aperçu de mes projets réalisés ainsi que mes compétences techniques.
            </p>

            <a href="pdf/CV_AnaeeHERBILLON.pdf" download="CV_AnaeeHERBILLON.pdf" target="_blank" id="CV">Télécharger mon CV</a>
        </div>
    </article>
</section> 
*/}

import { asset } from '../utils/asset';

function Highlight({ children }) {
    return <span className="font-semibold text-navy-soft">{children}</span>;
}

export default function About() {
    return (
        <section className="px-4 py-16">
            <h2 className="section-title">Qui suis-je ?</h2>

            <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
                <div className="w-full md:w-1/2">
                    <img
                        src={asset('/images/portfolio/langageProgrammation.jpg')}
                        alt="Illustration de langages de programmation"
                        className="w-full rounded-3xl object-cover shadow-card"
                    />
                </div>

                <div className="w-full text-justify md:w-1/2">
                    <p className="mb-4">
                        Étudiante en <Highlight>IUT informatique</Highlight> à Bordeaux, actuellement en 2ème année.
                    </p>
                    <p className="mb-4">
                        Je souhaite mettre mes compétences en informatique au service des causes qui ont
                        du sens pour moi : <Highlight>la santé</Highlight>, <Highlight>l'ESS</Highlight>{' '}
                        (l'économie sociale et solidaire), <Highlight>l'humanitaire</Highlight> ou bien{' '}
                        <Highlight>l'écologie / environnement</Highlight>.
                    </p>
                    <p className="mb-6">
                        Vous trouverez dans ce portfolio un aperçu de mes projets réalisés ainsi que mes
                        compétences techniques.
                    </p>

                    <a
                        href={asset('/pdf/CV_AnaeeHERBILLON.pdf')}
                        download="CV_AnaeeHERBILLON.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </section>
    );
}
