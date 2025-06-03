class Operacao {
    x?: number;
    y?: number;
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    somar(): number | undefined {
        if (this.x !== undefined && this.y !== undefined) {
            return this.x + this.y;
        }
        return undefined;
    }
}
const a = new Operacao();
console.log("x + y:", a.somar());
const b = new Operacao(5);
console.log("x + y:", b.somar());
const c = new Operacao(5, 3);
console.log("x + y:", c.somar());