function ConverterRtoUs() { // Captura o valor do input em dólar, converte em float e real.
    var real = parseFloat(document.getElementById("valorDolar").value);
    var dolar = real / 5;

    console.log(dolar);

//    valor = document.getElementById("valorConvertido")
 //   console.log(valor);

    document.getElementById("valorConvertido").innerHTML = "O valor de R$ "+ real + " em dólar é US$ " + dolar;

}

function ConverterUstoR() { // Captura o valor do input em dólar, converte em float e real.
    var dolar = parseFloat(document.getElementById("valorReal").value);
    var real = dolar * 5;

//    valor = document.getElementById("valorConvertido")
 //   console.log(valor);

    document.getElementById("valorConvertido").innerHTML = "O valor de US$ "+ dolar + " em real é R$ " + real;

}