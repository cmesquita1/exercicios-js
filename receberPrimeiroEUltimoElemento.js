// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:


function receberPrimeiroEUltimoElemento(array) {
    let saida = [];
    saida.push(array[0], array[array.length - 1])
    return saida
}
