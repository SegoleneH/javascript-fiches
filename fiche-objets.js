// Les variables JavaScript sont des conteneurs pour les valeurs de données. 
// Les objets sont également des variables, mais ils peuvent contenir de nombreuses valeurs.

//* Pensez à un objet comme une liste de valeurs écrites sous la forme de paires clé: valeur
// Example:
            var person = {
                name: "John", 
                age: 31, 
                favColor: "green", 
                height: 183
            };

// On peut accéder aux propriétés d'un objet de 2 façons : 

      
      person.name
            //or
      person['name']




//* 1) Utilisez la syntaxe OBJECT LITERAL ou d'initialisation pour créer des objets uniques.

var John = {name: "John", age: 25};



// Notation des propriétés d'objet : permet d'écrire de manière plus concise
// les déclarations d'objets littéraux en omettant la répétition de la clé si celle-ci est
// identique au nom de la variable utilisée pour la valeur.
// Exemple :
const firstName = "John";
const lastName = "Doe";
const student = { firstName, lastName };
console.log(person); // Affiche { firstName: "John", lastName: "Doe" }



//* 2) Utilisez la syntaxe CONSTRUCTOR pour créer plusieurs objets du même type
// Parfois, nous avons besoin de définir un "type d'objet" qui peut être utilisé pour créer plusieurs objets d'un seul type.

// Pour ça on utilise une fonction constructeur d'objet.

      class individual {
            constructor (name, age){
                  this.name = name;  
                  this.age = age;
            }
      
      }

// La fonction ci-dessus est une fonction constructeur d'objet, qui prend des paramètres et les assigne aux propriétés de l'objet.


// Pour créer objets du même type, utiliser le mot-clé "new".


var p1 = new individual("John", 42);
var p2 = new individual("Amy", 21);

console.log(p1.age); // Outputs 42
console.log(p2.name); // Outputs "Amy"



var collection = {
      1: {
            id : "1",
            nom: "Astérix",
            year: 2021
      },
      etudiant2: {
            id : "2",
            nom: "Obélix",           
            year: 2022
      },
      "chien": {
            id : "3",
            nom: "Idéfix",
            year: 2023
      }
};
console.log(collection["chien"].id);
//^ On n'utilise le point que quand on connaît la propriété à l'avance : propriété définie dans objet simple

                            //* METHODS
//^ Methods are functions that are stored as object properties. 

//^ Use the following syntax to create an object method:
      //    methodName = function() { code lines }

    //^ Access an object method using the following syntax:
      //    objectName.methodName()


    // A method belongs to its object. 
    
    //^ With this. keyword, you can access the object's properties and methods 
    
    // Defining methods is done inside the constructor function.
    
          // For example:
          
              function person2(name, age) {
                  this.name = name;  
                  this.age = age;
                  this.changeName = function (name) {
                  this.name = name;
                }
              }
              
              var p = new person2("David", 21);
              p.changeName("John");
              //Now p.name equals "John"


//* GETTERS & SETTERS

// Un "getter" est une méthode spéciale qui est utilisée pour obtenir la valeur d'une propriété d'un objet. 
// Il permet d'accéder à la valeur de la propriété en question. Dans l'exemple donné, name et age sont tous deux des getters. 

// Un "setter" est une méthode spéciale utilisée pour définir la valeur d'une propriété d'un objet. 
// Il permet de modifier la valeur de la propriété en question. Dans l'exemple, age est un setter. Lorsque vous faites john.age = 30, vous modifiez la valeur de la propriété age de l'objet john et lui attribuez la valeur 30.
// DOC ==> https://javascript.info/property-accessors



//* qu'est-ce qu'un objet?
      // Un objet est un "contenant" où on peut mettre des propriétés pour définir ce même objet 
      // Les objets permettent de regrouper des valeurs et des fonctionnalités liées en une seule entité. 
      // Cela facilite l'organisation et la structuration des données, en les regroupant de manière logique et cohérente.

