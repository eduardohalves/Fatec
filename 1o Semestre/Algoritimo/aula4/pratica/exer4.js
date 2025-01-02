let nome = prompt("Insira um nome")
console.log(nome)
let quantidade = nome.length - 1

while (quantidade >=0) {
    console.log(nome[quantidade]);
    quantidade--
}

console.log(nome[quantidade -1])