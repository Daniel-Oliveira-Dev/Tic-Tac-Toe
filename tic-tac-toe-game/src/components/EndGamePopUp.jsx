export function EndGamePopUp (props) {
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:h-[80px] md:w-1/2 h-[150px] w-[90%]
        border-2 border-gray-100 rounded-md bg-[url('../src/assets/green-dirty-blackboard.jpg')]
        flex flex-col justify-evenly items-center p-2 font-[Sheila-Crayon] text-gray-100">
            <div id="upper-half" className="text-4xl">
                {props.message}
            </div>
        </div>
    );
}