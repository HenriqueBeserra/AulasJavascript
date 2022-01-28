//Função Callback
const calc = function(operação, num1, num2){
    return operação(num1,num2);
}

const soma = function(num1,num2){
    return num1+num2;
}
let div = function(num1, num2){
    return num1/num2;
}


let resultado = calc(div, 4, 3)


//Valor padrão de parâmetro
function dobra (num1, num2 =2) {
    return num1 * num2;
}


//Argumento de parâmetros
function findMax(){
    let max = -Infinity; //Diz que a variável pode possuir tamanhos negativos
    
    for(let i=0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

// Spread
function sum(n1,n2){
    return n1+n2;
}
let array = [1,2]
console.log(sum(...array))

// Rest
function sei(...args) {console.log(args.length)}




var user = {
    nome: "Henrique",
    idade: 22
}


function info({nome}){
    console.log(nome)
}

console.log(info(user))

// Função autodeclarável
(function soma(a,b){ 
    console.log(a+b)
})(1,3)


// forEach e map
test=(["d", "i", "e", "g", "o", "u", "u", "o"])
let item;
let num;

const mostrar = (item) => {
    console.log(item);
}


test.forEach((num)=> {
    mostrar(num)
})

var numbers = [1, 4, 9];
var roots = numbers.map(function(num){
    console.log(num *2)
});

