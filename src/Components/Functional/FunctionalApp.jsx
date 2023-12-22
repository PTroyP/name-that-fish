import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';
import { Images } from '../../assets/Images';
import { useState } from 'react';

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

export function FunctionalApp() {
  const [currentFishes, setCurrentFishes] = useState(initialFishes);

  // const fishIndex = correctCount + incorrectCount;

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const isGameOver = currentFishes.length === 0;

  const setCounts = (guessInformation) => {
    if (guessInformation.fishGuess === currentFishes[0].name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };

  if (!isGameOver) {
    return (
      <>
        <FunctionalScoreBoard
          currentFishes={currentFishes}
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
        <FunctionalGameBoard
          currentFishes={currentFishes}
          Images={Images}
          handleGuessInformation={(guessInformation) => {
            setCounts(guessInformation);
          }}
          handleCurrentFishes={(currentFishes) => {
            setCurrentFishes(currentFishes);
          }}
        />
      </>
    );
  } else if (isGameOver) {
    return (
      <>
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
      </>
    );
  }
}
