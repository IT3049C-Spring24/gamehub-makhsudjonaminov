import React from "react";
import { Link } from "react-router-dom";

function Navigation () {
    return (
        <div className="games">
             <Link to="/gamehub-makhsudjonaminov/rps" className='home-btn'>RPC </Link>
            <Link to='/gamehub-makhsudjonaminov/tictac' className='home-btn'>TicTac</Link>
        </div>
    )
}

export default Navigation