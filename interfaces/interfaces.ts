interface Human {
    name: string,
    age?: number,
    [prop: string]: any,
    greet(surname: string): void
}
const greetWhitOla = (person: Human): void => {
    console.log('Olá, ' + person.name)
}

const changeName = (person: Human) => {
    person.name = 'Joana'
}

const person = {
    name: 'João',
    age: 27,
    greet(surname: string) {
        console.log(`Olá, meu nome é ${this.name} ${surname}`)
    }
}

greetWhitOla(person)
changeName(person)
greetWhitOla(person)

person.greet('Silva')
// greet({name: 'Jonas', age: 31, height: 1.73, hasHobbies: true})

// Usando classes...
class Client implements Human {
    name: string = ''
    lastBuy: Date = new Date
    greet(surname: string) {
        console.log(`Olá, meu nome é ${this.name} ${surname}`)
    }
}

const myClient = new Client()
myClient.name = 'Han'
greetWhitOla(myClient)
myClient.greet('Solo')
console.log(myClient.lastBuy)

//Interface função
interface CalcFunction {
    (a: number, b:number):number
}

let potencia: CalcFunction

potencia = (base: number, exp: number): number => base ** exp

console.log(potencia(3,10))