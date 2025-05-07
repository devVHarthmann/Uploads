//CONVERTER CELSIUS PARA FAHRENHEIT

const converterPFahrenheit = (celsius) => {
    return ((9/5 * celsius)+32)
}
console.log(converterPFahrenheit(30))

//GERAR UM NÚMERO ALEATÓRIO DE UM VALOR ATÉ OUTRO

const gerarNumero = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
console.log(gerarNumero(0, 10))

//CRIE UMA ARROW FUNCTION QUE RECEBA UMA PALAVRA E RETORNE ELA INVERTIDA

const inverterPalavra = (palavra) =>{
    return palavra.split('').reverse().join('')
}
console.log(inverterPalavra("xiru"))

//PERCORRA UM VETOR, E RETORNE DESTA LISTA A QUANTIDADE DE ELEMENTOS PARES

const retornarQuantPar = (vetor) => {
 num = (vetor.filter(vetor => vetor%2==0)).length();
 return num
}
const vetor = [1, 2, 4, 6]
console.log(retornarQuantPar(vetor))