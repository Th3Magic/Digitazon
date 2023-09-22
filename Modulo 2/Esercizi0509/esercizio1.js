//  scrivere una funzione che prende in ingresso due array a e b, 
// la funzione deve ritornare un array che contenga gli elementi che sono solo in a e solo in b

function differentSets(a, b){
    let res = []
    for(let i = 0; i < a.length; i++){
        if(b.indexOf(a[i]) === -1){ // elementi che sono solo in a
            res.push(a[i])
        }
    }
    for(let i = 0; i < b.length; i++){
        if(a.indexOf(b[i]) === -1 && res.indexOf(b[i]) === -1){ // elementi che sono solo in b
            res.push(b[i])
        }
    }
    return res
}

console.log(differentSets([1,2,3,4,1,2,7],[3,4,5,6,1,2]))