function drawTable(data: Array<Record<string, string | number>>): string {
  let table = []
  let maxLengths : Record<string, number> = {}
  
  // Search for the lenght of each column
  for (let gift of data) {
    for (let [key, value] of Object.entries(gift)) {
      // Take the max value between the key or the value
      let length = Math.max(key.length, value.toString().length)
      // The nullish coalescing used to avoid wrong comparison with length
      if ((maxLengths[key] ?? 0) < length) maxLengths[key] = length
    }
  }
  
  // Create the header (and footer) and the titles
  let header = '+'
  let titles = '| ' 
  for (let key of Object.keys(maxLengths)) {
    header += '-'.repeat(maxLengths[key] + 2) + '+'
    titles += (key[0].toUpperCase() + key.slice(1)).padEnd(maxLengths[key]) + ' | '
  }
  table.push(header)
  table.push(titles.trim()) // trim the string to avoid end extra spaces
  table.push(header)
  
  // Create the data rows
  for (let gift of data) {
    let lane = '| '
    for (let key of Object.keys(maxLengths)) {
      lane += gift[key].toString().padEnd(maxLengths[key]) + ' | '     
    }
    table.push(lane.trim()) // trim the string to avoid end extra spaces
  }

  table.push(header) // add the footer
  return table.join('\n')
}
