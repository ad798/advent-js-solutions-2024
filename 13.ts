function isRobotBack(moves: string): true | [number, number] {
  let resultX = 0
  let resultY = 0
  let commands = {
    'R': [1, 0],
    'L': [-1, 0],
    'U': [0, 1],
    'D': [0, -1],
  }
  let inverted = {
    'R': 'L',
    'L': 'R',
    'U': 'D',
    'D': 'U'
  }
  let commandDone = {
    'R': false,
    'L': false,
    'U': false,
    'D': false
  }
  let movesArr = moves.split("")
  for (let i = 0; i < movesArr.length; i++) {
    if (commands[movesArr[i]]) {
      resultX += commands[movesArr[i]][0]
      resultY += commands[movesArr[i]][1]
      commandDone[movesArr[i]] = true // registramos que el movimiento ya se hizo
    } else if (movesArr[i] === "*") {
      movesArr[i] = movesArr[i + 1] // duplicamos el movimiento
      i-- // regresamos una posición
    } else if (movesArr[i] === "!") {
      movesArr[i + 1] = inverted[movesArr[i + 1]] // invertimos el movimiento
    } else if (movesArr[i] === "?" && commandDone[movesArr[i + 1]]) { // Verificamos si el movimiento se ha hecho alguna vez antes
      i++
    }
  }
  return resultX === 0 && resultY === 0 ? true : [resultX, resultY]
}
