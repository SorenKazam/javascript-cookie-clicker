const cookie = document.getElementById('cookie');
const timerDisplay = document.getElementById('timerDisplay');
const clicksDisplay = document.getElementById('clicksDisplay');
const gameOverDisplay = document.getElementById('gameOver')
let count;
let timer;
let gameStatus = false // the game needs to be in false to begin

cookie.addEventListener('click', () => {
    if(gameStatus == false){
        console.log('Starting Game!')
        reset()
        iniciarContador()
        cookie.addEventListener('click', () => {
            clicksDisplay.textContent = count
            count++
        })
    }
});

const reset = () => {
    timer = 20 // 20 secounds timer
    count = 0 // reset points to zero
    gameStatus = true // in true, the game cant be reset by the cookie button
    gameOverDisplay.textContent = '' // delete the game over message if there is one
    console.log('Game reset complete')
}

function iniciarContador() {
    const intervalo = setInterval(function() {
        // Exibe o valor atual do contador
        timerDisplay.textContent = timer
        // Verifica se o contador chegou a zero
        if (timer === 0) {
            // Se chegou a zero, para o temporizador
            gameOverDisplay.textContent = 'Game Over!'
            gameStatus = false
            clearInterval(intervalo);
        } else {
            // Se não chegou a zero, decrementa o contador
            timer--;
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}