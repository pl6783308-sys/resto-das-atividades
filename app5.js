let numero

numero = parseInt(prompt("Qual seu  numero"))


if(numero % 3 == 0 && numero % 5 == 0 ){
   alert("E um numero multiplo de  3 e 5")
}else if ( numero % 3 != 0 && numero % 5 ==0){
    alert("Ele e multiplo de 5")
}else if(numero % 3 == 0 && numero % 5 != 0){
    alert("Ele e um multiplo de 3")
}else if(numero % 3 != 0 && numero % 5 != 0){
    alert("Ele  nao e um multiplo de 3 e 5 ") }
  
