import{Cliente} from "./Cliente.js" 
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Larissa", 1112223330);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteLarissa = new ContaCorrente(1001, cliente1);
contaCorrenteLarissa.depositar(500);
const conta2 = new ContaCorrente(102, cliente1);

let valor = 200;
contaCorrenteLarissa.tranferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
