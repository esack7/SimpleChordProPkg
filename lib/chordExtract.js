const { keyChords } = require('./chords');

module.exports = (chord, currentKey) => {
  let findChord = true;
  const chordObj = { chord: '', postfix: '' };
  const currentKeyArr = keyChords[currentKey];
  chord.split('').map((ele, idx) => {
    if (findChord) {
      chordObj.chord += ele;
      if (
        currentKeyArr.includes(chordObj.chord) &&
        !currentKeyArr.includes(chordObj.chord + chord.split('')[idx + 1])
      ) {
        findChord = false;
      }
    } else {
      chordObj.postfix += ele;
    }
    return null;
  });
  return chordObj;
};
