import { FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #1976d2;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  color: white;
  z-index: 1000;
`;

type Props = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export default function ThemeToggleButton({ isDarkMode, toggleTheme }: Props) {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </ToggleButton>
  );
}
