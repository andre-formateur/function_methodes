// 1. Déclarez une fonction direBonjour qui affiche Bonjour !. Appelez-la deux fois.
function direBonjour() {
    console.log("Bonjour !")
}

direBonjour();
direBonjour();

// 2. Déclarez une fonction saluer qui reçoit un prenom et affiche Bonjour Alice !. Appelez-la avec "Alice", puis avec "Bob".
function saluer(prenom) {
    console.log(`Bonjour ${prenom} !`)
}

saluer("Alice");
saluer("Bob");

// 3. Déclarez une fonction afficherSomme qui reçoit deux nombres a et b et affiche 3 + 4 = 7. Appelez-la avec (3, 4), puis avec (10, 25).
function afficherSomme(a, b) {
    const resultat = a + b;
    console.log(`${a} + ${b} = ${resultat}`);
}

afficherSomme(3, 4)
afficherSomme(10, 25)