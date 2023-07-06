//* 1- BOUCLE FOR CLASSIQUE

  for(let i = 0; i < 10; i++) {   // à partir de 0, si i < 10, y ajouter 1
    console.log("i=" + i)  
    // console.log : i=0, i=1, i=2, i=3, i=4, i=5, i=6, i=7, i=8, i=9
  }

    //! Sens de lecture : for(1; 2; 4)
    //!                       3
    // 1) let i = 0 : declaration de valeur dans une variable (peut être un boolean)
    // 2) i < 10 : condition de continuation : si i < 10, on continue la boucle
    // 3)console.log("i=" + i) : corps de la boucle
    // 4) i++ : incrément



  //~  BOUCLE A REBOURS
  for(let i = 10; i > 0; i--) {
    console.log("i=" + i)
    // console.log : i=10, i=9, i=8, i=7, i=6, i=5, i=4, i=3, i=2, i=1
  }

//____________________________________________________________________________________________________________________________

//* 2- BOUCLE FOR EACH
let users = ['foo', 'bar', 'baz']

for (let user of users){        // "Of" permet de récupérer l'élément
  console.log(user);
}


for (let user in users){        // "In" permet de récupérer l'index de l'élément
  console.log(user);
}

for (let i in users){           
  let user = users[i];        // permet de récupérer les 2
  console.log(`i= ${i}, user = ${user}`);     // ` != ' | `=Alt Gr + 7
}

//____________________________________________________________________________________________________________________________

//* 3- METHODE FOR EACH ASYNCHRONE

  users.forEach(
    function(user, i, list) {
        console.log(`i = ${i}, user = ${user}`);
    }
  );

//! À COMPLÉTER - https://www.pierre-giraud.com/javascript-apprendre-coder-cours/introduction-asynchrone/
//! mode synchrone:  je fais 1 truc, quand j'ai fini je passe à un autre truc
//! mode asynchrone: je fais 1 truc, je vérifie s'il n'y a pas d'autre truc à faire, puis je passe à un autre truc
  //^ On peut prendre l’exemple d’un restaurant. Plusieurs clients sont attablés. Ils peuvent passer commande en même
  //^ temps s’ils le souhaitent et être servis dès que leur plat est prêt. D’un point de vue programmation, ce scénario
  //^ est asynchrone. Imaginons maintenant que le restaurant ne possède qu’un employé qui est donc à la fois serveur et 
  //^cuisinier et que celui-ci ne puisse faire qu’un plat à la fois. Chaque client doit donc attendre que le précédent 
  //^ ait été servi pour passer commande. D’un point de vue informatique, ce scénario est synchrone.
//! AJAX = Asynchronous JavaScript request & XML

//____________________________________________________________________________________________________________________________


//* Syntaxe alternative : fonctions fléchées = syntaxe à utiliser 
users.forEach(
  (user, i, list) => {
      console.log(`i = ${i}, user = ${user}`);
  }
);


//____________________________________________________________________________________________________________________________


//* Il est possible de remplacer certaines boucles par des fonctions récursives,
//^  fonctions récursives = fonctions qui s'appellent elles-mêmes
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
    