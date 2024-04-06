import {useState} from 'react';

import WelcomeView from './components/WelcomeView';
import GameView from './components/GameView';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RPS from './pages/RockPS';
import TicTac from './pages/TicTac';
function App() {
 

  return (
    <div className="container">
      <div className="card">
           <Routes>
              <Route path='/gamehub-makhsudjonaminov/' element={<Home/>} />
              <Route path='/gamehub-makhsudjonaminov/rps' element={<RPS/>}/>
              <Route path='/gamehub-makhsudjonaminov/tictac' element={<TicTac/>}/>
              <Route path="/gamehub-makhsudjonaminov/rps/play" element={<GameView />} />
           </Routes>
      </div>
    </div>
  );
}
export default App


// import { useState } from 'react'
// import './App.css'
// import { WelcomeScreen as Welcome } from './screens/WelcomeScreen'
// import Game from './screens/GameScreen'

// function App() {
//   const [name, setName] = useState(`Bearcat`)
//   const [gameStarted, setGameStarted] = useState(false)

//   return (
//     <>
//       <div>
//           {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
//           <h1>Rock Paper Scissors</h1> 
//       </div>
//       {
//         gameStarted
//         ? <Game name={name}/>
//         : <Welcome name={name} onNameChange={setName} onGameStart={() => setGameStarted(true)}/>
//       }
//     </>
//   )
// }

// export default App
