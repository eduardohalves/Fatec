function ultima(string) {
    if (string.length < 0) {
        return undefined
    }
    else {
        return string[0]
    }
}

u = ultima("Pedro")
console.log(u);
u = ultima("Maria")
console.log(u);
