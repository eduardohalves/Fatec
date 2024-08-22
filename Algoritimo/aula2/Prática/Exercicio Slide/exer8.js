let temperaturat = prompt("Insira sua temperatura")
let temperatura = parseFloat(temperaturat)

if (temperatura >= 41) {
    console.log("Hipertemia")
} else if (temperatura < 41 && temperatura >= 39.6) {
    console.log("Febre alta")
} else if (temperatura <39.6 && temperatura >=37.8) {
    console.log("Febre")
} else if (temperatura <37.8 && temperatura >=35.1) {
    console.log("Normal")
} else {
    console.log("Hipotermia")
}