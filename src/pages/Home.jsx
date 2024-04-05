import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h2 className='title'>  Welcome to Games</h2>
        <h2 className='title '> Please Choose the Game</h2>
       
        <div className="games">
            <Link to="/8-react-rps-makhsudjonaminov/rps" className='home-btn'>RPC </Link>
            <Link to='/8-react-rps-makhsudjonaminov/tictac' className='home-btn'>TicTac</Link>
        </div>
      
    </div>
  )
}

export default Home