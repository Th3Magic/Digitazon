
function departmentsAndExpenses(string) {
    let matrix = backticksToMatrix(string)
    let minAndMax = [{
        'department': null,
        'expenses': 0
    }, {
        'department': null,
        'expenses': 0
    }]
    for (let i = 0; i < matrix.length; i++) {
        if(matrix[i][1] > minAndMax[0].expenses){
            minAndMax[0].department = matrix[i][0]
            minAndMax[0].expenses = matrix[i][1]
        } else {
            minAndMax[1].department = matrix[i][0]
            minAndMax[1].expenses = matrix[i][1]
        }
    }
    return minAndMax
}

function backticksToMatrix(string){
    let departmentAndExpenses = string.split('\n')
    let matrix = []
    let res =[]
    let expenses = 0
    for(let i = 0; i < departmentAndExpenses.length; i++){
        let current = departmentAndExpenses[i]
        if(current === '' && i != 0){
            res.push(expenses)
            matrix.push(res)
            res = []
            expenses = 0
        }
        if(current.match(/[a-z]/i)){
            res.push(current)
        }
        if(current.match(/[0-9]/)){
            expenses += Number(current)
        }
    }
    return matrix
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
20
10
`))


