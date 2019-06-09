const Board = require('./board.js')

class Game {
  constructor() {
    this.turn = "X"
    this.board = new Board();
  }
  
   
  
  getMove(reader, turn, callback) {
    console.clear()
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

  run(reader, completionCallback) {
    let currentTurn = (this.turn === "O" ? "X" : "O")
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