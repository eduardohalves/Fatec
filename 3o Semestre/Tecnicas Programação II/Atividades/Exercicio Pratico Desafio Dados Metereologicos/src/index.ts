import { Meteo } from "./models/Meteo";
import * as fs from "fs";

const raw = fs.readFileSync("Desafio_Dados_Meteorologicos.csv", "utf8");
interface Linhas extends Array<string> {}
const linhas: Linhas = raw.split("\n").map((l: string): string => l.trim());
const dados = linhas.slice(1);

const registros: Meteo[] = dados
  .filter(l => l.length > 0)
  .map((linha: string) => {
    const r = linha.split(";").map(v => v.replace(",", "."));
    return new Meteo(
      r[0],
      r[1],
      Number(r[2]),
      Number(r[3]),
      Number(r[4]),
      Number(r[5]),
      Number(r[6]),
      Number(r[7]),
      Number(r[8]),
      Number(r[9]),
      Number(r[10]),
      Number(r[11]),
      Number(r[12])
    );
  });

const top5Temp = [...registros].sort((a, b) => b.Temp_C - a.Temp_C).slice(0, 5);
console.log("Top 5 temperaturas:");
top5Temp.forEach(r => console.log(r.Date, r.Time, r.Temp_C));

const mediaTemp = registros.reduce((s, r) => s + r.Temp_C, 0) / registros.length;
console.log("Média das temperaturas:", mediaTemp);

const mediaVento = registros.reduce((s, r) => s + r.WindSpeed_Avg, 0) / registros.length;
console.log("Média geral do vento:", mediaVento);

const top3Press = [...registros].sort((a, b) => b.Press_Bar - a.Press_Bar).slice(0, 3);
console.log("Top 3 pressões:");
top3Press.forEach(r => console.log(r.Date, r.Time, r.Press_Bar));

const mediaUmidade = registros.reduce((s, r) => s + r.Hum_pct, 0) / registros.length;
console.log("Média geral da umidade:", mediaUmidade);
