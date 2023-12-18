import { Component } from 'react';
import './styles/score-board.css';

export class ClassScoreBoard extends Component {
  render() {
    const { currentFishes, correctCount, incorrectCount } = this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {currentFishes.map((answer) => (
            <div key={answer.name} className="choice">
              {answer.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
