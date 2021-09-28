let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*10);
};

const compareGuesses = (user, computer, target) => {
    if (user < 0 || 9 < user ){
        return alert('El número está fuera de rango (0-9)');
    }

    diffUser = Math.abs(user-target);
    diffComp = Math.abs(computer-target);

    if (diffUser === diffComp){
        return true;
    } else if (diffUser < diffComp){
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};