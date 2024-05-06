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
        if (currentPlayer == "X") {
            setCurrentPlayer("O");
        }
        if (currentPlayer == "O") {
            setCurrentPlayer("X");
        }
        setRound(round + 1);
    }

    function handleCheckForWinningConditions() {
        for (let index = 0; index < 3; index++) {
            // Checking for lines
            if (board[index][0] != "" && board[index][0] == board[index][1] && board[index][0] == board[index][2]) {
                handleGameEnding(currentPlayer + " won!");
                return;
            }
            // Checking for columns
            if (board[0][index] != "" && board[1][index] == board[0][index] && board[0][index] == board[2][index]) {
                handleGameEnding(currentPlayer + " won!");
                return;
            }
        }
        // Checking for diagonals
        if (board[0][0] != "" && board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
            handleGameEnding(currentPlayer + " won!");
            return;
        }
        if (board[1][1] != "" && board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
            handleGameEnding(currentPlayer + " won!");
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
        setCurrentPlayer("X")
        setEndGameMessage("");
        setRound(1);
        setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-evenly items-center w-full text-2xl">
                <div className="border-b-2 border-b-gray-100 p-2">Player Turn:{" " + currentPlayer}</div>
                <button className="my-2 h-8 box-border hover:border-b-2 hover:border-b-gray-100"
                    onClick={handleGameReset}>Reset game!</button>
            </div>
            <div className="w-[257px] bg-[url('../src/assets/tic-tac-toe-grid.png')] bg-auto">
                <div className="grid grid-cols-3 grid-rows-3 gap-3">
                    <PlayerContext.Provider value={currentPlayer}>
                        <BoardContext.Provider value={board}>
                            <BoardSquare id={"00"} handleUpdateRound={handleUpdateRound} isTheGameFinished={isTheGameFinished} />
                            <BoardSquare id={"01"} handleUpdateRound={handleUpdateRound} isTheGameFinished={isTheGameFinished} />
                            <BoardSquare id={"02"} handleUpdateRound={handleUpdateRound} isTheGameFinished={isTheGameFinished} />
                            <BoardSquare id={"10"} handleUpdateRound={handleUpdateRound} isTheGameFinished={isTheGameFinished} />
                            <BoardSquare id={"11"} handleUpdateRound={handleUpdateRound} isTheGameFinished={isTheGameFinished} />
                            <BoardSquare id={"12"} handleUpdateRound={handleUpdateRound} isTheGameFinished={isTheGameFinished} />
                            <BoardSquare id={"20"} handleUpdateRound={handleUpdateRound} isTheGameFinished={isTheGameFinished} />
                            <BoardSquare id={"21"} handleUpdateRound={handleUpdateRound} isTheGameFinished={isTheGameFinished} />
                            <BoardSquare id={"22"} handleUpdateRound={handleUpdateRound} isTheGameFinished={isTheGameFinished} />
                        </BoardContext.Provider>
                    </PlayerContext.Provider>
                </div>
            </div>
            {endGameMessage !== "" ? (
                <EndGamePopUp message={endGameMessage} reset={handleGameReset} close={setEndGameMessage} />
            ) : <div className="hidden" />}
        </div>
    )
}