// throw retorna um erro

// function trat(str){
//     if(!str) throw "String inválida - put something "   
// }

// //trat();

// function tratamento(string){
//     try{
//         trat()
//     }
//     catch(e){
//         throw e;
//     }
// }

// tratamento()


//ERRor

//new Error(mensage, fileName, lineNumber)

const meuErro = Error("Tratando erros da melhor forma");
meuErro.name = "Invalid Comand" //setando um nome para o erro
throw meuErro;