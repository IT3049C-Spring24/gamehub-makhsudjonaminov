import React from "react";
import { Link } from "react-router-dom";

function Navigation () {
    return (
        <div className="games">
             <Link to="/8-react-rps-makhsudjonaminov/rps" className='home-btn'>RPC </Link>
            <Link to='/8-react-rps-makhsudjonaminov/tictac' className='home-btn'>TicTac</Link>
        </div>
    )
}

export default Navigation