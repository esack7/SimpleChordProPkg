const parse = require('../../lib/parse_chordpro');

describe('Testing parse_chordpro.js file', () => {
  const inputChordPro = `[G]Hello there bir[D]die!`;
  const outputChordLyric = `G              D\nHello there birdie!`;
  const inputChordPro2 = `Hello[G] there birdie[D]!`;
  const outputChordLyric2 = `     G            D\nHello there birdie!`;
  const inputTitleChordPro = `Title\n${inputChordPro}`;
  const outputTitleChordLyric = `Title\n${outputChordLyric}`;
  const inputTitleMultipleLine = `${inputTitleChordPro}\n${inputChordPro}`;
  const outputTitleMultipleLine = `${outputTitleChordLyric}\n${outputChordLyric}`;
  const noChords = `Title\nI'm a yankee doodle dandy\nA yankee doodle do or die\nA real live nephew of my Uncle Sam\nBorn on the 4th of July`;
  const inputTitleChords = `Title\n[A]   [B]   [Cmaj7]      [Dm]`;
  const outputTitleChords = `Title\nA   B   Cmaj7      Dm`;
  const outputSongVerse = `Chorus\nC           G/B         Am7\nHoly, Holy, Holy, Holy Lord\n             F\nThe earth is Yours and singing\nC           Em         Am7\nHoly, Holy, Holy, Holy Lord\n             F                   C\nThe earth is Yours. The earth is Yours`;
  const inputSongVerseChordpro = `Chorus\n[C]Holy, Holy, [G/B]Holy, Holy L[Am7]ord \nThe earth is [F]Yours and singing\n[C]Holy, Holy, [Em]Holy, Holy [Am7]Lord\nThe earth is [F]Yours. The earth is [C]Yours`;
  const interludeChordpro = `Interlude\n[F#m]Ohhh[E], [A]Oh[D]hh...`;
  const interlude = `Interlude\nF#m E A D\nOhhh, Ohhh...`;
  test('Will return a string', () => {
    expect(typeof parse(inputChordPro)).toBe(typeof 'string');
  });
  test('2 Lines interlude chordpro will parse properly to 3 lines', () => {
    expect(parse(interludeChordpro)).toBe(interlude);
  });
  test('Will parse one-line chordPro to chord/lyric on separate lines', () => {
    expect(parse(inputChordPro)).toBe(outputChordLyric);
  });
  test('Will parse one-line chordPro to chord/lyric on separate lines properly when chord is not 1st thing', () => {
    expect(parse(inputChordPro2)).toBe(outputChordLyric2);
  });
  test('Will parse title and one-line chordPro to title/chord/lyric on separate lines', () => {
    expect(parse(inputTitleChordPro)).toBe(outputTitleChordLyric);
  });
  test('Will parse title and muliple-line chordPro to title/chord/lyric on separate lines', () => {
    expect(parse(inputTitleMultipleLine)).toBe(outputTitleMultipleLine);
  });
  test('Passing 5 lines of Title and 4 lines of verse w/o Chords will return the same, no change', () => {
    expect(parse(noChords)).toBe(noChords);
  });
  test('Will parse 2 line Title/Chords chordpro to two-line Title/Chords properly spaced', () => {
    expect(parse(inputTitleChords)).toBe(outputTitleChords);
  });
  test('Will properly parse song verse chordpro', () => {
    expect(parse(inputSongVerseChordpro)).toBe(outputSongVerse);
  });
});
