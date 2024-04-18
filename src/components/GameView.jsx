import { useState } from "react";
import { Link } from "react-router-dom";
const GameView = ({userName}) => {
  const [userChoice, setUserChoice] = useState('rock');
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const userChooses = (choice) => {
    const cpuChoice = generateComputerChoice(); // Kompyuter avtomatik tanlashi
    const winner = determineWinner(choice, cpuChoice); // G'olibni aniqlash

    // Natijani saqlash va hisobni yangilash
    if (winner === 'user') {
      setUserScore(prevScore => prevScore + 1);
    } else if (winner === 'cpu') {
      setCpuScore(prevScore => prevScore + 1);
    }

    // O'yin tarixini saqlash
    const resultText = `User chose ${choice}, CPU chose ${cpuChoice}. ${winner === 'draw' ? "It's a draw!" : `Winner: ${winner}`}`;
    setGameHistory(prevHistory => [...prevHistory, resultText]);
  };
  const generateComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  // G'olibni aniqlash uchun funksiya
  const determineWinner = (userChoice, cpuChoice) => {
    if (userChoice === cpuChoice) {
      return 'draw';
    } else if (
      (userChoice === 'rock' && cpuChoice === 'scissors') ||
      (userChoice === 'paper' && cpuChoice === 'rock') ||
      (userChoice === 'scissors' && cpuChoice === 'paper')
    ) {
      return 'user';
    } else {
      return 'cpu';
    }
  };

  return (
    <div id="game-screen">
      <div id="score-tally">
        <p id="score" className="title"> {userName}: {userScore} v CPU: {cpuScore}</p>
      </div>

      <form id="game-form">
        <div className="form-group">
          <label htmlFor="user-selection" className="title">Select your choice: </label>
          <select
            className="custom-select"
            id="user-selection"
            name="user-selection"
            value={userChoice || ''}
            onChange={(e) => setUserChoice(e.target.value)}
          >
            <option id="rock" value="rock">
              Rock
            </option>
            <option id="paper" value="paper">
              Paper
            </option>
            <option id="scissors" value="scissors">
              Scissors
            </option>
          </select>
        </div>
        <div className="game-btns">
          <button className="btn btn-primary game-btn" id="play-button" type="button"  onClick={()=>userChooses(userChoice)}>
            Play
          </button>
        <Link to="/rps/play" className="btn btn-primary gbtn" id="play-button" type="button"  
            onClick={()=>{
              setUserScore(0),
              setCpuScore(0),
              setGameHistory([])
            }}>
          Reset
        </Link>
        </div>
      
      </form>
      <h2 className="title">Game History</h2>
      <ol className="history-list">
        {gameHistory.map((result, index) => (
          <li key={index} className="title">{result}</li>
        ))}
      </ol>
    </div>
  );
};

export default GameView;
// import {PropTypes} from 'prop-types';
// import { useState } from 'react';
// import { RockPaperScissors } from '../RPS';

// const GameScreen = ({name}) => {
//   const [ game, setGame ] = useState(new RockPaperScissors(name));
//   const [ selection, setSelection ] = useState(`rock`);
//   // const [ score, setScore ] = useState({user: 0, cpu: 0});
//   const [ userScore, setUserScore ] = useState(0);
//   const [ cpuScore, setCpuScore ] = useState(0);
//   const [ history, setHistory ] = useState([]);    

//   const updateScoreAndHistory = () => {
//     // setScore({...game.score});
//     setUserScore(game.score.user)
//     setCpuScore(game.score.cpu)
//     setHistory([...game.gameHistoryLog]);
//   }
  
//   const onGoButtonClick = () => {
//     game.play(selection);
//     console.log(game.score);
//     updateScoreAndHistory();
//   }

//   const onResetGameButtonClick = () => {
//     console.log(`Reset button was clicked`);
//     setGame(new RockPaperScissors(name));
//     // setScore({user: 0, cpu: 0});
//     setUserScore(0)
//     setCpuScore(0)
//     setHistory([]);
//   }

//   return (
//     <div id="game-screen">
//       <div id="score-tally">
//         <p id="score"> {name}: {userScore} v CPU: {cpuScore}</p>
//         <span>{selection}</span>
//       </div>

//       <form id="game-form">
//         <div className="form-group">
//           <label htmlFor="user-selection">Select your choice:</label>
//           <select 
//             className="custom-select" 
//             id="user-selection" 
//             name="user-selection" 
//             value={selection}
//             onChange={(e) =>setSelection(e.target.value)}
//           >
//             <option id="rock" value="rock">
//               Rock
//             </option>
//             <option id="paper" value="paper">
//               Paper
//             </option>
//             <option id="scissors" value="scissors">
//               Scissors
//             </option>
//           </select>
//         </div>
//         <button className="btn btn-success" type="button" id="go-button" onClick={onGoButtonClick}>
//           Go!
//         </button>
//       </form>

//       <div id="game-history">
//         <ul>
//           {history.map((round, index) => (
//             <li key={index}>{round}</li>
//           ))}
//         </ul>
//       </div>
//       <button id="reset-game-button" className="btn btn-secondary" onClick={onResetGameButtonClick}>
//         Reset
//       </button>
//     </div>
//   );
// };
// GameScreen.propTypes = {
//   name: PropTypes.string.isRequired,
// };

// export default GameScreen;
