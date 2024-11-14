let somatorio = 0;

while (somatorio < 20) {
    let cont = parseInt(prompt("Insira um valor"))
    console.log("Você inseriu o número:", cont);
    somatorio += cont
}

console.log("Somatorio:", somatorio)