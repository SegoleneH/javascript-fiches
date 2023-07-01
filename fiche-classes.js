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
      
