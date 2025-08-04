window.alert("Boas vindas o jogo do número secreto");
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute = 0;
let tentativas = 1;

//enquanto
while (chute != numeroSecreto) {
    chute = window.prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se chute for igual o numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            window.alert(`O numero secreto é menor que ${chute}`);
        } else {
            window.alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavrasTentativa = tentativas > 1 ? "tentativas" : "tentativa";

window.alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavrasTentativa}`);
