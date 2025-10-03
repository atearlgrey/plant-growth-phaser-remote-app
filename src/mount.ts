// // src/phaser-entry.ts
import Phaser from 'phaser'
import Preloader from './scenes/Preloader'
import PlantScene from './scenes/PlantScene'
import ResultScene from './scenes/ResultScene';
import ConclusionScene from "./scenes/ConclusionScene";

let game: Phaser.Game | null = null;

export function startGame(containerId: string) {

  if (game) {
    game.destroy(true); // đảm bảo huỷ game cũ
    game = null;
  }

  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: 1920,
    height: 1080,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    parent: containerId,
    dom: { createContainer: true },
    scene: [Preloader, PlantScene, ResultScene, ConclusionScene]
  }

  game = new Phaser.Game(config);
  return game;
}

export function destroyGame() {
  if (game) {
    game.destroy(true);
    game = null;
  }
}
