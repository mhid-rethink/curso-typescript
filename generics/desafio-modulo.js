"use strict";
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
class ChallengeMap {
    constructor() {
        this.items = new Array();
        // put = (newElement: Pair) => {
        // }
        this.get = (key) => {
            const result = this.items.find((item) => item.key === key);
            return result ? result : null;
        };
        this.put = (pair) => {
            const found = this.get(pair.key);
            if (found) {
                found.value = pair.value;
            }
            else {
                this.items.push(pair);
            }
        };
        this.clean = () => (this.items = new Array());
        this.print = () => {
            console.log(this.items);
        };
    }
}
const myMap = new ChallengeMap();
myMap.put({ key: 1, value: "Pedro" });
myMap.put({ key: 2, value: "Rebeca" });
myMap.put({ key: 3, value: "Maria" });
myMap.put({ key: 1, value: "Gustavo" });
console.log(myMap.get(2));
myMap.print();
myMap.clean();
myMap.print();
