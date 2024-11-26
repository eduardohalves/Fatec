function exerc9() {
  let entrada = document.querySelector("#entrada");
  let valorEntrada = entrada.value;
  let total = 0;
  if (valorEntrada.length > 0) {
    let ol = document.querySelector("#saida");
    let li = document.createElement("li");
    let texto = document.createTextNode(valorEntrada);
    let atributo = document.createAttribute("title");
    let span = document.querySelector("#total");
    atributo.value = valorEntrada;
    li.setAttributeNode(atributo);
    li.appendChild(texto);
    ol.appendChild(li);
    entrada.value = "";
    total = document.querySelectorAll("li").length;
    span.innerText = total;
  }
}
