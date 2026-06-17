const senha = 1234
const usuario = "admin"

let nomeUsuario = prompt("Qual seu nome de usuario ?")
let sehaUsuario =prompt("Qual sua senha de usuario ?")

if(nomeUsuario == "admin" && sehaUsuario == 1234 ){
    alert("Acesso concedido")
}else{
    alert("Acesso negado")
}

