/*let num = [5, 8, 2, 9, 3 ]
num[5] = 10
num.push(11) //adiciona um novo elemento
num.length // quantidade de elementos
num.sort() //coloca em ordem os elementos
console.log(`Nosso vetor é o ${num}`)*/

let num = [5, 8, 2, 9, 3] 
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)

}

