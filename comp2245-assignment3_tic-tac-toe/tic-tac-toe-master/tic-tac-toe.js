"use strict";

// Use onload event to ensure the DOM is loaded before running the script
window.onload = function() {
    // Add event listener to each square
    Array.from(document.getElementById('board').children).forEach(element => element.setAttribute('class', 'square hover'));

    // Create an array to keep track of the state of the game
    let gameState = Array.from(document.getElementById('board').children).map(element => element.innerHTML);
    // Create win function to return true the selected combination of squares is a winning combination
    const win = ([first, second, third, forth, fifth, sixth, seventh, eight, ninth]) =>
    (
        (first !== '' && first === second && second === third) ||  // Row 1
        (forth !== '' && forth === fifth && fifth === sixth) ||    // Row 2
        (seventh !== '' && seventh === eight && eight === ninth)    // Row 3
    ) ||
    (
        (first !== '' && first === forth && forth === seventh) ||  // Column 1
        (second !== '' && second === fifth && fifth === eight) ||  // Column 2
        (third !== '' && third === sixth && sixth === ninth)       // Column 3
    ) ||
    (
        (first !== '' && first === fifth && fifth === ninth) ||    // Diagonal 1
        (third !== '' && third === fifth && fifth === seventh)     // Diagonal 2
    );

    let player = 'X';
    let winner = '';

    document.getElementById('board').addEventListener('click', event => {
        // Get the index of the clicked square
        let index = Array.from(document.getElementById('board').children).indexOf(event.target);
        console.log(index)
        // Check if the square is empty
        if (gameState[index] === '' && winner === '') {
            // Update the game state
            gameState[index] = player;
            // Update the square
            event.target.innerHTML = player;
            event.target.classList.add(player);
            // Check if the game is over
            console.log(gameState);
            console.log(win(gameState));
            if (win(gameState)) {
                winner = player;
                document.getElementById('status').innerHTML = `Congratulations! ${winner} is the Winner!`;
                document.getElementById('status').classList.add('you-won');
            }
            // Update the player
            player = player === 'X' ? 'O' : 'X';
            console.log(player)
        }
    });
}