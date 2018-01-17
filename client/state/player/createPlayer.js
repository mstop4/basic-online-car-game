const createPlayer = (x, y, game) => {
  const sprite = game.add.sprite(x, y, 'car')
  game.physics.p2.enable(sprite, false)
  return aprite
}

export default createPlayer