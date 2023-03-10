"use strict";
class MyDate {
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const birthday = new MyDate(31, 12, 2000);
console.log(birthday);
//simplificando declaracao de classe e construtor
class MySimplifiedClassDate {
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const simplifiedBirthday = new MySimplifiedClassDate(31, 12, 2000);
console.log(simplifiedBirthday);
// Desafio classe produto
class MyProduct {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    discountPrice() {
        return this.price - (this.price * this.discount);
    }
    resumo() {
        return `${this.name} custa R$${this.discountPrice()} (${this.discount * 100}% off)`;
    }
}
const SSD = new MyProduct('SSD 480GB', 230);
const RAM = new MyProduct("RAM 16GB DDR4", 293, 0.1);
console.log(SSD.resumo());
console.log(RAM.resumo());
class Car {
    constructor(brand, model, maxSpeed = 200) {
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
    }
    changeSpeed(delta) {
        const newSpeed = this.currentSpeed + delta;
        const validSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed;
        if (validSpeed) {
            this.currentSpeed = newSpeed;
        }
        else {
            this.currentSpeed = delta > 0 ? this.maxSpeed : 0;
        }
        return this.currentSpeed;
    }
    speedUp() {
        return this.changeSpeed(5);
    }
    brake() {
        return this.changeSpeed(-5);
    }
}
const implementedCar = new Car('Ford', 'Ka', 185);
console.log(implementedCar);
Array(50).fill(0).forEach(() => implementedCar.speedUp());
console.log(implementedCar);
//simulando "erros"
// implementedCar.currentSpeed = 300
// console.log(`atual: ${implementedCar.currentSpeed}`)
// implementedCar.maxSpeed = 500
// console.log(`maxima: ${implementedCar.maxSpeed}`)
// implementedCar.changeSpeed(150)
// console.log(`atual: ${implementedCar.currentSpeed}`)
class Ferrari extends Car {
    constructor(model, maxSpeed) {
        super('Ferrari', model, maxSpeed);
    }
    speedUp() {
        return this.changeSpeed(20);
    }
    brake() {
        return this.changeSpeed(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(f40.speedUp());
console.log(f40.brake());
// Getters & Setters
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120) {
            this._age = value;
        }
    }
}
const me = new Person;
me.age = 22;
console.log("age:" + me.age);
// Classes abstratas - classes que não podem ser instanciadas
class Calc {
    constructor() {
        this.result = 0;
    }
    getresult() {
        return this.result;
    }
}
class Sum extends Calc {
    execute(...numbers) {
        this.result = numbers.reduce((total, currentNumber) => total + currentNumber);
    }
}
class Multiply extends Calc {
    execute(...numbers) {
        this.result = numbers.reduce((total, currentNumber) => total * currentNumber);
    }
}
let c1 = new Sum();
c1.execute(1, 2, 3, 4, 5);
let c2 = new Multiply();
c2.execute(1, 2, 3, 4, 5);
// Singleton
class Unique {
    constructor() { }
    static getInstance() {
        return Unique.instance;
    }
    now() {
        return new Date;
    }
}
Unique.instance = new Unique;
//errado = const wrong = new Unico()
console.log(Unique.getInstance().now());
// Somente leitura - após primeira atribuição
class Plane {
    constructor(model, prefix) {
        this.prefix = prefix;
        this.model = model;
    }
}
const myPlane = new Plane('Tu-114', 'PT-ABC');
// myPlane.model = 'DC-8' - gera erro por tentar sobrescrever o valor
// myPlane.prefix = 'PT-DEF' - gera erro por tentar sobrescrever o valor readonly
