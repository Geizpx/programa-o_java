alert('Bem vindos ao jogo do número secreto');
let numeroSecreto = 5;
console.log('numeroSecreto')
let chute = prompt('Escolha um número entre 1 e 86');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
alert('Muito bem! Você acertou o número secreto (43)');
} else {
alert('Não foi dessa vez :(')
}