const lineTrim = (string: string): string =>
  string
    .split("\n")
    .map((ele) => ele.trimEnd())
    .join("\n");

export { lineTrim };
