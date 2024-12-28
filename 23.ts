function findMissingNumbers(nums: number[]): number[] {
  let n = Math.max(...nums)
  let uniqueNums = new Set(nums)
  let values = new Set(Array.from({length: n}, (_, i) => i + 1))
  return [...values.difference(uniqueNums)]
}
