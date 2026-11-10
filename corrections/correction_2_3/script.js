const texte = "   Bonjour le Monde   ";

// 1. Affichez le texte sans espaces autour (trim), en majuscules et en minuscules. Affichez aussi la longueur du texte d'origine, puis celle du texte sans espaces.
console.log(texte.trim())
console.log(texte.toUpperCase())
console.log(texte.toLowerCase())
console.log(texte.length)
console.log(texte.trim().length)

// 2. Déclarez une fonction nettoyerEmail qui reçoit une adresse mail, supprime les espaces autour et la met en minuscules. Testez avec "  Alice@Mail.COM ".
const mail = "  Alice@Mail.COM ";

function nettoyerEmail(mail) {
    return mail.trim().toLowerCase();
}

console.log(nettoyerEmail(mail));

// 3. Déclarez une fonction mettreMajuscule qui reçoit un mot et le renvoie avec la première lettre en majuscule et le reste en minuscules. Testez avec "jAVAscript" et "alice".
function mettreMajuscule(mot) {
    const premierMot = mot.slice(0, 1).toUpperCase();
    const suiteMot = mot.slice(1, mot.length).toLowerCase()

    return premierMot + suiteMot;
}

console.log(mettreMajuscule("jAVAscript"))
console.log(mettreMajuscule("alice"))

// 4. Écrivez texte.toUpperCase(); seul sur une ligne, puis affichez texte. Que remarquez-vous ?
texte.toUpperCase();
console.log(texte);