let entradas = [9,2,4,5,8]
let saidas = [3,5,2,7,4]
let i = 0

while (i < entradas.length) {
    if(entradas[i] < saidas[i]) {
        console.log(i, ":", saidas[i]);
    }
    else{
        console.log(i, ":", entradas[i]);
    }
    i++;
}