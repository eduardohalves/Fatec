let cont = 0 
let soma = 0
let i = 0

while (true) {
    if (i >= 5) {
        break
    }
    cont = parseInt(prompt("Insira um valor"))
    soma = soma + cont
    i = i + 1
} 
console.log(soma);