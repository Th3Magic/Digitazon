// scrivere una funzione che prende in ingresso un array di numeri 
// e ritorna un array che alla posizione 0 ha il numero piu' piccolo presente nell'array, 
// e alla posizione 1 il numero piu' grande presente nell'array

function maxAndMin(numbers) {
    let res = []
    let current = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < current) {
            current = numbers[i]
            res[0] = current
        } else {
            current = numbers[i]
            res[1] = current
        }
    }
   
    return res
}

console.log(maxAndMin([1,2,3,0,6,7]))