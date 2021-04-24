const { create_chordpro } = require('../../dist/lib/create_chordpro');

describe('Testing create_chordpro.js file', () => {
  const singleChordLyric = `G              D\nHello there birdie!`;
  const singleChordLyricExtraChordWhiteSpace = `G              D     \nHello there birdie!`;
  const singleChordLyricExtraLyricWhiteSpace = `G              D\nHello there birdie!     `;
  const singleChordLyricChordpro = `[G]Hello there bir[D]die!`;
  const singleLongChordLyric = `G              D        A\nHello there birdie!`;
  const singleLongChordLyricChordpro = `[G]Hello there bir[D]die!     [A]`;
  const singleTitleChordLyric = `Title\nG              D\nHello there birdie!`;
  const singleTitleChordLyricChordpro = `Title\n[G]Hello there bir[D]die!`;
  const singleDescription = `Description`;
  const singleDescriptionChordPro = `${singleDescription}`;
  const singleTitleChord = `Title\nG              D`;
  const singleTitleChordChordpro = `Title\n[G]              [D]`;
  const introChords = `Intro\nF#m E A D`;
  const introChordsChordpro = `Intro\n[F#m] [E] [A] [D]`;
  const verseRepeat = `Bridge\nG                 D\nNo You never gave up on me!\nA                 Bm\nNo You never gave up on me!\nG                 D          A\nNo You never gave up on me!\n                          (X2)`;
  const verseRepeatChordpro = `Bridge\n[G]No You never gave [D]up on me!\n[A]No You never gave [Bm]up on me!\n[G]No You never gave [D]up on me!  [A]\n                          (X2)`;
  const withTabInput = `Verse\nD                 Bm\nJesus, name above all names\n\t  Em\nBeautiful Savior\n\t Asus A\nGlorious Lord\n  D              Bm\nEmmanuel, God is with us\n\t  Em     A         D  \nBlessed Redeemer,  Living Word`;
  const withTabExpectedOutput = `Verse\n[D]Jesus, name above [Bm]all names\nBeautiful [Em]Savior\nGlorious [Asus]Lord [A]\nEm[D]manuel, God is [Bm]with us\nBlessed Re[Em]deemer,[A]  Living W[D]ord`;
  test('Will return type string', () => {
    expect(typeof create_chordpro('string')).toBe(typeof 'string');
  });
  test('3 line block of Title/Chords/Lyrics will convert properly to 2 line chordpro', () => {
    expect(create_chordpro(singleTitleChordLyric)).toBe(singleTitleChordLyricChordpro);
  });
  test('A set of 3 line blocks of Title/Chords/Lyrics will convert properly to 5 lines of chordpro', () => {
    expect(create_chordpro(`${singleTitleChordLyric}\n\n${singleTitleChordLyric}`)).toBe(
      `${singleTitleChordLyricChordpro}\n\n${singleTitleChordLyricChordpro}`
    );
  });
  test('Single line block of Description will remain unchanged', () => {
    expect(create_chordpro(singleDescription)).toBe(singleDescriptionChordPro);
  });
  test('2 single line blocks of Description will remain unchanged', () => {
    expect(create_chordpro(`${singleDescription}\n\n${singleDescription}`)).toBe(
      `${singleDescriptionChordPro}\n\n${singleDescriptionChordPro}`
    );
  });
  test('A single line block of Description and 3 line block of Title/Chords/Lyrics will result in 4 lines of chordpro', () => {
    expect(create_chordpro(`${singleDescription}\n\n${singleTitleChordLyric}`)).toBe(
      `${singleDescriptionChordPro}\n\n${singleTitleChordLyricChordpro}`
    );
  });
  test('2 line block of Chord/Lyrics will convert properly to 1 line chordpro', () => {
    expect(create_chordpro(singleChordLyric)).toBe(singleChordLyricChordpro);
  });
  test('2 line block of Chord/Lyrics with white space after last chord will convert properly to 1 line chordpro', () => {
    expect(create_chordpro(singleChordLyricExtraChordWhiteSpace)).toBe(singleChordLyricChordpro);
  });
  test('2 line block of Chord/Lyrics with white space after last lyric will convert properly to 1 line chordpro', () => {
    expect(create_chordpro(singleChordLyricExtraLyricWhiteSpace)).toBe(singleChordLyricChordpro);
  });
  test('2 line block of Chord/Lyrics where chords extend beyond lyrics will convert properly to 1 line chordpro', () => {
    expect(create_chordpro(singleLongChordLyric)).toBe(singleLongChordLyricChordpro);
  });
  test('2 line block of Title/Chord will convert properly to 2 line of chordpro', () => {
    expect(create_chordpro(singleTitleChord)).toBe(singleTitleChordChordpro);
  });
  test('2 line block of Intro/Chords will convert properly to 2 line of chordpro', () => {
    expect(create_chordpro(introChords)).toBe(introChordsChordpro);
  });
  test('3 line block of Title/Chords/Lyrics plus newline will convert properly to 2 line chordpro', () => {
    expect(create_chordpro(`${singleTitleChordLyric}\n`)).toBe(
      `${singleTitleChordLyricChordpro}`
    );
  });
  test('Verse that ends with two non-chord lines at end will convert to Chordpro properly', () => {
    expect(create_chordpro(verseRepeat)).toBe(verseRepeatChordpro);
  });
  test('Lines that contain a tab character will be properly converted to Chordpro', () => {
    expect(create_chordpro(withTabInput)).toBe(withTabExpectedOutput);
  });
});
