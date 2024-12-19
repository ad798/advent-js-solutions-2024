function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
  let phoneRgx = new RegExp(phone, 'gi') // RegExp to search for the phone in the agenda
  let phoneMatches = agenda.match(phoneRgx) // search for the phone
  if (phoneMatches && phoneMatches.length === 1) {
    for (let line of agenda.split('\n')) {
      if (line.includes(phone)) {
        let nameAddressRgx = /(.+?)\s<([^>]+)>/g // RegExp that extracts the name and the address in an array
        let matches = nameAddressRgx.exec(line)
        let completePhoneRgx = /\+\d{1,3}[-\s]?\(?\d{1,4}?\)?[-\s]?\d+[-\s]?\d+[-\s]?\d+/g
        return { name: matches[2].trim(), address: matches[1].replace(completePhoneRgx, '').trim() }
      }
    }
  }
  return null
}
