let cont = 0
let cont2 = 0
let maior = 0

while (cont < 5) {
    cont2 = parseInt(prompt("Insira um  valor"))

    if (cont2 >= maior) {
        maior = cont2
    }
    cont = cont + 1;
}

console.log(maior)