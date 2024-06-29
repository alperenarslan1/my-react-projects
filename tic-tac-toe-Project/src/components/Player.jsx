import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangePlayer }) {
   const [playerName, setPlayerName] = useState(initialName);
   const [isEditing, setIsEditing] = useState(false);

   function clickHandle() {
      setIsEditing((editing) => !editing);
      if (isEditing) {
         onChangePlayer(symbol, playerName);
      }
   }
   function changeHandle(e) {
      setPlayerName(e.target.value);
   }

   let editablePlayerName = <span className="player-name">{playerName}</span>;

   if (isEditing) {
      editablePlayerName = (
         <input
            value={playerName}
            type="text"
            onChange={changeHandle}
         />
      );
   }

   return (
      <li className={isActive ? "active" : undefined}>
         <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
         </span>
         <button onClick={clickHandle}>{isEditing ? "Save" : "Edit"}</button>
      </li>
   );
}

export default Player;
