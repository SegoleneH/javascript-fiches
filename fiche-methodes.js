// Methods are functions that are stored as object properties. 

    // Use the following syntax to create an object method:
// methodName = function() { code lines }

    // Access an object method using the following syntax:
objectName.methodName()


// A method belongs to its object. 

// With the this. keyword, you can access the object's properties and methods.

// Defining methods is done inside the constructor function.

// For example:

function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
    this.name = name;
  }
}

var p = new person("David", 21);
p.changeName("John");
//Now p.name equals "John"