// 1. Déclarez une fonction lancerDe qui reçoit un nombre de faces et renvoie un entier au hasard entre 1 et ce nombre. Testez-la 1000 fois avec 6 faces, rangez les résultats dans un tableau, puis affichez le plus petit et le plus grand résultat.
function lancerDe(nFace) {
    // On va avoir besoin de :
    // Math.random()
    // Math.floor()

    return Math.floor(Math.random() * nFace) + 1;
}

const resultats = [];

for(let i = 0; i < 1000; i++) {
    resultats.push(lancerDe(6));
}

console.log("Plus petit résultat :", Math.min(...resultats))
console.log("Plus grand résultat :", Math.max(...resultats))

// 2. Déclarez une fonction entierAuHasard qui reçoit un min et un max et renvoie un entier au hasard entre les deux (inclus). Testez-la 1000 fois avec (10, 20) et affichez le plus petit et le plus grand résultat.
function entierAuHasard(min, max) {
    return Math.floor(Math.random() * ((max - min))+1) + min;
}

const resultatsMinMax = [];

for(let i = 0; i < 1000; i++) {
    resultatsMinMax.push(entierAuHasard(10, 20));
}

console.log("Plus petit résultat :", Math.min(...resultatsMinMax))
console.log("Plus grand résultat :", Math.max(...resultatsMinMax))


// 3. Déclarez une fonction elementAuHasard qui reçoit un tableau et renvoie un de ses éléments au hasard. Testez avec ["pierre", "feuille", "ciseaux"].

// 4. Pierre, feuille, ciseaux.

// - Déclarez une fonction arbitrer qui reçoit le choix du joueur et celui de l'ordinateur, et renvoie "Égalité", "Gagné" ou "Perdu". Pierre bat ciseaux, feuille bat pierre, ciseaux bat feuille.

// - Testez avec ("pierre", "ciseaux"), ("pierre", "feuille"), ("feuille", "feuille") et ("ciseaux", "feuille").

// - Déclarez enfin une fonction jouer qui reçoit le choix du joueur, tire le choix de l'ordinateur avec elementAuHasard et affiche par exemple Vous : pierre | Ordinateur : ciseaux → Gagné.