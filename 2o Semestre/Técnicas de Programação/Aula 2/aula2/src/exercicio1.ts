class Filme {
    titulo: string;
    duracao: number;
    constructor(titulo: string, duracao: number) {
        this.titulo = titulo;
        this.duracao = duracao;
    }
    print(): void {
        console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
    }
}

const x = new Filme("De volta para o futuro", 116);
x.print()
const y = new Filme("O filme Matrix", 136)
y.print()

export default Filme