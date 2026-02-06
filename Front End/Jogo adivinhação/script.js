function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const feedback = document.getElementById("feedback");
    const guess = parseInt(guessInput.value);
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (isNaN(guess)) {
        feedback.textContent = "Por favor, insira um número válido.";
        return;
    }

    while (guess !== randomNumber) {
        if (guess > randomNumber) { 
            feedback.textContent = "Seu palpite é maior que o número correto. Tente novamente.";} 
        else {
            feedback.textContent = "Seu palpite é menor que o número correto.";}
    }

    if (guess === randomNumber) {
        feedback.textContent = "Parabéns! Você acertou o número!"; }
        guessInput.disabled = true;
}