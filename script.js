// const 'rock'
const ROCK = '✊';
const PAPER = '🖐';
const SCISSORS = '✌';
const gameChoices = [ROCK, PAPER, SCISSORS];
function computerPlay() {
    return gameChoices[Math.floor(Math.random()*gameChoices.length)];
    
}

// console.log(computerPlay());
let pScore = 0;
let cScore = 0;

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection) {

    let roundWinner = '';
    let message = '';
    let computerSelection = computerPlay();

    
    
    if (playerSelection === ROCK && computerSelection === SCISSORS ||
        playerSelection === SCISSORS && computerSelection === PAPER ||
        playerSelection === PAPER && computerSelection === ROCK) {
            ++pScore;
            roundWinner = `You won this round! ${playerSelection} beats ${computerSelection}`;
            
            
        }
    else if (playerSelection === computerSelection)
        roundWinner = `It\'s a draw! You both chose: ${playerSelection}`;
        
    else {
        ++cScore;
        roundWinner = `You lost this round! ${playerSelection} is beaten by ${computerSelection}`;
        
    }
    if (pScore === 5) {
        roundWinner = 'GAME OVER! YOU WON!';
        disableButtons();
    }
    else if (cScore === 5) {
        roundWinner = 'GAME OVER! YOU LOST!';
        disableButtons();
    }
        
    message = `Your Score:${pScore}  Computer Score:${cScore}`;
    document.getElementById('result').textContent = roundWinner;
    document.getElementById('message').innerHTML = message;
    return;
}



// UI

const buttons = document.querySelectorAll('button');
// const result = ;
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    } )
})