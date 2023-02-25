import { HEROES, COMICS } from './custom/data';
import { shuffle, GAME_STATE } from './custom/utils';

import logo from './logo.svg';
import './App.css';

function App () {
  
  const initialState = {
    // we initialize the state by populating the bench with a shuffled collection of heroes
    bench: shuffle(HEROES),
    [COMICS.DC]: [],
    [COMICS.MARVEL]: [],
    gameState: GAME_STATE.READY,
    timeLeft: 0,
  };

  const GAME_DURATION = 1000 * 30; // 30 seconds

  // const

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
