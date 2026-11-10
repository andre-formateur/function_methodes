# Exercices JavaScript : Cours 17

Fonctions, méthodes de tableaux, méthodes de chaînes, méthodes de nombres et notions bonus.

**15 exercices** répartis en 5 niveaux (3 par niveau), puis un **challenge** final.

| Niveau | Exercices |
|--------|-----------|
| 🟢 Très facile | 1.1 Premières fonctions · 1.2 Renvoyer une valeur · 1.3 Un tableau, `includes` et `forEach` |
| 🟡 Facile | 2.1 La portée · 2.2 Les écritures d'une fonction · 2.3 Nettoyer du texte |
| 🟠 Moyen | 3.1 Un catalogue de produits · 3.2 Chercher et remplacer dans un texte · 3.3 Les nombres |
| 🔴 Difficile | 4.1 Les notes d'une classe · 4.2 Un ticket de caisse · 4.3 Traitement de texte |
| 🟣 Très difficile | 5.1 Vrai ou faux ? · 5.2 Le spread · 5.3 Le hasard |
| 🏆 Challenge | Le quiz |

## Avant de commencer

Travaillez avec deux fichiers :

```
mon-projet/
├── index.html
└── script.js
```

Reliez le script dans `index.html`, juste avant `</body>` :

```html
<script src="script.js"></script>
```

Ouvrez la page dans le navigateur, puis la console (touche **F12**, onglet **Console**). Sauf mention contraire, les résultats s'affichent avec `console.log`.

💡 Pour chaque exercice, effacez le code du précédent ou travaillez dans un nouveau fichier : cela évite les conflits de noms de variables.

---

# 🟢 Niveau 1 : Très facile

## Exercice 1.1 : Premières fonctions

1. Déclarez une fonction `direBonjour` qui affiche `Bonjour !`. Appelez-la **deux fois**.
2. Déclarez une fonction `saluer` qui reçoit un `prenom` et affiche `Bonjour Alice !`. Appelez-la avec `"Alice"`, puis avec `"Bob"`.
3. Déclarez une fonction `afficherSomme` qui reçoit deux nombres `a` et `b` et affiche `3 + 4 = 7`. Appelez-la avec `(3, 4)`, puis avec `(10, 25)`.

**Résultat attendu :**

```
Bonjour !
Bonjour !
Bonjour Alice !
Bonjour Bob !
3 + 4 = 7
10 + 25 = 35
```

💡 Si rien ne s'affiche, vérifiez que vous avez bien **appelé** la fonction avec des parenthèses.

---

## Exercice 1.2 : Renvoyer une valeur

1. Déclarez une fonction `doubler` qui reçoit un nombre et **renvoie** son double. Affichez `doubler(21)`.
2. Rangez le résultat de `doubler(5)` dans une constante `resultat`, puis affichez `resultat + 1`.
3. Déclarez une fonction `calculerTTC` qui reçoit un prix hors taxes et renvoie le prix TTC (TVA à 20 %, soit `prix * 1.2`). Affichez `calculerTTC(100)` et `calculerTTC(50)`.
4. Déclarez une fonction `estMajeur` qui reçoit un `age` et renvoie `true` ou `false`. Testez avec `17`, `18` et `30`.
5. **Trouvez l'erreur.** Voici une fonction :

   ```js
   function triple(n) {
     console.log(n * 3);
   }

   const t = triple(4);
   console.log(t);
   ```

   Qu'affiche ce code ? Pourquoi `t` ne contient-il pas `12` ? Corrigez la fonction pour que `t` vaille `12`.

**Résultat attendu (parties 1 à 4) :**

```
42
11
120
60
false
true
true
```

