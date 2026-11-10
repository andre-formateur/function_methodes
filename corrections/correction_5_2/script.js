// 1. Soit const originale = [1, 2, 3];.
const originale = [1, 2, 3];

// - Créez const copie = [...originale];, ajoutez 4 à copie avec push, puis affichez originale et copie.
const copie = [...originale];
copie.push(4)
console.log(originale, copie)

// - Créez ensuite const alias = originale;, ajoutez 99 à alias avec push, puis affichez originale et alias. Que remarquez-vous ?
const alias = originale;
alias.push(99);
console.log(originale, alias)

// 2. Soit const fruits = ["pomme", "poire"] et const legumes = ["carotte", "navet"]. Créez un tableau qui contient les deux, avec le spread.
const fruits = ["pomme", "poire"];
const legumes = ["carotte", "navet"];
const fruitsLegumes = [...fruits, ...legumes];
console.log(fruitsLegumes)

// 3. Créez un tableau ["a", "b", "X", "c", "d"] à partir de ["a", "b"] et ["c", "d"], en insérant "X" entre les deux, avec le spread.
const a = ["a", "b"];
const b = ["c", "d"];
const merge = [...a, "X", ...b]

console.log(merge)

// 4. Soit const notes = [12, 8, 15, 6, 18];. Affichez la plus grande et la plus petite note avec Math.max et Math.min et le spread.
const notes = [12, 8, 15, 6, 18];

console.log(Math.max(...notes))
console.log(Math.min(...notes))

// 5. Déclarez une fonction ajouterElement qui reçoit un tableau et un élément, et renvoie un nouveau tableau avec l'élément ajouté à la fin, sans modifier le tableau d'origine. Testez avec [1, 2, 3] et 4, puis affichez le tableau d'origine.
const tableauOrigine = [1, 2, 3];

function ajouterElement(tableau, element) {
    return [...tableau, element];
}

console.log(
    ajouterElement(tableauOrigine, 4), 
    tableauOrigine
)