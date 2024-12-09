function inBox(box: string[]): boolean {
  // Analyze two borders
  if (box.shift().includes("*") || box.pop().includes("*")) return false
  
  // Analyze gift inside
  let giftIndex = -1
  for (const line of box) {
    if (line.includes("*")) {
      giftIndex = line.indexOf("*")
      return !(giftIndex === 0 || giftIndex === line.length -1)      
    }
  }

  // Returned if the gift was not found (*)
  return false
}
