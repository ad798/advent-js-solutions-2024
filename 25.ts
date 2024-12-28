function execute(code: string): number {
  let index = 0;
  let value = 0;
  let loopIndex = -1;
  while (index < code.length) {
    if (code[index] === '+') {
      value++
    } else if (code[index] === '-') {
      value--
    } else if (code[index] === '[') {
      loopIndex = index
      if (value === 0) {
        // Look for the end of the loop
        // As a substring is used we sum again the positions before with the current index
        index += code.substring(index).indexOf(']')
      }
    } else if (code[index] === ']') {
      index = loopIndex - 1 // substract to keep the loop index
    } else if (code[index] === '{') {
      if (value === 0) {
        index += code.substring(index).indexOf('}')
      }
    }
    index++ 
  }
  return value
}
  
