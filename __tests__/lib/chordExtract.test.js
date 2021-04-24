const { extract } = require('../../dist/lib/chordExtract');

describe('Testing chordExtract.js file', () => {
  test('"F#m" will return correct object', () => {
    expect(extract('F#m', 'A')).toEqual({ chord: 'F#', postfix: 'm' });
  });
  test('♭7maj7 will return correct object', () => {
    expect(extract('♭7maj7', 'Nashville')).toEqual({
      chord: '♭7',
      postfix: 'maj7',
    });
  });
  test('G will return correct object', () => {
    expect(extract('G', 'G')).toEqual({ chord: 'G', postfix: '' });
  });
});
