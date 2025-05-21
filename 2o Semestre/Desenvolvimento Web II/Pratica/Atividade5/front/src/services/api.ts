const API_URL = "http://localhost:3001/megasena";

export async function getUltimoConcurso() {
  const res = await fetch(`${API_URL}/ultimo`);
  return res.json();
}

export async function getConcurso(numero: number) {
  const res = await fetch(`${API_URL}/${numero}`);
  if (res.status === 404) {
    return null;
  }
  return res.json();
}
