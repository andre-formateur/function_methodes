const catalogue = [
  { id: 1, nom: "clavier mécanique", prix: 89.9, stock: 5 },
  { id: 2, nom: "souris sans fil", prix: 24.5, stock: 0 },
  { id: 3, nom: "écran 27 pouces", prix: 249, stock: 2 },
  { id: 4, nom: "casque audio", prix: 59.99, stock: 8 },
  { id: 5, nom: "tapis de souris", prix: 9.9, stock: 30 }
];

let panier = [];   // contiendra les id des produits ajoutés

// Étape 1
function formaterNom(nom) {
    return nom
        .split(" ")
        .map(mot => mot.slice(0, 1).toUpperCase() + mot.slice(1))
        .join(" ")
}

// Étape 2
function formaterPrix(prix) {
    return prix.toFixed(2) + " €"
}

// Étape 3
function afficherCatalogue(titre = "Catalogue") {

    console.log(`=== ${titre} ===`);

    catalogue.forEach(produit => {
        // Récupérer nom bien formaté
        const nom = formaterNom(produit.nom);

        // Récupérer le prix bien formaté
        const prix = formaterPrix(produit.prix);

        // Gérer l'affichage du stock
        const stock = produit.stock === 0 ? "Rupture de stock" : `${produit.stock} en stock`;

        console.log(`${produit.id} - ${nom} : ${prix} (${stock})`)
    });

}

// Étape 4
function trouverProduit(id) {
    return catalogue.find(produit => produit.id === id)
}

// Étape 5

function ajouterAuPanier(id) {
    const goodId = Number(id);

    if(isNaN(goodId)) {
        console.log("Numéro invalide")
        return;
    }

    const produit = trouverProduit(goodId);

    if(!produit) {
        console.log("Produit introuvable");
    } else if (produit.stock === 0) {
        const nom = formaterNom(produit.nom);
        console.log(`Rupture de stock : ${nom}`);
    } else if (panier.includes(goodId)) {
        const nom = formaterNom(produit.nom);
        console.log(`Déjà dans le panier : ${nom}`);
    } else {
        panier = [...panier, goodId];
        const nom = formaterNom(produit.nom);
        console.log(`Ajouter au panier : ${nom}`)
    }
}

// Étape 6
function afficherTicket() {
    // Entete du ticket
    console.log("--- Ticket ---");
    
    let totalHT = 0;

    // Liste des produits dans le panier
    panier.forEach(id => {
        const produit = trouverProduit(id);
        const nom = formaterNom(produit.nom);
        const prix = formaterPrix(produit.prix);

        console.log(`- ${nom} : ${prix}`);

        // équivalent de totalHT = totalHT + produit.prix;
        totalHT += produit.prix;
    })

    // Calcul du total
    const prixHT = formaterPrix(totalHT);
    const tva = formaterPrix(totalHT * 0.2);
    const totalTTC = formaterPrix(totalHT * 1.2);

    console.log(`Total HT : ${prixHT}`)
    console.log(`TVA (20 %) : ${tva}`)
    console.log(`Total TTC : ${totalTTC}`)

}

// Étape 7
function afficherStatistiques() {

    // Statistique de disponibilités
    const disponibles = catalogue.filter(produit => produit.stock > 0);
    console.log(`Produits disponibles : ${disponibles.length} sur ${catalogue.length}`);

    // Statistique sur le produit le plus cher
    const prixMax = Math.max(...catalogue.map(produit => produit.prix));
    const plusCher = catalogue.find(produit => produit.prix === prixMax);
    const nom = formaterNom(plusCher.nom);
    const prix = formaterPrix(plusCher.prix);

    console.log(`Produit le plus cher : ${nom} (${prix})`)

}

// BONUS
function sl() {
    console.log(`\n`);
}

// Vérification
afficherCatalogue();
sl()
ajouterAuPanier(1);
ajouterAuPanier(3);
ajouterAuPanier(1);
ajouterAuPanier(2);
ajouterAuPanier(9);
ajouterAuPanier("abc");
ajouterAuPanier("5");
sl()
afficherTicket();
sl()
afficherStatistiques();