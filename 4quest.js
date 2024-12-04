//4. Crie um objeto chamado `aluno` com as propriedades `nome`, `idade` e `matriculado` (com valores booleanos). Use um `for...in` para iterar sobre o objeto e exibir as chaves e os valores no console.

const aluno = {
    nome: "CARLOS",
    idade: 16,
    matriculado: true
}
  for (let chave in aluno) {
    console.log(chave + ": " + aluno[chave]);
  }