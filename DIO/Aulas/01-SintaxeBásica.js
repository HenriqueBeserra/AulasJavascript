// Comentários de apenas 1 linha
/*Comentários
de várias linhas. */

var x = 3;
var y = 2;
const CONSTANTE = 9;

// Funções 
function soma(a, b) {
    console.log(a + b);
    return a*CONSTANTE + b;
}
 
if (1 != 2) {
    console.log("")
}

//if ternário
 x != y ? console.log("") : console.log("");

// switch/case
let tipoUsuario = 'Gerente'

switch (tipoUsuario) {
  case 'Admin':
    mensagem = '*|*| Feliz Natal, chefe! |*|*';
    break
  case 'Gerente':
    mensagem = 'Boas festas, meu amigo!';
    break
  default:
    mensagem = 'Boas festas!';
}
console.log(mensagem)


for(i in Array){
    console.log(i)
} // imprime o indice

for(i of array){
    console.log(i)
}//imprime o valor

var soma = (a,b) => {console.log(a+b)};
soma (1,2) //arrow function 

var igual = num1 == num2 ? "São iguais" : "Não são iguais" //função ternária