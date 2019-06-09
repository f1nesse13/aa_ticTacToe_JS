class Board {
  constructor() {
    this.board = [["_","_","_"],
                  ["_","_","_"],
                  ["_","_","_"]]
  }

  print() {
    let showGrid = [["_","_","_"],
                    ["_","_","_"],
                    ["_","_","_"]]
    this.board.forEach((el, i) => {
      el.forEach((el2, j) => {
        showGrid[i][j] = el2 === "_" ? " " : `${el2}`
      });
      console.log(showGrid[i].join("|"))
    })
  
  }

  // won()
  // winner()
  // empty()
  // placeMark()

}

a = new Board();
a.print();