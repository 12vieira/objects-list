//10. Crie um objeto chamado `agenda` que armazena informações sobre uma pessoa: `nome`, `telefone` e `email`. Crie uma função fora do objeto que receba este objeto como parâmetro e exiba uma mensagem formatada com todas as informações da pessoa.

const agenda = {
    nome: 'Alice',
    tel: '1234-9876',
    email: 'alice1@gmail.com'
}

function info(a){
    console.log(`nome: ${a.nome}, telefone: ${a.tel}, email: ${a.email}`)
}

(info(agenda))