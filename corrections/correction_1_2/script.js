// Déclarez une fonction doubler qui reçoit un nombre et renvoie son double. Affichez doubler(21).
function doubler (n) {
    return n * 2;
}

console.log(doubler(21))

// Rangez le résultat de doubler(5) dans une constante resultat, puis affichez resultat + 1.
const resultat = doubler(5) + 1;

console.log(resultat)

// Déclarez une fonction calculerTTC qui reçoit un prix hors taxes et renvoie le prix TTC (TVA à 20 %, soit prix * 1.2). Affichez calculerTTC(100) et calculerTTC(50).
function calculerTTC(prix) {
    return prix * 1.2;
}

console.log(calculerTTC(100));
console.log(calculerTTC(50));


// Déclarez une fonction estMajeur qui reçoit un age et renvoie true ou false. Testez avec 17, 18 et 30.
function estMajeur (age) {
    return age < 18;
}

console.log(estMajeur(17))
console.log(estMajeur(18))
console.log(estMajeur(30))


// Trouvez l'erreur. Voici une fonction :


function triple(n) {
    console.log(n * 3);
    return n * 3;
}

const t = triple(4);
console.log(t);


// Qu'affiche ce code ? Pourquoi t ne contient-il pas 12 ? Corrigez la fonction pour que t vaille 12.