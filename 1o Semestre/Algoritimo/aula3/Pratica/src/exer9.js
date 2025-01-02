let senha = "abc";
let contador = 0;

let entrada = "";
while (entrada != senha) {
    entrada = prompt("Insira a senha");
    if (entrada == senha) {
        console.log("Acesso liberado");
        break;
    } 
    else {
        contador++;

        if (contador >= 3) {
            console.log("Você excedeu o número de tentativas");
            break;
        } 
        else {
            console.log("Senha incorreta");
        }
    }
}