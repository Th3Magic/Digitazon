// scrivere una funzione che data una stringa in ingresso 
// ritorna solo i caratteri che al piu' compaiono una volta

function noDuplicatesString(string) {
    let res = ""
    for (let i = 0; i < string.length; i++) {
            if (string.indexOf(string[i]) == string.lastIndexOf(string[i])){ // controllo se l'elemento è ripetuto nella stringa
                res += string[i]
            }
    }
    return res
}

console.log(noDuplicatesString("laloappr"))