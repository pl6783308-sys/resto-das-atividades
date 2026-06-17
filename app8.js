let resultadoF = parseInt(prompt("Qual foi o lucro do mes "))
let gastos = parseInt(prompt("Qual foi o gastos do mes "))

if(resultadoF - gastos >= 500){
    alert("Tivemos  lucro esse mes")
}else if(resultadoF == gastos ){
    alert("Tivemos um empate esse mes")
}else if(resultadoF - gastos <= 0){
    alert("tivemos prejuizo esse mes" )
}