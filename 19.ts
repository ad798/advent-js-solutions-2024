function distributeWeight(weight: number): string {
  const boxes = {
    1: [" _ ", "|_|", null, 3] ,
    2: [" ___ ", "|___|", null, 5],
    5: [" _____ ", "|     |", "|_____|", 7],
    10: [" _________ ", "|         |", "|_________|", 11]
  }
  let result = []
  let latest = 0
  let stacked = weight > 1
  while(weight > 0) {
    if (weight >= 10) {
      result.unshift(boxes[10][2])
      result.unshift(boxes[10][1])
      weight -= 10
      latest = 10
    } else if (weight >= 5) {
      let part = boxes[5][1] + '\n' + boxes[5][2]
      if (stacked && result.length > 0 && weight < latest) part += "_".repeat(boxes[latest][3] - boxes[5][1].length - 1)
      result.unshift(part)
      weight -= 5
      latest = 5
    } else if (weight >= 2) {
      let part = boxes[2][1]
      if (stacked && result.length > 0 && weight < latest) part += "_".repeat(boxes[latest][3] - boxes[2][1].length - 1)
      result.unshift(part)
      weight -= 2
      latest = 2
    } else if (weight >= 1) {
      let part = boxes[1][1]
      if (stacked && result.length > 0 && weight < latest) part += "_".repeat(boxes[latest][3] - boxes[1][1].length - 1)
      result.unshift(part)
      weight -= 1
      latest = 1
    }
  }
  result.unshift(boxes[latest][0])
  return result.join("\n");
}
