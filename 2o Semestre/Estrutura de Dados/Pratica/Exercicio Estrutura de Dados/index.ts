// Utilizando um código recursivo desenvolvido durante as aulas ou em qualquer um dos
// exercícios anteriores, envolvendo passagem de array à função recursiva, crie um programa que
// imprima uma pilha de execução. Considere que cada dado presente na pilha de execução, para
// sucessivas chamadas usando array, é representado utilizando um asterisco “*”. Compare o
// resultado considerando uma função que faz chamada recursiva simples (ex. fatorial ou
// progressão aritmética) com uma função que faz chamada recursiva dupla (ex. sequência de
// Fibonacci). A Figura abaixo mostra um exemplo de saída de execução esperado para a obtenção
// da pilha de execução do programa recursivo que obtém o máximo elemento em um array de 5
// elementos.

//Código do material da aula:

// function maior_r(a: number[]): number {
//     if (a.length == 1) {
//         console.log("Caso base atingido!")
//         return a[0];
//     } else {
//         console.log("Chamada recursiva!");
//         console.log("Invocando maior_r(", a.slice(1, a.length), ");");
//         let maior_restante = maior_r(a.slice(1, a.length));
//         if (a[0] >= maior_restante) {
//             return a[0];
//         } else {
//             return maior_restante;
//         }
//     }
// }

function maior_r(a: number[], nivel: number = 1): number {
    
    console.log("*".repeat(nivel) + "|");

    if (a.length == 1) {
        console.log("Caso base atingido!");
        return a[0];
    } else {
        console.log("Chamada recursiva!");
        console.log("Invocando maior_r(", a.slice(1), ");");
        let maior_restante = maior_r(a.slice(1), nivel + 1);
        if (a[0] >= maior_restante) {
            return a[0];
        } else {
            return maior_restante;
        }
    }
}

const array = [1, 4, 10, 20, -1];
console.log("Array original:\n", array);
const resultado = maior_r(array);
console.log("O maior número do array é:", resultado);

//Fibonacci

function fibonacci(n: number, nivel: number = 1): number {
    console.log("*".repeat(nivel) + ` Chamando fibonacci(${n})`);

    if (n <= 1) return n;
    return fibonacci(n - 1, nivel + 1) + fibonacci(n - 2, nivel + 1);
}

let n = 5;
console.log(`\nFibonacci de ${n}:\n`);
console.log("Resultado:", fibonacci(n));
