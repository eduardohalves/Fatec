import axios from "axios";

interface Regiao {
  id: number;
  sigla: string;
  nome: string;
}

interface Estado {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
}

class Ibge {
  static async regioes(): Promise<Regiao[]> {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/regioes";
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (erro: any) {
      console.log(erro.message);
      return [];
    }
  }

  static async estadosPorRegiao(id: number): Promise<Estado[]> {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (erro: any) {
      console.log(erro.message);
      return [];
    }
  }
}

Ibge.estadosPorRegiao(4).then(estados => {
  console.log(estados);
});
