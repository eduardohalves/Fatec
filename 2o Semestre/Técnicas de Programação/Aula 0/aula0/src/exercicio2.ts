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

// const w = [4, 2, 8, 5];
// //O método forEach recebe como argumento uma função anônima
// w.forEach(
//  //Essa função anônima pode receber até 3 parâmetros que serão
//  //fornecidos pelo forEach.
//  //Essa função será invocada para cada elemento do array w
//  function (item, indice, array) {
//  console.log(indice + ':' + item + ' ' + array);
//  }
// );
// w.forEach(
//  //aqui foi passada uma arrow function com 2 parâmetros
//  (item, indice) => console.log(indice + ':' + item)
// );
// w.forEach(
//  //aqui foi passada uma arrow function com 1 parâmetro
//  item => console.log(item)

import formatar from "./exercicio1";
const nomes = ["Ana", "Pedro", "Lucas", "Maria"];
nomes.forEach((nome) => {
   console.log(formatar(nome));
} );