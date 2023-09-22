let tree = {
    "value": "Arwen",
    "left": {
        "value": "Earendil",
        "left": {
            "value": "Nimloth the Fair",
            "left": null,
            "right": null
        },
        "right": {
            "value": "Galadriel",
            "left": {
                "value": "Eowyn",
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": "Shelob",
        "left": null,
        "right": null
    },
}

function treeOfTheKing(tree, valueToFind) {
    // metto il nodo alla radice dell'albero in un array
    // creo un array finale dove mettere i vari livelli dell'albero
    let treeArray = [tree]
    let output = []
    // ciclo sull'array e man mano che scorro i livelli rimuovo il nodo
    // mettendo da parte gli elementi presenti
    while (treeArray.length) {
        let size = treeArray.length
        let nodes = []
        while (size) {
            // prendo il primo nodo del livello corrente
            // e lo metto in una variabile
            let node = treeArray.shift()
            // pusho il nodo in un array
            nodes.push(node.value)
            // prendo tutti i figli di questo nodo
            // e pusho i valori non null
            // e vado al nodo successivo
            node.left && treeArray.push(node.left)
            node.right && treeArray.push(node.right)
            size--
            // ripeto per tutti i nodi a questo livello
        }
        output.push(nodes)
    }
    console.log(output)
    for (let i = 0; i < output.length; i++){
        for (let j = 0; j < output[i].length; j++) {
            if (output[i][j] === valueToFind) {
                return i
            }
        }
    }
    return -1
}

console.log(treeOfTheKing(tree, "Eowyn"))