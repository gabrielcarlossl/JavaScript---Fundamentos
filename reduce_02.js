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

console.log(alunos)

// todos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista ).reduce(todosBolsistas))

// algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista 
console.log(alunos.map(a => a.bolsista ).reduce(algumBolsista))