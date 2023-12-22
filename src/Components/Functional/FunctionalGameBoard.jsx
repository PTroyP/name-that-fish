import './styles/game-board.css';
import { useState } from 'react';

export function FunctionalGameBoard({
  currentFishes,
  handleGuessInformation,
  handleCurrentFishes,
}) {
  const nextFishToName = currentFishes[0];
  const [fishGuessInput, setFishGuessInput] = useState('');

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleGuessInformation({
            fishGuess: fishGuessInput,
          });
          handleCurrentFishes(
            currentFishes.filter((el) => el !== currentFishes[0])
          );

          setFishGuessInput('');
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={(e) => {
            setFishGuessInput(e.target.value);
          }}
          value={fishGuessInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
