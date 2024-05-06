import { useContext } from "react";
import { toast } from "sonner";
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
            toast.warning("This square is unavaliable!");
            return;
        }
        const line = parseInt(props.id.substring(0, 1));
        const column = parseInt(props.id.substring(1));

        boardCoordinates[line][column] = currentPlayer;
        props.handleUpdateRound();
    }

    return (
        <button id={props.id} onClick={handleSquareClick} disabled={props.isTheGameFinished}
        className="h-[80px] flex flex-col justify-center items-center text-4xl">
            {getBoardValueForSquare()}
        </button>
    )
}