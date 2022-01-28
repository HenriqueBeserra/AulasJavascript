//Operadores Atividade
function compara(num1, num2) {
    var igual = num1 == num2 ? "São iguais" : "Não são iguais" 
    var soma = num1+num2;
    var vrify = soma < 10 ? `${soma} É menor que 10 ` : `${soma} É maior que 10 `  
    var verify = soma > 20 ? `${soma} É maior que 20` : `${soma} É menor que 20`
    console.log(`Os números ${num1} e ${num2}, ${igual}, ${vrify} e ${verify}`)
}


compara(3,15)