function compile (instructions: string[]): number {
  let registers = { A: 0 }
  let sum = {
    'INC': 1,
    'DEC': -1
  }
  let aIsDefined = false
  for (let i = 0; i < instructions.length; i++) {
    let [instruction, register1, register2] = instructions[i].split(' ')
    if (register1 === 'A' || register2 === 'A' ) aIsDefined = true
    if (instruction === 'MOV') {
      registers[register2] = registers[register1] ?? +register1
    } else if (instruction === 'INC' || instruction == 'DEC') {
      if (registers[register1] === undefined) registers[register1] = 0
      registers[register1] += sum[instruction]
    } else if (instruction === 'JMP' && (register1 === '0' || registers[register1] === 0)) {
      // Restamos uno porque luego el bucle lo vuelve a sumar
      i = +register2 - 1
    }
  }
  return aIsDefined ? registers['A'] : undefined
}
