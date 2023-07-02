// DÉFINITION :La portée (scope) désigne l'endroit où on peut utiliser une variable.


// RAPPEL À PROPOS DE LET & VAR

    /* En déclarant avec 'let' la variable "suffix" à l'intérieur de la boucle, on ne peut l'appeler
      en dehors de la boucle dans laquelle elle est définie. */
      let age = 18;
      if (age >= 18) {
          let suffix = 'On ne peut m\'appeler que dans ce if';
          console.log(suffix);
      }   // ==> Ce code renvoie une erreur "suffix is not defined"
  
  //______________________________________________________________________________________________________
  
      /* Une variable déclarée avec var dans un bloc fonctionne même si on l'utilise en dehors du bloc.
      ==> var n'est plus utilisé en Js moderne
      Pourquoi ? 1) Quand on déclare une variable avec var, cela permet créer plusieurs variables du même nom, 
                  qui entrent donc en conflit les 1 avec les autres. Les var les plus récentes ré-écrivent les plus
                  haut placées dans le code
                  2)  Avec une portée aussi grande, une variable var peut entrer en conflit avec d'autres var du même nom.
                  
                  En bref var = source de bugs infinie 
                  */
                  
      let number = 25;
      if ( number <= 50) {
          var obsolete = 'Je suis disponible partout, mais m\'utiliser peut devenir un vrai cauchemar';
      } 
      console.log(obsolete);
  

//______________________________________________________________________________________________________


/* Portée des variables déclarées dans 1 même bloc (function, const) = gens dans une limo aux vitres teintées: 
==> Les gens dans la fonction peuvent regarder en dehors, mais personne à l'extérieur ne peut 
voir qui est dans la fonction. 
Les gens qui sont dans la même fonction peuvent se voir
*/

      // Ici ma variable est dispo dans myFunction & innerFunction, mais pas en dehors
      function myFunction() {
        let localVariable = 20;   // <== variable dans myFunction
        console.log(localVariable); // <== appel depuis myFunction
        // Affiche 20
        
        function innerFunction() {
          console.log(localVariable);   // <== appel depuis innerFunction
          // Affiche 20
        }
        
        innerFunction();
      }
      /*console.log(localVariable);  <== appel en dehors de myFunction
      ==> affiche "ReferenceError: localVariable is not defined"*/

      myFunction();
      //affiche 2 fois 20

      
//______________________________________________________________________________________________________________

// PORTÉE DE BLOC

      // Les variables let déclarées dans un bloc (entre { }) sont visibles uniquement à l'intérieur 
      // de celui-ci : portée de bloc

      // Exemple :
      function compareScopes() {
        if (true) {
        var varVariable = 'Je suis une variable var';
        let letVariable = 'Je suis une variable let';
        }
        console.log(varVariable); 
        // Affiche "Je suis une variable var" <=portée globale = disponible partout
        // console.log(letVariable); 
        // Erreur : letVariable is not defined <=portée bloc = disponible que dans le if
        }
        compareScopes();
