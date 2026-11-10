const produits = [
  { nom: "Clavier", prix: 45, stock: 12 },
  { nom: "Souris", prix: 20, stock: 0 },
  { nom: "Écran", prix: 150, stock: 3 },
  { nom: "Casque", prix: 60, stock: 7 },
  { nom: "Tapis", prix: 10, stock: 25 }
];

// 1. Avec forEach, affichez chaque produit sous la forme Clavier : 45 €.
produits.forEach((produit) => {
    console.log(`${produit.nom} : ${produit.prix} €`)
})

// 2. Avec find, affichez le prix de l'"Écran". Cherchez ensuite un produit nommé "Webcam" et affichez le résultat.
const produitEcran = produits.find((produit) => produit.nom === "Écran");
console.log( produitEcran.prix )

const produitWebcam = produits.find((produit) => produit.nom === "Webcam");
console.log( produitWebcam )

// 3. Avec filter puis map, affichez le tableau des noms des produits dont le prix est inférieur à 50.
const produitsLowCost = produits.filter((produit) => produit.prix < 50).map(produit => produit.nom);
console.log(produitsLowCost)

// 4. Avec map, affichez le tableau des noms en majuscules.
console.log( produits.map(produit => produit.nom.toUpperCase()) )

// 5. Avec map, affichez le tableau des prix TTC (prix × 1,2). Avec filter, affichez ensuite le nombre de produits en stock (stock supérieur à 0).
console.log( produits.map(produit => produit.prix * 1.2 ) )
console.log( produits.filter(produit => produit.stock > 0).length )