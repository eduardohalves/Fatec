class Contato {
    nome: string;
    telefone: string;
    email: string;

    constructor(nome: string, telefone: string, email: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

class Agenda {
    private contatos: Contato[];

    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato: Contato): void {
        this.contatos.push(contato);
    }

    removerContato(nome: string): void {
        this.contatos = this.contatos.filter(cont => cont.nome !== nome);
    }

    listarContatos(): void {
        console.log("Contatos:");
        this.contatos.forEach(c =>
            console.log(`${c.nome} - ${c.telefone} - ${c.email}`)
        );
    }
}

const agenda = new Agenda();

agenda.adicionarContato(new Contato("Eduardo", "9999-9999", "edu@example.com"));
agenda.adicionarContato(new Contato("Maria", "8888-8888", "maria@example.com"));

agenda.listarContatos();

agenda.removerContato("Maria");

agenda.listarContatos();
