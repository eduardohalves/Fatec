class Pessoa {
    nome: string = "Ana";
    idade: number = 18;
    imprimir() {
        console.log(`${this.nome} possui ${this.idade} anos`);
    }
}

const x = new Pessoa(); 
console.log("Nome:", x.nome);
console.log("Idade:", x.idade)

export default {Pessoa}