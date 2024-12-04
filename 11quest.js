// 11. Crie um objeto chamado `biblioteca` que possui uma propriedade `livros` (um array de objetos). Cada objeto no array deve representar um livro, com as propriedades `titulo` e `autor`. Adicione um método ao objeto `biblioteca` chamado `listarLivros` que exibe o título e o autor de cada livro.
// VOLTAR AQUI
const biblioteca = {
    livros: [
      { titulo: "1984", autor: "George Orwell" },
      { titulo: "A Revolução dos Bichos", autor: "George Orwell" },
      { titulo: "Dom Casmurro", autor: "Machado de Assis" }
    ],
    listarLivros: function() {
      this.livros.forEach(livro => {
        console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
      });
    }
  };
  
  biblioteca.listarLivros();
  