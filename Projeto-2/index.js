import{Cliente} from "./Cliente.js" 
import { Conta } from "./Conta.js";
import{ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Larissa", 1112223330);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteLarissa = new Conta(0, cliente1, 1001);
contaCorrenteLarissa.depositar(500);
contaCorrenteLarissa.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteLarissa);
