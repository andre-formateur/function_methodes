// 1. Écrivez une fonction qui renvoie le carré d'un nombre (n * n), de quatre façons différentes :

// carre1 : fonction nommée (avec function) ;
function carre1(n) {
    return n * n;
}

// carre2 : fonction anonyme rangée dans une constante ;
const carre2 = function (n) {
    return n * n;
}

// carre3 : fonction fléchée avec accolades et return ;
const carre3 = (n) => {
    return n * n;
}

// carre4 : fonction fléchée à retour implicite.
const carre4 = (n) => n * n;

// Affichez le résultat de chacune avec 5.
console.log(carre1(5))
console.log(carre2(5))
console.log(carre3(5))
console.log(carre4(5))

// 2. Réécrivez cette fonction en fléchée à retour implicite :
// Testez avec (3, 4)

/*
    function additionner(a, b) {
    return a + b;
    }
*/

const additionner = (a, b) => a + b;
console.log(additionner(3, 4));

// 3. Écrivez une fonction fléchée sans paramètre bonjour qui renvoie le texte Bonjour !. Affichez son résultat.
const bonjour = () => "Bonjour !";
console.log(bonjour())

// 4. Trouvez l'erreur. Qu'affiche ce code ? Corrigez-le de deux façons.

/*

    const f = (n) => { n * 2 };
    console.log(f(4));

*/

    // const f = (n) => { return n * 2 };
    const f = (n) =>  n * 2 ;
    console.log(f(4));