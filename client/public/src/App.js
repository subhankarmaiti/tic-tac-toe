import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  state = {
    board: ["", "", "", "", "", "", "", "", ""],
    turn: "x"
  };
  updateState = index => {
    const { turn, board } = this.state;
    board[index] = turn;
    this.setState({ board, turn: turn === "x" ? "o" : "x" });
  };
  render() {
    return (
      <>
        <div className="board">
          {this.state.board.map((item, index) => {
            return (
              <div
                className="square"
                onClick={() => this.updateState(index)}
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
