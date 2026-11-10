const fruits = ["pomme", "banane", "cerise"];

// 1. Avec forEach, affichez pour chaque fruit J'aime la pomme, J'aime la banane, etc.
fruits.forEach((fruit) => {
    console.log(`J'aime la ${fruit}`)
})

// 2. Affichez le résultat de fruits.includes("banane"), puis celui de fruits.includes("kiwi").
console.log(fruits.includes("banane"))
console.log(fruits.includes("kiwi"))

// 3. Déclarez une fonction estDisponible qui reçoit un fruit et renvoie true s'il est dans le tableau. Testez avec "cerise" et "kiwi".
function estDisponible(fruit, fruits) {
    return fruits.includes(fruit);
}

console.log(estDisponible("cerise", fruits))
console.log(estDisponible("kiwi", fruits))