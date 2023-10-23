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

function spqr(n){
    let map = {
        '1'    : 'I',
        '5'    : 'V',
        '10'   : 'X',
        '50'   : 'L',
        '100'  : 'C',
        '500'  : 'D',
        '1000' : 'M'
    }
    let nString = ''
    nString += n
    let mapKeys = Object.keys(map)
    if(mapKeys.indexOf(nString) > -1){
        return map[nString]
    }
    if(n == 0){
        return 0
    }
    let nLength = nString.length
    let res = ''

    for(let i = mapKeys.length - 1; i < mapKeys.length; i--){
        keyNumber = Number(mapKeys[i])
        if(n == 0){
            return res
        }
        if((n == 4 || n == 9) && mapKeys.indexOf(n +1)){
            return res += map['1'] + map[n + 1]
        }
        if((n == 40 || n == 90) && mapKeys.indexOf(n +1)){
            return res += map['10'] + map[n + 10]
        }
        if((n == 400 || n == 900) && mapKeys.indexOf(n +1)){
            return res += map['100'] + map[n + 100]
        }
        if(keyNumber <= n){
            n = n - keyNumber
            let newstring = '' + n
            nLength = newstring.length 
            res += map[mapKeys[i]]
            i = mapKeys.length
        }
    }
    return res
}

console.log(spqr(29))