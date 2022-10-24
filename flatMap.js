const escola = [
  {
    nome: "turma m1",
    alunos: [
      {
        nome: "gabriel",
        nota: 8.8,
      },
      {
        nome: "carlos",
        nota: 9,
      },
    ],
  },
  {
    nome: "tumar m2",
    alunos: [
      {
        nome: "lely",
        nota: 10,
      },
      {
        nome: "ana",
        nota: 7.7,
      },
    ],
  },
];

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2s = escola.flatmap(getNotasTurma)
console.log(nota2s)