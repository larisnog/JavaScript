class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0 ){
            return;
        }

        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Larissa";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteLarissa = new ContaCorrente();
contaCorrenteLarissa.agencia= 1001;

contaCorrenteLarissa.depositar(-100);
contaCorrenteLarissa.depositar(100);
contaCorrenteLarissa.depositar(100);

const valorSacado = contaCorrenteLarissa.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteLarissa);
