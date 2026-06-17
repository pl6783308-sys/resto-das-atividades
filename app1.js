let notaFinal

notaFinal = parseFloat(prompt("Qual sua nota ?"))
if(notaFinal >= 7){
    alert("voce esta aprovado")
}
if(notaFinal >= 5) {
   if(notaFinal < 7)
        alert("Voce esta de recuperaçao")
    }
if(notaFinal < 5){
    alert("esta reprovado")
}