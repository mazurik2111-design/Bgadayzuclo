let secret = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const result = document.getElementById("result");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.innerText = "Введіть число від 1 до 100.";
    } else if (guess < secret) {
        result.innerText = "Більше!";
    } else if (guess > secret) {
        result.innerText = "Менше!";
    } else {
        result.innerText = "Вітаю! Ви вгадали!";
    }
}