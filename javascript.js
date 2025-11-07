// js/filtre.js

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("filtre-input");
    const select = document.getElementById("filtre-select");
    const suggestions = document.getElementById("suggestions");
    const projets = document.querySelectorAll(".texte");

    const tousLesTags = new Set();
    projets.forEach(projet => {
        projet.querySelectorAll(".tags span").forEach(tag => {
            tousLesTags.add(tag.textContent.trim());
        });
    });
    const tagsArray = Array.from(tousLesTags);

    function filtrer() {
        const recherche = input.value.trim().toLowerCase();
        const filtreSelect = select.value.toLowerCase();

        projets.forEach(projet => {
            const titre = projet.querySelector("h3")?.textContent.toLowerCase() || "";
            const description = projet.querySelector("p")?.textContent.toLowerCase() || "";
            const tags = Array.from(projet.querySelectorAll(".tags span"))
                .map(span => span.textContent.toLowerCase());

            const correspondRecherche =
                recherche === "" ||
                tags.some(tag => tag.includes(recherche)) ||
                titre.includes(recherche) ||
                description.includes(recherche);

            const correspondSelect =
                filtreSelect === "all" ||
                tags.includes(filtreSelect);

            projet.style.display = (correspondRecherche && correspondSelect) ? "block" : "none";
        });
    }

    function afficherSuggestions(valeur) {
        suggestions.innerHTML = "";
        if (valeur.trim() === "") return;

        const resultat = tagsArray.filter(tag =>
            tag.toLowerCase().includes(valeur.toLowerCase())
        );

        resultat.forEach(tag => {
            const div = document.createElement("div");
            div.classList.add("suggestion-item");
            div.textContent = tag;
            div.addEventListener("click", () => {
                input.value = tag;
                suggestions.innerHTML = "";
                filtrer();
            });
            suggestions.appendChild(div);
        });
    }

    input.addEventListener("input", () => {
        afficherSuggestions(input.value);
        filtrer();
    });

    select.addEventListener("change", filtrer);

    document.addEventListener("click", (e) => {
        if (!suggestions.contains(e.target) && e.target !== input) {
            suggestions.innerHTML = "";
        }
    });


    
    const fond = document.getElementById('gris');
    window.ouvrir = (id) => {
        fond.style.display = "block";
        document.body.classList.add("no-scroll"); // Bloque le scroll du fond

        const image = fond.querySelector('img');
        const bouton = fond.querySelector('button a');

        image.setAttribute('src', `images/retExp/${id}.png`);
        image.setAttribute('alt', `retour d'expérience de ${id}`);
        bouton.setAttribute('href', `pdf/${id}.pdf`);

        // Fermeture en cliquant sur le fond noir
        fond.addEventListener('click', (e) => {
            if (e.target === fond) {
                fond.style.display = "none";
                document.body.classList.remove("no-scroll");
                image.setAttribute('src', "");
                bouton.setAttribute('href', "");
            }
        }, { once: true });
    };
});
