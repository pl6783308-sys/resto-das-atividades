let medida1 = parseInt(prompt('informe a primeira medida do seu triãngulo'))
let medida2 = parseInt(prompt('informe a primeira medida do seu triãngulo'))
let medida3 = parseInt(prompt('informe a primeira medida do seu triãngulo'))

if(medida1 == medida2 && medida1 == medida3){
    alert("Seu triangulo e equilatero")
}else if (medida1 != medida2 && medida2 != medida3 && medida3 != medida1){
    alert("Seu triangulo e um Escaleno")
}else{
    alert("Seu triangulo e isoceles")
}