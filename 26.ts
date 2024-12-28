function getCompleted(timeWorked: string, totalTime: string): string {
  function getTimeInSeconds(time: string): number {
    let i = 0
    let total = 0
    for(let t of time.split(':')) {
      if (i === 0) {
        total += +t * 60 * 60
      } else if (i === 1) {
        total += +t * 60
      } else {
        total += +t
      }
      i++
    }
    return total
  }
  let timeWorkedSeconds = getTimeInSeconds(timeWorked)
  let totalTimeSeconds = getTimeInSeconds(totalTime)
  return `${Math.floor(Math.round((timeWorkedSeconds / totalTimeSeconds)*100))}%`;
}
