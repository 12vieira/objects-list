//5. Crie dois objetos chamados `usuario1` e `usuario2` com as propriedades `nome` e `idade`. Combine os dois objetos em um único objeto chamado `usuarios`, utilizando o spread operator. Exiba o objeto resultante no console.


// Criando os objetos 'usuario1' e 'usuario2'
const usuario1 = { 
    nome: "Cleber", 
    idade: 30 
};
const usuario2 = { 
    nome: "Joana", 
    idade: 25 
};

// Combinando os dois objetos em 'usuarios'
const usuarios = {...usuario1,...usuario2};

// Exibindo o objeto resultante no console
console.log(usuarios);
