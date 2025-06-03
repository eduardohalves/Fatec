class Aleatorio {


    get(): number {
        return Math.floor(Math.random() * 100 + 1);
    }
}

const y = new Aleatorio()
console.log(y.get());
console.log(y.get());
console.log(y.get());
console.log(y.get());
console.log(y.get());
