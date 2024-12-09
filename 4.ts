function createXmasTree(height: number, ornament: string): string {
  let tree = []
  let maxLength = (2 * height) - 1
  let padding = ""
  let paddingLength = 0
  let leaveLength = 0
  for (let i = 1; i <= height; i++) {
    leaveLength = (2 * i) - 1
    paddingLength = (maxLength - leaveLength) / 2
    padding = "_".repeat(paddingLength)
    tree.push(`${padding}${ornament.repeat(leaveLength)}${padding}`)
  }
  padding = "_".repeat((maxLength - 1) / 2)
  let stem = padding + "#" + padding
  tree.push(stem)
  tree.push(stem)
  return tree.join("\n")
}
