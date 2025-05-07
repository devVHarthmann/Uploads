/*const sacanear = (nome) => {
    return "Receba " + nome + " seu bobão";
}
console.log(sacanear("Luis"))
const avisar = () => {
    alert("Está é um arrow function");
}
avisar();
const numeros = [1, 2, 3, 4, 5];
const dobrar = numeros.map(n => n * 2)
console.log(dobrar);*/

// FILTRAR PALAVRAS COM MENOS DE 5 CARACTERES
const palavras = ["Sol", "JavaScript", "Lua", "Computador", "if"];
const longas = palavras.filter(palavras => palavras.length > 5);
console.log(longas)

//SOMAR TODOS OS NÚMEROS
const valores = [10, 20, 30, 40];
const soma = valores.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);

//ORDENAR NOMES POR ORDEM ALFABÉTICA
const nomes = ["Carlos", "Ana", "Pedro", "Bianca"];
const ordenados = nomes.sort((a, b) => a.localeCompare(b));
console.log(ordenados)