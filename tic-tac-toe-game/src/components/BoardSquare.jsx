import { useState } from "react"

export function BoardSquare (props) {
    const [markedOption, setMarkedOption] = useState("Empty");

    function handleOptionSelection () {
        if (markedOption != "Empty") {
            props.errorFunction(true);
        } else {
            props.errorFunction(false);
            setMarkedOption(props.currentPlayer)
            props.handleChangeCurrentPlayer();
        }
    }

    return (
        <div id={props.id} onClick={handleOptionSelection}
        className="bg-yellow-300 h-[80px] flex flex-col justify-center items-center
        hover:bg-yellow-700">
            {markedOption}
        </div>
    )
}