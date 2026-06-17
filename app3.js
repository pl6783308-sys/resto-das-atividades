const equilatero = 3
const isoceles = 2
const escaleno = 0

let lados 

lados = parseFloat(prompt("Informe quantos lados Iguais seu triangulo tem "))


if(lados == 3){
    alert("sera um equilatero")
}
if(lados == 2 ){
    alert("sera um isoceles")
}
if(lados == 0){
    alert("sera um escaleno")
}



