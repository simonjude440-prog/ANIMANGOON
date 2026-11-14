// ======================================
// BASE DE DONNÉES ANIMANGOON
// ======================================

const bdList = [

    // MANGAS
    {
        titre: "One Piece",
        categorie: "Manga",
        genres: ["Aventure", "Action", "Humour"],
        description: "Luffy et son équipage partent à la recherche du légendaire One Piece.",
        couleur: "purple",
        lien: "https://mangaplus.shueisha.co.jp/titles/100020"
    },

    {
        titre: "Spy x Family",
        categorie: "Manga",
        genres: ["Action", "Comédie"],
        description: "Un espion doit former une fausse famille pour accomplir sa mission.",
        couleur: "blue",
        lien: "https://mangaplus.shueisha.co.jp/web_pages/260/"
    },

    {
        titre: "My Hero Academia",
        categorie: "Manga",
        genres: ["Action", "Aventure"],
        description: "Dans un monde de super-pouvoirs, un jeune garçon rêve de devenir héros.",
        couleur: "green",
        lien: "https://mangaplus.shueisha.co.jp/web_pages/310/"
    },

    // ROMANCE
    {
        titre: "Lore Olympus",
        categorie: "Comics",
        genres: ["Romance", "Drame", "Fantastique"],
        description: "Une histoire d'amour inspirée de la mythologie grecque.",
        couleur: "purple",
        lien: "https://www.webtoons.com/en/romance/lore-olympus/list?title_no=1320"
    },

    // DRAME
    {
        titre: "I Love Yoo",
        categorie: "Comics",
        genres: ["Drame", "Romance"],
        description: "Une jeune fille voit sa vie bouleversée par des rencontres inattendues.",
        couleur: "blue",
        lien: "https://www.webtoons.com/en/drama/i-love-yoo/list?title_no=986"
    },

    // HUMOUR
    {
        titre: "Safely Endangered",
        categorie: "Comics",
        genres: ["Humour", "Blague", "Comédie"],
        description: "Des petites histoires absurdes et amusantes.",
        couleur: "orange",
        lien: "https://www.webtoons.com/en/comedy/safely-endangered/list?title_no=352"
    },

    {
        titre: "Cursed Princess Club",
        categorie: "Comics",
        genres: ["Humour", "Comédie", "Aventure"],
        description: "Une princesse découvre un club pas comme les autres.",
        couleur: "purple",
        lien: "https://www.webtoons.com/fr/comedy/cursed-princess-club/list?title_no=1886"
    },

    // AVENTURE ET FANTASTIQUE
    {
        titre: "The Greatest Estate Developer",
        categorie: "Comics",
        genres: ["Aventure", "Fantastique", "Humour"],
        description: "Un étudiant se retrouve dans un monde fantastique et doit sauver une famille ruinée.",
        couleur: "green",
        lien: "https://www.webtoons.com/en/fantasy/the-greatest-estate-developer/list?title_no=3596"
    },

    // BD AFRICAINES
    {
        titre: "Wubu Moyo",
        categorie: "BD africaine",
        genres: ["Drame", "Éducation"],
        description: "L'histoire d'une jeune femme confrontée aux idées reçues sur la santé.",
        couleur: "orange",
        lien: "https://comics.africa/index_en.php"
    },

    {
        titre: "Threads",
        categorie: "BD africaine",
        genres: ["Drame", "Mystère"],
        description: "Un événement inattendu bouleverse une fête de mariage en Éthiopie.",
        couleur: "purple",
        lien: "https://comics.africa/index_en.php"
    },

    {
        titre: "Wegene",
        categorie: "BD africaine",
        genres: ["Mystère", "Aventure"],
        description: "Trois adolescents découvrent un étrange événement dans leur village.",
        couleur: "blue",
        lien: "https://comics.africa/index_en.php"
    },

    {
        titre: "Dreams of an Underdog",
        categorie: "BD africaine",
        genres: ["Sport", "Drame", "Aventure"],
        description: "Un jeune garçon rêve de devenir basketteur professionnel.",
        couleur: "green",
        lien: "https://comics.africa/index_en.php"
    }

];


// ======================================
// GESTION DU CATALOGUE
// ======================================

const container = document.getElementById("bd-container");
const searchInput = document.getElementById("search");
const categoriesContainer = document.querySelector(".categories");

let categorieActive = "Tous";


// Création automatique des filtres

const filtres = [
    "Tous",
    "Manga",
    "Comics",
    "BD africaine",
    "Romance",
    "Drame",
    "Humour",
    "Comédie",
    "Blague",
    "Action",
    "Aventure",
    "Fantastique",
    "Mystère",
    "Sport",
    "Éducation"
];

if (categoriesContainer) {

    categoriesContainer.innerHTML = "";

    filtres.forEach(filtre => {

        const bouton = document.createElement("button");

        bouton.textContent = filtre;
        bouton.dataset.category = filtre;

        if (filtre === "Tous") {
            bouton.classList.add("active");
        }

        bouton.addEventListener("click", () => {

            categorieActive = filtre;

            categoriesContainer
                .querySelectorAll("button")
                .forEach(btn => btn.classList.remove("active"));

            bouton.classList.add("active");

            afficherBD();

        });

        categoriesContainer.appendChild(bouton);

    });

}


// ======================================
// AFFICHAGE DES BD
// ======================================

function afficherBD() {

    if (!container) return;

    const recherche = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const resultats = bdList.filter(bd => {

        const correspondCategorie =
            categorieActive === "Tous" ||
            bd.categorie === categorieActive ||
            bd.genres.includes(categorieActive);

        const texteRecherche = (
            bd.titre + " " +
            bd.description + " " +
            bd.categorie + " " +
            bd.genres.join(" ")
        ).toLowerCase();

        const correspondRecherche =
            texteRecherche.includes(recherche);

        return correspondCategorie && correspondRecherche;

    });

    container.innerHTML = "";

    if (resultats.length === 0) {

        container.innerHTML = "<p>Aucune BD trouvée.</p>";

        return;
    }

    resultats.forEach(bd => {

        const carte = document.createElement("div");
        carte.className = "bd-card";

        // Couverture

        const couverture = document.createElement("div");

        couverture.className = "bd-cover " + bd.couleur;
        couverture.textContent = bd.titre;

        // Informations

        const informations = document.createElement("div");
        informations.className = "bd-info";

        const titre = document.createElement("h3");
        titre.textContent = bd.titre;

        const description = document.createElement("p");
        description.textContent = bd.description;

        const categorie = document.createElement("span");
        categorie.className = "tag";
        categorie.textContent = bd.categorie;

        const genres = document.createElement("p");
        genres.className = "bd-genres";
        genres.textContent = bd.genres.join(" • ");

        // Bouton de lecture

        const boutonLire = document.createElement("a");

        boutonLire.href = bd.lien;
        boutonLire.target = "_blank";
        boutonLire.rel = "noopener noreferrer";
        boutonLire.className = "btn lire-btn";
        boutonLire.textContent = "📖 Lire maintenant";

        // Assemblage

        informations.append(
            titre,
            description,
            categorie,
            genres,
            boutonLire
        );

        carte.append(couverture, informations);

        container.appendChild(carte);

    });

}


// ======================================
// RECHERCHE
// ======================================

if (searchInput) {

    searchInput.addEventListener("input", afficherBD);

}


// ======================================
// LANCEMENT
// ======================================

afficherBD();