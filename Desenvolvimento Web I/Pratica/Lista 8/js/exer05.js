function exerc5(){
    let entrada = document.querySelector('#entrada')
    let saida = document.querySelector('#saida')
    let paragrafo = document.createElement('p')
    let texto = document.createTextNode(entrada.value)
    paragrafo.appendChild(texto)
    saida.appendChild(paragrafo)
}