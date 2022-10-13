Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i< this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos =[
    {nome: 'notebook', preco: 2400, fragil: true},
    {nome: 'Celular', preco: 2000, fragil: true},
    {nome: 'taça', preco: 40, fragil: true},
    {nome: 'pote', preco: 20, fragil: false},
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))