function calcularMedia(a, b, c) {
    console.log("A média é ",((a + b + c) / 3));
}
function calcularDobro(a) {
    return a*2;
}
function verificarParImpar(a) {
    if (a % 2 == 0) {
        return "É par"
    } else {
        return "É impar"
    }
}

calcularMedia(8, 9, 10);
console.log(calcularDobro(5))
console.log(verificarParImpar(2))
console.log(verificarParImpar(1))