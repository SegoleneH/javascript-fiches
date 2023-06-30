// PORTÉE GLOBALE 
// Les variables déclarées avec var ont une portée de fonction, 
// ce qui signifie qu'elles sont visibles à l'intérieur de
// la fonction où elles sont déclarées.

// Dans cet exemple, globalVariable est une variable globale
// ==> elle peut être utilisée à la fois à l'intérieur et à l'extérieur de la fonction myFunction.
var globalVariable = 10;

function myFunction() {
  console.log(globalVariable); // Affiche 10
}

console.log(globalVariable); // Affiche 10


// PORTÉE LOCALE = PORTÉE DE FONCTION
// Scope is the function's private bag of names on which it operates.
// /!\ "semitransparency" of the bag - the function operating in the bag can 
// look outside, but nobody from the outside can look into the function's bag.


// Ici ma variable est dispo dans myFunction & innerFunction, mais pas en dehors
function myFunction() {
    var localVariable = 20;
    console.log(localVariable); // Affiche 20
  
    function innerFunction() {
      console.log(localVariable); // Affiche 20
    }
  
    innerFunction();
  }
  
  myFunction();

  
// PORTÉE DE BLOC
// Les variables déclarées avec let ont une portée de bloc,
//  ce qui signifie qu'elles sont visibles uniquement à l'intérieur du 
// bloc où elles sont déclarées.
// Bloc de code = délimité par des accolades {}. 

// Exemple :
function compareScopes() {
if (true) {
var varVariable = 'Je suis une variable var';
let letVariable = 'Je suis une variable let';
}
console.log(varVariable); 
// Affiche "Je suis une variable var" <=portée globale = disponible en dehors du if
console.log(letVariable); 
// Erreur : letVariable is not defined <=portée bloc = disponible que dans le if
}
compareScopes();