// Exercício 1 – Na linguagem TS as funções podem ser escritas na notação de
// Arrow Function. Reescrever a função formatar usando a notação de Arrow
// Function inline, ou seja, não usar chaves e o termo return.
// function formatar(entrada: string): string {
// return `<div>${entrada}</div>`;
// }
// console.log(formatar("Ana"));
// console.log(formatar("12"));

// const mult = (a: number, b: number): number => {
//     return a * b;
//     };
//     const div = (a: number, b: number): number => a / b;
//     const pow = (a: number, b: number): number => { return a ** b };

const formatar = (entrada:string):string =>  `<div>${entrada}</div>`

// console.log(formatar("Ana"));
// console.log(formatar("12"));

export default formatar;