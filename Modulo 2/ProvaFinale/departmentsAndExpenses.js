
// pseudocodice
// creo un array dove mettere i contenuti della stringa
// creo una variabile DEPARTMENT e EXPENSES
//  ciclo sulla stringa
//  continuo fino a quando non vado a capo e memorizzo la stringa in DEPARTMENT
//  quando vado a capo e non sono nello spazio vuoto
//      se ci sono caratteri numerici
//          trasformo in numero
//          lo metto nell'array e inizializzo la stringa a ''
//      altrimenti
//          lo metto nell'array e inizializzo la stringa a ''
// creo una mappa con le due chiavi conosciute
// ciclo sull'array ottenuto 
//   controllo se l'elemento è una stringa o un numero
//   riempo la mappa reinizializzandola ogni volta che c'è una stringa
// ritorno l'array finale con gli oggetti per ogni reparto

function departmentsAndExpenses(string) {
    let departmentAndExpenses = []
    let department = ''
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (!char.match(/[\n]/)) {
            department += char
        } else if (department != '') {
            if (department.match(/[0-9]/)) {
                departmentAndExpenses.push(Number(department))
                department = ''
                continue
            }
            departmentAndExpenses.push(department)
            department = ''
        }
    }
    let res = []
    let currentObj = {
        'department': null,
        'expenses': 0
    }
    for (let j = 0; j < departmentAndExpenses.length; j++) {
        let currentElement = departmentAndExpenses[j]
        if (j == 0) {
            currentObj.department = currentElement
        } else {
            if (typeof currentElement === 'string') {
                res.push(currentObj)
                currentObj = {
                    'department': null,
                    'expenses': null
                }
                currentObj.department = currentElement
            }
            if (typeof currentElement === 'number') {
                currentObj.expenses += currentElement
            }
        }

    }
    res.push(currentObj)
    return res
}

console.log(departmentsAndExpenses(`
cancelleria
500
40
60

ufficio
600
40
60

Vendite
0
10
`))

