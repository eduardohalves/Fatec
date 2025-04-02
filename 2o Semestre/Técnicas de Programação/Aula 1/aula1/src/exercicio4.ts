const res = function conta(v1:number[], v2:string[]) {
    let res = [];
    for (let i = 0; i < v1.length; i++) {
        res[i] = v1[i] + v2[i];
    }
    return res;
}

const vet01 = [5, 3, 1, 8, 2];
const vet02 = ["M", "a", "r", "i", "a"];
console.log("Resultado:", res(vet01, vet02));