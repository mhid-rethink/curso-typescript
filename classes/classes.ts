class MyDate {
    day: number
    month: number
    year: number
    

    constructor(day:number = 1, month: number = 1, year: number = 1970) {
        this.day = day
        this.month = month
        this.year = year
    }
}

const birthday = new MyDate(31, 12, 2000);
console.log(birthday)

//simplificando declaracao de classe e construtor
class MySimplifiedClassDate {
    constructor(public day: number = 1,public  month: number = 1,public  year: number = 1970) {

    }
}

const simplifiedBirthday = new MySimplifiedClassDate(31, 12, 2000);
console.log(simplifiedBirthday)

// Desafio classe produto
class MyProduct {
    constructor(public name: string, public price: number, public discount: number = 0) {
        
    }

    public discountPrice(): number {
        return this.price - (this.price * this.discount)
    }
    public resumo(): string {
        return `${this.name} custa R$${this.discountPrice()} (${this.discount * 100}% off)`
    }
}

const SSD = new MyProduct('SSD 480GB', 230);
const RAM = new MyProduct("RAM 16GB DDR4", 293, 0.1);
console.log(SSD.resumo())
console.log(RAM.resumo())

class Car {
    private currentSpeed: number = 0

    constructor(public brand: string, public model: string, private maxSpeed: number = 200) {

    }
    
    protected changeSpeed(delta: number): number {
        const newSpeed = this.currentSpeed + delta
        const validSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed
        if (validSpeed) {
            this.currentSpeed = newSpeed
        } else {
            this.currentSpeed = delta > 0 ? this.maxSpeed : 0
        }

        return this.currentSpeed
    }

    public speedUp(): number {
        return this.changeSpeed(5)
    }
    
    public brake(): number {
        return this.changeSpeed(-5)
    }
}

const implementedCar = new Car('Ford', 'Ka', 185);
console.log(implementedCar)
Array(50).fill(0).forEach(() => implementedCar.speedUp())
console.log(implementedCar)

//simulando "erros"
// implementedCar.currentSpeed = 300
// console.log(`atual: ${implementedCar.currentSpeed}`)
// implementedCar.maxSpeed = 500
// console.log(`maxima: ${implementedCar.maxSpeed}`)
// implementedCar.changeSpeed(150)
// console.log(`atual: ${implementedCar.currentSpeed}`)

class Ferrari extends Car {
    constructor(model: string, maxSpeed: number) {
        super('Ferrari',model,maxSpeed)
    }
    public speedUp(): number {
        return this.changeSpeed(20)
    }
    
    public brake(): number {
        return this.changeSpeed(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(f40.speedUp())
console.log(f40.brake())

// Getters & Setters
class Person {
    private _age: number = 0

    get age(): number {
        return this._age
    }

    set age(value: number) {
        if (value >= 0 && value <= 120) {
            this._age = value
        }
    }
}

const me = new Person;
me.age = 22
console.log("age:" + me.age)

// Classes abstratas - classes que não podem ser instanciadas
abstract class Calc {
    protected result: number = 0

    abstract execute(...numbers: number[]): void

    getresult(): number {
        return this.result
    }
}

class Sum extends Calc {
    execute(...numbers: number[]): void {
        this.result = numbers.reduce((total,currentNumber) => total+currentNumber)
    }

}

class Multiply extends Calc {
    execute(...numbers: number[]): void {
        this.result = numbers.reduce((total, currentNumber) => total * currentNumber)
    }
}

let c1 = new Sum()
c1.execute(1,2,3,4,5)

let c2 = new Multiply()
c2.execute(1,2,3,4,5)

// Singleton
class Unique {
    private static instance: Unique = new Unique
    private constructor() {}

    static getInstance(): Unique {
        return Unique.instance
    }

    now() {
        return new Date
    }
}

//errado = const wrong = new Unico()
console.log(Unique.getInstance().now())

// Somente leitura - após primeira atribuição
class Plane {
    public readonly model: string

    constructor(model: string, public readonly prefix: string) {
        this.model = model
    }
}

const myPlane = new Plane('Tu-114', 'PT-ABC')
// myPlane.model = 'DC-8' - gera erro por tentar sobrescrever o valor
// myPlane.prefix = 'PT-DEF' - gera erro por tentar sobrescrever o valor readonly
