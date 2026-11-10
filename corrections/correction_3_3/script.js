// 1. Soit const prix = 19.5;. Affichez prix.toFixed(2), puis son type avec typeof. Affichez ensuite prix.toFixed(2) + 1, puis Number(prix.toFixed(2)) + 1. Expliquez la différence.
console.log("=== 1 ===")
const prix = 19.5;
console.log(prix.toFixed(2))
console.log(typeof prix.toFixed(2))

console.log(prix.toFixed(2) + 1)
console.log(Number(prix.toFixed(2)) + 1)

// 2. Affichez Number("42"), Number("3.14"), Number("12px"), Number("") et Number("abc").
console.log("\n=== 2 ===")
console.log(Number("42"));
console.log(Number("3.14"));
console.log(Number("12px"));
console.log(Number(""));
console.log(Number("abc"));

// 3. Affichez : isNaN(Number("abc")), Number.isInteger(4.0), Number.isInteger(4.5), isFinite(10 / 0) et 10 / 0.
console.log("\n=== 3 ===")
console.log(isNaN(Number("abc")))
console.log(Number.isInteger(4.0))
console.log(Number.isInteger(4.5))
console.log(isFinite(10 / 0))
console.log(10 / 0)

// 4. Déclarez une fonction lireNombre qui reçoit un texte et renvoie le nombre correspondant, ou null si le texte n'est pas un nombre. Testez avec "12", "abc", "7.5" et "". Que renvoie votre fonction pour "" ? C'est un piège : corrigez-la pour qu'elle renvoie aussi null quand le texte est vide.
console.log("\n=== 4 ===")
function lireNombre(texte) {
    
    const n = Number(texte);

    if(isNaN(n) || texte === "") {
        return null;
    } else {
        return n;
    }

}

console.log(lireNombre("12"))
console.log(lireNombre("abc"))
console.log(lireNombre("7.5"))
console.log(lireNombre(""))

// 5. Déclarez une fonction formaterPrix qui reçoit un montant et renvoie un texte avec 2 décimales et le symbole €. Testez avec 5, 12.5 et 3.14159.
console.log("\n=== 5 ===")

function formaterPrix(montant) {
    const prix = montant.toFixed(2);
    return `${prix} €`;
}

console.log(formaterPrix(5))
console.log(formaterPrix(12.5))
console.log(formaterPrix(3.14159))