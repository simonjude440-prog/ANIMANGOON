// ======================================
// CATALOGUE ANIMANGOON +18
// ======================================

const adultBD = [

    {
        titre: "Midnight Poppy Land",
        categorie: "Romance adulte",
        description: "Une romance mêlant mystère, secrets et relations compliquées.",
        couleur: "purple",
        lien: "https://www.webtoons.com/en/romance/midnight-poppy-land/list?title_no=1798"
    },

    {
        titre: "The Newlywed Diary of a Witch and a Dragon",
        categorie: "Romance",
        description: "Une histoire romantique dans un univers fantastique.",
        couleur: "blue",
        lien: "https://www.webtoons.com/en/romance/the-newlywed-diary-of-a-witch-and-a-dragon/list?title_no=4135"
    },

    {
        titre: "The Kiss Bet",
        categorie: "Romance et drame",
        description: "Une histoire d'amour, de choix et de relations.",
        couleur: "orange",
        lien: "https://www.webtoons.com/en/romance/the-kiss-bet/list?title_no=1617"
    }

];

// ======================================
// AFFICHAGE DU CATALOGUE
// ======================================

const adultGrid = document.getElementById("adultGrid");

function afficherAdultBD() {

    if (!adultGrid) return;

    adultGrid.innerHTML = "";

    adultBD.forEach(bd => {

        const card = document.createElement("div");
        card.className = "bd-card";

        const cover = document.createElement("div");
        cover.className = "bd-cover " + bd.couleur;
        cover.textContent = bd.titre;

        const info = document.createElement("div");
        info.className = "bd-info";

        const title = document.createElement("h3");
        title.textContent = bd.titre;

        const description = document.createElement("p");
        description.textContent = bd.description;

        const category = document.createElement("span");
        category.className = "tag";
        category.textContent = bd.categorie;

        const button = document.createElement("a");
        button.href = bd.lien;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
        button.className = "btn lire-btn";
        button.textContent = "📖 Lire maintenant";

        info.append(title, description, category, button);

        card.append(cover, info);

        adultGrid.appendChild(card);

    });

}

afficherAdultBD();