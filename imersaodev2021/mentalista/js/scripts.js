var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    console.log(numeroSecreto);

    if (chute == numeroSecreto) {
        console.log("Acertou");
    } else if (chute > 10 || chute < 0) {
        console.log ("Você deve digitar um número de 0 a 10");
    }
     else { 
        console.log("Errou!");
    }

}