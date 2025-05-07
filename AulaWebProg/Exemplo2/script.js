/*const multiplicar = function (a, b) {
    return a + b
}
let resultado = multiplicar(4, 2)
console.log("Multiplicação: ", resultado)
*/
const saudar = function(nome){
    return "Olá, "+ nome+" !"
}
console.log(saudar("Xiru"));

const exibir = function(mensagem){
    alert("Mensagem: "+ mensagem)
}
exibir("Seja bem-vindo!")

const verHoraAtual = function(){
    return new Date().toLocaleTimeString();
}

console.log("Agora são: "+ verHoraAtual())