// PROMESSES

/* Une promesse est un objet utilisé pour effectuer des opérations asynchrones dans JavaScript. 
        ==> DOC asynchrone : https://www.pierre-giraud.com/javascript-apprendre-coder-cours/introduction-asynchrone/

La promesse peut être dans l'un des trois états suivants : 
en attente (pending),résolue (fulfilled) ou rejetée (rejected).
*/

        /* Exemple :*/      const myPromise = new Promise((resolve, reject) => {
                                const data = fetchData();
                                if (data) {
                                    resolve(data); 
                                    // Promesse résolue avec les données
                                } else {
                                    reject("Error fetching data."); 
                                    // Promesse rejetée avec un message d'erreur
                                }
                            });


// Utilisation de la promesse
myPromise.then((data) => {console.log(data); })// Les données récupérées avec succès
.catch((error) => {console.log(error);});// Une erreur s'est produite lors de la récupération


// Pour terminer une promesse: resolve et reject. 
// Resolve indique que la promesse a été résolue avec succès et transmet les données associées.
// Reject indique que la promesse a été rejetée et transmet un message d'erreur.
    /* Exemple :*/      const myPromise1 = new Promise((resolve, reject) => {
                        const randomNumber = Math.random();
                            if (randomNumber > 0.5) {
                                resolve(randomNumber); 
                                // Promesse résolue avec le nombre aléatoire
                            } else {
                                reject("Number is too small."); 
                                // Promesse rejetée avec un message d'erreur
                            }
                        });
                        myPromise
                            .then((number) => {
                            console.log("Success:", number); // Promesse résolue avec succès
                            })
                            .catch((error) => {
                            console.log("Error:", error); // Promesse rejetée avec une erreur
                            });


// Pour gérer une promesse accomplie (résolue), vous pouvez utiliser la méthode then. 
// Elle prend une fonction de rappel en argument, qui sera exécutée lorsque la promesse est résolue avec succès.
        /* Exemple :    const myPromise2 = new Promise((resolve) => {
                            setTimeout(() => {
                                resolve("Promise resolved!");
                            }, 2000);
                            });
                        myPromise2.then((result) => {
                            console.log(result); // Affiche "Promise resolved!" après 2 secondes
                            });
        */

// méthode catch = pour gérer une promesse rejetée 
// prend une fonction de rappel en argument, qui sera exécutée lorsque la promesse est
// rejetée avec une erreur.
        /* Exemple :    const myPromise3 = new Promise((resolve, reject) => {
                            setTimeout(() => {
                                reject("Promise rejected!");
                            }, 2000);
                        });
                        myPromise3
                            .then((result) => {
                            console.log(result); // Cette partie ne sera pas exécutée
                            })
                            .catch((error) => {
                            console.log(error); // Affiche "Promise rejected!" après 2 secondes
                            });
        */

// La méthode finally peut être utilisée avec les promesses pour exécuter une
// fonction de rappel, indépendamment de la résolution ou du rejet de la promesse. Elle
// est utile pour effectuer des opérations de nettoyage ou des actions finales, quels que
// soient les résultats de la promesse.
// Exemple :
                    const myPromise4 = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve("Promise resolved!");
                        }, 2000);
                    });
                    myPromise4
                        .then((result) => {
                            console.log(result); // Affiche "Promise resolved!" après 2 secondes
                        })
                        .catch((error) => {
                            console.log(error); // Cette partie ne sera pas exécutée
                        })
                        .finally(() => {
                            console.log("Promise completed."); // Affiche "Promise completed." après la résolution ou le rejet
                        });