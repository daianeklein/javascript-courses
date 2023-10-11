'use strict';

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    //dont do this!!
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear)
    // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas)

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// const matilde = new Person('Matilda', 2017)
// const daiane = new Person('Daiane', 2004)
//console.log(matilde, daiane)

//testing OOP
console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function(){
        console.log(2037 - this.birthYear)
    }

console.log(jonas.calcAge())