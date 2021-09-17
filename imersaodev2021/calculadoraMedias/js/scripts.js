function calculaMedia() { // Calcula Médias de quatro notas

    // Recebe o nome do form e apresenta a saudação
    var nome = document.getElementById("seuNome").value;
    // var elementoNome = document.getElementById("boasVindas");
    // elementoNome.innerHTML = "Bem-vindo " + nome;

    document.getElementById("boasVindas").innerHTML = "Bem-vindo " + nome;

    // Recebe do form html as variáveis das notas em cada bimestre
    var notaPrimeiroBimestre = parseFloat(document.getElementById("nota1b").value);
    var notaSegundoBimestre  = parseFloat(document.getElementById("nota2b").value);
    var notaTerceiroBimestre = parseFloat(document.getElementById("nota3b").value);
    var notaQuartoBimestre   = parseFloat(document.getElementById("nota4b").value);

    // Calcula a média
    var mediaFinal = (notaPrimeiroBimestre+notaSegundoBimestre+notaTerceiroBimestre+notaQuartoBimestre)/4;

    // Apresenta a média no console, fixando o resultado em uma casa decimal. .toFixed

    // var elementoCalculoMedia = document.getElementById("revelaNota");
    // elementoCalculoMedia.innerHTML = "Sua média é " + mediaFinal;

    document.getElementById("revelaNota").innerHTML = "Sua média é " + mediaFinal;
}

