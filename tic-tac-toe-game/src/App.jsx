import { useState } from 'react'
import './App.css'
import { Board } from './components/Board'

function App() {

  return (
    <div className='flex flex-col flex-1 gap-3 justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <div className='font-bold text-4xl'>Tic Tac Toe</div>
        <div className='text-sm'>by Daniel de Oliveira</div>
      </div>

      <Board/>
    </div>
  )
}

export default App
