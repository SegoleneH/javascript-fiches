// LES MODULES 

// Découper le code en plusieurs fichiers et les importer/exporter entre eux. 
// ==> Cela facilite la gestion du code et favorise la modularité.

        // Exemple :
                // On crée un script de module math.js
                        /* Dans le fichier math.js :
                                                        export const add = (a, b) => a + b;
                                                        export const subtract = (a, b) => a - b;
                        */

                        /* Dans le fichier main.js :
                                                        import { add, subtract } from './math.js';
                                                        console.log(add(2, 3)); // Affiche 5
                                                        console.log(subtract(5, 2)); // Affiche 3
                        */


// Avec "export default", on peut exporter une seule valeur, fonction ou objet par défaut dans un module 
// ==> Permet d'importer cette valeur sans avoir besoin de l'entourer de crochets.

        // Exemple :
                /* Dans le fichier math.js :
                                                const add = (a, b) => a + b;
                                                const subtract = (a, b) => a - b;
                                                export default add;
        */

                 /* Dans le fichier main.js :
                                                import sum from './math.js';
                                                console.log(sum(2, 3)); // Affiche 5
        */


        // Lorsque vous utilisez export default pour exporter une valeur, fonction ou
        // objet par défaut dans un module, vous pouvez l'importer sans utiliser de noms
        // spécifiques en utilisant simplement import.

        /* Exemple :
                // Dans le fichier math.js :
                                        const multiply = (a, b) => a * b;
                                        export default multiply;
        

                // Dans le fichier main.js :
                                        import multiply from './math.js';
                                        console.log(multiply(2, 3)); // Affiche 6
        */
// Les modules sont utilisés pour organiser le code JavaScript en séparant les
// fonctionnalités en fichiers distincts. 
// Chaque module peut exporter des valeurs, fonctions ou objets spécifiques, qui peuvent ensuite
//  être importés dans d'autres fichiers pour une utilisation.

        /* Exemple :
                // Dans le fichier math.js :
                                                export const add = (a, b) => a + b;
                                                export const subtract = (a, b) => a - b;

                // Dans le fichier main.js :
                                                import { add, subtract } from './math.js';
                                                console.log(add(2, 3)); // Affiche 5
                                                console.log(subtract(5, 2)); // Affiche 3
                */

// Voici un exemple de structure de fichiers :

        // player.js :

        export const play = (song) => {
        // Code pour lire la chanson
        console.log("Lecture de la chanson :", song);
        };

        export const pause = () => {   
        // Code pour mettre en pause la lecture
        console.log("Lecture en pause");
        };

        export const setVolume = (volume) => {
        // Code pour régler le volume
        console.log("Réglage du volume :", volume);
        };

        // playlist.js :

        export const songs = ["Chanson 1", "Chanson 2", "Chanson 3"];

        // main.js :
        import { play, pause, setVolume } from './player.js';
        import { songs } from './playlist.js';
        const currentSong = songs[0];
        play(currentSong);
        setVolume(0.8);
        pause();


// Exporter une valeur par défaut depuis un module :

// Cela permet d'importer cette valeur sans avoir besoin de l'entourer de crochets.

        /* Exemple :
                        // Dans le fichier math.js :
                                const multiplyBis = (a, b) => a * b;
                                export default multiplyBis;

                        // Dans le fichier main.js :
                                import multiplyBis from './math.js';
                                console.log(multiplyBis(2, 3)); // Affiche 6
        */


// Importer une valeur par défaut depuis un module :

// Lorsqu'un module exporte une valeur par défaut, vous pouvez l'importer sans
// utiliser de noms spécifiques en utilisant simplement import.

        /* Exemple :
                        // Dans le fichier math.js :
                                const divide = (a, b) => a / b;
                                export default divide;

                        // Dans le fichier main.js :
                                import divide from './math.js';
                                console.log(divide(6, 2)); // Affiche 3
        */