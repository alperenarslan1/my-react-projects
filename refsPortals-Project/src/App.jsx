import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
   return (
      <>
         <Player />
         <div id="challenges">
            <TimerChallenge
               title="Easy"
               targetTime={1}
            />
            <TimerChallenge
               title="Not easy"
               targetTime={5}
            />
            <TimerChallenge
               title="Normal"
               targetTime={10}
            />
            <TimerChallenge
               title="Only pros"
               targetTime={15}
            />
         </div>
      </>
   );
}

export default App;
