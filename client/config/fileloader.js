import { ASSETS_URL } from '.'

const fileLoader = game => {
  game.load.crossOrigin = 'Anonymous'
  game.stage.backgroundColor = '#202020'
  game.load.image('asphalt', `${ASSETS_URL}/sprites/asphalt/asphalt.png`)
  game.load.image('car', `${ASSETS_URL}/sprites/car/car.png`)
}

export default fileLoader