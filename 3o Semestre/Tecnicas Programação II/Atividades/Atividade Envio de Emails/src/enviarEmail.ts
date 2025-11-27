import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import LeituraEmailCsv from "./leituraCsv";
import Handlebars from "handlebars";
import mesSeguinte from "./mesSeguinte";
import calcularIdade from "./calcularIdade";

async function enviarEmail() {
    const dadosEmail = await LeituraEmailCsv();
    console.log("Lidos do CSV:", dadosEmail);
    const htmlMessage = await fs.readFile("./Mensagem.html", "utf-8");

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "seuemail@gmail.com",
            pass: "suasenhaaplicativo",
        },
    });

    const hoje = new Date();

    for (const d of dadosEmail) {
        const nascDate = new Date(d.Nasc);

        if (hoje.getDate() === nascDate.getDate() && hoje.getMonth() === nascDate.getMonth()) {
            const template = Handlebars.compile(htmlMessage);
            const idade = calcularIdade(nascDate);

            const html = template({
                nome: d.Nome,
                percdesc: idade,
                mesquevem: mesSeguinte()
            });

            const info = await transporter.sendMail({
                from: "seuemail@gmail.com",
                to: d.Email,
                subject: "Envio de e-mail",
                html
            });

            console.log("Enviado:", info.response);
        }
    }

    return "E-mails enviados.";
}

export default enviarEmail;
