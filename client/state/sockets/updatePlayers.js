import player from './../player'
import { createText } from '../utils'

const updatePlayers = (socket, otherPlayers, game) => {
  socket.on('update-players', playersData => {
    let playersFound = {}
    // Iterate over all players
    for (let i in playersData) {

      const data = playersData[i]

      // In case a player hasn't been created yet
      // We make sure that we won't create a second instance of it
      if (otherPlayers[i] === undefined && i !== socket.id) {
        const newPlayer = player(data.x, data.y, game)
        newPlayer.playerName = createText(game, newPlayer)
        newPlayer.speedText = createText(game, newPlayer)
        newPlayer.updatePlayerName(data.playerName.name, data.playerName.x, data.playerName.y)
        otherPlayers[i] = newPlayer
      }

      playersFound[i] = true

      // Update players data
      if (i !== socket.id) {
        // Update players target but not their real position
        otherPlayers[i].target_x = data.x
        otherPlayers[i].target_Y = data.y
        otherPlayers[i].target_rotation = data.angle

        otherPlayers[i].playerName.target_x = data.playerName.x
        otherPlayers[i].playerName.target_y = data.playerName.y

        otherPlayers[i].speedText.target_x = data.speed.x
        otherPlayers[i].speedText.target_y = data.speed.y

        otherPlayers[i].speed = data.speed.value
      } 
    }

    // Check if there's no missing players, if there is, delete them
    for (let id in otherPlayers) {
      if (!playersFound[id]) {
        otherPlayers[id].sprite.destroy()
        otherPlayers[id].playerName.destroy()
        otherPlayers[id].speedText.destroy()
        delete otherPlayers[id]
      }
    }
  })
}

export default updatePlayers