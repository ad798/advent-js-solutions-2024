function minMovesToStables(reindeer: number[], stables: number[]): number {
  // sort the arrays in ascending order
  reindeer = reindeer.sort((a, b) => a - b)
  stables = stables.sort((a, b) => a - b)
  let result = 0
  for (let i = 0; i < reindeer.length ; i++) {
    // the movement of each reindeer is calculated by the distance
    // of each one to the next stable
    result += Math.abs(reindeer[i] - stables[i])
  }
  return result
}
