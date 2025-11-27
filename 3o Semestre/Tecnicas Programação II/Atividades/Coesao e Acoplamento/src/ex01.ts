class ContaBancaria {
    private saldo: number;

    constructor() {
        this.saldo = 0;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            console.log("Valor depositado inválido");
            return;
        }
        this.saldo += valor;
        console.log(`Deposito de R$ ${valor} realizado.`);
        
    }

    sacar(valor: number): void {
        if (valor >= this.saldo) {
            console.log("Valor de saque invalido");
            return;
        }
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado`);
    }
    getSaldo(): number {
        return this.saldo;
    }
}

class Cliente {
    nome: string;
    cpf: string;
    nasc: Date;
    nomeMae: string;
    conta: ContaBancaria

    constructor(nome: string, cpf: string, nasc: Date, nomeMae: string, conta: ContaBancaria) {
        this.nome = nome;
        this.cpf = cpf;
        this.nasc = nasc;
        this.nomeMae = nomeMae;
        this.conta = conta;
    }
}

const conta = new ContaBancaria();
const cliente =  new Cliente("Eduardo", "123.456.789.00", new Date(2003, 11, 25), "Berenice", conta);

cliente.conta.depositar(100);
cliente.conta.sacar(50);
cliente.conta.sacar(60);
console.log("Saldo final", cliente.conta.getSaldo());
