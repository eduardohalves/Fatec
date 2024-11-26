function exerc6(){
    let entrada = document.querySelector('#entrada')
    let saida = document.querySelector('#saida')
    let paragrafo = document.createElement('p')
    let texto = document.createTextNode(entrada.value)
    let atributo = document.createAttribute('title')
    atributo.value = 'Nome fornecido'
    paragrafo.setAttributeNode(atributo)
    paragrafo.appendChild(texto)
    saida.appendChild(paragrafo)
}