entradat = prompt("Insira seu número")
entradat2 = prompt("Insira outro número")
entrada = parseInt (entradat)
entrada2 = parseInt(entradat2)
if (entrada % entrada2 == 0){
    console.log(" Seu número é multiplo de" + entrada2)
}
else {
    console.log(" Seu número não é multiplo de " + entrada2)
}