const Board = require('./board.js')

class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = player1
    this.board = new Board();
  }
  
   
  
  getMove(reader, turn, callback) {
    this.board.print();

    reader.question(`${turn}'s turn. Pick a row? `, (moveX) => {
      let row = (parseInt(moveX) - 1)
      reader.question(`${turn}'s turn. Pick a column. `, (moveY) => {
        let col = (parseInt(moveY) - 1)
        let pos = [row, col]
        callback(pos)
      });   
    });
  }

  intro() {
    console.log(`\n\nIts time for the match up of the century! ${this.player1.getName()} is ready to take on ${this.player2.getName()}!! Standby for the most entertaining sport in all the world... TIC TAC TOE!! \n\n`)
  }

  run(reader, completionCallback) {
    let currentTurn = (this.turn === this.player1 ? "X" : "O")
    this.turn = currentTurn;
    this.getMove(reader, currentTurn, (pos) => { 
      if (!this.board.placeMark(pos, currentTurn)) {
        console.log("Invalid move!")
      }
      if (!this.board.won()) {
        this.run(reader, completionCallback);
      } else {
        this.board.winner()
        completionCallback();
      }
  })
  }
}

module.exports = Game;