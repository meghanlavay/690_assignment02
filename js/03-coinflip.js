let coinFlip = Math.round(Math.random());
let choice = prompt('Select heads (h) or tails (t)');

if (coinFlip < .05) {
    coinFlip = 'heads';
} else {
    coinFlip = 'tails';
}

if (choice === 'h') {
    if (coinFlip === 'heads') {
        alert('The flip was heads and you chose heads...you win!');
    } else if (coinFlip === 'tails') {
        alert('The flip was tails but you chose heads...you lose!');
    }
} else if (choice === 't') {
    if (coinFlip === 'heads') {
        alert('The flip was heads but you chose tails...you lose!');
    } else if (coinFlip === 'tails') {
        alert('The flip was tails and you chose tails...you win!');
    }
} else {
    alert('Your selection is invalid.');
}