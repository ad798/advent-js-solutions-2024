type Inventory = Array<
  { name: string, quantity: number, category: string }
>

function organizeInventory(inventory: Inventory): object {
  let result = {}
  for (const obj of inventory) {
    if (!result[obj.category]) {
      result[obj.category] = {}
    }
    if (!result[obj.category][obj.name]) {
      result[obj.category][obj.name] = 0
    }
    result[obj.category][obj.name] += obj.quantity 
  }
  return result
}
