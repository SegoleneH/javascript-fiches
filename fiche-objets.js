// JavaScript variables are containers for data values. Objects are variables too, but they can contain many values.
// Les variables JavaScript sont des conteneurs pour les valeurs de données. Les objets sont également des variables, mais ils peuvent contenir de nombreuses valeurs.

// Think of an object as a list of values that are written as name:value pairs, with the names and the values separated by colons.
// Pensez à un objet comme une liste de valeurs écrites sous la forme de paires nom:valeur, les noms et les valeurs étant séparés par des deux-points.

// Example:
                var person = {
                name: "John", age: 31, 
                favColor: "green", height: 183
                };

// On peut accéder aux propriétés d'un objet de 2 façons : 
// You can access object properties in two ways :

      objectName.propertyName
            //or
      objectName['propertyName']



// Use the object literal or initializer syntax to create single objects.
// Utilisez la syntaxe d'objet littéral ou d'initialisation pour créer des objets uniques.

var John = {name: "John", age: 25};



// Notation des propriétés d'objet : permet d'écrire de manière plus concise
// les déclarations d'objets littéraux en omettant la répétition de la clé si celle-ci est
// identique au nom de la variable utilisée pour la valeur.
// Exemple :
const firstName = "John";
const lastName = "Doe";
const person = { firstName, lastName };
console.log(person); // Affiche { firstName: "John", lastName: "Doe" }



                          /*  CONSTRUCTOR   */
// Sometimes, we need to set an "object type" that can be used to create a number of objects of a single type.
// Parfois, nous avons besoin de définir un "type d'objet" qui peut être utilisé pour créer plusieurs objets d'un seul type.

// The standard way to do this is to use an object constructor function.
// Pour ça on utilise une fonction constructeur d'objet.

function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}
// The above function (person) is an object constructor, which takes parameters and assigns them to the object properties.
// La fonction ci-dessus est une fonction constructeur d'objet, qui prend des paramètres et les assigne aux propriétés de l'objet.


// Once you have an object constructor, you can use the new keyword to create new objects of the same type.
// Pour créer objets du même type, utiliser le mot-clé "new".


var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age); // Outputs 42
document.write(p2.name); // Outputs "Amy"

                            /* METHODS */
// Methods are functions that are stored as object properties. 

// Use the following syntax to create an object method:
// methodName = function() { code lines }

    // Access an object method using the following syntax:
    objectName.methodName()


    // A method belongs to its object. 
    
    // With this. keyword, you can access the object's properties and methods.
    
    // Defining methods is done inside the constructor function.
    
          // For example:
          
              function person(name, age) {
                  this.name = name;  
                  this.age = age;
                  this.changeName = function (name) {
                  this.name = name;
                }
              }
              
              var p = new person("David", 21);
              p.changeName("John");
              //Now p.name equals "John"




// Un "getter" est une méthode spéciale qui est utilisée pour obtenir la valeur d'une propriété d'un objet. 
// Il permet d'accéder à la valeur de la propriété en question. Dans l'exemple donné, name et age sont tous deux des getters. 

// Un "setter" est une méthode spéciale utilisée pour définir la valeur d'une propriété d'un objet. 
// Il permet de modifier la valeur de la propriété en question. Dans l'exemple, age est un setter. Lorsque vous faites john.age = 30, vous modifiez la valeur de la propriété age de l'objet john et lui attribuez la valeur 30.
// DOC ==> https://javascript.info/property-accessors