import { promises as fs } from "fs";

interface Pessoa {
    Nome: string;
    Email: string;
    Nasc: string;
}

export default async function LeituraEmailCsv(): Promise<Pessoa[]> {
    const conteudo = await fs.readFile("./emails.csv", "utf-8");
    const linhas = conteudo.split("\n").slice(1);
    const pessoas: Pessoa[] = [];

    for (const linha of linhas) {
        if (!linha.trim()) continue;
        const [Nome, Email, Nasc] = linha.split(";");
        pessoas.push({ Nome, Email, Nasc });
    }

    return pessoas;
}
