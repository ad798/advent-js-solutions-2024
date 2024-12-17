function minMovesToStables(reindeer: number[], stables: number[]): number {
  reindeer = reindeer.sort((a, b) => a - b)
  stables = stables.sort((a, b) => a - b)
  let result = 0
  for (let i = 0; i < reindeer.length ; i++) {
    result += Math.abs(reindeer[i] - stables[i])
  }
  return result
}
