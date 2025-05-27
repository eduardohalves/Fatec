// 4 – Reescrever o corpo da função listar usando o método reduce
// do objeto Array.
// Observação: as sequências de escape \n e \t são usadas em strings,
// respectivamente, para quebrar linha e tabulação. Eles foram colocados aqui
// somente para melhorar a apresentação visual no terminal, mas eles não são
// usados na linguagem HTML.
// As sequências de escape são usadas, nas linguagens de programação, para
// facilitar a formatação de texto, criar novas linhas, adicionar tabulações e
// inserir outros caracteres especiais em strings.

// function item(entrada:string):string {
//     return `\t<li>${entrada}</li>\n`;
//     }
//     function listar(elementos:string[]):string {
//     let soma = "";
//     for( let i = 0; i < elementos.length; i++ ){
//     soma += item(elementos[i]);
//     }
//     return `<ul>\n${soma}</ul>\n`;
//     }
//     const frutas = ["Manga","Laranja","Maça","Uva"];
//     const resultado = listar(frutas);
//     console.log(resultado);

// const w = [4, 2, 8, 5];
// const r = w.reduce( function(soma, item){
//  return soma + item;
// });
// console.log(r); //retorna 19
// const s = w.reduce( (soma, item) => soma + item );
// console.log(s); //retorna 19
// const letras = ['a','b','c','d','e']
// const s = letras.reduce( (soma, item) => soma + item.toUpperCase() );
// console.log(s); //retorna aBCDE
// const letras = ['a','b','c','d','e']
// const s = letras.reduce( (soma, item) => soma + item.toUpperCase(), "");
// console.log(s); //retorna ABCDE

function item(entrada: string): string {
    return `\t<li>${entrada}</li>\n`;
}
export function listar(elementos: string[]): string {
    const soma = elementos.reduce((soma, fruta) => {
        return soma + item(fruta);
    }, ""); 
    return `<ul>\n${soma}</ul>\n`;
}

const frutas = ["Manga", "Laranja", "Maça", "Uva"];
const resultado = listar(frutas);
// console.log(resultado);

