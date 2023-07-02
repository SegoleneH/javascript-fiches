//* DÉFINITION :
  // ==> La portée (scope) désigne l'endroit où on peut utiliser une variable.


//*  RAPPEL À PROPOS DE LET & VAR

  //~ En déclarant avec 'let' la variable "suffix" à l'intérieur de la boucle, on ne peut l'appeler
  //~ en dehors de la boucle dans laquelle elle est définie. 

        let age = 18;
        if (age >= 18) {
            let suffix = 'On ne peut m\'appeler que dans ce if';
          } 
        console.log(suffix);// ==> Ce code renvoie une erreur "suffix is not defined"
  
  //______________________________________________________________________________________________________
  
  //~ Une variable déclarée avec var dans un bloc fonctionne même si on l'utilise en dehors du bloc.
      
      //! ==> VAR N'EST PLUS UTILISÉ EN JS MODERNE
        //^ Pourquoi ? 
          //^ 1) Quand on utilise var, cela permet créer plusieurs var du même nom, 
          //^ qui peuvent entrer en conflit les unes avec les autres. Les var peuvent ré-écrire d'autres
          //^ var placées plus haut dans le code
          //^ 2)  Avec une portée aussi grande, une var peut entrer en conflit non seulement avec d'autres var
          //^ dans le même fichier, mais aussi avec celles qui sont dans d'autres fichiers .
                  
          //! En bref var = source de bugs infinie 
                  
      let number = 25;
      if ( number <= 50) {
          var obsolete = 'Je suis disponible partout, mais m\'utiliser peut devenir un vrai cauchemar';
      } 
      console.log(obsolete);
  

//______________________________________________________________________________________________________

//* PORTÉE LOCALE 
  //* = Portée des variables déclarées dans 1 même function ou const :
    //~ variables = gens dans une limo aux vitres teintées: 
    //~ ==> Les gens dans la fonction(limo) peuvent regarder en dehors, mais personne à l'extérieur 
    //~ ne peut voir qui est dans la fonction(limo). 
    //~ Les gens qui sont dans la même fonction peuvent se voir

    /* Exemple
        Ici ma variable est dispo dans myFunction & innerFunction, mais pas en dehors*/

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

//* PORTÉE DE BLOC

      //~ Les variables let déclarées dans un bloc (entre { }) sont visibles uniquement à l'intérieur 
      //~ de celui-ci : portée de bloc

      // Exemple :

        function compareScopes() {
          if (true) {
          let letVariable = 'Je suis une variable let';
          }
          console.log(letVariable); 
          // Erreur : letVariable is not defined <=portée bloc = disponible que dans le if
          }

        compareScopes();
