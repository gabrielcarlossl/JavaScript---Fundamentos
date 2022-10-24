// promise é uma função quando se quer ter um processamento assicrono
// recebe 2 parametros o RESOLVE e REJECT
// RESOLVE quando tem sucesso ( o RESOLVE aceita apenas 1 parametro)
// REJECT quando não tem sucesso


function falarDepoisDe(segundos, frase){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

// para obter a PROMISE deve ser passado um .THEN
// caso for rejeitada com o REJECT é necessário chamar o CATCH

falarDepoisDe(3, 'gabriel carlos')
    .then(frase => frase.concat('!!!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))