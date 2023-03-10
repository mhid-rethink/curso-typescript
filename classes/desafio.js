"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(name) {
        this.name = name;
        this._currentSpeed = 0;
    }
    get speed() {
        return this._currentSpeed;
    }
    honk() {
        console.log('Toooooooooot!');
    }
    speedUp(delta) {
        this._currentSpeed += delta >= 0 ? this._currentSpeed += delta : this._currentSpeed = 0;
        return this._currentSpeed;
    }
}
var moto = new Moto('Ducati');
moto.honk();
console.log(moto.speed);
moto.speedUp(30);
console.log(moto.speed);
// Exercício 2 - Herança
class Object2D {
    constructor(base = 0, height = 0) {
        this.base = base;
        this.height = height;
    }
}
class Rectangle extends Object2D {
    constructor(base = 0, height = 0) {
        super(base, height);
        this.base = base;
        this.height = height;
    }
    area() {
        return this.base * this.height;
    }
}
const rectangle = new Rectangle(5, 7);
console.log(rectangle.area());
// Exercício 3 - Getters & Setters
class intern {
    constructor(enumerable = true, configurable = true) {
        this.enumerable = enumerable;
        this.configurable = configurable;
        this._firstName = '';
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(inputName) {
        inputName.length >= 3 ? this._firstName = inputName : this._firstName = '';
    }
}
const myIntern = new intern();
console.log(myIntern.firstName);
myIntern.firstName = 'Le';
console.log(myIntern.firstName);
myIntern.firstName = 'Leonardo';
console.log(myIntern.firstName);
