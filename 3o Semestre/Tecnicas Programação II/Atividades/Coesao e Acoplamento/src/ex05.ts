class Usuario {
    username: string;
    senha: string;

    constructor(username: string, senha: string) {
        this.username = username;
        this.senha = senha;
    }
}

class AutenticacaoDeUsuario {
    private usuarios: Usuario[];

    constructor() {
        this.usuarios = [];
    }

    registrarUsuario(username: string, senha: string): void {
        const existente = this.usuarios.find(u => u.username === username);
        if (existente) {
            console.log("Usuário já registrado!");
            return;
        }
        this.usuarios.push(new Usuario(username, senha));
    }

    autenticarUsuario(username: string, senha: string): boolean {
        const user = this.usuarios.find(u => u.username === username && u.senha === senha);
        return !!user;
    }
}

const autenticacao = new AutenticacaoDeUsuario();

autenticacao.registrarUsuario("alice", "senha123");
autenticacao.registrarUsuario("bob", "outrasenha");

const usuarioAutenticado = autenticacao.autenticarUsuario("alice", "senha123");

if (usuarioAutenticado) {
    console.log("Usuário autenticado com sucesso!");
} else {
    console.log("Falha na autenticação do Usuário!");
}
