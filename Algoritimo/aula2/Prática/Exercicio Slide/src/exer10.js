let fruta = prompt("Insira a fruta que deseja")
fruta = fruta.toLocaleLowerCase()

if (fruta == "laranja"){
    console.log("R$ 3.50")
} else if (fruta == "limão" || fruta == "limao") {
    console.log("R$ 3.00")
} else if (fruta == "acerola") {
    console.log("R$ 3.50")
} else if (fruta == "manga") {
    console.log("R$ 4.00")
} else if (fruta == "melancia") {
    console.log("R$ 4.00")
} else if (fruta == "morango") {
    console.log("R$ 5.00")
} else if (fruta == "maracuja") {
    console.log("R$ 4.50")
} else if (fruta == "açai") {
    console.log("R$ 6.00")
} else {
    console.log("Não temos esse suco")
}