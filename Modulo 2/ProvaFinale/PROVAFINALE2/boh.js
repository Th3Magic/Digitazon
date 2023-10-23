let string =`
Cancelleria
500
40
60

Servizi igenici
1000
1
200

Vendite
0
`

function departmentData(string) {
    let departmentElement = string.trim().split('\n')
    let departmentList = []
    let object = {name : '', totale : 0}
    let count = 0
    for(let i = 0; i < departmentElement.length; i++) {
        let current = departmentElement[i]
        if(current.match(/[a-z]/i)){
            object.name = current
        }else if (current.match(/[0-9]/)){
            current = parseInt(current)
            count += current
            object.totale = count
        }else if(current == '') {
            departmentList.push(object)
            object = {name : '', totale : 0}
            count = 0
        }
    }
    departmentList.push(object)
    return departmentList
}
console.log(departmentData(string))
