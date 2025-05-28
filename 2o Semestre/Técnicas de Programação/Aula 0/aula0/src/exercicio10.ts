import axios from "axios";

async function listarEstados() {
  try {
    const { data } = await axios.get("http://servicodados.ibge.gov.br/api/v1/localidades/estados");
    data.forEach((estado: { nome: string }) => {
      console.log(estado.nome);
    });
  } catch (erro: any) {
    console.error("Erro ao buscar estados:", erro.message);
  }
}

listarEstados();
