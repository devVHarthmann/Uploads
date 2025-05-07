/*const gerarTabuada = function(a){
    tabuada = ""
    for(i = 1; i <= 10; i++){
        tabuada += `${a} x ${i} = ${(a*i).toString()} \n`
    }
    return tabuada
}
*/
const jogar = function(){
    num = Math.floor(Math.random()*4)
    x = 0
    tentativas = 0
    while(x != num){
        x = Number(prompt("Insira um número entre 1 e 3: "))
        tentativas++
        if(x == num){
            alert("Parabéns, você acertou!!!! Tentativas: " + tentativas)
        } else{
            
            alert("Errrrrrouuuuu xiru")
        }
    }
}
jogar()




//console.log(gerarTabuada(9))
