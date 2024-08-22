/* let pesot = prompt("Insira seu peso")
let alturat = prompt("Insira sua altura")
let peso = parseFloat(pesot)
let altura = parseFloat(altura)

if (peso / (altura*altura) < 18.5) {
    console.log("Abaixo do peso")
} else if (peso / (altura*altura) >= 18.6 && peso / (altura*altura) <= 24.9) {
    console.log("Peso ideal")
} else if (peso / (altura*altura) >= 25.0 && peso / (altura*altura) <= 29.9) {
    console.log("Levemente acima do peso") 
} else if (peso / (altura/altura) >= 30.0 && peso / (altura*altura) <=34.9) {
    console.log("Obesidade grau I")
} else if (peso / (altura*altura) >=35.0 && peso / (altura*altura) <= 39.9) {
    console.log("Obesidade grau II (severa)")
} else {
    console.log ("Obesidade III (morbida)")
}

// Corrigido
 */

let peso = parseFloat(prompt("Insira seu peso"))
let altura = parseFloat(prompt("Insira sua altura"))
let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc >= 18.6 && imc <= 24.9) {
    console.log("Peso ideal")
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Levemente acima do peso")
} else if (imc >= 30.00 && imc <= 34.9) {
    console.log("Obesidade grau I")
} else if (imc >= 35.00 && imc <= 39.9) {
    console.log("Obesidade grau II (severa)")
} else {
    console.log("Obesidade III (morbida)")
}