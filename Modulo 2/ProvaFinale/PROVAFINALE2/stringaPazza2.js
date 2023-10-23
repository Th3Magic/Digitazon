 // pseudocodice
 // controllo subito che non ci siano le parole Church o mare altrimenti ritorno false
 // poi controllo tutte le altre condizioni una alla volta
 // nel caso nessuna sia vera ritorno false perchè la stringa non è pazza

 function stringaPazza(string){
    if(string.includes('Church') || string.includes('mare')){
        return false
    }
    return isMad(string)
 }

 function isMad(string){
    if(string.includes('Cthulhu')){
        return true
    }

    let words = string.split(' ')
    let firstWord = words.shift()
    let lastWord = words.pop()

    if(lastWord.endsWith('?!?')){
        return true
    }

    let ending =['are', 'ere', 'ire']
    if(ending.some(s => firstWord.endsWith(s)) && ending.some(s => lastWord.endsWith(s))){
        return true
    }

    if(firstWord[0].match(/[“\,\.\!\?\:\;\-\~]/)){
        return true
    }

    let soggetti = ['Lui', 'Lei', 'Egli', 'Ella']
    if(!soggetti.some(s => string.includes(s))){
        return true
    }

    return false
 }
 
console.log(stringaPazza('boh lui non lo so'))