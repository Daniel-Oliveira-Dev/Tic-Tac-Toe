import "./App.css";
import { Board } from "./components/Board";

function App() {
  return (
    <div
      id="screen"
      className="flex flex-col flex-1 gap-5 justify-center items-center text-gray-100
    bg-[url('../src/assets/green-dirty-blackboard.jpg')] bg-cover my-2 font-[Sheila-Crayon] box-border"
    >
      <div
        id="header"
        className="flex flex-col justify-center items-center gap-2"
      >
        <div className="font-bold pt-8 text-6xl">Tic Tac Toe</div>
        <div className="text-sm flex flex-row justify-evenly gap-2 items-center">
          by{" "}
          <a
            href="https://www.github.com/Daniel-Oliveira-Dev"
            target="_blank"
            alt="GitHub Icon"
          >
            Daniel-Oliveira-Dev
          </a>
          <img src="../src/assets/github.png" className="w-6 h-auto" />
        </div>
      </div>
      <Board />
      <div
        id="credits"
        className="grid md:grid-cols-3 grid-cols-1 gap-2 w-1/2 md:w-3/4 text-center 
      max-h-20 overflow-scroll md:overflow-visible my-2"
      >
        <a
          href="https://www.freepik.com/free-photo/green-dirty-blackboard_13410582.htm#fromView=search&page=1&position=0&uuid=53d13d49-f91d-491e-b332-b67b1541cdf4"
          target="_blank"
        >
          Background Image by Vectonauta on Freepik
        </a>
        <a
          href="https://www.fontspace.com/sheila-crayon-font-f32628"
          target="_blank"
        >
          Font by cove703
        </a>
        <a href="https://www.flaticon.com/free-icons/github" target="_blank">
          Github icons created by riajulislam - Flaticon
        </a>
        <a href="https://pt.pngtree.com/freepng/red-three-dimensional-realistic-wax-seal_5428662.html">
          imagem PNG de pt.pngtree.com/
        </a>
      </div>
    </div>
  );
}

export default App;
