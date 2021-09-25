var carta1 = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
        }
    };

var carta2 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
        }
    };

var carta3 = {
    nome: "Shiryu de Dragão",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
        }
    };

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3 );
    cartaMaquina = cartas [numeroCartaMaquina];

    var numeroCartaJogador = parseInt ( Math.random() * 3 );

    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt ( Math.random() * 3 );
    }
    
    cartaJogador = cartas [ numeroCartaJogador];
    
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
}

function exibirOpcoes () {
    var opcoes = document.getElementById("opcoes");

    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += 
            "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementsByName("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    console.log(valorCartaJogador);
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    console.log(valorCartaMaquina);

    if (valorCartaJogador > valorCartaMaquina) {
        console.log("Máquina")
        elementoResultado.innerHTML = "Você Venceu!"
    } else if (valorCartaMaquina > valorCartaJogador) {
        console.log("VocÊ")

        elementoResultado.innerHTML = "Você Perdeu!"
    } else {
        console.log("Empatou")

        elementoResultado.innerHTML = "Empatou!"
    }
console.log (cartaMaquina);
 console.log("jogou");
}