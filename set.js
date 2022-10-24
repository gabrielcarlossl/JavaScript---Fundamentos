// estrutura indexada(nao tem indice) mas não aceita repetição

const times = new Set()

times.add('vasco')
times.add('palmeiras')
times.add('vasco')
times.delete('vasco')

console.log(times)

console.log(times.size)
console.log(times.has('vasco')) // has retorna boolean se o que foi passado tem no SET

