// Fonction anonyme traditionnelle
const anonymousFunction = function() {
    console.log("Je suis une fonction anonyme.");
    };

// Fonction fléchée
const arrowFunction = () => {
console.log("Je suis une fonction fléchée.");
};


// Syntaxe ES6 : permet d'écrire des fonctions déclaratives de manière encore plus concise 
// Particulièrement utile pour les fonctions courtes sans logique complexe.
// Exemple :
const sum = (a, b) => a + b;
console.log(sum(2, 3)); // Affiche 5


// Les fonctions fléchées peuvent également accepter des paramètres dans les parenthèses
const anonFunction = function(a, b) {
    console.log(a * b);
    };


    // PARAMÈTRES DE FONCTION
// On peut aussi définir des paramètres par défaut au cas où aucun argument n'est passé lors de 
// l'appel de la fonction. Cela permet d'éviter les erreurs lorsque les arguments sont manquants.
const greet = (name = "World") => {
    console.log(`Hello, ${name}!`);
    };
    greet(); // Affiche "Hello, World!"
    greet("John"); // Affiche "Hello, John!"

    // L'opérateur de propagation (...)
// Mettre (...) en paramètre d'une fonction permet de passer plusieurs arguments non définis
const sum = (...numbers) => {
    let total = 0;
    for (let number of numbers) {
    total += number;
    }
    console.log(total);
    };
    sum(1, 2, 3); // Affiche 6

// L'opérateur de propagation (...) permet d'étendre un tableau ou un objet dans
// un autre tableau ou objet. Il permet d'éviter d'utiliser des boucles pour copier des
// éléments d'un tableau à un autre ou fusionner plusieurs tableaux.
// Exemple :
const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5, 6];
console.log(numbers2); // Affiche [1, 2, 3, 4, 5, 6]

