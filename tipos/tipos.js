"use strict";
// string
let userName = 'João';
console.log(userName);
//number
let age = 27;
age = 27.5;
console.log(age);
//boolean
let hasHobbies = true;
console.log(hasHobbies);
//tipos explicitos
let myName = 'Matheus';
let myAge = 22;
let hasHobbies2 = true;
let random; //se nao iniciar ou declarar valor, tb é considerado any
// array
let hobbies = ['Cozinhar', 'Desenhar', 'Jogar'];
// any[] me permite colocar qualquer tipo dentro do array
console.log(hobbies);
hobbies = [100];
// tupla - verifica tipos e ordem dos elementos do array
let address = ["Av Principal", 1];
console.log(address);
//enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Blue"] = 20] = "Blue";
    Color[Color["Orange"] = 21] = "Orange";
    Color[Color["Yellow"] = 22] = "Yellow";
    Color[Color["Red"] = 23] = "Red";
})(Color || (Color = {}));
let minhaCor = Color.Green;
console.log(Color);
//any
let car = "BMW";
car = { brand: "BMW", year: 2019 };
//funções
function returnMyName() {
    return myName;
}
function sayHi() {
    console.log('Hi');
}
sayHi();
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
console.log(multiply(2, 3));
function compareNumbers(numA, numB) {
    return numA === numB;
}
console.log(compareNumbers(2, 3));
// tipo função
let calc;
calc = multiply;
console.log(calc(2, 2));
// objetos
let user = {
    name: 'Joao',
    age: 27
};
console.log(user);
user = {
    age: 18,
    name: 'Jose'
};
console.log(user);
//desafio tipo objetos
let employee = {
    supervisors: ["joao", 'ana', 'jose'],
    clockIn: (time) => time <= 8 ? "Ponto normal" : "Fora do horário"
};
console.log(employee);
console.log(employee.clockIn(10));
let employee2 = {
    supervisors: ["marcos", 'carlos'],
    clockIn: (time) => time <= 8 ? "Ponto normal" : "Fora do horário"
};
let employee3 = {
    supervisors: ["matheus", 'henrique'],
    clockIn: (time) => time <= 8 ? "Ponto normal" : "Fora do horário"
};
// Union Types
let isBool = false;
console.log(isBool);
isBool = 1;
console.log(isBool);
// never - tipo usado para funcoes que nao tem um final, como loops infinitos ou lançamentos de erro
function throwingError(msg) {
    throw new Error(msg);
}
const product = {
    name: 'sabão',
    price: 1.3,
    validateProduct() {
        if (!this.name || this.name.trim().length == 0) {
            throwingError("Produto precisa ter um nome");
        }
        if (this.price <= 0) {
            throwingError('Preço inválido');
        }
    }
};
//valores opcionais com tipo null - null deve ser declarado
let optionalValue = 12;
//null na declaracao = any
let canBeNull = null;
canBeNull = 4;
canBeNull = 'test';
