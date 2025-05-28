import { useEffect, useState } from "react";
import { getUltimoConcurso, getConcurso } from "../services/api";
import Ball from "../components/Ball";
import styled from "styled-components";

type Resultado = {
  concurso: number;
  data_do_sorteio: string;
  bola1: number;
  bola2: number;
  bola3: number;
  bola4: number;
  bola5: number;
  bola6: number;
};

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 1rem;
  margin-bottom: 10px; // 
`;


const Input = styled.input`
  padding: 0.5rem;
  width: 200px;
`;

const Botao = styled.button`
padding: 0.5rem 2rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const BallsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

export default function Megasena() {
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [busca, setBusca] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    getUltimoConcurso().then((dados) => {
      setResultado(dados);
      setMensagem("");
    });
  }, []);

  const buscarConcurso = async () => {
    if (!busca) return;
    const dados = await getConcurso(Number(busca));
    if (dados) {
      setResultado(dados);
      setMensagem("");
    } else {
      setResultado(null);
      setMensagem("Concurso não encontrado.");
    }
  };

  return (
    <Container>
      <h1>Mega-Sena</h1>

      <FormGroup>
        <Input
          type="number"
          placeholder="Número do concurso"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <Botao onClick={buscarConcurso}>Buscar</Botao>
      </FormGroup>

      {mensagem && <p>{mensagem}</p>}

      {resultado && (
        <>
          <h2>Concurso nº {resultado.concurso}</h2>
          <p>Data: {resultado.data_do_sorteio}</p>
          <BallsContainer>
            {[resultado.bola1, resultado.bola2, resultado.bola3,
            resultado.bola4, resultado.bola5, resultado.bola6
            ].map((b, i) => (
              <Ball key={i} number={String(b)} />
            ))}
          </BallsContainer>
        </>
      )}
    </Container>
  );
}
