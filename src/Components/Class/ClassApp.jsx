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
    guessInformation: { fishGuess: '' },
    correctCount: 0,
    incorrectCount: 0,
    isGameOver: false,
  };
  render() {
    const {
      currentFishes,
      guessInformation,
      correctCount,
      incorrectCount,
      isGameOver,
    } = this.state;
    const setCounts = (guessInformation) => {
      if (guessInformation.fishGuess === currentFishes[0].name) {
        this.setState({ correctCount: correctCount + 1 });
      } else {
        this.setState({ incorrectCount: incorrectCount + 1 });
      }
    };

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
              this.setState({ guessInformation: guessInformation });
              setCounts(guessInformation);
            }}
            handleCurrentFishes={(currentFishes) => {
              this.setState({ currentFishes: currentFishes });
            }}
            gameOver={(currentFishes) => {
              currentFishes.length === 1
                ? this.setState({ isGameOver: !isGameOver })
                : this.setState({ isGameOver: isGameOver });
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
