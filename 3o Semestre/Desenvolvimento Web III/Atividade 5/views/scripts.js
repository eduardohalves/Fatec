const form = document.getElementById("form-disco");
const tabela = document.querySelector("#tabela-discos tbody");

async function carregarDiscos() {
  try {
    const res = await fetch("/api/discos");
    const discos = await res.json();

    tabela.innerHTML = "";
    discos.forEach((d) => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${d.titulo}</td>
        <td>${d.artista}</td>
        <td>${d.ano}</td>
        <td>${d.genero}</td>
        <td>${d.formato}</td>
        <td>R$ ${d.preco.toFixed(2)}</td>
        <td class="actions">
          <button onclick="editarDisco('${d._id}')">✏️</button>
          <button onclick="excluirDisco('${d._id}')">🗑️</button>
        </td>
      `;
      tabela.appendChild(linha);
    });
  } catch (error) {
    console.error("Erro ao carregar discos:", error);
  }
}

async function salvarDisco(event) {
  event.preventDefault();

  const id = document.getElementById("id").value;
  const disco = {
    titulo: document.getElementById("titulo").value,
    artista: document.getElementById("artista").value,
    ano: Number(document.getElementById("ano").value),
    genero: document.getElementById("genero").value,
    formato: document.getElementById("formato").value,
    preco: Number(document.getElementById("preco").value),
  };

  const metodo = id ? "PUT" : "POST";
  const url = id ? `/api/discos/${id}` : "/api/discos";

  try {
    await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(disco),
    });
    form.reset();
    await carregarDiscos();
  } catch (error) {
    console.error("Erro ao salvar disco:", error);
  }
}

async function editarDisco(id) {
  const res = await fetch(`/api/discos/${id}`);
  const disco = await res.json();

  document.getElementById("id").value = disco._id;
  document.getElementById("titulo").value = disco.titulo;
  document.getElementById("artista").value = disco.artista;
  document.getElementById("ano").value = disco.ano;
  document.getElementById("genero").value = disco.genero;
  document.getElementById("formato").value = disco.formato;
  document.getElementById("preco").value = disco.preco;
}

async function excluirDisco(id) {
  if (confirm("Tem certeza que deseja excluir este disco?")) {
    await fetch(`/api/discos/${id}`, { method: "DELETE" });
    await carregarDiscos();
  }
}

form.addEventListener("submit", salvarDisco);
window.editarDisco = editarDisco;
window.excluirDisco = excluirDisco;

carregarDiscos();
