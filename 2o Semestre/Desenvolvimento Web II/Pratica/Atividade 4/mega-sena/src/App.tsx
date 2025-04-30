import { ThemeProvider } from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { lightTheme, darkTheme } from "./styles/theme"; 
import { GlobalStyle } from "./styles/globalStyle";
import { LotteryProvider } from "./contexts/LotteryContext";
import { Megasena } from "./pages/Megasena";
import { useTheme } from "./hooks/useTheme"; 

export default function App() {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <LotteryProvider>
        <GlobalStyle /> 
        <Megasena />
        <button onClick={toggleTheme} aria-label="Alternar tema">
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </LotteryProvider>
    </ThemeProvider>
  );
}
