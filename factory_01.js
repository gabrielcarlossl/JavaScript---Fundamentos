const prod1 = {
  nome: "pão",
  preco: 4.5,
};

// facilita na criação de muitos objetos

function criarPessoa(nome, sobrenome) {
  return { 
    
    nome: nome, 
    sobrenome: sobrenome ? sobrenome : 'Leite' 
    
    };
}




let pessoas = []

pessoas.push(criarPessoa('gabriel', 'carlos'))
pessoas.push(criarPessoa('ari', 'carlos'))
pessoas.push(criarPessoa('snoppy', 'carlos'))
pessoas.push(criarPessoa('lely'))

console.log(pessoas)