function createFrame(names: string[]): string {
  if (!names?.length) return "";

  let maxLength = 0;
  for (const name of names) {
    maxLength = Math.max(maxLength, name.length);
  }

  maxLength += 4;
  const border = "*".repeat(maxLength);
  const framedNames = names.map(name => `* ${name.padEnd(maxLength - 3)}*`);

  return [border, ...framedNames, border].join("\n");
}
