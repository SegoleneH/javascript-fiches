// Array with the name and surname
let arr = ["John", "Smith"]

// Destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith


// Ex avec un objet
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    };
    const { firstName, lastName, age } = person;
    console.log(firstName); // Affiche "John"
    console.log(lastName); // Affiche "Doe"
    console.log(age); // Affiche 30


// Extraire des valeurs à partir d'objets imbriqués= objets qui contiennent d'autres objets en tant que propriétés.
// Exemple :
const student = {
    name: "John Doe",
    age: 20,
        grades: {
        math: 90,
        science: 85,
        },
};
const { name, grades: { math, science } } = student;
console.log(name); // Affiche "John Doe"
console.log(math); // Affiche 90
console.log(science); // Affiche 85


// Extraire des valeurs à partir de tableaux
// Exemple :
const numbers = [1, 2, 3];
const [firstNumber, secondNumber, thirdNumber] = numbers;
console.log(firstNumber); // Affiche 1
console.log(secondNumber); // Affiche 2
console.log(thirdNumber); // Affiche 3

// La déstructuration via les éléments rest permet d'extraire une partie d'un
// tableau dans une nouvelle variable, tout en assignant le reste des éléments à une
// autre variable.
// Exemple :
const numbers = [1, 2, 3, 4, 5];
const [firstNumber, ...restNumbers] = numbers;
console.log(firstNumber); // Affiche 1
console.log(restNumbers); // Affiche [2, 3, 4, 5]


// Passer un objet en tant que paramètres de fonction :
// Permet de spécifier uniquement les propriétés nécessaires à utiliser à l'intérieur de la fonction.
// Exemple :
const person = {
firstName: "John",
lastName: "Doe",
age: 30,
};
const greet = ({ firstName, lastName }) => {
console.log(`Hello, ${firstName} ${lastName}!`);
};
greet(person); // Affiche "Hello, John Doe!"

