//Rest & Spread
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const classA: string[] = ['João', 'Maria', 'Fernanda']
const classB: string[] = ['Fernando', 'Miguel', 'Lorena', ...classA]
console.log(classB)

// let returnArray = (arg1: number, arg2: number): number[] => [arg1, arg2]
let returnArray = (...args: number[]): number[] => args
console.log(returnArray(1, 2, 3, 4, 5))

//Destructuring (array)
const features = ['Motor Zetec 1.8', 2020]
// const motor = features[0]
// const year = features[1]
const [motor, ano] = features
console.log(motor, ano)

//Destructuring (objeto)
const item = {
    name: 'SSD 480GB',
    price: 200,
    features: {
        local: "Importado"
    }
}
// const itemName = item.name
// const itemPrice = item.price
const {name: itemName, price: itemPrice, features: {local: itemFeature}} = item;
console.log( itemName, itemPrice)

// Template String
const userID: string = 'Matheus Dias'
const notifications: string = '9'
// const welcome: string = "Boas vindas " + userID + ". Notificações: " + notifications
const welcome: string =`Boas vindas ${userID}. Notificações: ${parseInt(notifications) > 9 ? '+9' : notifications}`

// Desafios
// Exercicio 1
const double = (valor: number): number => valor * 2
console.log(double(10))

// Exercicio 2
const sayHiPerson = (name: string = 'Pessoa'): void => console.log (`Olá, ${name}`)
sayHiPerson()
sayHiPerson('Anna')

// Exercicio 3
const nums = [-3, 33, 38, 5]
// Imprimir o menor valor
console.log(Math.min(...nums))

// Exercicio 4
const array = [55, 20]
// Adicionar todos os elementos de "nums" em array
array.push(...nums)
console.log(array)

// Exercicio 5
var grades = [8.5, 6.3, 9.4]
// var nota1 = notas[0]
// var nota2 = notas[1]
// var nota3 = notas[2]
const [grade1, grade2, grade3] = grades
console.log(grade1, grade2, grade3)

// Exercicio 6
var cientista = { primeiroNome: 'Will', expeciencia: 12 }
// var primeiroNome = cientista.primeiroNome
// var expeciencia = cientista.expeciencia
const {primeiroNome: firstName, expeciencia: experience} = cientista
console.log(firstName, experience)