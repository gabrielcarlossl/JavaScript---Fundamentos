function criarProduto(nome, preco, desconto){
    return {
        nome: nome,
        preco: preco,
        desconto: 0.10
    }
}

let produtos = []

produtos.push(criarProduto('pão', 4.5))
produtos.push(criarProduto('queijo', 10.5))
produtos.push(criarProduto('suco', 5.5, .20))
console.log(produtos)