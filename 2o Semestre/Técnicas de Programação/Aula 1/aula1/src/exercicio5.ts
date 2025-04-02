const opera = (v1:number[], v2:string[]):string[] =>  {
    let res = [];
    for (let i = 0; i < v1.length; i++) {
        res[i] = v1[i] + v2[i];
    }
    return res;
}

const vet11 = [5, 3, 1, 8, 2];
const vet22 = ["M", "a", "r", "i", "a"];
console.log("Resultado:", opera(vet11, vet22));