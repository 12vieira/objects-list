// 8. Crie um objeto chamado `pessoa` com as propriedades `nome` e `idade`. Use o método `Object.seal()` para impedir a adição ou remoção de propriedades, mas permita a modificação dos valores existentes. Modifique o valor da propriedade `nome` e tente adicionar uma nova propriedade chamada `cidade`. Exiba o objeto no console.

const pessoa = {
    nome: 'Nimbus',
    idade: 23

}
console.log(pessoa)
Object.seal(pessoa);

pessoa.nome = 'Numbus Linus';

pessoa.cidade = 'Guarapari'

console.log(pessoa)