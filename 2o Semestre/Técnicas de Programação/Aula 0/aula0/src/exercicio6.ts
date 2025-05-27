// Exercício 6 – Uma função pode ser criada e chamada anonimamente.O código
// a seguir cria uma função e chama ela.Esse recurso só é útil quando a função
// será chamada somente 1 vez.Nesse caso, a função precisa ser envolvida pelos
// parênteses verdes e os parênteses amarelos são usados para chamar a função
// delimitada pelos parênteses verdes.
// verde(function () {
//     console.log('Bom dia');
// })verde()amarelas;
// Usando o recurso de criar e chamar uma função anonimamente.Codificar uma
// função que recebe os números 2 e 3, e imprime no terminal a soma deles.

 (function (a:number, b:number):void {
    console.log(a + b);
 }) (2, 3);