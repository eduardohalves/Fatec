// Exercício 2 – Reescrever o código a seguir substituindo a estrutura de
// repetição for pelo método forEach do objeto Array. Forneça uma arrow
// function como parâmetro para o método forEach.
// Requisitos:
// • Exportar por default a função formatar no arquivo exercicio1.ts;
// • Comentar as instruções de console no arquivo exercicio1.ts.
// import formatar from "./exercicio1";
// const nomes = ["Ana","Pedro","Lucas","Maria"];
// for(let i = 0; i < nomes.length; i++){
// console.log(formatar(nomes[i]));
// }

import formatar from "./exercicio1";
const nomes = ["Ana", "Pedro", "Lucas", "Maria"];
nomes.forEach((nome) => {
   console.log(formatar(nome));
} );