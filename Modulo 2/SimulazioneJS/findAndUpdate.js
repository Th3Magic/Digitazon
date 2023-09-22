function findAndUpdate(array) {
    // pseudocodice
    // creare una mappa con le nuove relazioni per aggiornare gli oggetti
    // nell'array in ingresso
    // ciclare sugli elementi dell'array
    //  usare il valore dell'oggetto dell'array iniziale come chiave della
    //  mappa creata
    //  aggiornare il valore nell'oggetto dell'array
    // ritornare l'array aggiornato

    let mapForUpdate = {
        "boolean": false,
        "string": "",
        "number": 0,
        "array": [],
        "object": {}
    }

    for (let i = 0; i < array.length; i++) {
        let currentMap = array[i]
        let currentObjectType = currentMap["type"]
        let currentMapKeys = Object.keys(currentMap)
        let currentKey = currentMapKeys[0]
        if (currentMap[currentKey] === null) {
            currentMap[currentKey] = mapForUpdate[currentObjectType]
        }
    }
    return array
}

console.log(findAndUpdate([
    {
        "maggiorenne": null,
        "type": "boolean"
    },
    {
        "nome": null,
        "type": "string"
    },
    {
        "cognome": "Rossi",
        "type": "array"
    }
]))