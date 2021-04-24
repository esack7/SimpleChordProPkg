const lineTrim = (string: string): string =>
  string
    .split('\n')
    .map(ele => ele.trimRight())
    .join('\n');

export { lineTrim };