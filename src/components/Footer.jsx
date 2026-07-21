{/* 
<footer role="contentinfo">
    <div class="footer-content">

        <section>
            <h3>Suivez-moi &emsp;&emsp;- - - - - -</h3>
            <a href="https://www.linkedin.com/in/anaee-herbillon/" target="_blank"><img
                src="images/logos/linkedin.png" alt="logo de linkedin"></a>
        </section>
        <section>
            <div>
                <h3>Contactez-moi &emsp;&emsp;- - - </h3>
                <p>M'écrire par mail : </p>
                <span><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=a.herbillon33@gmail.com"
                    target="_blank">a.herbillon33@gmail.com</a></span>
            </div>
        </section>
    </div>
    <div class="footer-credit">
        <p> <a href="https://www.linkedin.com/in/anaee-herbillon/">Copyright © HERBILLON Anaée - Portfolio 2025</a>
        </p>
    </div>
</footer> 
*/}

const EMAIL = 'a.herbillon33@gmail.com';
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${EMAIL}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/anaee-herbillon/';

export default function Footer() {
    return (
        <footer role="contentinfo" className="mt-20 bg-neutral-300">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-10 md:flex-row md:justify-around md:items-start">
                <section className="text-center">
                    <h3 className="mb-4 text-lg font-semibold">Suivez-moi</h3>
                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transition-transform hover:scale-110"
                        aria-label="Profil LinkedIn"
                    >
                        <img
                            src="./images/logos/linkedin.png"
                            alt="Logo LinkedIn"
                            className="w-10"
                        />
                    </a>
                </section>

                <section className="text-center">
                    <h3 className="mb-4 text-lg font-semibold">Contactez-moi</h3>
                    <p className="mb-1">M'écrire par mail :</p>
                    <a
                        href={GMAIL_COMPOSE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-navy transition-colors hover:underline"
                    >
                        {EMAIL}
                    </a>
                </section>
            </div>

            <div className="border-t border-neutral-400/40 py-3 text-center text-sm">
                <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-navy"
                >
                    Copyright © HERBILLON Anaée — Portfolio 2025
                </a>
            </div>
        </footer>
    );
}
