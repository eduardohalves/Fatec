import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  background: #1976d2;
  padding: 1rem;
`;

const StyledLink = styled(Link)` eu nao sei fazer nadad qe ta aqui marra, mas eu entendod, ja ta valendo, n?
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/palpite">Palpite</StyledLink>
      <StyledLink to="/historico">Histórico</StyledLink>
    </Nav>
  );
}
