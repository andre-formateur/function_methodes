const questions = [
  { question: "Quelle balise HTML sert à créer un lien ?", reponse: "a", points: 1 },
  { question: "Quel mot-clé déclare une variable modifiable ?", reponse: "let", points: 1 },
  { question: "Quel mot-clé déclare une constante ?", reponse: "const", points: 1 },
  { question: "Quelle méthode de tableau ajoute un élément à la fin ?", reponse: "push", points: 2 },
  { question: "Combien font 7 x 8 ?", reponse: "56", points: 2 },
  { question: "Quelle méthode de tableau transforme chaque élément ?", reponse: "map", points: 3 }
];

// 1. normaliser(texte) : renvoie le texte sans espaces autour et en minuscules. Si le texte est absent (null quand l'utilisateur clique sur « Annuler »), la fonction renvoie une chaîne vide.


// 2. poserQuestion(q) : affiche la question avec prompt, compare la réponse (normalisée) avec la bonne réponse (normalisée aussi). Elle affiche avec alert soit Bonne réponse ! +2 point(s), soit Raté ! La réponse était : push. Elle renvoie les points gagnés (0 si la réponse est fausse).


// 3. tirerQuestions(tableau, nombre) : renvoie un tableau de nombre questions différentes, tirées au hasard dans la banque (utilisez elementAuHasard, includes et !, avec une boucle while).


// 4. Le programme principal :
// - tirez 3 questions ;
// - calculez le total de points possibles avec forEach ;
// - posez chaque question avec forEach et cumulez le score.


// 5. Le message final : affichez Score : 5 / 7 (71 %), suivi d'un message selon le pourcentage :
// - 80 % ou plus : Excellent ! ;
// - 50 % ou plus : Bien joué ! ;
// - sinon : Courage, vous ferez mieux la prochaine fois !