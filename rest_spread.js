// usar o rest com parametro de função

// usar spread com objeto

const funcionario = { nome: 'maria', salario: 3000}

const clone = { ativo: true, ...funcionario}

console.log(clone)

// usar spread com array

const grupoA = ['a', 'b', 'c']

const grupoFinal = [ 'F', ...grupoA, 'Z']
const finalGroup = [1,2,grupoA,'G']

console.log(grupoFinal)
console.log(finalGroup)