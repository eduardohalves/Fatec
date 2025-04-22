import { usePalpite } from "../context/PalpiteContext";
import styled from "styled-components";

const HistoricoContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #1976d2;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  padding: 0.5rem;
  background-color: #f0f0f0;
  margin-bottom: 0.5rem;
  border-radius: 4px;
`;

export default function Historico() {
  const { palpites } = usePalpite();

  console.log("Palpites no Histórico:", palpites); 

  return (
    <HistoricoContainer>
      <Title>Histórico de palpites</Title>
      {palpites.length === 0 ? (
        <p>Nenhum palpite gerado ainda.</p>
      ) : (
        <List>
          {palpites.map((palpite, index) => (
            <ListItem key={index}>{palpite.join(" - ")}</ListItem>
          ))}
        </List>
      )}
    </HistoricoContainer>
  );
}
