
function findAndReplace(string, wordToFind, replacement) {
    // pseudocodice
    // data string1 controllare se wordToFind è presente e in che posizione
    //  ciclo sugli elementi di string1 confrontandoli con wordToFind
    //      se un elemento è uguale pusho in un array l'indice di quell'elemento
    //      continuo andando avanti in string1 e wordToFind fino a tutta la sua lunghezza
    //      se ne trovo uno diverso esco dal ciclo e vado avanti in string1
    //  se la lunghezza dell'array con gli indici è uguale alla lunghezza
    //  di wordToFind, ho trovato la parola!
    // creo una nuova stringa vuota che sarà la stringa finale
    // ciclo sulla lunghezza della stringa iniziale
    //  aggiungo alla stringa finale ogni lettera in quella iniziale
    //      arrivato all'indice di partenza della parola da sostituire
    //      aggiungo replacement alla stringa finale
    //      imposto l'indice del ciclo alla fine della parola sostituita
    //  finisco di aggiungere se restano altre lettere della stringa iniziale
    // ritorno la nuova stringa

    let wordToFindIndexes = []

    for (let i = 0; i < string.length - wordToFind.length + 1; i++) {
        wordToFindIndexes = []
        for (let j = 0; j < wordToFind.length; j++) {
            if (string[i + j] === wordToFind[j]) {
                wordToFindIndexes.push(i + j)
            } else {
                break
            }
        }
        if (wordToFind.length == wordToFindIndexes.length) {
            break
        }
    }

    let finalString = ''

    for (let i = 0; i < string.length; i++) {
        if (i == wordToFindIndexes[0]) {
            finalString += replacement
            i = wordToFindIndexes[wordToFindIndexes.length - 1]
        } else {
            finalString += string[i]
        }
    }
    return finalString
}

console.log(findAndReplace('ciao a tutti', 'ciao', 'buonanotte'))