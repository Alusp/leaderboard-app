// import _ from 'lodash';
import './style.css';
import { Board, dynamicScore } from './modules/board';

const board = new Board();
board.isBoardEmpty();

const { isSmsOn } = dynamicScore;

if (!isSmsOn) dynamicScore.render(board.scores);

const btnAdd = document.querySelector('.score-add');
if (btnAdd !== null && typeof btnAdd !== 'undefined') {
  btnAdd.onclick = () => board.getInput();
}

const btnRefresh = document.querySelector('.btn-refresh');
if (btnRefresh !== null && typeof btnRefresh !== 'undefined') {
  btnRefresh.onclick = () => board.refresh();
}