**Résultat de la partie 5 (code d'origine) :**

```
12
undefined
```

💡 `console.log` **affiche**, `return` **renvoie** : ce n'est pas la même chose.

---

## Exercice 1.3 : Un tableau, `includes` et `forEach`

Voici un tableau :

```js
const fruits = ["pomme", "banane", "cerise"];
```

1. Avec `forEach`, affichez pour chaque fruit `J'aime la pomme`, `J'aime la banane`, etc.
2. Affichez le résultat de `fruits.includes("banane")`, puis celui de `fruits.includes("kiwi")`.
3. Déclarez une fonction `estDisponible` qui reçoit un fruit et renvoie `true` s'il est dans le tableau. Testez avec `"cerise"` et `"kiwi"`.

**Résultat attendu :**

```
J'aime la pomme
J'aime la banane
J'aime la cerise
true
false
true
false
```

---

# 🟡 Niveau 2 : Facile

## Exercice 2.1 : La portée

**Sans exécuter le code**, indiquez ce que chaque extrait affiche. Vérifiez ensuite dans la console.

**Extrait A**

```js
let message = "global";

function afficher() {
  let message = "local";
  console.log(message);
}

afficher();
console.log(message);
```

**Extrait B**

```js
function calculer() {
  const resultat = 10 * 2;
}

calculer();
console.log(resultat);
```

**Extrait C**

```js
let compteur = 0;

function incrementer() {
  compteur = compteur + 1;
}

incrementer();
incrementer();
incrementer();
console.log(compteur);
```

**Partie 2 :** corrigez l'extrait B pour qu'il affiche `20`, sans déplacer la déclaration de `resultat` en dehors de la fonction.

**Résultats attendus :**

```
Extrait A : local puis global
Extrait B : ReferenceError: resultat is not defined
Extrait C : 3
```

💡 Une variable déclarée **dans** une fonction n'existe que dans cette fonction. Une fonction peut en revanche lire et modifier une variable déclarée **à l'extérieur**.

---

## Exercice 2.2 : Les écritures d'une fonction

1. Écrivez une fonction qui renvoie le **carré** d'un nombre (`n * n`), de quatre façons différentes :
   - `carre1` : fonction **nommée** (avec `function`) ;
   - `carre2` : fonction **anonyme** rangée dans une constante ;
   - `carre3` : fonction **fléchée** avec accolades et `return` ;
   - `carre4` : fonction fléchée à **retour implicite**.

   Affichez le résultat de chacune avec `5`.
2. Réécrivez cette fonction en fléchée à retour implicite :

   ```js
   function additionner(a, b) {
     return a + b;
   }
   ```

   Testez avec `(3, 4)`.
3. Écrivez une fonction fléchée **sans paramètre** `bonjour` qui renvoie le texte `Bonjour !`. Affichez son résultat.
4. **Trouvez l'erreur.** Qu'affiche ce code ? Corrigez-le de **deux façons**.

   ```js
   const f = (n) => { n * 2 };
   console.log(f(4));
   ```

**Résultat attendu :**

```
25
25
25
25
7
Bonjour !
undefined
```

💡 Avec des accolades, il faut un `return`. Sans accolades, le résultat est renvoyé automatiquement.

---

## Exercice 2.3 : Nettoyer du texte

Voici un texte :

```js
const texte = "   Bonjour le Monde   ";
```

1. Affichez le texte sans espaces autour (`trim`), en majuscules et en minuscules. Affichez aussi la longueur du texte d'origine, puis celle du texte sans espaces.
2. Déclarez une fonction `nettoyerEmail` qui reçoit une adresse mail, supprime les espaces autour et la met en minuscules. Testez avec `"  Alice@Mail.COM "`.
3. Déclarez une fonction `mettreMajuscule` qui reçoit un mot et le renvoie avec la **première lettre en majuscule** et le reste en minuscules. Testez avec `"jAVAscript"` et `"alice"`.
4. Écrivez `texte.toUpperCase();` seul sur une ligne, puis affichez `texte`. Que remarquez-vous ?

**Résultat attendu :**

```
Bonjour le Monde
   BONJOUR LE MONDE   
   bonjour le monde   
22
16
alice@mail.com
Javascript
Alice
   Bonjour le Monde   
```

💡 Pour la partie 3, combinez `slice(0, 1)`, `slice(1)`, `toUpperCase` et `toLowerCase`. Les chaînes ne sont **jamais modifiées** : les méthodes renvoient une nouvelle chaîne.

---

# 🟠 Niveau 3 : Moyen

## Exercice 3.1 : Un catalogue de produits

Voici un catalogue :

```js
const produits = [
  { nom: "Clavier", prix: 45, stock: 12 },
  { nom: "Souris", prix: 20, stock: 0 },
  { nom: "Écran", prix: 150, stock: 3 },
  { nom: "Casque", prix: 60, stock: 7 },
  { nom: "Tapis", prix: 10, stock: 25 }
];
```

1. Avec `forEach`, affichez chaque produit sous la forme `Clavier : 45 €`.
2. Avec `find`, affichez le **prix** de l'`"Écran"`. Cherchez ensuite un produit nommé `"Webcam"` et affichez le résultat.
3. Avec `filter` puis `map`, affichez le **tableau des noms** des produits dont le prix est **inférieur à 50**.
4. Avec `map`, affichez le tableau des noms **en majuscules**.
5. Avec `map`, affichez le tableau des prix TTC (prix × 1,2). Avec `filter`, affichez ensuite le **nombre** de produits en stock (stock supérieur à 0).

**Résultat attendu :**

```
Clavier : 45 €
Souris : 20 €
Écran : 150 €
Casque : 60 €
Tapis : 10 €
150
undefined
[ 'Clavier', 'Souris', 'Tapis' ]
[ 'CLAVIER', 'SOURIS', 'ÉCRAN', 'CASQUE', 'TAPIS' ]
[ 54, 24, 180, 72, 12 ]
4
```

💡 `find` renvoie **un élément** (ou `undefined`), `filter` renvoie **un tableau**, `map` renvoie un tableau de **même taille**.

---

## Exercice 3.2 : Chercher et remplacer dans un texte

Voici une phrase :

```js
const phrase = "Le chat dort sur le canapé, le chat rêve";
```

1. Affichez : si la phrase contient `"chat"`, la position de la première occurrence de `"chat"`, la position de `"chien"`, si elle commence par `"Le"`, et si elle se termine par `"rêve"`.
2. Affichez la phrase avec `"chat"` remplacé par `"chien"`, d'abord avec `replace`, puis avec `replaceAll`. Quelle différence ?
3. Découpez la phrase en mots avec `split(" ")`. Affichez le tableau, puis le **nombre de mots**.
4. Affichez les **10 premiers caractères** de la phrase, puis le mot `"chat"` (en utilisant `slice` avec deux positions).
5. Déclarez une fonction `slugifier` qui transforme un titre en adresse web : espaces supprimés autour, minuscules, espaces remplacés par des tirets. Testez avec `"  Mon Premier Article  "`.

**Résultat attendu :**

```
true
3
-1
true
true
Le chien dort sur le canapé, le chat rêve
Le chien dort sur le canapé, le chien rêve
[ 'Le', 'chat', 'dort', 'sur', 'le', 'canapé,', 'le', 'chat', 'rêve' ]
9
Le chat do
chat
mon-premier-article
```

💡 `indexOf` renvoie `-1` quand le texte n'est pas trouvé.

---

## Exercice 3.3 : Les nombres

1. Soit `const prix = 19.5;`. Affichez `prix.toFixed(2)`, puis son type avec `typeof`. Affichez ensuite `prix.toFixed(2) + 1`, puis `Number(prix.toFixed(2)) + 1`. Expliquez la différence.
2. Affichez `Number("42")`, `Number("3.14")`, `Number("12px")`, `Number("")` et `Number("abc")`.
3. Affichez : `isNaN(Number("abc"))`, `Number.isInteger(4.0)`, `Number.isInteger(4.5)`, `isFinite(10 / 0)` et `10 / 0`.
4. Déclarez une fonction `lireNombre` qui reçoit un texte et renvoie le **nombre** correspondant, ou `null` si le texte n'est pas un nombre. Testez avec `"12"`, `"abc"`, `"7.5"` et `""`. Que renvoie votre fonction pour `""` ? C'est un piège : corrigez-la pour qu'elle renvoie aussi `null` quand le texte est vide.
5. Déclarez une fonction `formaterPrix` qui reçoit un montant et renvoie un texte avec 2 décimales et le symbole `€`. Testez avec `5`, `12.5` et `3.14159`.

**Résultat attendu :**

```
19.50
string
19.501
20.5
42
3.14
NaN
0
NaN
true
true
false
false
Infinity
12
null
7.5
0          ← avant correction ; null après correction
5.00 €
12.50 €
3.14 €
```

💡 `toFixed` renvoie une **chaîne**, pas un nombre : reconvertissez avec `Number` pour calculer.

---

# 🔴 Niveau 4 : Difficile

## Exercice 4.1 : Les notes d'une classe

Voici une liste d'élèves :

```js
const eleves = [
  { nom: "Alice", note: 15 },
  { nom: "Bob", note: 8 },
  { nom: "Chloé", note: 12 },
  { nom: "David", note: 6 },
  { nom: "Emma", note: 18 }
];
```

1. Avec `filter`, affichez les élèves qui ont **10 ou plus**. Avec `map`, affichez ensuite seulement leurs **noms** (à partir du résultat du filtre).
2. Faites la même chose **en une seule expression** (en enchaînant `filter`, `map` et `join(", ")`) pour obtenir le texte `Alice, Chloé, Emma`.
3. Déclarez une fonction `moyenne` qui reçoit le tableau d'élèves et **renvoie la moyenne** des notes (utilisez `forEach`). Affichez le résultat, puis le résultat arrondi à 1 décimale avec `toFixed`.
4. Déclarez une fonction `meilleurEleve` qui reçoit le tableau et **renvoie l'élève** qui a la meilleure note.

**Résultat attendu :**

```
[
  { nom: 'Alice', note: 15 },
  { nom: 'Chloé', note: 12 },
  { nom: 'Emma', note: 18 }
]
[ 'Alice', 'Chloé', 'Emma' ]
Alice, Chloé, Emma
11.8
11.8
{ nom: 'Emma', note: 18 }
```

💡 Pour la partie 4, partez de `let meilleur = eleves[0];` et mettez-le à jour dans le `forEach`.

---

## Exercice 4.2 : Un ticket de caisse

1. Soit `const nombres = [4.2, 4.5, 4.8];`. Avec `map`, affichez le tableau arrondi avec `Math.round`, puis avec `Math.floor`, puis avec `Math.ceil`.
2. Déclarez une fonction `ecart` qui renvoie la **différence positive** entre deux nombres, quel que soit leur ordre (utilisez `Math.abs`). Testez avec `(10, 3)`, `(3, 10)` et `(-5, 5)`.
3. Affichez le plus petit et le plus grand des prix `4.99`, `12.5`, `7.333` et `19.999` avec `Math.min` et `Math.max`.
4. Voici un panier :

   ```js
   const panier = [
     { nom: "Café", prix: 2.5, quantite: 3 },
     { nom: "Croissant", prix: 1.2, quantite: 2 },
     { nom: "Pain", prix: 0.95, quantite: 4 }
   ];
   ```

   - Déclarez une fonction `ligneTicket` qui reçoit un nom, un prix et une quantité, et **renvoie** une ligne comme `Café x3 : 7.50 €` (le montant a 2 décimales).
   - Avec `forEach`, affichez chaque ligne du panier et calculez le total.
   - Affichez enfin `Total : 13.70 €`.

**Résultat attendu :**

```
[ 4, 5, 5 ]
[ 4, 4, 4 ]
[ 5, 5, 5 ]
7
7
10
4.99
19.999
Café x3 : 7.50 €
Croissant x2 : 2.40 €
Pain x4 : 3.80 €
Total : 13.70 €
```

---

## Exercice 4.3 : Traitement de texte

1. Déclarez une fonction `compterVoyelles` qui reçoit un texte et renvoie le nombre de voyelles (`a`, `e`, `i`, `o`, `u`). Indice : mettez le texte en minuscules, découpez-le lettre par lettre avec `split("")`, puis filtrez. Testez avec `"Bonjour"`, `"JavaScript"` et `"Programmation"`.
2. Déclarez une fonction `acronyme` qui reçoit une phrase et renvoie les initiales de chaque mot, en majuscules. Testez avec `"cascading style sheets"` et `"hyper text markup language"`.
3. Déclarez une fonction `titreCase` qui met la première lettre de **chaque mot** en majuscule (réutilisez `mettreMajuscule` de l'exercice 2.3). Testez avec `"le seigneur des anneaux"` et `"HARRY potter"`.
4. Déclarez une fonction `masquerEmail` qui masque une adresse mail : on garde la première lettre, puis `***`, puis la partie après le `@`. Testez avec `"alice@mail.com"` et `"bob.durand@gmail.com"`.

**Résultat attendu :**

```
3
3
5
CSS
HTML
Le Seigneur Des Anneaux
Harry Potter
a***@mail.com
b***@gmail.com
```

💡 Pour la partie 4, `split("@")` renvoie un tableau de deux morceaux.

---

# 🟣 Niveau 5 : Très difficile

## Exercice 5.1 : Vrai ou faux ?

1. **Sans exécuter le code**, indiquez si chaque valeur est *truthy* ou *falsy* :

   | n° | Valeur |
   |----|--------|
   | 0 | `0` |
   | 1 | `1` |
   | 2 | `""` |
   | 3 | `"0"` |
   | 4 | `" "` (un espace) |
   | 5 | `[]` |
   | 6 | `null` |
   | 7 | `undefined` |
   | 8 | `NaN` |

   Vérifiez ensuite avec ce code :

   ```js
   const valeurs = [0, 1, "", "0", " ", [], null, undefined, NaN];

   valeurs.forEach((valeur, i) => {
     if (valeur) {
       console.log(`valeur n°${i} : truthy`);
     } else {
       console.log(`valeur n°${i} : falsy`);
     }
   });
   ```

2. Affichez : `!0`, `!"abc"`, `!null`, `!true`, `!1`.
3. Déclarez une fonction `accueillir` qui reçoit un prénom et renvoie `Bonjour Alice`. Si le prénom est absent ou vide, elle renvoie `Bonjour inconnu`. Utilisez `||`. Testez avec `"Alice"`, `undefined` et `""`.
4. Déclarez une fonction `choisirAge` qui reçoit un âge et renvoie cet âge, ou `18` si l'âge est absent. Testez avec `25`, `undefined` et `0`. **Que se passe-t-il avec `0` ?** Pourquoi ?
5. Déclarez une fonction `estVide` qui renvoie `true` si un texte est vide **ou ne contient que des espaces** (utilisez `!` et `trim`). Testez avec `""`, `"   "` et `"abc"`.

**Résultat attendu :**

```
valeur n°0 : falsy
valeur n°1 : truthy
valeur n°2 : falsy
valeur n°3 : truthy
valeur n°4 : truthy
valeur n°5 : truthy
valeur n°6 : falsy
valeur n°7 : falsy
valeur n°8 : falsy
true
false
true
false
false
Bonjour Alice
Bonjour inconnu
Bonjour inconnu
25
18
18
true
true
false
```

💡 Pour la partie 4 : `0` est *falsy*, donc `0 || 18` donne `18`, ce qui n'est pas ce qu'on voulait.

---

## Exercice 5.2 : Le spread

1. Soit `const originale = [1, 2, 3];`.
   - Créez `const copie = [...originale];`, ajoutez `4` à `copie` avec `push`, puis affichez `originale` et `copie`.
   - Créez ensuite `const alias = originale;`, ajoutez `99` à `alias` avec `push`, puis affichez `originale` et `alias`. Que remarquez-vous ?
2. Soit `const fruits = ["pomme", "poire"]` et `const legumes = ["carotte", "navet"]`. Créez un tableau qui contient les deux, avec le spread.
3. Créez un tableau `["a", "b", "X", "c", "d"]` à partir de `["a", "b"]` et `["c", "d"]`, en insérant `"X"` entre les deux, avec le spread.
4. Soit `const notes = [12, 8, 15, 6, 18];`. Affichez la plus grande et la plus petite note avec `Math.max` et `Math.min` et le spread.
5. Déclarez une fonction `ajouterElement` qui reçoit un tableau et un élément, et **renvoie un nouveau tableau** avec l'élément ajouté à la fin, **sans modifier** le tableau d'origine. Testez avec `[1, 2, 3]` et `4`, puis affichez le tableau d'origine.

**Résultat attendu :**

```
[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 99 ]
[ 1, 2, 3, 99 ]
[ 'pomme', 'poire', 'carotte', 'navet' ]
[ 'a', 'b', 'X', 'c', 'd' ]
18
6
[ 1, 2, 3, 4 ]
[ 1, 2, 3 ]
```

💡 `const alias = originale` ne crée **pas** de copie : les deux noms désignent le même tableau.

---

## Exercice 5.3 : Le hasard

1. Déclarez une fonction `lancerDe` qui reçoit un nombre de faces et renvoie un entier au hasard entre `1` et ce nombre. Testez-la **1000 fois** avec 6 faces, rangez les résultats dans un tableau, puis affichez le plus petit et le plus grand résultat.
2. Déclarez une fonction `entierAuHasard` qui reçoit un `min` et un `max` et renvoie un entier au hasard entre les deux (inclus). Testez-la 1000 fois avec `(10, 20)` et affichez le plus petit et le plus grand résultat.
3. Déclarez une fonction `elementAuHasard` qui reçoit un tableau et renvoie un de ses éléments au hasard. Testez avec `["pierre", "feuille", "ciseaux"]`.
4. **Pierre, feuille, ciseaux.**
   - Déclarez une fonction `arbitrer` qui reçoit le choix du joueur et celui de l'ordinateur, et renvoie `"Égalité"`, `"Gagné"` ou `"Perdu"`. Pierre bat ciseaux, feuille bat pierre, ciseaux bat feuille.
   - Testez avec `("pierre", "ciseaux")`, `("pierre", "feuille")`, `("feuille", "feuille")` et `("ciseaux", "feuille")`.
   - Déclarez enfin une fonction `jouer` qui reçoit le choix du joueur, tire le choix de l'ordinateur avec `elementAuHasard` et affiche par exemple `Vous : pierre | Ordinateur : ciseaux → Gagné`.

**Résultat attendu :**

```
1
6
10
20
(un élément au hasard)
Gagné
Perdu
Égalité
Gagné
Vous : pierre | Ordinateur : (au hasard) → (résultat)
```

💡 Pour un entier de `0` à `n - 1` : `Math.floor(Math.random() * n)`. Les deux valeurs extrêmes (`1` et `6`, `10` et `20`) apparaissent presque toujours sur 1000 tirages.

---

# 🏆 Challenge : Le quiz

Vous allez construire un **quiz** qui pose 3 questions tirées au hasard, calcule le score et affiche un message final. Utilisez `prompt` et `alert`.

Voici la banque de questions à copier :

```js
const questions = [
  { question: "Quelle balise HTML sert à créer un lien ?", reponse: "a", points: 1 },
  { question: "Quel mot-clé déclare une variable modifiable ?", reponse: "let", points: 1 },
  { question: "Quel mot-clé déclare une constante ?", reponse: "const", points: 1 },
  { question: "Quelle méthode de tableau ajoute un élément à la fin ?", reponse: "push", points: 2 },
  { question: "Combien font 7 x 8 ?", reponse: "56", points: 2 },
  { question: "Quelle méthode de tableau transforme chaque élément ?", reponse: "map", points: 3 }
];
```

## Les étapes

1. **`normaliser(texte)`** : renvoie le texte sans espaces autour et en minuscules. Si le texte est absent (`null` quand l'utilisateur clique sur « Annuler »), la fonction renvoie une chaîne vide.
2. **`poserQuestion(q)`** : affiche la question avec `prompt`, compare la réponse (normalisée) avec la bonne réponse (normalisée aussi). Elle affiche avec `alert` soit `Bonne réponse ! +2 point(s)`, soit `Raté ! La réponse était : push`. Elle **renvoie** les points gagnés (`0` si la réponse est fausse).
3. **`tirerQuestions(tableau, nombre)`** : renvoie un tableau de `nombre` questions **différentes**, tirées au hasard dans la banque (utilisez `elementAuHasard`, `includes` et `!`, avec une boucle `while`).
4. **Le programme principal** :
   - tirez 3 questions ;
   - calculez le total de points possibles avec `forEach` ;
   - posez chaque question avec `forEach` et cumulez le score.
5. **Le message final** : affichez `Score : 5 / 7 (71 %)`, suivi d'un message selon le pourcentage :
   - `80 %` ou plus : `Excellent !` ;
   - `50 %` ou plus : `Bien joué !` ;
   - sinon : `Courage, vous ferez mieux la prochaine fois !`

## Exemple de partie

```
Question : Quelle méthode de tableau ajoute un élément à la fin ?   → "  PUSH "
Bonne réponse ! +2 point(s)

Question : Quel mot-clé déclare une variable modifiable ?   → "var"
Raté ! La réponse était : let

Question : Combien font 7 x 8 ?   → "56"
Bonne réponse ! +2 point(s)

Score : 4 / 5 (80 %)
Excellent !
```

## Bonus ⭐

- Ajoutez une question dont la réponse est un **nombre**. Si l'utilisateur saisit autre chose qu'un nombre (vérifiez avec `Number` et `isNaN`), affichez `Veuillez saisir un nombre.` et redemandez la réponse.
- Affichez à la fin la **liste des questions ratées** (avec `filter` et `map`).
- Faites varier le nombre de questions : demandez-le à l'utilisateur au début, et vérifiez qu'il est un entier compris entre 1 et le nombre de questions de la banque.

💡 Si vous bloquez, avancez étape par étape et testez chaque fonction dans la console **avant** de passer à la suivante.
