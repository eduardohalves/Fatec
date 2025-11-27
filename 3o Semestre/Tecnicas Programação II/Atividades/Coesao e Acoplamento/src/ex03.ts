class Item {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

class Carrinho {
    private itens: Item[];

    constructor() {
        this.itens = [];
    }

    adicionarItem(item: Item): void {
        this.itens.push(item);
    }

    calcularTotal(): number {
        let total = 0;
        for (const item of this.itens) {
            total += item.preco * item.quantidade;
        }
        return total;
    }
}

class Pagamento {
    processarPagamento(total: number, forma: string): void {
        console.log(`Pagamento de R$ ${total} em ${forma}, processado com sucesso!`);
    }
}

const carrinhoc = new Carrinho();

let item = new Item("Camiseta", 50, 2);
carrinhoc.adicionarItem(item);

item = new Item("Calça", 130, 1);
carrinhoc.adicionarItem(item);

item = new Item("Meia", 20, 3);
carrinhoc.adicionarItem(item);

const total = carrinhoc.calcularTotal();
console.log("Total:", total);

const pagamento = new Pagamento();
pagamento.processarPagamento(total, "dinheiro");
