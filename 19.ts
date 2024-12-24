function distributeWeight(weight: number): string {
  let boxes = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }
  let boxesLength = {
    1: 3,
    2: 5,
    5: 7,
    10: 11
  }
  
  let result = []
  let latest = 0
  let stacked = weight > 1
  function handleStack(result: string[], part: string, latest: number, boxN:number) {
    if (stacked && result.length > 0 && weight < latest) {
      part += "_".repeat(boxesLength[latest] - boxes[boxN][1].length - 1)
    }
    
    result.push(part)
  }

  while(weight > 0) {
    if (weight >= 10) {
      result.push(boxes[10][2])
      result.push(boxes[10][1])
      latest = 10
    } else if (weight >= 5) {
      handleStack(result, boxes[5][1] + '\n' + boxes[5][2], latest, 5)
      latest = 5
    } else if (weight >= 2) {
      handleStack(result, boxes[2][1], latest, 2)
      latest = 2
    } else if (weight >= 1) {
      handleStack(result, boxes[1][1], latest, 1)
      latest = 1
    }
    weight -= latest
  }
  result.push(boxes[latest][0]) // top tap
  
  return result.reverse().join("\n");
}
