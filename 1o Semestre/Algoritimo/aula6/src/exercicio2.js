function primeira(string) {
    if (string.length === 0) {
        return undefined
    }
    else {
        return string[0]
    }
}

p = primeira("Pedro")
console.log(p);
p = primeira("Maria")
console.log(p);
