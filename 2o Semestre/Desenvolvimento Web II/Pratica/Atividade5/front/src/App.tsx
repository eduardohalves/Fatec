import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import Megasena from "./pages/Megasena";
import ThemeToggleButton from "./components/Tema"; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Megasena />} />
        </Routes>
      </Router>
      <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
