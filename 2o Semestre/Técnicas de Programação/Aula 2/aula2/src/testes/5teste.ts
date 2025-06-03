class Operacao {
    x?: number;
    y?: number;
    setX(x: number) {
        this.x = x;
    }
    setY(y: number) {
        this.y = y;
    }
    somar(): number | undefined {
        if (this.x !== undefined && this.y !== undefined) {
            return this.x + this.y;
        }
        return undefined;
    }
}

const op = new Operacao();
// Aqui deveria ser definido os valores para a soma, como no exemplo após o log abaixo
console.log("x + y:", op.somar());
op.setX(5);
op.setY(4);
console.log("x + y:", op.somar());

export default Operacao