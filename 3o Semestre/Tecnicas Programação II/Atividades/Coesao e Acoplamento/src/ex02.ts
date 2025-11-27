class CarrinhoDeCompras {
    private itens: string [];

    constructor() {
        this.itens = [];
    }

    adicionarItem(item: string): void {
        this.itens.push(item);
    }

    removerItem(item: string): void {
        this.itens = this.itens.filter(i => i !== item);
    }

    imprimir(): void {
        console.log("Itens no carrinho:");
        this.itens.forEach(i => console.log(" - " + i));
    }
}

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem("Camisa");
carrinho.adicionarItem("Calça");
carrinho.adicionarItem("Meia");
carrinho.removerItem("Camisa");
carrinho.imprimir();