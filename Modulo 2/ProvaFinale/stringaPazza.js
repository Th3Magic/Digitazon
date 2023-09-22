 // pseudocodice
 // controllo subito che non ci siano le parole Church o mare altrimenti ritorno false
 // poi controllo tutte le altre condizioni una alla volta
 // nel caso nessuna sia vera ritorno false perchè la stringa non è pazza

 function stringaPazza(string){
    let soggetti = ['Lui', 'Lei', 'Egli', 'Ella']
    if(string.includes('Church') || string.includes('mare')){
        return false
    }
    if(string.includes('Cthulhu')){
        return true
    }
    let words = string.split(' ')
    let lastWord = words.pop()
    if(lastWord == '?!?'){
        return true
    }
    let firstWord = words.shift()
    let firstLast = firstWord + lastWord
    if(firstLast.includes('are') || firstLast.includes('ere') || firstLast.includes('ire')){
        return true
    }
    if(firstWord.match(/[“\,\.\!\?\:\;\-\~]/)){
        return true
    }
    let hasASubject = false
    for(let i = 0; i < soggetti.length; i++){
        if(string.includes(soggetti[i])){
            hasASubject = true
            return false
        }
    }
    
    if(!hasASubject){
        return true
    }

    return false
 }

 console.log(stringaPazza('Lui e’ pazzo.'))