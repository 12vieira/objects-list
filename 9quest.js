//9. Crie um objeto chamado `calculadora` com os métodos `somar(a, b)` e `multiplicar(a, b)`. Use esses métodos para somar e multiplicar dois números, e exiba os resultados no console.


const calc = {
    soma: ((x, y) => x + y ),
    mult: ((x,y) => x*y)
}

console.log(`soma: ${calc.soma(4,5)} e multiplicação: ${calc.mult(4,5)}`);