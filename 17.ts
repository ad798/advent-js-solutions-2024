function detectBombs(grid: boolean[][]): number[][] {
  let rows = grid.length;
  let cols = grid[0].length;
  let result = [];

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let totalBombs = 0;
      
      // Comprobar los 8 vecinos alrededor de la celda (i, j)
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;  // Ignorar la propia celda
          if (grid[i + x]?.[j + y]) {
            totalBombs++;
          }
        }
      }

      row.push(totalBombs);
    }
    result.push(row);
  }

  return result;
}
