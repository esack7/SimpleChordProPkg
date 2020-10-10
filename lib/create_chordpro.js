const chordCheck = require('./detectChords');
const makeChordpro = require('./makeChordpro');
const lineTrim = require('./lineTrim');

module.exports = song => {
  const trimSong = lineTrim(song);
  let songString = ''; // sets var to build new string
  const arrBlock = trimSong.split('\n\n'); // breaks into blocks separated by a line.
  arrBlock.map(block => {
    const blockLines = block.split('\n');
    let previousChords = [];
    blockLines.map((line, index) => {
      let trimline = line.trimRight();
      // Converts tab character to 8 space characters
      if (trimline.split('\t').length > 1) {
        trimline = trimline.split('\t').join('        ');
      }
      // ///////////////////////////////////////
      if (!chordCheck(trimline) && !!trimline.trim()) {
        if (previousChords.length) {
          let longer;
          const lyrics = trimline.split('');
          if (previousChords.length >= lyrics.length) {
            longer = previousChords.length;
            while (previousChords.length > lyrics.length) {
              lyrics.push(' ');
            }
          } else {
            longer = lyrics.length;
          }
          for (let j = 0; j < longer; j += 1) {
            let a = '';
            if (previousChords[j]) {
              a = `[${previousChords[j]}]`;
            }
            let b = '';
            if (lyrics[j]) {
              b = lyrics[j];
            }
            songString = `${songString}${a}${b}`;
          }
          songString = `${songString.trimRight()}\n`;
          previousChords = [];
          return null;
        }
        songString = `${songString}${trimline}\n`;
        return null;
      }
      const chords = [];
      const chordSplit = trimline.split(' ');
      chordSplit.map(idx => {
        if (idx.length) {
          const repeat = idx.length;
          chords.push(idx);
          for (let k = 0; k < repeat; k += 1) {
            chords.push('');
          }
        } else {
          chords.push(idx);
        }
        return null;
      });
      if (index === blockLines.length - 1) {
        songString = `${songString}${makeChordpro(trimline)}\n`;
        return null;
      }
      if (trimline === '') {
        songString = `${songString}\n`;
      }
      if (
        !previousChords.length &&
        !!chords &&
        blockLines[index + 1].trimRight() === ''
      ) {
        songString = `${songString}${makeChordpro(trimline)}\n`;
      }
      previousChords = chords;
      return null;
    });
    songString = `${songString}\n`; // adds block to the songString
    return null;
  });
  return songString.trim();
};
