function Calcular() {
    var notaPrimeiroBimestre = parseFloat(document.getElementById("nota1bimestre").value);
    var notaSegundoBimestre = parseFloat(document.getElementById("nota2bimestre").value);
    var notaTerceiroBimestre = parseFloat(document.getElementById("nota3bimestre").value);
    var notaQuartoBimestre = parseFloat(document.getElementById("nota4bimestre").value);
    
    var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;
    
    var notaFixada = notaFinal.toFixed(1);
    
    if (notaFixada >= 6){
        var elementoMédiaFinal = document.getElementById("MédiaFinal")
        var MédiaFinal = "Parabéns! Você passou! Sua nota final é: " + notaFixada
        elementoMédiaFinal.innerHTML = MédiaFinal
    } else {
        var elementoMédiaFinal = document.getElementById("MédiaFinal")
        var MédiaFinal = "Que pena :( Você não passou! Sua nota final é: " + notaFixada
        elementoMédiaFinal.innerHTML = MédiaFinal
    }
}
 

    
    
    
    
    





