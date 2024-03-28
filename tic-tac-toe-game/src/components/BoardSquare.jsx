import { useContext } from "react";
import { useState } from "react";
import { BoardContext } from "../contexts/BoardContext";
import { PlayerContext } from "../contexts/PlayerContext";

export function BoardSquare (props) {
    const boardCoordinates = useContext(BoardContext);
    const currentPlayer = useContext(PlayerContext);

    function getBoardValueForSquare() {
        const line = parseInt(props.id.substring(0, 1));
        const column = parseInt(props.id.substring(1));

        return boardCoordinates[line][column];
    }

    function handleSquareClick() {
        if (getBoardValueForSquare() != "") {
            alert("This square is unavaliable!");
            return;
        }
        const line = parseInt(props.id.substring(0, 1));
        const column = parseInt(props.id.substring(1));

        boardCoordinates[line][column] = currentPlayer;
        props.handleUpdateRound();
    }

    return (
        <button id={props.id} onClick={handleSquareClick} disabled={props.isTheGameFinished}
        className="bg-yellow-300 h-[80px] flex flex-col justify-center items-center hover:bg-yellow-700">
            {getBoardValueForSquare()}
        </button>
    )
}