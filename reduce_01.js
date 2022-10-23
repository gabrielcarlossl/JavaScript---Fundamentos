alunos = []

function criarAluno(nome, nota, bolsista){
    return {
            nome,
            nota,
            bolsista
        }

    
}

alunos.push(criarAluno('gabriel', 9.7, false))
alunos.push(criarAluno('lely', 10, true))
alunos.push(criarAluno('leticia', 9.9, false))
alunos.push(criarAluno('snoppy', 8.7, false))



const resultado = alunos.map( 
    a => a.nota).reduce(function(acumulador, atual){
        console.log(acumulador, atual)
        return acumulador + atual
})

console.log(alunos)