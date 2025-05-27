// Exercício 3 – Copiar os elementos dos arrays carros e motos para a variável
// veiculos utilizando spread operator. Na sequência, utilize o método
// forEach e a função formatar para exibir os elementos do array veiculos,
// assim como é mostrado ao lado.
// import formatar from "./exercicio1";
// const carros = ["Gol","Corsa","Uno","Fiesta"];
// const motos = ["CG", "XRE", "Biz"];
// const veiculos =

// const w = [4, 2, 8, 5];
// const z = [...w]; //cria uma cópia do array w
// w[1] = 20; //altera um elemento do array w sem alterar o array z
// console.log(w); //resultado [ 4, 20, 8, 5 ]
// console.log(z); //resultado [ 4, 2, 8, 5

    import formatar from "./exercicio1"
    const carros = ["Gol", "Corsa", "Uno", 'Fiesta']
    const motos = ["CG", "XRE", "Biz"];
    const veiculos = [...carros, ...motos]; 

    veiculos.forEach((veiculo) => {
        console.log(formatar(veiculo));
    } );