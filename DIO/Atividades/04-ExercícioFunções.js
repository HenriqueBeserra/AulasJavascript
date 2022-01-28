// Retornar um array com alunos aprovados 
const dados = [
    {aluno:"Pedro",
     nota:5,
     turma:"12"},
 
     {aluno:"Caetano",
     nota:8,
     turma:"12"},

     {aluno:"João",
     nota:6,
     turma:"12"},

     {aluno:"Maria",
     nota:10,
     turma:"12"},

     {aluno:"Maria",
     nota:6,
     turma:"12"},
     
     {aluno:"Maria",
     nota:5,
     turma:"12"},
     
     {aluno:"Maria",
     nota:10,
     turma:"12"},
     
     {aluno:"Maria",
     nota:1,
     turma:"12"},
     
     {aluno:"Maria",
     nota:2,
     turma:"12"},
]

    
function alunosAprovados(array, med){
    let aprovados = [];
    
    for(let i = 0; i < array.length ; i++){
        
        const {aluno, nota} = array[i]; 
        
        if(nota >= med){
            aprovados.push({aluno, nota})
        }
    }
    console.log(aprovados)
}
//console.log(dados)
alunosAprovados(dados, 6)