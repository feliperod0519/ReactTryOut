import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge time="Easy" targetTime={1} />
        <TimerChallenge time="Not easy" targetTime={5} />
        <TimerChallenge time="Getting tough" targetTime={10} />
        <TimerChallenge time="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
