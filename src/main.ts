import { startGame } from './mount';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.id = 'game';
  document.body.appendChild(container);

  startGame('game');
});
