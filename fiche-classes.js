// Théorie : La syntaxe de classe en JavaScript permet de définir des fonctions constructeur 
// d'objets de manière plus concise. 
// Classes = prototypes avancés qui peuvent créer des objets et définir leurs méthodes.
    // Exemple :
              class Person {
                  constructor(name, age) {
                    this.name = name;
                    this.age = age;
                  }
                  sayHello() {
                    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
                  }
                }
                const john = new Person("John", 25);
                john.sayHello(); // Affiche "Hello, my name is John. I am 25 years old."
                
//* Il existe des prototypes par défaut.
// Il existe des méthodes spécifiques au type de données qui sont traitées: 
              // str > str.prototype = str.prototype peut accéder à toutes les méthodes qui sont accessibles pour une string (.push, .pop... etc)

              // les prototypes sont des fonctions

//* Les classes sont des prototypes que l'on crée soi-même 

  //* MODÈLE
      class Student {
        ecole = 'Jules Ferry'
        constructor (firstname, lastname){
          console.log(this);
        }
      //* SETTER
        set notes (notes){
          this.notes = notes
        }

      //* GETTER
        get name (){
          return `${this.firstname} ${this.lastname}`
        }

        canPass (){
          return moyenne(this.notes) >= Student.moyenne
        }
      //* Méthode statique = injecte valeur dans objet = appelable sur objet Student
        static moyenne = 10

      }
  //* CRÉATION OBJET À PARTIR DU MODÈLE (=COPIE)
      const george = new Student('George', 'Orwell')
      const georgette = new Student('Georgette', 'Orwell')
      //* = instances de l'objet Student
      george.notes = []
      georgette.notes= [12, 10, 13]

      console.log(george)

      
  //* MVC = Modèle Vue Contrôleur
    // Vue = front, ce que l'utilisateur voit (HTML, CSS, Js etc...) ==> envoie données dans back = requête Http
    // Contrôleur = back (php, nodeJs etc...)           ==> envoie données reçues dans Bdd
    // Modèle = données ( Bdd, SQL )    ==> renvoie données au back, qui les renvoie dans le front = répond à la requête
    