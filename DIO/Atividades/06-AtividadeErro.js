//Receber um array e retornar um erro se o array não tiver o tamanho passado no parâmetro

error = new Error


function verify(array, num){
   try{

       if(array.length != num ) throw  new RangeError("Parametro errado")
       if(typeof array !== 'object') throw new TypeError("O tipo do parametro está errado")
       
    }
    catch(e){
        if(e instanceof RangeError){
            console.log("Erro de tamanho")
        }
    
    }
       return array;
}




verify([1,2], 4)