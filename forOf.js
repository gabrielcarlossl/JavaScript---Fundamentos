for (let letra of 'gabriel'){
    console.log(letra)
}


console.log( '---------------------------')

palavras = ['eu', 'tu', 'eles']

// percorre em cima do indice

for(let i in palavras){
    console.log(i)
}
console.log( '---------------------------')

// vai percorrer as palavras dentro do array

const assuntosEcma = ['map', 'set', 'promise']
for (let palavra of assuntosEcma){
    console.log(palavra)
}

console.log( '---------------------------')
// percorrendo um map
const assuntosMap = new Map([
    ['map', {abordado: true}],
    ['set', {abordado: true}],
    ['promise', {abordado: true}],
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

console.log( '---------------------------')
// percorrendo as keys
for (let chave of assuntosMap.keys()){
    console.log(chave)
}

console.log( '---------------------------')

// percorrendo as valores
for (let valor of assuntosMap.values()){
    console.log(valor)
}

console.log( '---------------------------')
// percorrendo as keys e valores
for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

console.log( '---------------------------')
// percorrendo um SET

const set = new Set(['a', 'b', 'c'])
for(let letra of set){
    console.log(letra)
}