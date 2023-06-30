// JavaScript variables are containers for data values. Objects are variables too, but they can contain many values.

// Think of an object as a list of values that are written as name:value pairs, with the names and the values separated by colons.

// Example:

var person = {
 name: "John", age: 31, 
 favColor: "green", height: 183
};


// You can access object properties in two ways.

objectName.propertyName
//or
objectName['propertyName']


// An object method is a property that contains a function definition.

// Use the following syntax to access an object method.

objectName.methodName()

//                          CONSTRUCTOR
// Sometimes, we need to set an "object type" that can be used to create 
// a number of objects of a single type.

// The standard way to do this is to use an object constructor function.

function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}
// The above function (person) is an object constructor, which takes 
// parameters and assigns them to the object properties.


// Once you have an object constructor, you can use the new keyword to create
// new objects of the same type.


var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age); // Outputs 42
document.write(p2.name); // Outputs "Amy"


// Use the object literal or initializer syntax to create single objects.

var John = {name: "John", age: 25};


// Notation des propriétés d'objet : permet d'écrire de manière plus concise
// les déclarations d'objets littéraux en omettant la répétition de la clé si celle-ci est
// identique au nom de la variable utilisée pour la valeur.
// Exemple :
const firstName = "John";
const lastName = "Doe";
const person = { firstName, lastName };
console.log(person); // Affiche { firstName: "John", lastName: "Doe" }


// Un "getter" est une méthode spéciale qui est utilisée pour obtenir la valeur d'une propriété d'un objet. 
// Il permet d'accéder à la valeur de la propriété en question. Dans l'exemple donné, name et age sont tous deux des getters. 

// Un "setter" est une méthode spéciale utilisée pour définir la valeur d'une propriété d'un objet. 
// Il permet de modifier la valeur de la propriété en question. Dans l'exemple, age est un setter. Lorsque vous faites john.age = 30, vous modifiez la valeur de la propriété age de l'objet john et lui attribuez la valeur 30.
// DOC ==> https://javascript.info/property-accessors