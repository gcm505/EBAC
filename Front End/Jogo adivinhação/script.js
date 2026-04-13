// Gerar um numero de 1 a 100 
// Math.random = 0 - 0.999...  
// Math.random()*100 = 0 - 99.999...
// Math.floor(Math.random() * 100) = 0 - 99
// Math.floor(Math.random() * 100) + 1 = 1 - 100

const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
let tentativas = 10;

function checkGuess() {
    let chute = parseInt(document.getElementById('chute').value);
    

    if(isNaN(chute) ||chute < 1 || chute >100){
        alert("Por favor, insira um número entre 1 e 100.");
        return;
    }

    tentativas--;

    if(chute == numeroAleatorio){
        document.getElementById('feedback').innerHTML = 'Parabéns! Você acertou o número ' + numeroAleatorio + ' em ' + (10 - tentativas) + ' tentativas.';  
    } else if(tentativas == 0){
        alert("Você perdeu! O número secreto era "+ numeroAleatorio); // alert para teste de design, pode ser removido depois. 
        location.reload();
    } else if (chute < numeroAleatorio) {
        document.getElementById('feedback').innerHTML = 'O número é maior!';
        document.getElementById('tentativas').innerHTML = 'Tentativas restantes: ' + tentativas;
    } else {
        document.getElementById('feedback').innerHTML = 'O número é menor!';
        document.getElementById('tentativas').innerHTML = 'Tentativas restantes: ' + tentativas;
    }

    
}
