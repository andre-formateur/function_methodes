// 1. Déclarez une fonction compterVoyelles qui reçoit un texte et renvoie le nombre de voyelles (a, e, i, o, u). Indice : mettez le texte en minuscules, découpez-le lettre par lettre avec split(""), puis filtrez. Testez avec "Bonjour", "JavaScript" et "Programmation".
function compterVoyelles(texte) {
    // mettez le texte en minuscules, découpez-le lettre par lettre avec split(""), puis filtrez.
    return texte.toLowerCase().split("").filter(letter => ["a", "e", "i", "o", "u"].includes(letter)).length
}

console.log(compterVoyelles("Bonjour"));
console.log(compterVoyelles("JavaScript"));
console.log(compterVoyelles("Programmation"));

// 2. Déclarez une fonction acronyme qui reçoit une phrase et renvoie les initiales de chaque mot, en majuscules. Testez avec "cascading style sheets" et "hyper text markup language".
function acronyme (phrase) {
    return phrase.toUpperCase().split(" ").map(word => word.slice(0, 1)).join("");
}

console.log(acronyme("cascading style sheets"))
console.log(acronyme("hyper text markup language"))

// 3. Déclarez une fonction titreCase qui met la première lettre de chaque mot en majuscule (réutilisez mettreMajuscule de l'exercice 2.3). Testez avec "le seigneur des anneaux" et "HARRY potter".

function mettreMajuscule(mot) {
    const premierMot = mot.slice(0, 1).toUpperCase();
    const suiteMot = mot.slice(1, mot.length).toLowerCase()

    return premierMot + suiteMot;
}

function titreCase(titre) {
    // On crée le tableau
    const words = titre.split(" ")

    // On crée une variable qui contiendra tous les mots dans un tableau (au début vide)
    let phrase = []

    // On crée une boucle dans laquelle pour chaque mot on appelle la fonction mettreMajuscule()
    words.forEach(word => phrase.push(mettreMajuscule(word)))

    // On retournera la chaine de caractère demandée
    return phrase.join(" ");
}

console.log(titreCase("le seigneur des anneaux"))
console.log(titreCase("HARRY potter"))

// 4. Déclarez une fonction masquerEmail qui masque une adresse mail : on garde la première lettre, puis ***, puis la partie après le @. Testez avec "alice@mail.com" et "bob.durand@gmail.com".
function masquerEmail(email) {

    // On garde la premiere lettre
    const firstLetter = email.slice(0, 1);

    // On conserve ce qu'il y a après le @
    const domain = email.split("@")[1];

    // On assemble le mail
    const hiddenMail = firstLetter + "***@" + domain;

    // On le retourne
    return hiddenMail;

}

console.log(masquerEmail("alice@mail.com"))
console.log(masquerEmail("bob.durand@gmail.com"))