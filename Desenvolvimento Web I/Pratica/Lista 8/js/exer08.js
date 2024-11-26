function exerc8() {
  let entrada = document.querySelector("#entrada");
  let valorEntrada = entrada.value;
  if (valorEntrada.length > 0) {
    let ol = document.querySelector("ol");
    let li = document.createElement("li");
    let texto = document.createTextNode(valorEntrada);
    let atributo = document.createAttribute("title");
    atributo.value = valorEntrada;
    li.setAttributeNode(atributo);
    li.appendChild(texto);
    ol.appendChild(li);
  }
}
