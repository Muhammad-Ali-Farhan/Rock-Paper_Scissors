const scores = JSON.parse(localStorage.getItem('scores')) || {
    wins: 0,
    losses: 0,
    ties: 0
};




updatescore(); 




function comp1() {
    const rand = Math.random();
    if (rand < 1/3) return 'rock';
    else if (rand < 2/3) return 'paper';
    else return 'scissors';
}




function play(choice) {



    const comp = comp1();


    let result = '';



    if (choice === 'rock') {
        result = comp === 'rock' ? 'It is a tie.' : comp === 'paper' ? 'You lose.' : 'You win.';
    } else if (choice === 'paper') {
        result = comp === 'paper' ? 'It is a tie.' : comp === 'scissors' ? 'You lose.' : 'You win.';
    } else if (choice === 'scissors') {
        result = comp === 'scissors' ? 'It is a tie.' : comp === 'rock' ? 'You lose.' : 'You win.';
    }

    if (result === 'You win.') scores.wins++;
    else if (result === 'You lose.') scores.losses++;
    else scores.ties++;

    localStorage.setItem('scores', JSON.stringify(scores));


    document.querySelector(".js-status").innerHTML = result; 


    document.querySelector(".js-moves").innerHTML = `
    You picked<br>
    <img class="move1" src="${choice}.png">`;

    document.querySelector(".js-moves1").innerHTML = `
    Computer picked<br>
    <img class="move2" src="${comp}.png">`;


    updatescore();
}

function updatescore() {
    document.querySelector(".js-scores").innerHTML = `Wins: ${scores.wins}        Losses: ${scores.losses}        Ties: ${scores.ties}`;
}