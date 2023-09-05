// scrivere una funzione che prende in ingresso un array di stringhe a, 
// la funzione deve ritornare una mappa dove ogni chiave corrisponde ad ogni stringa in a 
// e il valore corrisponde alla lunghezza della stringa

function mapOfStrings(a){
    let res = {}
    for(let i = 0; i < a.length; i++){
        res[a[i]] = a[i].length // inserisco una nuova relazione nella mappa
    }
    return res
}

console.log(mapOfStrings(["prova", "ciao", "boh", ""]))