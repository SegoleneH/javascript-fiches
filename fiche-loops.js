
// Itération avec des nombres impairs à l'aide d'une boucle for :
// Exemple :
                  for (var i = 1; i <= 10; i += 2) {
                  console.log(i);
                  }


// Il est possible de remplacer certaines boucles par des fonctions récursives,
//  c'est-à-dire des fonctions qui s'appellent elles-mêmes.
    // Exemple :
                    function countDown(n) {
                        if (n > 0) {
                        console.log(n);
                        countDown(n - 1);
                        }
                    }
                    countDown(5);
    

    // Exemple 2: 
                    function countDown (number) {
                        if (number <= 0) {      // condition d'arrêt
                          return
                        }
                        console.log(number) // résolution du problème
                        countDown(number - 1) // appel récursif
                      }
                      countDown(2)
    