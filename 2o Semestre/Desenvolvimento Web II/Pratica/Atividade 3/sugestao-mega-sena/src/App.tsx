import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Palpite from "./components/Palpite";
import Historico from "./components/Historico";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palpite" element={<Palpite />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
