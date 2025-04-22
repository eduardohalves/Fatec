import { Link } from "react-router-dom";
import styled from "styled-components";

 const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2rem;
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

const Links = styled.div`
  margin-top: 20px;
  font-size: 1rem;

  a {
    margin: 0 10px;
    color: #1976d2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <Title>Bem-vindo à Mega-Sena!</Title>
      <Button onClick={() => (window.location.href = "/palpite")}>
        Clique para começar
      </Button>
      <Links>
        <Link to="/palpite">Palpite</Link> | <Link to="/historico">Histórico</Link>
      </Links>
    </HomeContainer>
  );
}
