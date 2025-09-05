const API = '/api/items';

const form = document.getElementById('produtoForm');
const inputNome = document.getElementById('nome');
const inputValor = document.getElementById('valor');
const lista = document.getElementById('listaProdutos');

async function fetchJSON(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
  return res.status === 204 ? null : res.json();
}

function formatarMoeda(valor) {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

async function carregarItens() {
  lista.innerHTML = '';
  const itens = await fetchJSON(API);
  itens.forEach((item) => adicionarItemNaUI(item));
}

function adicionarItemNaUI(item) {
  const li = document.createElement('li');
  li.textContent = `${item.name} - ${formatarMoeda(item.value)} - ${item.purchased ? 'Comprado' : 'Pendente'}`;

  const btnToggle = document.createElement('button');
  btnToggle.textContent = item.purchased ? 'Desmarcar' : 'Comprar';
  btnToggle.addEventListener('click', async () => {
    await fetchJSON(`${API}/${item._id}/purchased`, { method: 'PATCH' });
    await carregarItens();
  });

  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.addEventListener('click', async () => {
    await fetchJSON(`${API}/${item._id}`, { method: 'DELETE' });
    await carregarItens();
  });

  li.append(' ', btnToggle, ' ', btnRemover);
  lista.appendChild(li);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = inputNome.value.trim();
  let valor = inputValor.value.trim().replace(',', '.');
  valor = Number(valor);

  if (!nome || isNaN(valor)) {
    alert('Preencha os campos corretamente!');
    return;
  }

  await fetchJSON(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: nome, quantity: 1, value: valor, purchased: false })
  });

  form.reset();
  inputNome.focus();
  await carregarItens();
});

carregarItens();
