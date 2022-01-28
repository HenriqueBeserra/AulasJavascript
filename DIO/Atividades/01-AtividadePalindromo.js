function palindromo(palavra) {
    if(!palavra) return;

    return palavra.split('').reverse().join("") === palavra
    
    
}

// verifica metade da string observando a igualdade dos caracteres.
function palindromo2(palavra) {
    let array = ["!", " ", "."]
    if(!palavra) return;
    
    for(i =0; i, palavra.length; i++){
        if(palavra[i] in array){
            palavra.split('').splice(i)
        }
    }console.log(palavra)
    
    
    
    for(i = 0; i < palavra.length /2; i++){
        if(palavra[i] !== palavra[palavra.length -1 - i]){
            return false
        }
        
    }
    return true;
}
console.log(palindromo2('anna'));
