import{Cliente} from "./Cliente.js" 
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Larissa";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteLarissa = new ContaCorrente();
contaCorrenteLarissa.agencia= 1001;
contaCorrenteLarissa.cliente = cliente1;
contaCorrenteLarissa.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteLarissa.tranferir(valor, conta2);

console.log("valor:", valor);
console.log(conta2.cliente);
