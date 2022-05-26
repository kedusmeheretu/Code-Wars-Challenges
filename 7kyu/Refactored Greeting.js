// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

// var joe = new Person('Joe');
// joe.greet('Kate'); 
// joe.name           

// Solution

class Person {
  constructor(name) {
    this.name = name;
  }
  greet(name) {
    return `Hello ${name}, my name is ${this.name}`;
  }
}

// Test
var joe = new Person('Joe');
console.log(joe.greet('Kate')); // should return 'Hello Kate, my name is Joe'
console.log(joe.name)           // should == 'Joe'
