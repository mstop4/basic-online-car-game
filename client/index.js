import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'

// Init app
class App extends Phaser.Game {
  constructor() {
    super(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO)
    this.state.add('Game', Game)
    this.state.start('Game')
  }
}

const CarGame = new App();