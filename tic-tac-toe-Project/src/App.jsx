import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { deriveWinner, deriveGameBoard, deriveCurrentPlayer, PLAYERS } from "./util";

import GameOver from "./components/GameOver";

function App() {
   const [players, setPlayers] = useState({
      X: "",
      O: "",
   });
   const [gameTurns, setGameTurns] = useState([]);

   let gameBoard = deriveGameBoard(gameTurns);
   let currentPlayer = deriveCurrentPlayer(gameTurns);
   const winner = deriveWinner(gameBoard, players);

   const hasDraw = gameTurns.length === 9 && !winner;

   function handleSelectSquare(rowIndex, colIndex) {
      setGameTurns((prevTurns) => {
         let currentPlayer = deriveCurrentPlayer(prevTurns);
         const updatedTurns = [
            {
               square: { row: rowIndex, col: colIndex },
               player: currentPlayer,
            },
            ...prevTurns,
         ];

         return updatedTurns;
      });
   }

   function handleRestart() {
      setGameTurns([]);
   }

   function handleOnChangePlayer(symbol, newName) {
      setPlayers((prevNames) => {
         return { ...prevNames, [symbol]: newName };
      });
   }

   return (
      <main>
         <div id="game-container">
            <ol
               id="players"
               className="highlight-player"
            >
               <Player
                  initialName={PLAYERS.X}
                  symbol="X"
                  isActive={currentPlayer === "X"}
                  onChangePlayer={handleOnChangePlayer}
               />
               <Player
                  initialName={PLAYERS.O}
                  symbol="O"
                  isActive={currentPlayer === "O"}
                  onChangePlayer={handleOnChangePlayer}
               />
            </ol>
            {(winner || hasDraw) && (
               <GameOver
                  restart={handleRestart}
                  winner={winner}
               />
            )}
            <GameBoard
               board={gameBoard}
               onSelectSquare={handleSelectSquare}
            />
         </div>
         <Log turns={gameTurns} />
      </main>
   );
}

export default App;
