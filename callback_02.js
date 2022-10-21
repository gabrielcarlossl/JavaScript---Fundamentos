const notas = [ 7.7, 6.5, 8.8, 9.0, 5.4, 7.1, 5.2]
//sem callback
let notasBaixas = []

for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(`nota baixas sem callback = ${notasBaixas}`)

// com callback

notasBaixasCallback = notas.filter(function(nota){
    return nota < 7
})

console.log(`nota baixas callback = ${notasBaixasCallback}`)


notasBaixasCallback2 = notas.filter( nota => nota < 7)

console.log(`nota baixas callback2 = ${notasBaixasCallback2}`)