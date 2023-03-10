"use strict";
const greetWhitOla = (person) => {
    console.log('Olá, ' + person.name);
};
const changeName = (person) => {
    person.name = 'Joana';
};
const person = {
    name: 'João',
    age: 27,
    greet(surname) {
        console.log(`Olá, meu nome é ${this.name} ${surname}`);
    }
};
greetWhitOla(person);
changeName(person);
greetWhitOla(person);
person.greet('Silva');
// greet({name: 'Jonas', age: 31, height: 1.73, hasHobbies: true})
// Usando classes...
class Client {
    constructor() {
        this.name = '';
        this.lastBuy = new Date;
    }
    greet(surname) {
        console.log(`Olá, meu nome é ${this.name} ${surname}`);
    }
}
const myClient = new Client();
myClient.name = 'Han';
greetWhitOla(myClient);
myClient.greet('Solo');
console.log(myClient.lastBuy);
let potencia;
potencia = (base, exp) => base ** exp;
console.log(potencia(3, 10));
