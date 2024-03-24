import { useState } from "react";
import { BoardSquare } from "./BoardSquare";

export function Board(props) {
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [shouldShowInvalidPlayError, setShouldShowInvalidPlayError] = useState(false);

    function handleChangeCurrentPlayer() {
        if (currentPlayer == "X") {
            setCurrentPlayer("O");
        }
        if (currentPlayer == "O") {
            setCurrentPlayer("X");
        }
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-5">
                <div>Jogador atual: {currentPlayer}</div>
            </div>
            <div className="bg-slate-800 w-[240px]">
                <div className="grid grid-cols-3 grid-rows-3 gap-3">
                    <BoardSquare id={"00"} currentPlayer={currentPlayer} handleChangeCurrentPlayer={handleChangeCurrentPlayer} errorFunction={setShouldShowInvalidPlayError} />
                    <BoardSquare id={"01"} currentPlayer={currentPlayer} handleChangeCurrentPlayer={handleChangeCurrentPlayer} errorFunction={setShouldShowInvalidPlayError} />
                    <BoardSquare id={"02"} currentPlayer={currentPlayer} handleChangeCurrentPlayer={handleChangeCurrentPlayer} errorFunction={setShouldShowInvalidPlayError} />
                    <BoardSquare id={"10"} currentPlayer={currentPlayer} handleChangeCurrentPlayer={handleChangeCurrentPlayer} errorFunction={setShouldShowInvalidPlayError} />
                    <BoardSquare id={"11"} currentPlayer={currentPlayer} handleChangeCurrentPlayer={handleChangeCurrentPlayer} errorFunction={setShouldShowInvalidPlayError} />
                    <BoardSquare id={"12"} currentPlayer={currentPlayer} handleChangeCurrentPlayer={handleChangeCurrentPlayer} errorFunction={setShouldShowInvalidPlayError} />
                    <BoardSquare id={"20"} currentPlayer={currentPlayer} handleChangeCurrentPlayer={handleChangeCurrentPlayer} errorFunction={setShouldShowInvalidPlayError} />
                    <BoardSquare id={"21"} currentPlayer={currentPlayer} handleChangeCurrentPlayer={handleChangeCurrentPlayer} errorFunction={setShouldShowInvalidPlayError} />
                    <BoardSquare id={"22"} currentPlayer={currentPlayer} handleChangeCurrentPlayer={handleChangeCurrentPlayer} errorFunction={setShouldShowInvalidPlayError} />
                </div>
            </div>
            {shouldShowInvalidPlayError ? (
                <div className="text-red-600 font-bold text-xl">Option already chosen!</div>
            ) : (
                <div></div>
            )}
        </div>
    )
}