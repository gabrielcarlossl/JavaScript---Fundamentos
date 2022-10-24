function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'gabriel'
const situacao = 'aprovado'
console.log(tag `${aluno} está ${situacao}`)