// Gerar um numero de 1 a 100 
// Math.random = 0 - 0.999...  
// Math.random()*100 = 0 - 99.999...
// Math.floor(Math.random() * 100) = 0 - 99
// Math.floor(Math.random() * 100) + 1 = 1 - 100

const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
let tentativas = 0;

function checkGuess() {
    let chute = parseInt(document.getElementById('chute').value);
    tentativas++;

    if(tentativas == 5){
        alert("infelizmente voce não adivinhou o numero "+ numeroAleatorio + " em 5 tentativas");
        location.reload();
    } // alert para teste de design, pode ser removido depois.

    if(chute == numeroAleatorio){
        document.getElementById('feedback').innerHTML = 'Parabéns! Você acertou o número ' + numeroAleatorio + ' em ' + tentativas + ' tentativas.';  
    } else if (chute < numeroAleatorio) {
        document.getElementById('feedback').innerHTML = 'O número é maior!';
        document.getElementById('tentativas').innerHTML = tentativas;
    } else {
        document.getElementById('feedback').innerHTML = 'O número é menor!';
        document.getElementById('tentativas').innerHTML = tentativas;
    }
}