//* à quoi ça sert ?
      // Permet par exemple de représenter une entité du monde réel
      // Permet de traiter des données de façon plus complexe qu'avec les données de base

//* pourquoi l'utilise-t-on ?
//==> Créer un modèle
// Les objets peuvent être étendus et modifiés de manière flexible, ce qui permet d'ajouter de nouvelles fonctionnalités sans affecter le code existant. 

//* qu'est-ce qu'une classe ?
      // Classe = prototype, modèle d'objet
      // Utilisé pour les objets qui se "répètent"

//* qu'est-ce qu'instancier une classe ?
      // instancier = créer une instance(= un "exemplaire") de la classe(="modèle")

//* qu'est-ce que l'encapsulation
      // L'encapsulation en programmation objet permet, sur un objet, d'exposer au client de cet objet seulement des méthodes/fonctions dites publiques et de "cacher"(rendre privé) toutes les fonctions utiles à l'objet et à son comportement. 
      // Autrement dit, l'implémentation réelle sera interne à l'objet : l'accès et l'état des propriétés de cet objet ne seront accessibles que par le biais de ces fonctions publiques, cela protège et simplifie le comportement de cet objet.
      // Permet de s'assurer de l’intégrité des données : par ex en interdisant à l’utilisateur de modifier directement les attributs, et en l’obligeant à utiliser les fonctions définies pour les modifier (appelées interfaces)

      
//* réutilisabilité
      // = Capacité de réutiliser du code existant dans différents contextes ou parties d'une application JavaScript. 
      // Cela permet d'économiser du temps et des efforts en évitant de réécrire le même code plusieurs fois.

      
//* héritage
      // L'héritage permet à une classe d'hériter des propriétés d'une autre classe, créant une relation parent-enfant.
      // Le polymorphisme permet à des objets de différentes classes de répondre de manière spécifique à une même interface ou à un même comportement.
      // L'héritage est une relation hiérarchique entre les classes, tandis que le polymorphisme permet d'utiliser des objets de différentes classes de manière interchangeable.

      //^   ==> L'héritage est basé sur la relation "est-un" (un chien est un animal)
            //^   ==> L'héritage = transmission (ex: une mère qui apprend à chanter à sa fille)

      //^   ==> le polymorphisme est basé sur la relation "peut-faire" (un chien peut faire du bruit)
            //^   ==> Polymorphisme = polyvalence (ex: la fille pourra chanter chansons tristes/joyeuses)


            class Animal {
                  constructor(nom){
                        this.nom = nom;
                  }
            }

      //* La classe Chien hérite de la classe Animal = Chien a un nom 
            class Chien extends Animal{
                  aboyer(){
                        console.log(`woof ! woof!`);
                  }
            }

//* polymorphisme
      // Le polymorphisme est la présentation d'une unique interface pour plusieurs types de données.

      // Par exemple, les entiers & flottants sont polymorphiques : 
            // => on peut les ajouter, soustraire, multiplier sans se préoccuper de leurs différents types.
      
      //* Exemple :
            // Imaginez que vous êtes une boîte de crayons de différentes couleurs : rouge, bleu, vert et jaune. 
                  // Chaque crayon a une forme et une fonction spécifiques, mais ils sont tous des crayons.
            // En programmation orientée objet, le polymorphisme fonctionne de la même manière. 
            // Imaginez que nous avons une classe appelée "Crayon". 
            // Cette classe est comme un modèle qui nous permet de créer plusieurs crayons.
            // Maintenant on peut créer différentes sous-classes de crayon selon leur couleur.


            class Animal {
                  parler(){
                        console.log("l'animal émet un son");
                  }
            }

            //* Les 2 animaux émettent un son, mais le son est différent
            class Chien extends Animal{
                  parler(){
                        console.log("le chien aboie");
                  }
            }
            class Chat extends Animal{
                  parler(){
                        console.log("le chat miaule");
                  }
            }