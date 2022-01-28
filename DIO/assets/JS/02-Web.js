var currentNumber = document.getElementById("number");
var cont = 0;

function increment() {
    cont = cont + 1;
    number.innerHTML = cont;
    return cont;
}

function decrement() {
    cont = cont - 1;
    number.innerHTML = cont;
    return cont;
} 

console.log(cont)