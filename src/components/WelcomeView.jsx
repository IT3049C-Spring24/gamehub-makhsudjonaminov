import { useState } from "react";
import { Link } from "react-router-dom";

const WelcomeView = ({userName, setUserName}) => {
  return (
    <div id="welcome-screen">
      <h2 className="title">Welcome</h2>
      <h2 className="title">To RPS game</h2>

      <form id="name-form">
        <div className="form-group">
          <label className="name" htmlFor="username">Type your name: </label>
          <input
            value={userName}
            onChange={(e) => {setUserName(e.target.value)}}
            className="form-control"
            type="text"
            id="username"
            name="username"
            required placeholder="Enter Name Here..." minLength="2"
            maxLength="15" />
        </div>
        <div className="view-btns">
          <Link to="/rps" className="btn btn-primary gbtn" id="start-game-button" type="button">
            ▶️ Play Game 
          </Link>
          <Link to="/" className="btn btn-primary gbtn" id="start-game-button" type="button">
            🔙 Home  
          </Link>
        </div>
        
      
      </form>
    </div>
  );
};
export default WelcomeView;
// import {PropTypes} from 'prop-types';

// export const WelcomeScreen = ({ name, onNameChange, onGameStart }) => {

//   function onStartGameClick() {
//     console.log(name)
//     onGameStart();
//   }
  
//   return (
//     <div id="welcome-screen">
//       <form id="name-form">
//         <div className="form-group">
//           <label htmlFor="username">Type your name: </label>
//           <input
//             className="form-control"
//             type="text"
//             id="username"
//             name="username"
//             value={name}
//             onChange={(e) => onNameChange(e.target.value)}
//             required
//             placeholder="Enter Name Here..."
//             minLength="2"
//             maxLength="15"
//           />
//         </div>
//         <button 
//           className="btn btn-primary" 
//           id="start-game-button" type="button" 
//           onClick={onStartGameClick}>
//           Start Game!
//         </button>
//       </form>
//     </div>
//   );
// };
// WelcomeScreen.propTypes = {
//   name: PropTypes.string.isRequired,
//   onNameChange: PropTypes.func.isRequired,
//   onGameStart: PropTypes.func.isRequired
// }
