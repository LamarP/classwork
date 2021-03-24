import * as minesweeper from "../../minesweeper";
import React from 'react';
import Board from './board';
class Game extends React.Component {

  constructor(props) {
    super(props);
    this.board = new minesweeper.Board(9, 10);
    this.state = { board: this.board };
    console.log(this.board);
  }

  updateGame() {
  }

  render() {
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}></Board>
    </div>
    )
  }
}

export default Game;