'use strict';

var secretNumber = Math.floor(Math.random() * 100) + 1;
var score = 20;

document.querySelector('.check').addEventListener('click', function() {
    var guess = Number(document.querySelector('.guess').value);

    if (0 > guess || guess > 100) {
        document.querySelector('.message').textContent = '⛔ Between 0 and 100!'
    } else {
        if (score != 0) {
            if (guess === secretNumber) {
                document.querySelector('body').style.backgroundColor = '#60B347';
                document.querySelector('.message').textContent = '🎉 Correct Number!'
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('.number').textContent = `${secretNumber}`;


            } else if (guess > secretNumber) {
                document.querySelector('body').style.backgroundColor = '#B7657B';
                document.querySelector('.message').textContent = '⬇️ Too High!'
                score--;
                document.querySelector('.score').textContent = score;
            } else if (guess < secretNumber) {
                document.querySelector('body').style.backgroundColor = '#78C4D4';
                document.querySelector('.message').textContent = '⬆️ Too Low!'
                score--;
                document.querySelector('.score').textContent = score;
            }
        } else {
            document.querySelector('body').style.backgroundColor = '#E60965';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = `${secretNumber}`;
            document.querySelector('.message').textContent = '😔 Game Over!'
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    if (document.querySelector('.guess').value == secretNumber && score > Number(document.querySelector('.highscore').textContent)) {
        document.querySelector('.highscore').textContent = score;
    }
    score = 20;
    secretNumber = Math.floor(Math.random() * 100) + 1;
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})