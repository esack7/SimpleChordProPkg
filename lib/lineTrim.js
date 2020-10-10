module.exports = string =>
  string
    .split('\n')
    .map(ele => ele.trimRight())
    .join('\n');
