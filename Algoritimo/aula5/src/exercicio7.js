let pesos = [0.4, 0.2, 0.1, 0.3];
let notas = [8.2, 5.0, 10.0, 9.1];
let i = 0

while (i < pesos.length) {
    let r = pesos[i] * notas[i];
    console.log(pesos[i], "*", notas[i], "=", r);

    i++
}