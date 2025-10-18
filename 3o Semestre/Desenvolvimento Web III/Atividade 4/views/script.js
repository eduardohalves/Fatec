async function buscarClima() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "<p>Por favor, informe uma cidade!</p>";
    return;
  }

  result.innerHTML = "<p>Buscando...</p>";

  try {
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();

    if (data.error) {
      result.innerHTML = `<p>${data.error}</p>`;
    } else {
      result.innerHTML = `
        <h2>${data.cidade}</h2>
        <img src="${data.icone}" alt="Ícone do clima" />
        <p><strong>Condição:</strong> ${data.condicao}</p>
        <p><strong>Temperatura:</strong> ${data.temperatura}</p>
        <p><strong>Sensação térmica:</strong> ${data.sensacao}</p>
        <p><strong>Umidade:</strong> ${data.umidade}</p>
      `;
    }
  } catch {
    result.innerHTML = "<p>Erro ao buscar o clima.</p>";
  }
}
