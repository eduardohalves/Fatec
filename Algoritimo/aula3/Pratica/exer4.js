let cont = parseInt(prompt("Insira um valor"))
let cont2 = parseInt(prompt("Insira um valor"))
let soma = 0 

if (cont <= cont2) {
    while (cont <= cont2){
        soma = soma + cont
        cont = cont + 1
    }
} else {
    while (cont2 <= cont) {
        soma = soma + cont2
        cont2 = cont2 + 1
    }
} 
console.log(soma)
