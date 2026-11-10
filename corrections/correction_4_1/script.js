const eleves = [
  { nom: "Alice", note: 15 },
  { nom: "Bob", note: 8 },
  { nom: "Chloé", note: 12 },
  { nom: "David", note: 6 },
  { nom: "Emma", note: 18 }
];

// 1. Avec filter, affichez les élèves qui ont 10 ou plus. Avec map, affichez ensuite seulement leurs noms (à partir du résultat du filtre).
const moyenneEleve = eleves.filter(eleve => eleve.note >= 10);
console.log(moyenneEleve)
console.log( moyenneEleve.map(eleve => eleve.nom) )

// 2. Faites la même chose en une seule expression (en enchaînant filter, map et join(", ")) pour obtenir le texte Alice, Chloé, Emma.
const bonsEleves = eleves.filter(eleve => eleve.note >= 10).map(eleve => eleve.nom).join(", ")
console.log( bonsEleves )

// 3. Déclarez une fonction moyenne qui reçoit le tableau d'élèves et renvoie la moyenne des notes (utilisez forEach). Affichez le résultat, puis le résultat arrondi à 1 décimale avec toFixed.
function moyenne(eleves) {
    
    let notes = 0;

    eleves.forEach(eleve => {
        notes = notes + eleve.note;
    })

    const moyenne = notes / eleves.length;

    return moyenne
}

console.log( moyenne(eleves) )
console.log( moyenne(eleves).toFixed(1) )

// 4. Déclarez une fonction meilleurEleve qui reçoit le tableau et renvoie l'élève qui a la meilleure note.
function meilleurEleve (eleves) {

    // Récupérer un tableau avec toutes les notes 
    const notes = eleves.map(eleve => eleve.note);

    // Déterminer quel est la note maximale
    const maxNote = Math.max(...notes)

    // Récupérer l'élève qui a la meilleur note
    const bestStudent = eleves.find(eleve => eleve.note === maxNote)

    // Retourner l'élève
    return bestStudent;
}

console.log(meilleurEleve(eleves))