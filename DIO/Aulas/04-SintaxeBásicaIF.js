// // prop
// const user = {
//     nome :"João",
//     idade : 12,
//     cidade : "Recife",
//     getName: function(){   //método this
//         return this.nome;
//     }, getIdade: function(){
//         return this.idade;
//     }
// }
// console.log(user.getIdade())

// // for in
//  for(prop in user){
//      console.log(prop)
//  }
//  for(prop in user){
//           console.log(user[prop])
//  }

// // // do whille
//  let num = 0;
//  do{
//      console.log(num)
//      num++;
//  }while(num<10);



 const people = {
    nome :"João",
    idade:22
 }  

 const pessoa = {
     nome: "Henrique",
     idade:33,
 }

 function getName(){
     console.log(this.nome);
 }

 //getName.call(people); // o .call ajuda nesta abstração para diferenciar qual o objeto deve ser referenciado.
 
let name = getName.bind({nome:'Henrique'})

console.log(name())

//