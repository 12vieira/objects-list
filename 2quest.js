// 2. Adicione uma nova propriedade chamada `editora` ao objeto `livro` criado na questão anterior. Modifique o valor da propriedade `titulo` e remova a propriedade `autor`. Exiba o objeto atualizado no console.

const livro = {
    titulo: "O Hobbit",
    autor: "Tolkien",
    paginas: 321
}

livro.editora = "Harper Collins"
livro.titulo = "Senhor dos Anéis"
delete livro.autor

console.log(livro)
