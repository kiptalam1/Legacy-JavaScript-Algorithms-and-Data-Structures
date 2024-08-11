/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)

Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. 
Each test will declare a new Person instance as new Person('Bob', 'Ross').
*/

const Person = function(first, last) {
  // use local variables to store the state
  let firstName = first;
  let lastName = last;
  
  this.getFirstName = function() {
  return firstName
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = function(first) {
    firstName = first;
  };

  this.setLastName = function(last) {
    lastName = last;
  };

  this.setFullName = function (first, last) {
    firstName = first;
    lastName = last;
  };
};


const person = new Person('Bob', 'Ross');
console.log(person.getFirstName())
console.log(person.getLastName());
console.log(person.getFullName());
console.log();

const person1 = new Person();
person1.setFirstName('Evans');
console.log(person1.getFirstName())

//****************************************************************************************************************************************************************

// Method 2: For ES6 (modern way):

class Person {
  #firstName; // private field for first name
  #lastName;  // private field for last name

  constructor(first, last) {
    this.#firstName = first;
    this.#lastName = last;
  }

  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  setFirstName(name) {
    this.#firstName = name;
  }

  setLastName(name) {
    this.#lastName = name;
  }

  setFullName(first, last) {
    this.#firstName = first;
    this.#lastName = last;
  }
}

// Example usage
const person = new Person('Bob', 'Ross');
console.log(person.getFirstName()); // Should output: Bob
console.log(person.getLastName()); // Should output: Ross
console.log(person.getFullName()); // Should output: Bob Ross
person.setFirstName('Haskell');
console.log(person.getFullName()); // Should output: Haskell Ross
person.setLastName('Curry');
console.log(person.getFullName()); // Should output: Haskell Curry
person.setFullName('Emily Martinez', 'de la Rosa');
console.log(person.getFullName()); // Should output: Emily Martinez de la Rosa
