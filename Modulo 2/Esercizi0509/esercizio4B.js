// scrivere una funzione che data una stringa in ingresso 
// ritorna solo i caratteri che al piu' compaiono una volta

function noDuplicatesString(string) {
    let res = ""
    for (let i = 0; i < string.length; i++) {
        if (i == 0 && string.indexOf(string[i], i + 1) === -1) { // per il primo elemento della stringa
            res += string[i]
        }

        if (!(string.indexOf(string[i], i + 1) > -1 || string.lastIndexOf(string[i], i - 1) > -1)) { // per tutti gli altri elementi della stringa
            res += string[i]
        }
    }
    return res
}

console.log(noDuplicatesString("laloapprr"))