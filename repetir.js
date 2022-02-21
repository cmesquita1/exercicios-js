// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado

function repetir (repetir, vezesRepetir) {
    let saida = []

    for (let index = 0; index < vezesRepetir; index++) {
        saida.push(repetir);
    }
    return saida
}
