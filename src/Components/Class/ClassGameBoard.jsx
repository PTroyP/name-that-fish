import { Component } from 'react';
import './styles/game-board.css';

export class ClassGameBoard extends Component {
  state = { fishGuessInput: '' };

  render() {
    const { fishGuessInput } = this.state;
    const {
      currentFishes,
      handleGuessInformation,
      handleCurrentFishes,
      gameOver,
    } = this.props;

    const nextFishToName = currentFishes[0];
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
            gameOver(currentFishes);
            this.setState({ fishGuessInput: '' });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            onChange={(e) => {
              this.setState({ fishGuessInput: e.target.value });
            }}
            value={fishGuessInput}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
