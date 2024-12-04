//6. Utilize o método `Object.keys()` para obter todas as chaves de um objeto chamado `produto` com as propriedades `nome`, `preco` e `estoque`. Exiba as chaves no console.

const produto = {
    nome: "bola",
    preco: 125,
    estoque: true
}

let chaves = Object.keys(produto);

console.log(chaves)