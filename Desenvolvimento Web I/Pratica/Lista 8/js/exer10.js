function exerc10() {
  let entrada = document.querySelector("#entrada");
  let valorEntrada = entrada.value;
  let total = 0;
  if (valorEntrada.length > 0) {
    let ol = document.querySelector("#saida");
    let li = document.createElement("li");
    let texto = document.createTextNode(valorEntrada);
    let title = document.createAttribute("title");
    let onclick = document.createAttribute("onclick");
    onclick.value = "exibir()";
    let span = document.querySelector("#total");
    title.value = valorEntrada;
    li.setAttributeNode(title);
    li.setAttributeNode(onclick);
    li.appendChild(texto);
    ol.appendChild(li);
    entrada.value = "";
    total = document.querySelectorAll("li").length;
    span.innerText = total;
  }
}

function exibir() {
  alert("Exibindo");
}
