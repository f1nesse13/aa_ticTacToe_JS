class Board {
  constructor() {
    this.board = [["X","O","X"],
                  ["O","X","X"],
                  ["X","X","O"]]
  }

  print() {
    let showGrid = [[" "," "," "],
                    [" "," "," "],
                    [" "," "," "]]
    this.board.forEach((el, i) => {
      el.forEach((el2, j) => {
        showGrid[i][j] = el2 === " " ? " " : `${el2}`
      });
      console.log(showGrid[i].join("|"))
    })
  
  }

  empty(pos) {
    if (this.board[pos[0]][pos[1]] === " ") {
      return true;
    } else {
      return false;
    }
  }

  placeMark(pos, mark) {
    if (this.empty(pos)){
      this.board[pos[0]][pos[1]] = mark
      return true;
    } else {
      console.log("Position filled")
      return false;
    }
  }

  won() {
    let winner = false;
    Board.WINPOSITIONS.forEach(el => {
      if (el.every((pos, i, el) => {
        return this.board[pos[0]][pos[1]] === "X"
      })) {
        console.log("X has won!")
        winner = true;
      }

      if (el.every((pos, i, el) => {
        return this.board[pos[0]][pos[1]] === "O"
      })) {
        console.log("O has won!")
        winner = true;
      }
    })

    if (this.checkEmpty()) {
      console.log("No winner!")
      winner = true;
    }
    // patch until tomorrow
    if(winner === true) {
      return true;
    } else {
      return false
    }
  }

  checkEmpty () {
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        if (this.board[i][j] === " ") {
          return false
        }
      }
  }
  return true
}

}
Board.WINPOSITIONS = [
  [[0,0], [0,1], [0,2]],
  [[1,0], [1,1], [1,2]],
  [[2,0], [2,1], [2,2]],
  [[0,0], [1,0], [2,0]],
  [[0,1], [1,1], [2,1]],
  [[0,2], [1,2], [2,2]],
  [[0,0], [1,1], [2,2]],
  [[2,0], [1,1], [0,2]],
]
a = new Board();
a.print();
a.won();