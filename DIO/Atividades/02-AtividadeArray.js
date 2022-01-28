function pares(array){ 
    if(!array.length) return-1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log(`${array[i]} Já é igual a 0.`);
        
        }else if(array[i] % 2 === 0){
            array[i] = 0;
            }
    }
    console.log(array);
        
}

pares([1,2,3,4,5,6,7,8,9,10,11,12,14,151,15,16,12345,1532,15324534,12345,1234567,1234544,]);