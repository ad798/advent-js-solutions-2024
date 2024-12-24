function generateGiftSets(gifts: string[]): string[][] {
  const result = [];

  function backtrack(currentSet, start) {
    if (start > 0) result.push([...currentSet]); // Add current combination to the result

    for (let i = start; i < gifts.length; i++) {
      currentSet.push(gifts[i]); // Add current toy to the current set
      backtrack(currentSet, i + 1); // Recursively explore combinations with the added toy
      currentSet.pop(); // Backtrack: Remove the current toy to explore other combinations
    }
  }

  backtrack([], 0); // Start backtracking with an empty set and index 0
  return result;
}
