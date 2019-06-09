const Game = require('./game.js');
const Board = require('./board.js')
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let newGame = new Game();

newGame.run(reader, completionCallback)
  
function completionCallback() {
  reader.question("Would you like to play again? Y/N ", (playAgain) => {
    if (playAgain.toUpperCase() === "Y") {
      newGame = new Game() 
      newGame.run(reader, completionCallback)
    } else {
      reader.close();
    }
  });
}