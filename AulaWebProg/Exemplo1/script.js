function somar(a, b){
    return (a+b)
}
//function exibirMensagem(){
//    alert("Boa tarde!");
//}
function calcular(op, x, y){
    if(op == 1){
        console.log("Soma: ",(x+y))
    } else if(op == 2){
        console.log("Subtração: ", (x-y))
    } else if(op == 3){
        console.log("Multiplicação: ", (x*y))
    } else{
        if(y!=0){
            console.log("Divisão", (x/y))
        } else{
            console.log("Impossivel divisão por zero!")
        }
    }
}
calcular(1,8,9)
calcular(2,22,10)
calcular(3,2,9)
calcular(4,4,2)
calcular(4,4,0)



let resultado = somar(5,3);
console.log("Soma: ", resultado);
//exibirMensagem();
