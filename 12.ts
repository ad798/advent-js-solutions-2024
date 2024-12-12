function calculatePrice(ornaments: string): number {
  let result = 0
  let price: object = {
    '*': [1, -1],
    'o': [5, -5],
    '^': [10, -10],
    '#': [50, -50],
    '@': [100, -100]
  }
  for (let i = 0; i < ornaments.length; i++) {
    if (price[ornaments[i]] === undefined) return
    if (price[ornaments[i + 1]]?.[0] > price[ornaments[i]][0]) {
      result += price[ornaments[i]][1]
    } else {
      result += price[ornaments[i]][0]
    }
  }
  return result
}
