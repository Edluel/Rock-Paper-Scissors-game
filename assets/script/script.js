document.addEventListener('DOMContentLoaded', function() {
    getScoreFromLocalStorage();
});
  
function toggleRules() {
    const rules = document.querySelector('.rules');
    rules.style.display === 'none' ? rules.style.display = 'block' : rules.style.display = 'none';
}
  
function choice(you) {
    document.querySelector('.choice').style.display = 'none';
    document.querySelector('.load').style.display = 'flex';
    loadGame(you);
}

function loadGame(you) {
    // append player choice to load screen
    const your = document.querySelector('.your');

    if(you === 'rock'){
        const rock = document.querySelector('.rock');

        const cloneRock = rock.cloneNode(true);

        your.appendChild(cloneRock);
    }
    else if(you === 'paper'){
        const paper = document.querySelector('.paper');

        const clonePaper = paper.cloneNode(true);

        your.appendChild(clonePaper);    
    }
    else{
        const scissors = document.querySelector('.scissors');

        const cloneScissors = scissors.cloneNode(true);

        your.appendChild(cloneScissors);    
    }

    document.querySelector('.enemy-empty-choice').style.display = 'flex';

    // append randomized computer choice to load screen
    new Promise(resolve => setTimeout(resolve, 1500)).then(() => {
        const house = randomChoice();
        
        const enemy = document.querySelector('.enemy');

        if(house === 'rock'){
            const rock = document.querySelector('.rock');
    
            const cloneRock = rock.cloneNode(true);
    
            enemy.appendChild(cloneRock);
        }
        else if(house === 'paper'){
            const paper = document.querySelector('.paper');
    
            const clonePaper = paper.cloneNode(true);
    
            enemy.appendChild(clonePaper);    
        }
        else{
            const scissors = document.querySelector('.scissors');
    
            const cloneScissors = scissors.cloneNode(true);
    
            enemy.appendChild(cloneScissors);    
        }

        document.querySelector('.enemy-empty-choice').style.display = 'none';

        gameResult(you, house);
    });

    
}

function randomChoice() {
    const items = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * items.length);
    return items[choice];
}

function gameResult(you, house){
    
    const results = {
        'rock': {
            'rock': 'DRAW!',
            'paper': 'YOU LOSE!',
            'scissors': 'YOU WIN!'
        },
        'paper': {
            'rock': 'YOU WIN!',
            'paper': 'DRAW!',
            'scissors': 'YOU LOSE!'
        },
        'scissors': {
            'rock': 'YOU LOSE!',
            'paper': 'YOU WIN!',
            'scissors': 'DRAW!'
        }
    };

    document.querySelector('.result-text').innerHTML = results[you][house];

    new Promise(resolve => setTimeout(resolve, 500)).then(() => {      
        document.querySelector('.result').style.display = 'flex';
        updateScore();
    });
}

function updateScore() {
    const resultText = document.querySelector('.result-text');
    const scoreNumber = document.querySelector('.header-score-number');
  
    if (resultText.innerHTML === 'YOU WIN!') {
      let score = parseInt(scoreNumber.innerHTML) + 1;
      scoreNumber.innerHTML = score;
      localStorage.setItem('score', score);
    }
}

function getScoreFromLocalStorage() {
    const scoreNumber = document.querySelector('.header-score-number');
    const storedScore = localStorage.getItem('score');
    if (storedScore) {
      scoreNumber.innerHTML = storedScore;
      toggleRules();
    }
}

function playAgain() {
    location.reload();
}

//localStorage.clear();