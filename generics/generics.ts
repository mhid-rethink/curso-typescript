// Usando generic - evita erros do any ao usar funções que
// nao existem em um tipo de dado
function echoGeneric<T>(object: T): T {
  return object;
}

console.log(echoGeneric("João").length);
// console.log(echoGeneric(27).length) //acusa erro por number não ter length
console.log(echoGeneric<number>(27)); //inferir o tipo explicitamente no momento da execução
console.log(echoGeneric({ nome: "João", idade: 27 }));

// Gererics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);

// Generics com Array
function print<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

print([1, 2, 3]);
print<number>([1, 2, 3]);
print<string>(["joao", "jose", "carlos"]);
print<{ name: string; age: number }>([
  { name: "Matheus", age: 22 },
  { name: "Henrique", age: 23 },
  { name: "Inacio", age: 24 },
]);
// outra forma...
type Aluno = { name: string; age: number };
print<Aluno>([
  { name: "Matheus", age: 22 },
  { name: "Henrique", age: 23 },
  { name: "Inacio", age: 24 },
]);

// tipo generico
const callEcho: <T>(data: T) => T = echoGeneric;
console.log(callEcho<string>("callEcho Chamando string"));
type TypeEcho = <T>(data: T) => T;
const callEcho2: TypeEcho = echoGeneric;
console.log(callEcho2<string>("callEcho2 sChamando string"));

// diferença Class com any e com Generics
class BinaryOperation {
  constructor(public parameter1: any, public parameter2: any) {}

  execute() {
    return this.parameter1 + this.parameter2;
  }
}

console.log(new BinaryOperation("Bom ", "dia").execute());
console.log(new BinaryOperation(3, 7).execute());
console.log(new BinaryOperation(3, "Opa").execute());
console.log(new BinaryOperation({}, null).execute());

abstract class BinaryOperationGenerics<T, R> {
  constructor(public parameter1: T, public parameter2: T) {}

  abstract execute(): R;
}

// console.log(new BinaryOperationGenerics('Bom ', 'dia').execute())
// console.log(new BinaryOperationGenerics(3, 7).execute())
// console.log(new BinaryOperationGenerics(3, 'Opa').execute())
// console.log(new BinaryOperationGenerics({},null).execute())

class BinarySum extends BinaryOperationGenerics<number, number> {
  execute(): number {
    return this.parameter1 + this.parameter2;
  }
}

console.log(new BinarySum(3, 4).execute());

class DateDifference extends BinaryOperationGenerics<MyDate, string> {
  getTime(date: MyDate): number {
    let { day, month, year } = date;
    return new Date(`${month}/${day}/${year}`).getTime();
  }

  execute(): string {
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
