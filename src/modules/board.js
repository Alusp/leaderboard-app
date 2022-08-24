import ScoreCreate from './score-create.js';
import DynamicScore from './dynamic-score.js';

const dynamicScore = new DynamicScore();

export class Board {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
  }

  scoreAdd(score) {
    this.scores.push(score);
    this.scoreSort();
    this.saveBoard();
    dynamicScore.render(this.scores);
  }

  refresh() {
    this.scores = [];
    this.saveBoard();
    dynamicScore.callEmptyMessage();
  }

  scoreSort() {
    this.scores = this.scores
      .sort((a, b) => b.points - a.points)
      .map((score, index) => {
        score.id = index + 1;
        return score;
      });
  }

  getInput() {
    const id = this.scores.length + 1;
    const { value: name } = document.getElementById('name');
    const { value: points } = document.getElementById('score');

    if (name.trim().length > 0 && points.length > 0) {
      this.scoreAdd(new ScoreCreate(id, name, points));
      document.getElementById('name').value = '';
      document.getElementById('score').value = '';
    }
  }

  isBoardEmpty() {
    if (this.scores.length === 0) dynamicScore.callEmptyMessage();
  }

  saveBoard() {
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }
}
export { dynamicScore };
