class Pessoa {
    nome: string = "Ana";
    idade: number = 18;
    imprimir() {
        console.log(`${this.nome} possui ${this.idade} anos`);
    }
}

const x = new Pessoa();
x.imprimir();

export default Pessoa