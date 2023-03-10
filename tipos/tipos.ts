// string
let userName = 'João'
console.log(userName)

//number
let age = 27
age = 27.5
console.log(age)

//boolean
let hasHobbies = true
console.log(hasHobbies)

//tipos explicitos
let myName: string = 'Matheus'
let myAge: number = 22
let hasHobbies2: boolean = true
let random: any; //se nao iniciar ou declarar valor, tb é considerado any

// array
let hobbies: any[] = ['Cozinhar', 'Desenhar','Jogar']
// any[] me permite colocar qualquer tipo dentro do array
console.log(hobbies)
hobbies = [100]

// tupla - verifica tipos e ordem dos elementos do array
let address: [string, number] = ["Av Principal", 1];
console.log(address)

//enums
enum Color {
    Gray,
    Green = 10,
    Blue = 20,
    Orange,
    Yellow,
    Red
}
let minhaCor: Color = Color.Green;
console.log(Color)

//any
let car:any = "BMW"
car = {brand: "BMW", year: 2019}

//funções
function returnMyName(): string {
    return myName
}

function sayHi(): void {
    console.log('Hi')
}
sayHi()

function multiply(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber
}
console.log(multiply(2,3))

function compareNumbers(numA: number, numB: number): boolean {
    return numA === numB
}

console.log(compareNumbers(2, 3))

// tipo função
let calc: (numeroA: number, numeroB: number) => number
calc = multiply
console.log(calc(2,2))

// objetos
let user: {name: string, age: number} = {
    name: 'Joao',
    age: 27
}
console.log(user)

user = {
    age: 18,
    name: 'Jose'
}
console.log(user)

//desafio tipo objetos
let employee: {supervisors: string[],clockIn: (x:number) => string} = {
    supervisors: ["joao", 'ana', 'jose'],
    clockIn: (time: number): string => time <= 8 ? "Ponto normal" : "Fora do horário"
}

console.log(employee)
console.log(employee.clockIn(10))

// criando um tipo
type Employee = {supervisors: string[],clockIn: (x:number) => string}

let employee2: Employee  = {
    supervisors: ["marcos", 'carlos'],
    clockIn: (time: number): string => time <= 8 ? "Ponto normal" : "Fora do horário"
}
let employee3: Employee = {
    supervisors: ["matheus", 'henrique'],
    clockIn: (time: number): string => time <= 8 ? "Ponto normal" : "Fora do horário"
}

// Union Types
let isBool: boolean | number = false;
console.log(isBool)
isBool = 1
console.log(isBool)

// never - tipo usado para funcoes que nao tem um final, como loops infinitos ou lançamentos de erro
function throwingError(msg: string): never {
    throw new Error(msg);
}

const product = {
    name: 'sabão',
    price: 1.3,
    validateProduct() {
        if (!this.name || this.name.trim().length == 0) {
            throwingError("Produto precisa ter um nome")
        }
        if (this.price <=0) {
            throwingError('Preço inválido')
        }
    }
}

//valores opcionais com tipo null - null deve ser declarado
let optionalValue: null | number = 12

//null na declaracao = any
let canBeNull = null
canBeNull = 4
canBeNull = 'test'