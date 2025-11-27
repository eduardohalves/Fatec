import * as fs from "fs";
import * as readline from "readline";

const preposicoes = ["de", "da", "do", "das", "dos", "e"];

function formatarNome(nome:string): string {
    return nome
    .toLowerCase()
    .split(" ")
    .map((parte) => {
        if (preposicoes.includes(parte)) {
            return parte;
        }

        return parte.charAt(0).toUpperCase() + parte.slice(1);
    })
    .join(" ");
}

async function processarCSV(input: string, output: string) {
    const leitor = readline.createInterface({
        input: fs.createReadStream(input),
        crlfDelay: Infinity,
    });

    const saida = fs.createWriteStream(output);

    for await (const linha of leitor) {
        const nomeFormatado = formatarNome(linha);
        saida.write(nomeFormatado + "\n");
    }

    saida.end();
    console.log(`Arquivo gerado com suceso: ${output}`);

}

processarCSV("nomes.csv", "saida.csv");
