// Exercício 1 - Classe
class Moto {
    private _currentSpeed = 0
    constructor(public name: string) {}

    get speed(): number {
        return this._currentSpeed
    }
    public honk(): void {
        console.log('Toooooooooot!')
    }
 
    public speedUp(delta: number): number {
        this._currentSpeed += delta >= 0 ? this._currentSpeed += delta : this._currentSpeed = 0
        return this._currentSpeed
    }
}
 
var moto = new Moto('Ducati')
moto.honk()
console.log(moto.speed)
moto.speedUp(30)
console.log(moto.speed)
 
// Exercício 2 - Herança
abstract class Object2D {
    constructor(protected base: number = 0, protected height: number = 0) {

    }
    abstract area(): number
}
 
class Rectangle extends Object2D {
    constructor(protected base: number = 0, protected height: number = 0) {
        super(base, height)
    }
    public area(): number {
        return this.base * this.height
    }
}

const rectangle = new Rectangle(5,7)
console.log(rectangle.area())
 
// Exercício 3 - Getters & Setters
class intern {
    private _firstName: string = ''
    constructor(public enumerable: boolean = true, public configurable: boolean = true) {}
    
    get firstName(): string {
        return this._firstName
    }
    
    set firstName(inputName: string) {
        inputName.length >= 3 ? this._firstName = inputName : this._firstName = ''
    }
}
 
const myIntern = new intern();
console.log(myIntern.firstName)
myIntern.firstName = 'Le'
console.log(myIntern.firstName)
myIntern.firstName = 'Leonardo'
console.log(myIntern.firstName)
