// 1. Déclarez une fonction lancerDe qui reçoit un nombre de faces et renvoie un entier au hasard entre 1 et ce nombre. Testez-la 1000 fois avec 6 faces, rangez les résultats dans un tableau, puis affichez le plus petit et le plus grand résultat.
function lancerDe(n) {
    return Math.floor(Math.random() * n) + 1;
}

const resultats = [];

for(let i = 0; i < 1000; i++) {
    resultats.push(lancerDe(6));
}

console.log(Math.min(...resultats))
console.log(Math.max(...resultats))

// 2. Déclarez une fonction entierAuHasard qui reçoit un min et un max et renvoie un entier au hasard entre les deux (inclus). Testez-la 1000 fois avec (10, 20) et affichez le plus petit et le plus grand résultat.
function entierAuHasard(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const resultatsEntierHasard = [];

for(let i = 0; i < 1000; i++) {
    resultatsEntierHasard.push(entierAuHasard(10, 20));
}

console.log(Math.min(...resultatsEntierHasard))
console.log(Math.max(...resultatsEntierHasard))

// 3. Déclarez une fonction elementAuHasard qui reçoit un tableau et renvoie un de ses éléments au hasard. Testez avec ["pierre", "feuille", "ciseaux"].
function elementAuHasard(tableau = ["pierre", "feuille", "ciseaux"]) {
    return tableau[Math.floor(Math.random() * tableau.length)]
}

console.log(elementAuHasard(["pierre", "feuille", "ciseaux"]));

// 4. Pierre, feuille, ciseaux.

// - Déclarez une fonction arbitrer qui reçoit le choix du joueur et celui de l'ordinateur, et renvoie "Égalité", "Gagné" ou "Perdu". Pierre bat ciseaux, feuille bat pierre, ciseaux bat feuille.
function arbitrer(human, bot) {
    // Victoire
    if(
        (human === "feuille" && bot === "pierre") ||
        (human === "ciseaux" && bot === "feuille") ||
        (human === "pierre" && bot === "ciseaux")
    ) {
        return "Gagné";
    }

    // Défaite
    if(
        (bot === "feuille" && human === "pierre") ||
        (bot === "ciseaux" && human === "feuille") ||
        (bot === "pierre" && human === "ciseaux")
    ) {
        return "Perdu";
    }

    // Égalité
    return "Égalité";
}
// - Testez avec ("pierre", "ciseaux"), ("pierre", "feuille"), ("feuille", "feuille") et ("ciseaux", "feuille").

console.log(arbitrer("pierre", "ciseaux"))
console.log(arbitrer("pierre", "feuille"))
console.log(arbitrer("feuille", "feuille"))
console.log(arbitrer("ciseaux", "feuille"))

// - Déclarez enfin une fonction jouer qui reçoit le choix du joueur, tire le choix de l'ordinateur avec elementAuHasard et affiche par exemple Vous : pierre | Ordinateur : ciseaux → Gagné.
function jouer(choixJoueur) {
    // Récupère le choix de l'ordinateur
    const choixBot = elementAuHasard();

    // Arbitrage
    const arbitrage = arbitrer(choixJoueur, choixBot)

    // Affichage du résultat
    alert(`
        Vous: ${choixJoueur}
        Ordinateur: ${choixBot}
        Résultat: ${arbitrage}
    `);
}

const choixJoueur = prompt("Quel est votre choix ?");
jouer(choixJoueur);