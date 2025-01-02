let cont = 0;
let cont2 = 0;
let menor = 9999;

while (cont < 5) {
    cont2 = parseInt(prompt("Insira um valor"));

    if (cont2 <= menor) {
        menor = cont2;
    }
    cont = cont + 1;
} 

console.log(menor);