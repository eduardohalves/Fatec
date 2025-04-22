import { useEffect, useState } from "react";
import { usePalpite } from "../context/PalpiteContext";
import styled from "styled-components";


const PalpiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
  margin: 2rem auto;
`;

const PalpiteText = styled.p`
  font-size: 1.5rem;
  color: #1976d2;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1565c0;
  }
`;

export default function Palpite() {
  const { gerarNovoPalpite } = usePalpite();
  const [palpiteAtual, setPalpiteAtual] = useState<number[]>([]);

  useEffect(() => {
    const novo = gerarNovoPalpite();
    setPalpiteAtual(novo); 
  }, []);

  return (
    <PalpiteContainer>
      <h2>Sugestão de aposta</h2>
      <PalpiteText>{palpiteAtual.join(" - ")}</PalpiteText>
      <Button
        onClick={() => {
          const novo = gerarNovoPalpite();
          setPalpiteAtual(novo);
        }}
      >
        Nova sugestão
      </Button>
    </PalpiteContainer>
  );
}
