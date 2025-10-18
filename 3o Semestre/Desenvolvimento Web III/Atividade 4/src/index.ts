import dotenv from "dotenv";
import express, { Request, Response } from "express";
import axios from "axios";
import path from "path";


dotenv.config();
console.log("API Key:", process.env.API_KEY);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../views")));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

app.get("/weather", async (req: Request, res: Response) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "Informe uma cidade!" });
  }

  try {
    const apiKey = process.env.API_KEY;
    const encodedCity = encodeURIComponent(city as string);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric&lang=pt_br`;

    const response = await axios.get(url);
    const data = response.data;

    const weatherInfo = {
      cidade: `${data.name}, ${data.sys.country}`,
      temperatura: `${data.main.temp.toFixed(1)}°C`,
      sensacao: `${data.main.feels_like.toFixed(1)}°C`,
      umidade: `${data.main.humidity}%`,
      condicao: data.weather[0].description,
      icone: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    res.json(weatherInfo);
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ error: "Cidade não encontrada." });
    } else if (error.response && error.response.status === 401) {
      res.status(401).json({ error: "API Key inválida ou não autorizada." });
    } else {
      res.status(500).json({ error: "Erro ao consultar clima." });
    }
  }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
