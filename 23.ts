function findMissingNumbers(nums: number[]): number[] {
  let n = Math.max(...nums)
  if (nums.length > n && (nums.length - n) < 1){
    n = nums.length
  }
  let result = []
  for (let i = 1; i < n ; i++) {
    if (!nums.includes(i)) result.push(i)
  }
  return result
}
