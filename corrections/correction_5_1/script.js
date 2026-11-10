// 1. Sans exécuter le code, indiquez si chaque valeur est truthy ou falsy


const valeurs = [0, 1, "", "0", " ", [], null, undefined, NaN];

valeurs.forEach((valeur, i) => {
    if (valeur) {
        console.log(`valeur n°${i} : truthy`);
    } else {
        console.log(`valeur n°${i} : falsy`);
    }
});


// 2. Affichez : !0, !"abc", !null, !true, !1.
console.log(!0)
console.log(!"abc")
console.log(!null)
console.log(!true)
console.log(!1)

// 3. Déclarez une fonction accueillir qui reçoit un prénom et renvoie Bonjour Alice. Si le prénom est absent ou vide, elle renvoie Bonjour inconnu. Utilisez ||. Testez avec "Alice", undefined et "".
function accueillir(prenom = "inconnu") {

    prenom = prenom || "inconnu"

    return `Bonjour ${prenom}.`;
}

console.log(accueillir("Alice"))
console.log(accueillir(undefined))
console.log(accueillir(""))
// BONUS
console.log(accueillir())

// 4. Déclarez une fonction choisirAge qui reçoit un âge et renvoie cet âge, ou 18 si l'âge est absent. Testez avec 25, undefined et 0. Que se passe-t-il avec 0 ? Pourquoi ?
function choisirAge(age = 18) {
    return age;
}

console.log(choisirAge(25))
console.log(choisirAge(undefined))
console.log(choisirAge(0))
console.log(choisirAge())

// 5. Déclarez une fonction estVide qui renvoie true si un texte est vide ou ne contient que des espaces (utilisez ! et trim). Testez avec "", "   " et "abc".
function estVide(texte) {
    
    // Est vide
    if(!texte.trim().length) {
        return true;
    }

    // N'est pas vide
    return false;

}

console.log(estVide(""))
console.log(estVide("   "))
console.log(estVide("abc"))