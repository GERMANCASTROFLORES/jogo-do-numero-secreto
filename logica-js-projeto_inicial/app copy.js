alert('BEM VINDOS NERDOLAS');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('EM QUAL NUMERO TO PENSANDO ENTRE 1 e ${numeroMaximo}');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`MENOR QUE ${chute} MANITO`)
        } else {
            alert(`MAIOR QUE ${chute} MANITO`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA'
alert(`VOCE ACERTOU O NUMERO ${numeroSecreto} COM ${tentativas} ${palavraTentativa}`);
