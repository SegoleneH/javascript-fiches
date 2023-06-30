// méthode Test() :
// permet de vérifier si une correspondance est trouvée entre une expression régulière et une chaîne de caractères. 
// renvoie true si une correspondance est trouvée et false sinon.
// Exemple :
const regex = /hello/;
const string = "Hello, World!";
const result = regex.test(string);
console.log(result); // Affiche true

// match():
// Exemple : 
const regex = /hello/;
const string = "Hello, World!";
const result = string.match(regex);
console.log(result); // Affiche ["hello"]

// extraire les correspondances trouvées dans une chaîne de caractères à l'aide de la
// méthode match().
// Exemple :
const regex = /hello/;
const string = "Hello, World!";
const matches = string.match(regex);
console.log(matches); // Affiche ["hello"]

        // On peut spécifier différentes possibilités pour une correspondance de chaîne littérale 
        // à l'aide de l'opérateur | (pipe) qui signifie "ou".
        // Exemple :
        const regex = /apple|orange/;
        const string = "I have an apple and an orange";
        const result = string.match(regex);
        console.log(result); // Affiche ["apple"]


        // ajouter le modificateur "i" à une expression ==> ignorer la casse 
            const regex = /hello/i;
            console.log(regex.test("Hello, World!")); // Affiche true
            console.log(regex.test("HELLO")); // Affiche true


        // Le modificateur "g" (global) permet de trouver toutes les occurrences de la
        // correspondance dans la chaîne, et non seulement la première.
        // Exemple :
            const regex = /hello/g;
            const string = "Hello, hello, hello!";
            const matches = string.match(regex);
            console.log(matches); // Affiche ["hello", "hello", "hello"]


        // le point "." (point générique) est utilisé pour correspondre à 1 ou + caractère, 
        // (à l'exception des sauts de ligne).
        // Exemple :
            const regex = /h.t/;
            console.log(regex.test("hat")); // Affiche true
            console.log(regex.test("hot")); // Affiche true
            console.log(regex.test("hit")); // Affiche true
            console.log(regex.test("hut")); // Affiche true

        // crochets [] = correspondance d'un seul caractère parmi plusieurs possibilités
        // Exemple :
            const regex = /[aeiou]/;
            console.log(regex.test("hello")); // Affiche true

        // intervalles dans les crochets [] = correspondance à des lettres de l'alphabet 
        // Exemple :
            const regex = /[a-z]/;
            console.log(regex.test("hello")); // Affiche true
            console.log(regex.test("123")); // Affiche false

            // correspondre à des nombres et des lettres de l'alphabet
            // Exemple :
                const regex = /[a-z0-9]/;
                console.log(regex.test("hello123")); // Affiche true
                console.log(regex.test("@#$")); // Affiche false
                
        
        // "+"  = correspondance des caractères qui se produisent une ou plusieurs fois
        const regex = /a+/;
        console.log(regex.test("aa")); // Affiche true
        console.log(regex.test("abc")); // Affiche false

        // "*" = Correspondance des caractères qui se produisent zéro ou plusieurs fois
        const regex = /a*/;
        console.log(regex.test("aa")); // Affiche true
        console.log(regex.test("bc")); // Affiche true

// Par défaut, la correspondance des caractères est gourmande, ce qui signifie qu'elle tente de trouver
// la plus longue correspondance possible. Cependant, il est parfois nécessaire d'effectuer une correspondance 
// paresseuse, c'est-à-dire de trouver la plus petite correspondance possible. 
// ==> On utilise l'opérateur ? après l'opérateur de correspondance.
// Exemple :
    const regex = /a+?/;
    console.log(regex.exec("aaa")); // Affiche ["a"]
    console.log(regex.exec("aaaa")); // Affiche ["a"]

// Trouver une occurrence répétée d'un motif = effectuer une recherche dans un texte et trouver 
// toutes les occurrences correspondantes.
// Exemple :
    const regex = /criminal+/;
    console.log(regex.test("criminal")); // Affiche true
    console.log(regex.test("criminals")); // Affiche true ("criminal"+s = "criminals")
    console.log(regex.test("crime")); // Affiche false


// "^" = indique le début de la chaîne
// ==> vérifier si une chaîne commence par un motif spécifique
// Exemple :
    const regex = /^Hello/;
    console.log(regex.test("Hello, world!")); // Affiche true
    console.log(regex.test("Hi, there!")); // Affiche false

// "$" = indique la fin de la chaîne
// ==> vérifier si une chaîne se termine par un motif spécifique
// Exemple :
    const regex = /world!$/;
    console.log(regex.test("Hello, world!")); // Affiche true
    console.log(regex.test("Hi, there!")); // Affiche false


// \w = correspond à n'importe quelle lettre majuscule ou minuscule, chiffre ou souligné.
// Exemple :
const regex = /^\w+$/;
console.log(regex.test("Hello123")); // Affiche true
console.log(regex.test("Hello-123")); // Affiche false
console.log(regex.test("Hello_world")); // Affiche true


