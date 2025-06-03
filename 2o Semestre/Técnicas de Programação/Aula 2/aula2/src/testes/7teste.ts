class Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    imprimir(): void {
        console.log(`${this.nome} possui ${this.idade} anos`);
    }
}
const um = new Pessoa("Ana", 18);
const dois = new Pessoa("Pedro", 20);
// aqui ele repete as informações passadas na variavem "um"
const tres = um;
um.imprimir();
dois.imprimir();
tres.imprimir();