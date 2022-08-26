class DynamicScore {
  constructor() {
    this.isMessageOn = true;
  }

  callEmptyMessage() {
    this.isMessageOn = true;
    const showScore = this.resetSDisplay();
    const msg = document.createElement('span');

    msg.innerText = 'Zero Winner at the Moment ';
    msg.className = 'no-message bold';

    const laughFace = document.createElement('span');
    laughFace.innerText = 'you can go to add score now';

    showScore.append(msg, laughFace);
  }

  resetSDisplay = () => {
    const showScr = document.getElementById('show-score');
    showScr.innerHTML = '';
    return showScr;
  };

  render(allscore) {
    const boardScore = this.resetSDisplay();
    allscore.forEach((score) => {
      const { id, name, points } = score;

      const messageScore = document.createElement('h3');
      messageScore.classList = 'ml-3 even:bg-gray-300';
      messageScore.innerText = `${id}. ${name} :`;

      const scoredPoint = document.createElement('span');
      scoredPoint.classList = 'ml-2';
      scoredPoint.textContent = points;
      messageScore.appendChild(scoredPoint);
      boardScore.appendChild(messageScore);
    });
  }
}

export default DynamicScore;
