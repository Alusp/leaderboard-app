import ScoreCreate from './score-create';
import DynamicScore from './dynamic-score';

const dynamicScore = new DynamicScore();

export class Board {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/H6gIAZEhgAvZvlVHsQOX/';
  }

  scoreAdd(score) {
    this.sentToApi(this.url, score);
  }

  refresh = async () => {
    this.scores = await this.apiRefresh();
    this.scoreSort();
    this.saveBoard();
    dynamicScore.render(this.scores);
  }

   sentToApi = async (url, { name: user, points: score }) => {
     await fetch(`${url}scores/`, {
       method: 'POST',
       body: JSON.stringify({ user, score }),
       headers: {
         'Content-Type': 'application/json; charset=UTF-8',
       },
     });
   };

   apiRefresh = async () => {
     const scores = await fetch(`${this.url}scores/`)
       .then((response) => response.json())
       .then(({ result }) => result.map(({ score: points, user: name }) => ({
         name, points,
       })));

     return scores;
   }

   scoreSort() {
     this.scores = this.scores
       .map(({ name, points }, index) => {
         const id = index + 1;
         points = +points;
         return { id, name, points };
       })
       .sort((a, b) => b.points - a.points)
       .map((score, index) => {
         score.id = index + 1;
         return score;
       });
   }

   getInput() {
     // const id = this.scores.length + 1;
     const { value: name } = document.getElementById('name');
     const { value: points } = document.getElementById('score');

     if (name.trim().length > 0 && points.length > 0) {
       this.scoreAdd(new ScoreCreate(name, points));
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
