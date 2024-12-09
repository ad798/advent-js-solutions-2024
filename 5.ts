type Shoe = {
  type: 'I' | 'R'
  size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
  let shoesPairs = []
  let sizeCounter : {number?: {I: number, R: number}} = {}
  let minPair = 0
  for (const {size, type} of shoes) {
    if (!sizeCounter[size]) sizeCounter[size] = {I: 0, R: 0}
    sizeCounter[size][type]++
    minPair = Math.min(sizeCounter[size].I, sizeCounter[size].R)
    if(minPair > 0) {
      sizeCounter[size].I -= minPair
      sizeCounter[size].R -= minPair
      shoesPairs.push(size)
    }
  }
  return shoesPairs
}
