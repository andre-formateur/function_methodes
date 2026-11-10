const phrase = "Le chat dort sur le canapé, le chat rêve";

// 1. Affichez : si la phrase contient "chat", la position de la première occurrence de "chat", la position de "chien", si elle commence par "Le", et si elle se termine par "rêve".
console.log( phrase.includes("chat") )
console.log( phrase.indexOf("chat") )
console.log( phrase.indexOf("chien") )
console.log( phrase.startsWith("Le") )
console.log( phrase.endsWith("rêve") )


// 2. Affichez la phrase avec "chat" remplacé par "chien", d'abord avec replace, puis avec replaceAll. Quelle différence ?
console.log(phrase.replace("chat", "chien"))
console.log(phrase.replaceAll("chat", "chien"))

// 3. Découpez la phrase en mots avec split(" "). Affichez le tableau, puis le nombre de mots.
const splitPhrase = phrase.split(" ");

console.log(splitPhrase)
console.log(splitPhrase.length)

// 4. Affichez les 10 premiers caractères de la phrase, puis le mot "chat" (en utilisant slice avec deux positions).
console.log(phrase.slice(0, 10))
console.log(phrase.slice(3, 7))

// 5. Déclarez une fonction slugifier qui transforme un titre en adresse web : espaces supprimés autour, minuscules, espaces remplacés par des tirets. Testez avec "  Mon Premier Article  ".
// "  Mon Premier Article  " => mon-premier-article
function slugifier(titre) {
    return titre.trim().toLowerCase().split(" ").join("-");
}

console.log(slugifier("  Mon Premier Article  "))