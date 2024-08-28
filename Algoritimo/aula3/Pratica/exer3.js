let cont = parseInt(prompt("Insira um valor"))
let cont2 = parseInt(prompt("Insira outro valor"))

if (cont < cont2) {
    while (cont <= cont2) {
        console.log("Nro", cont);
        cont = cont + 1
    }
}  else {
    while (cont2 <= cont ) {
        console.log("Nro", cont2)
        cont2 = cont2 + 1
    }
}