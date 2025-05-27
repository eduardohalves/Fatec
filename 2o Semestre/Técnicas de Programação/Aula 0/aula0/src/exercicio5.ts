// Exercício 5 – A função listar, do arquivo exercicio4.ts, recebe um array de
// strings. Reescrever o código a seguir para converter o conteúdo da variável
// legumes para array de strings para poder enviar para a função listar.
// Requisitos:
// • Poderá ser modificado apenas o código sinalizado em amarelo. Dica:
// use o método split do objeto string;
// • Exportar de forma nomeada a função listar no arquivo
// exercicio4.ts;
// • Importar a função listar no arquivo exercicio5.ts;
// • Comentar as instruções de console no arquivo exercicio4.ts.
// const legumes = "Beterraba,Cenoura,Tomate,Repolho";
// const resultado = listar(legumes);
// console.log(resultado);

// const json = '{"nome":"Ana","idade":"20"}';
// const partes = json.split(","); 
// console.log(partes); 

import {listar} from "./exercicio4"

const legumes = "Beterraba,Cenoura,Tomate,Repolho";
const resultado = listar(legumes.split(","));
console.log(resultado); 
