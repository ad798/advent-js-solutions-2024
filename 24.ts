function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  if (tree1 === undefined || tree2 === undefined) {
    return [true, null]
  }
  const [leftSync] = isTreesSynchronized(tree1.right, tree2.left);
  const [rightSync] = isTreesSynchronized(tree1.left, tree2.right);

  return [tree1.value === tree2.value && leftSync && rightSync, tree1.value];
}
