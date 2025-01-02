function exerc4(){
    let saida = document.querySelector('#saida')
    let paragrafo = document.createElement('p')
    let texto = document.createTextNode('Carlos')
    paragrafo.appendChild(texto)
    saida.appendChild(paragrafo)
}