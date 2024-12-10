function drawRace(indices: number[], length: number): string {
  let lanesLength = indices.length;
  let lanes: string[] = new Array(lanesLength); 
  for (let idx = 0; idx < lanesLength; idx++) {
    let lane = "~".repeat(length) 
    if (indices[idx] !== 0) {
      let pos = indices[idx] > 0 ? indices[idx] : length + indices[idx]
      lane = lane.substring(0, pos) + "r" + lane.substring(pos + 1, length)
    };
    lanes[idx] = `${" ".repeat(lanesLength - idx - 1)}${lane} /${idx + 1}`;
  }
  return lanes.join('\n');
}
