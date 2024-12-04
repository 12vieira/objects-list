//1. Crie um objeto chamado `livro` com as propriedades `titulo`, `autor` e `paginas`. Em seguida, exiba cada propriedade no console usando a notação de ponto e a notação de colchetes.

const livro = {
    titulo: "O Hobbit",
    autor: "Tolkien",
    paginas: 321
}

console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.paginas);

console.log(livro["titulo"]);  
console.log(livro["autor"]);   
console.log(livro["paginas"]); 