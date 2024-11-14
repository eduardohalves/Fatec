let senha = "abc";

entrada = ""
while (entrada != senha) {
    entrada = prompt("Insira a senha")
    if (entrada == senha) {
        console.log("Acesso liberado")
    }
    else {
        console.log("Senha incorreta")
    }
}