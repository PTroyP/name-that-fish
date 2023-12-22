import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { Images } from '../../assets/Images';

const initialFishes = [
  {
    name: 'trout',
    url: Images.trout,
  },
  {
    name: 'salmon',
    url: Images.salmon,
  },
  {
    name: 'tuna',
    url: Images.tuna,
  },
  {
    name: 'shark',
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    currentFishes: initialFishes,
    correctCount: 0,
    incorrectCount: 0,
  };
  render() {
    const { currentFishes, correctCount, incorrectCount } = this.state;
    const setCounts = (guessInformation) => {
      if (guessInformation.fishGuess === currentFishes[0].name) {
        this.setState({ correctCount: correctCount + 1 });
      } else {
        this.setState({ incorrectCount: incorrectCount + 1 });
      }
    };
    const isGameOver = this.state.currentFishes.length === 0;

    if (!isGameOver) {
      return (
        <>
          <ClassScoreBoard
            currentFishes={currentFishes}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
          <ClassGameBoard
            currentFishes={currentFishes}
            Images={Images}
            handleGuessInformation={(guessInformation) => {
              setCounts(guessInformation);
            }}
            handleCurrentFishes={(currentFishes) => {
              this.setState({ currentFishes: currentFishes });
            }}
          />
        </>
      );
    } else if (isGameOver) {
      return (
        <>
          <ClassFinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
        </>
      );
    }
  }
}
