// 1. Soit const nombres = [4.2, 4.5, 4.8];. Avec map, affichez le tableau arrondi avec Math.round, puis avec Math.floor, puis avec Math.ceil.
const nombres = [4.2, 4.5, 4.8];

console.log(nombres.map(n => Math.round(n)))
console.log(nombres.map(n => Math.ceil(n)))
console.log(nombres.map(n => Math.floor(n)))

// 2. Déclarez une fonction ecart qui renvoie la différence positive entre deux nombres, quel que soit leur ordre (utilisez Math.abs). Testez avec (10, 3), (3, 10) et (-5, 5).
function ecart(a, b) {  
    return Math.abs( Math.abs(a) - Math.abs(b) );
}

console.log(ecart(10, 3))
console.log(ecart(3, 10))
console.log(ecart(-5, 5))

// 3. Affichez le plus petit et le plus grand des prix 4.99, 12.5, 7.333 et 19.999 avec Math.min et Math.max.
const prix = [4.99, 12.5, 7.333, 19.999];
console.log( Math.min(...prix) )
console.log( Math.max(...prix) )

// 4. Voici un panier :

const panier = [
    { nom: "Café", prix: 2.5, quantite: 3 },
    { nom: "Croissant", prix: 1.2, quantite: 2 },
    { nom: "Pain", prix: 0.95, quantite: 4 }
];


// - Déclarez une fonction ligneTicket qui reçoit un nom, un prix et une quantité, et renvoie une ligne comme Café x3 : 7.50 € (le montant a 2 décimales).
function ligneTicket(nom, prix, qtt) {

    const floatedPrice = prix.toFixed(2);

    return `${nom} x${qtt} : ${floatedPrice} €`
}

// - Avec forEach, affichez chaque ligne du panier et calculez le total.
let total = 0;
panier.forEach(produit => {
    console.log( ligneTicket(produit.nom, produit.prix, produit.quantite) )
    total = total + (produit.prix * produit.quantite );
})

const totalCart = total.toFixed(2);

// - Affichez enfin Total : 13.70 €.
console.log(`${totalCart} €`)