var numeroSecreto = parseInt(Math.random() * 11);
var contador = 0;

function Chutar() {
    console.log(contador);
    contador ++;

    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);
   
    console.log(numeroSecreto);

    if (contador < 4) {
        if (chute == numeroSecreto) {
            elementoResultado.innerHTML = "Tentativa " + contador + ". Acertou!";
            console.log(elementoResultado);
        } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Tentativa " + contador + ". Você deve digitar um número de 0 a 10";
        console.log(elementoResultado);
        }
        else { 
        elementoResultado.innerHTML = "Tentativa " + contador + ". Errou!";
        console.log(elementoResultado);
        }
    } else {
        elementoResultado.innerHTML = " Suas Tentativas Acabaram!";
    }


}