// \W = correspond à tout caractère qui n'est pas une lettre majuscule ou minuscule, un chiffre ou un souligné.
// Exemple :
const regex = /^\W+$/;
console.log(regex.test("Hello123")); // Affiche false
console.log(regex.test("Hello-123")); // Affiche true
console.log(regex.test("Hello_world")); // Affiche false


// \d = correspond à n'importe quel chiffre de 0 à 9.
// Exemple :
const regex = /^\d+$/;
console.log(regex.test("12345")); // Affiche true
console.log(regex.test("Hello123")); // Affiche false
console.log(regex.test("abc123")); // Affiche false


// \D = correspond à tout caractère qui n'est pas un chiffre
// Exemple :
const regex = /^\D+$/;
console.log(regex.test("12345")); // Affiche false
console.log(regex.test("Hello123")); // Affiche true
console.log(regex.test("abc123")); // Affiche true


// Restriction des noms d'utilisateur :
// Par exemple, vous pouvez limiter les noms d'utilisateur à une longueur minimale et maximale, 
// et spécifier les caractères autorisés.
// Exemple :
const regex = /^[a-zA-Z0-9_-]{3,20}$/;
console.log(regex.test("john_doe123")); // Affiche true
console.log(regex.test("jane.doe")); // Affiche false
console.log(regex.test("user-name-1234567890123456")); // Affiche false


// Correspondance des espaces blancs :
// \s = correspond à n'importe quel caractère d'espace blanc (espaces, tabulations et sauts de ligne).
// Exemple :
const regex = /\s+/;
console.log(regex.test("Hello World")); // Affiche true
console.log(regex.test("Hello\tWorld")); // Affiche true
console.log(regex.test("Hello\nWorld")); // Affiche true
console.log(regex.test("HelloWorld")); // Affiche false


// Correspondance des caractères non blancs :
// \S = correspond à n'importe quel caractère qui n'est pas un espace blanc.
// Exemple :
const regex = /\S+/;
console.log(regex.test("Hello World")); // Affiche true
console.log(regex.test(" ")); // Affiche false
console.log(regex.test("")); // Affiche false

// Spécification du nombre minimum et maximum de correspondances :
// {min, max}, min et max sont des nombres entiers (nombre minimum et maximum de correspondances)
// Exemple :
const regex = /ab{2,4}c/;
console.log(regex.test("abbc")); // Affiche true
console.log(regex.test("abbbc")); // Affiche true
console.log(regex.test("abbbbc")); // Affiche true
console.log(regex.test("abc")); // Affiche false
console.log(regex.test("abbbbbc")); // Affiche false


// Spécification d'un nombre exact de correspondances :
// {n}, où n est un nombre entier indiquant le nombre exact de correspondances
// Exemple :
const regex = /a{3}/;
console.log(regex.test("aaab")); // Affiche true
console.log(regex.test("ab")); // Affiche false
console.log(regex.test("aaa")); // Affiche true


// Vérification de présence optionnelle :
// "?" qui indique qu'un élément peut apparaître une fois ou pas du tout.
// Exemple :
const regex = /colou?r/;
console.log(regex.test("color")); // Affiche true
console.log(regex.test("colour")); // Affiche true
console.log(regex.test("colr")); // Affiche false

// Vérification de correspondances positives et négatives en avant :
// La positive lookahead (?=) permet de vérifier si un motif est suivi d'un autre motif, sans le consommer dans la correspondance. 
// La negative lookahead (?!) permet de vérifier si un motif n'est pas suivi d'un autre motif, sans le consommer dans la correspondance.
// Exemple :
const regex = /q(?=u)/;
console.log(regex.test("q")); // Affiche false
console.log(regex.test("qu")); // Affiche true
console.log(regex.test("qur")); // Affiche false

// Vérification de groupements mixtes de caractères :
// groupements mixtes de caractères = motifs où certains caractères peuvent apparaître dans 
// un ordre spécifique, mais avec d'autres caractères intercalés entre eux.
// Exemple :
const regex = /a(b|c)d/;
console.log(regex.test("abd")); // Affiche true
console.log(regex.test("acd")); // Affiche true
console.log(regex.test("aed")); // Affiche false

// Réutiliser des motifs en utilisant des groupes de capture :
// Les groupes de capture sont définis en utilisant des parenthèses (), et le contenu capturé peut être 
// référencé ultérieurement dans la même expression régulière ou lors de la recherche et du remplacement.
// Exemple :
const regex = /(abc)\1/;
console.log(regex.test("abcabc")); // Affiche true
console.log(regex.test("abcxyz")); // Affiche false

// Utiliser des groupes de capture pour rechercher et remplacer :
// Les groupes de capture sont définis en utilisant des parenthèses (), et le contenu capturé
// peut être référencé dans l'opération de remplacement en utilisant les symboles $1, $2, etc.
// Exemple :
const regex = /(\w+)\s(\w+)/;
const str = "John Doe";
const newStr = str.replace(regex, "$2, $1");
console.log(newStr); // Affiche "Doe, John"