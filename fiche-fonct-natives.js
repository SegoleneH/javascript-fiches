//* Math.random()
//^ ==> générer des fractions aléatoires entre 0 (inclus) et 1 (exclus).
        // Exemple :
                        var randomFraction = Math.random();
                        console.log(randomFraction);


//* Math.random() (sur des opérations mathématiques)
//^ ==> générer des nombres entiers aléatoires dans une plage spécifique.
        // Exemple :
                        var randomInteger = Math.floor(Math.random() * 10);
                        console.log(randomInteger);


//* parseInt 
//^ est utilisée pour convertir une chaîne de caractères en un entier.
        // Exemple :
                        var number = parseInt("10");
                        console.log(number);


//* document.write() outputs data. 

        // The write() function is actually a method of the document object.
                // Exemple:
                                document.write("This is some text");


//* split() 
//^ Convertir une chaîne en tableau de caractères :
        // La méthode split() divise une chaîne en un tableau de sous-chaînes en utilisant un séparateur spécifié. 
        // Si aucun séparateur n'est spécifié, la méthode divise la chaîne en un tableau de caractères individuels.
                // Exemple :
                                const string = "Hello, World!";
                                const stringArray = string.split("");
                                console.log(stringArray); 
                                // ^ Affiche ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]

//* join() 
//^ Convertir un tableau de caractères en chaîne :
        // La méthode join() combine tous les éléments d'un tableau en une seule chaîne en utilisant un séparateur spécifié. 
        // Si aucun séparateur n'est spécifié, les éléments du tableau sont concaténés sans séparation.
                // Exemple :
                                const charArray = ["H", "e", "l", "l", "o"];
                                const str = charArray.join("");
                                console.log(str); // Affiche "Hello"

//* splice()