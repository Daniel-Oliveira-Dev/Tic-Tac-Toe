export function EndGamePopUp (props) {
    return (
        <div className="w-[257px] h-[257px]">
            <div id="upper-half" className="text-4xl">
                {props.message}
            </div>
        </div>
    );
}