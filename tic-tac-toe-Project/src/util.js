import { WINNING_COMBINATIONS } from "./winning-combination";

const INITIAL_GAME_BOARD = [
   [null, null, null],
   [null, null, null],
   [null, null, null],
];

export const PLAYERS = {
   X: "Player 1",
   O: "Player 2",
};

export function deriveWinner(gameBoard, players) {
   let winner;

   for (let combination of WINNING_COMBINATIONS) {
      let firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      let secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      let thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      if (
         firstSquareSymbol &&
         firstSquareSymbol === secondSquareSymbol &&
         firstSquareSymbol === thirdSquareSymbol
      ) {
         winner = players[firstSquareSymbol];
      }
   }
   return winner;
}

export function deriveGameBoard(gameTurns) {
   let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
   for (let turn of gameTurns) {
      let { square, player } = turn;
      let { row, col } = square;
      gameBoard[row][col] = player;
   }

   return gameBoard;
}

export function deriveCurrentPlayer(gameTurns) {
   let currentPlayer = "X";

   if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer = "O";
   }
   return currentPlayer;
}
