function treeHeight(tree: { value: string; left: any; right: any } | null): number {
  if (tree === null) {
    return 0; // Empty tree has height 0
  }

  // Calculate the height of the left and right subtrees
  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);

  // Return the maximum height among left and right subtrees plus 1 for the current node
  return 1 + Math.max(leftHeight, rightHeight);
}
  
