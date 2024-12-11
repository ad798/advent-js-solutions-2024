function decodeFilename(filename: string): string {
  return filename.substring(filename.indexOf('_') + 1, filename.lastIndexOf('.'))
}
