"use strict";
// Usando generic - evita erros do any ao usar funções que
// nao existem em um tipo de dado
function echoGeneric(object) {
    return object;
}
console.log(echoGeneric("João").length);
// console.log(echoGeneric(27).length) //acusa erro por number não ter length
console.log(echoGeneric(27)); //inferir o tipo explicitamente no momento da execução
console.log(echoGeneric({ nome: "João", idade: 27 }));
// Gererics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Generics com Array
function print(args) {
    args.forEach((element) => console.log(element));
}
print([1, 2, 3]);
print([1, 2, 3]);
print(["joao", "jose", "carlos"]);
print([
    { name: "Matheus", age: 22 },
    { name: "Henrique", age: 23 },
    { name: "Inacio", age: 24 },
]);
print([
    { name: "Matheus", age: 22 },
    { name: "Henrique", age: 23 },
    { name: "Inacio", age: 24 },
]);
// tipo generico
const callEcho = echoGeneric;
console.log(callEcho("callEcho Chamando string"));
const callEcho2 = echoGeneric;
console.log(callEcho2("callEcho2 sChamando string"));
// diferença Class com any e com Generics
class BinaryOperation {
    constructor(parameter1, parameter2) {
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
    }
    execute() {
        return this.parameter1 + this.parameter2;
    }
}
console.log(new BinaryOperation("Bom ", "dia").execute());
console.log(new BinaryOperation(3, 7).execute());
console.log(new BinaryOperation(3, "Opa").execute());
console.log(new BinaryOperation({}, null).execute());
class BinaryOperationGenerics {
    constructor(parameter1, parameter2) {
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
    }
}
// console.log(new BinaryOperationGenerics('Bom ', 'dia').execute())
// console.log(new BinaryOperationGenerics(3, 7).execute())
// console.log(new BinaryOperationGenerics(3, 'Opa').execute())
// console.log(new BinaryOperationGenerics({},null).execute())
class BinarySum extends BinaryOperationGenerics {
    execute() {
        return this.parameter1 + this.parameter2;
    }
}
console.log(new BinarySum(3, 4).execute());
class DateDifference extends BinaryOperationGenerics {
    getTime(date) {
        let { day, month, year } = date;
        return new Date(`${month}/${day}/${year}`).getTime();
    }
    execute() {
        const time1 = this.getTime(this.parameter1);
        const time2 = this.getTime(this.parameter2);
        const difference = Math.abs(time1 - time2);
        const day = 1000 * 60 * 60 * 24;
        return `${Math.ceil(difference / day)} dia(s)`;
    }
}
const date1 = new MyDate(1, 12, 2022);
const date2 = new MyDate(5, 12, 2022);
console.log(new DateDifference(date1, date2).execute());
class queue {
}
