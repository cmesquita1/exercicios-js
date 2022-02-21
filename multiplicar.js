// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.


function multiplicar(numero, multiplicador) {
    let contador = 0;
    for(let i =  0; i < multiplicador; i++) {
        contador += numero;
    }
    return contador;
}
