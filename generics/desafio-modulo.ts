// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Pair<k, v> = { key: k; value: v };
class ChallengeMap<k, v> {
  private items: Array<Pair<k, v>> = new Array<Pair<k, v>>();

  // put = (newElement: Pair) => {

  // }
  get = (key: k): Pair<k, v> | null => {
    const result = this.items.find((item) => item.key === key);
    return result ? result : null;
  };

  put = (pair: Pair<k, v>) => {
    const found = this.get(pair.key);
    if (found) {
      found.value = pair.value;
    } else {
      this.items.push(pair);
    }
  };

  clean = () => (this.items = new Array<Pair<k, v>>());

  print = () => {
    console.log(this.items);
  };
}

const myMap = new ChallengeMap<number, string>();
myMap.put({ key: 1, value: "Pedro" });
myMap.put({ key: 2, value: "Rebeca" });
myMap.put({ key: 3, value: "Maria" });
myMap.put({ key: 1, value: "Gustavo" });

console.log(myMap.get(2));
myMap.print();
myMap.clean();
myMap.print();
