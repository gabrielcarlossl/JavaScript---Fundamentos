const produtos =[
    {nome: 'notebook', preco: 2400, fragil: true},
    {nome: 'Celular', preco: 2000, fragil: true},
    {nome: 'taça', preco: 40, fragil: true},
    {nome: 'pote', preco: 20, fragil: false},
]

console.log(produtos.filter((p) => p.preco >= 2000))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))