import { useState } from "react";
import { BoardSquare } from "./BoardSquare";
import { BoardContext } from "../contexts/BoardContext";
import { PlayerContext } from "../contexts/PlayerContext";
import { EndGamePopUp } from "./EndGamePopUp";

export function Board(props) {
  const [board, setBoard] = useState(BoardContext._currentValue);
  const [round, setRound] = useState(1);
  const [isTheGameFinished, setIsTheGameFinished] = useState(false);
  const [endGameMessage, setEndGameMessage] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleUpdateRound() {
    handleCheckForWinningConditions();
    handlePlayerChange();
    setRound(round + 1);
  }

  function handlePlayerChange() {
    if (currentPlayer == "X") {
      setCurrentPlayer("O");
    }
    if (currentPlayer == "O") {
      setCurrentPlayer("X");
    }
  }

  function handleCheckForWinningConditions() {
    for (let index = 0; index < 3; index++) {
      // Checking for lines
      if (
        board[index][0] != "" &&
        board[index][0] == board[index][1] &&
        board[index][0] == board[index][2]
      ) {
        handleGameEnding(currentPlayer + " won!");
        return;
      }
      // Checking for columns
      if (
        board[0][index] != "" &&
        board[1][index] == board[0][index] &&
        board[0][index] == board[2][index]
      ) {
        handleGameEnding(currentPlayer + " won!");
        return;
      }
    }
    // Checking for diagonals
    if (
      board[0][0] != "" &&
      board[0][0] == board[1][1] &&
      board[0][0] == board[2][2]
    ) {
      handleGameEnding("Player " + currentPlayer + " won!");
      return;
    }
    if (
      board[1][1] != "" &&
      board[0][2] == board[1][1] &&
      board[0][2] == board[2][0]
    ) {
      handleGameEnding("Player " + currentPlayer + " won!");
      return;
    }
    if (round == 9) {
      handleGameEnding("It's a tie!");
    }
  }

  function handleGameEnding(message) {
    setIsTheGameFinished(true);
    setEndGameMessage(message);
  }

  function handleGameReset() {
    setIsTheGameFinished(false);
    setCurrentPlayer("X");
    setEndGameMessage("");
    setRound(1);
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="p-2 text-center flex flex-row justify-center items-center box-border text-2xl">
          {round == 1 ? (
            <div
              className="mx-2 flex flex-row justify-center items-center cursor-pointer"
              onClick={handlePlayerChange}
            >
              <span className="material-symbols-outlined">swap_vert</span>
            </div>
          ) : (
            <div />
          )}
          <div className="">Current Player:{" " + currentPlayer}</div>
        </div>
      </div>

      

      <div className="w-[257px] h-[257px] bg-[url('../src/assets/tic-tac-toe-grid.png')] bg-auto">
        {endGameMessage !== "" ? (
          <div id="endGameMessage" className="text-3xl w-[257px] h-[257px] z-20 absolute 
          flex flex-col items-center justify-center">
            <img src="../src/assets/wax-seal.png" className="absolute z-10"></img>
            <div id="messageOfEndGameMessage" className="h-3/4 w-1/2 text-opacity-95 z-20
            flex flex-col items-center justify-center text-center text-red-950 ">
            {endGameMessage}
            </div>
          </div>
        ) : (
          <div />
        )}
        <div id="true-board z-10 absolute">
        <div className="grid grid-cols-3 grid-rows-3 gap-3">
          <PlayerContext.Provider value={currentPlayer}>
            <BoardContext.Provider value={board}>
              <BoardSquare
                id={"00"}
                handleUpdateRound={handleUpdateRound}
                isTheGameFinished={isTheGameFinished}
              />
              <BoardSquare
                id={"01"}
                handleUpdateRound={handleUpdateRound}
                isTheGameFinished={isTheGameFinished}
              />
              <BoardSquare
                id={"02"}
                handleUpdateRound={handleUpdateRound}
                isTheGameFinished={isTheGameFinished}
              />
              <BoardSquare
                id={"10"}
                handleUpdateRound={handleUpdateRound}
                isTheGameFinished={isTheGameFinished}
              />
              <BoardSquare
                id={"11"}
                handleUpdateRound={handleUpdateRound}
                isTheGameFinished={isTheGameFinished}
              />
              <BoardSquare
                id={"12"}
                handleUpdateRound={handleUpdateRound}
                isTheGameFinished={isTheGameFinished}
              />
              <BoardSquare
                id={"20"}
                handleUpdateRound={handleUpdateRound}
                isTheGameFinished={isTheGameFinished}
              />
              <BoardSquare
                id={"21"}
                handleUpdateRound={handleUpdateRound}
                isTheGameFinished={isTheGameFinished}
              />
              <BoardSquare
                id={"22"}
                handleUpdateRound={handleUpdateRound}
                isTheGameFinished={isTheGameFinished}
              />
            </BoardContext.Provider>
          </PlayerContext.Provider>
        </div>
        </div>
      </div>

      <button
        className="my-2 p-2 box-border border-2 border-gray-50 rounded-md text-2xl"
        onClick={handleGameReset}
      >
        Reset game!
      </button>
    </div>
  );
}
