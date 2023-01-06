import './style.css';
import { Board, dynamicScore } from './modules/board.js';

const board = new Board();
board.isBoardEmpty();

const { isSmsOn } = dynamicScore;

if (!isSmsOn) dynamicScore.render(board.scores);

const btnAdd = document.querySelector('.score-add');
btnAdd.onclick = () => board.getInput();

const btnRefresh = document.querySelector('.btn-refresh');
btnRefresh.onclick = () => board.refresh();