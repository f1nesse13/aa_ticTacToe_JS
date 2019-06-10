const Game = require('./game.js');
const Board = require('./board.js');
const Human = require('./humanPlayer.js');
const Computer = require('./computerPlayer.js')
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let player1 = new Human("Joe");
let player2 = new Computer();
let newGame = new Game(player1, player2);

newGame.intro()
newGame.run(reader, completionCallback)
  
function completionCallback() {
  reader.question("Would you like to play again? Y/N ", (playAgain) => {
    if (playAgain.toUpperCase() === "Y") {
      newGame = new Game(player1, player2) 
      newGame.run(reader, completionCallback)
    } else {
      reader.close();
    }
  });
}