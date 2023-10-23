// pseudocodice
// creo una mappa per la conversione dei numeri con il sistema romano
// controllo se il numero è una delle chiavi della mappa
//  se lo è 
//      ritorno il valore corrispondente
//  se non lo è
//      controllo quante cifre ha n
//          a seconda del numero di cifre gli sottraggo il numero corrispondente
//          e metto da parte la lettera romana in una stringa
//      arrivato a 0 ritorno la stringa

function spqr(num) {
    // Definisci le corrispondenze tra i numeri arabi e i numeri romani
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let result = ''

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += numerals[i]
            num -= values[i]
        }
    }

    return result
}

console.log(spqr(29))