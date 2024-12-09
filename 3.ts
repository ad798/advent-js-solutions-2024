type Inventory = Array<
  { name: string, quantity: number, category: string }
>

function organizeInventory(inventory: Inventory): object {
  let result = {}
  for (const {category, name, quantity} of inventory) {
    if (!result[category]) {
      result[category] = {}
    }
    if (!result[category][name]) {
      result[category][name] = 0
    }
    result[category][name] += quantity 
  }
  return result
}
