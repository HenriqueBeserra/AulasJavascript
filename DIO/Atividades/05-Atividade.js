const user = new Map()

user.set("Henrique", "Gestor")
user.set("João", "Tem Leader")
user.set("Marina", "FullStack")
user.set("Juliano", "Gestor")
user.set("Silas", "Software Engeniere")
user.set("Rafaela", "Gestor")


function usuarios(map){
    let obj = []
    
    for([key, value] of map){
        if(value === "Gestor"){
            obj.push(key)
        }
    }
    return obj;
    
}


console.log(usuarios(user))