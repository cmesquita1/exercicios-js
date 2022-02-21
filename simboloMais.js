// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.


function simboloMais(vezesRepetir) {
    let saida = []
    for (let index = 0; index < vezesRepetir; index++) {
        saida.push('+')        
    }
    return saida.join('')
}
