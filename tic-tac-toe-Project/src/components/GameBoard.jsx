function GameBoard({ onSelectSquare, board }) {
   return (
      <ol id="game-board">
         {board.map((row, rowKey) => (
            <li key={rowKey}>
               <ol>
                  {row.map((playerSymbol, colKey) => (
                     <li key={colKey}>
                        <button
                           onClick={() => onSelectSquare(rowKey, colKey)}
                           disabled={playerSymbol != null}
                        >
                           {playerSymbol}
                        </button>
                     </li>
                  ))}
               </ol>
            </li>
         ))}
      </ol>
   );
}

export default GameBoard;
