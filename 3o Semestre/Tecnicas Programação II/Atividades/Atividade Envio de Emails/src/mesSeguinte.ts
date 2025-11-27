export default function recuperarProximoMes(): string {
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const hoje = new Date();
    const proximo = (hoje.getMonth() + 1) % 12;
    return meses[proximo];
}
