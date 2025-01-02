function exerc7(){
    let entrada = document.querySelector('#entrada')
    let ol = document.querySelector('ol')
    let li = document.createElement('li')
    let texto = document.createTextNode(entrada.value)
    let atributo = document.createAttribute('title')
    atributo.value = entrada.value
    li.setAttributeNode(atributo)
    li.appendChild(texto)
    ol.appendChild(li)
}