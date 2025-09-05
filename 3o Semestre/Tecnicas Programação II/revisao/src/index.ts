class Pessoa {
    nome:string;
    email:string
    nasc:string;
    constructor(nome: string, email: string, nasc: string) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;

    } imprimir () : void {
        console.log("Nome:" + this.nome);
        console.log("Email:" + this.email);
        console.log("Nascimento" + this.nasc);
        console.log("Idade:" + this.idade(this.nasc)+"anos");
        
    } idade (nasc: any): number {
        const hoje = new Date();
        const ano:number = parseInt(nasc.substring(6, 10));
        const mes:number = parseInt(nasc.substring(3, 5));
        const dia:number = parseInt(nasc.substring(0, 2));
        const datan = new Date(ano, mes, dia);
        let idade:number = hoje.getFullYear() - datan.getFullYear();
        const m:number = hoje.getMonth() - datan.getMonth();

        if (m < 0 || (m === 0 && hoje.getDate() < datan.getDate())) {
            idade--;
        } return idade;
    } 
}

const cliente = new Pessoa("Seu nome", "Seu email", "DD/MM/AAAA");

cliente.imprimir()

class DataUtil {
    static isBissexto(ano:number) {
        if(ano % 4 == 0){
            return true
        } else if (ano % 100 == 0 && ano % 100 != 0){
            return true
        }
        return false;
    } public numBissexto() { const ano: number = parseInt(this.nas.substring(6, 10));
        const hoje =
} 