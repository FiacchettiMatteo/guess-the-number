let secretNumber = Math.floor(Math.random() * 20) + 1;
let attemptsLeft = 5;
let GameOver = false;


function checkGuess() {
    if (GameOver) {
        return; // se il gioco è finito, esci dalla funzione
    }

    let guessInput = document.getElementById("guess")
    let resultDiv = document.getElementById("result");
    let attemptsDiv = document.getElementById("attempts");
    let attemptsWonDiv = document.getElementById("attempts-won");
    let startBtn = document.getElementById("start-btn");
    let restartBtn = document.getElementById("restart-btn");

    const userGuess = parseInt(guessInput.value);
    const differenze = Math.abs(userGuess - secretNumber);

    attemptsLeft--;
    attemptsDiv.textContent = 'Tentativi rimasti: ${attemptsLeft}';

    if (attemptsLeft === 0 && (isNaN(userGuess) || userGuess < 1 || userGuess > 20)) {
        resultDiv.textContent = "Hai esautiro i tentativi. Ritenta";
        document.getElementById("restart-btn").style.display = "block";
        document.getElementById("guess").disabled = true;
        GameOver = true; // imposta il gioco come finito
    } else if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        resultDiv.textContent = "Inserisci un numero valido tra 1 e 20";

        // Reset dell'input
        guessInput.value = '';
    } else if (userGuess === secretNumber) {
        resultDiv.textContent = "Congratulazioni! hai indovinato";
        startBtn.style.display = "none";
        restartBtn.style.display = "block";

        // mostro il numero di tentativi quando si vince
        attemptsDiv.style.display = "none";
        attemptsWonDiv.textContent = 'Hai vinto con ${5 - attemptsLeft} tentativi'
        attemptsWonDiv.style.display = "block";
        GameOver = true; // imposta il gioco come finito

    } else if (attemptsLeft === 0 && differenze <= 2) {
        resultDiv.textContent = "Hai esautiro i tentativi. Ritenta";
        document.getElementById("restart-btn").style.display = "block";
        document.getElementById("guess").disabled = true;
        GameOver = true; // imposta il gioco come finito   

    } else if (differenze <= 2) {
        resultDiv.textContent = "Ti stai avvicinando, FORZA!";

        guessInput.value = '';

    } else if (attemptsLeft === 0) {
        resultDiv.textContent = "Hai esautiro i tentativi";
        startBtn.style.display = "none";
        document.getElementById("restart-btn").style.display = "block";
        document.getElementById("guess").disabled = true;
        GameOver = true; // imposta il gioco come finito

    } else {
        resultDiv.textContent = "Sbagliato. Prova di nuovo!";

        guessInput.value = '';
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
}

function playAgain() {
    location.reload();
}
console.log(secretNumber);