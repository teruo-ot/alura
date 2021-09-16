// Calcula Médias de quatro notas

var nome = "Teruo";

// Declara as variáveis das notas em cada bimestre
var notaPrimeiroBimestre = 9;
var notaSegundoBimestre = 10;
var notaTerceiroBimestre = 8;
var notaQuartoBimestre = 10;

// Calcula a média
var mediaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

console.log (mediaFinal);

// Apresenta a média no console, fixando o resultado em uma casa decimal. .toFixed

console.log("Bem vindo " + nome);

function calculaMedia() {
    var elementoCalculoMedia = document.getElementById("revelaNota");
    console.log(elementoCalculoMedia);
    
    var mediaCalculada = "Sua média é " + mediaFinal;

    elementoCalculoMedia.innerHTML = mediaCalculada
}

