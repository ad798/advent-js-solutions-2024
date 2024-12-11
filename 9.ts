type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
  for (let i = 0; i < board.length; i++) { 
    let enginePos = board[i].indexOf("@")
    if (enginePos !== -1) {
      const moves = {
        'R': [1, 0],
        'L': [-1, 0],
        'U': [0, -1],
        'D': [0, 1]
      }
      enginePos += moves[mov][0]
      i += moves[mov][1]
      if (!board[i]?.[enginePos] || board[i][enginePos] === 'o') {
        return 'crash'
      }
      return board[i][enginePos] === '*' ? 'eat' : 'none'
    }
  }
}
