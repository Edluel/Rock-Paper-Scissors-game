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
    new Promise(resolve => setTimeout(resolve, 1500)).then(() => {
        alert(you);
        alert(house);


    
    });
}