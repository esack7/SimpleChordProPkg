const makeChordpro = require('./makeChordpro');

module.exports = songline => {
  const chordCheck = makeChordpro(songline);
  const lineSplit = songline
    .split(' ')
    .filter(ele => ele !== '')
    .map(ele => makeChordpro(ele) === ele);
  if (songline === chordCheck) return false;
  if (lineSplit.includes(true)) return false;
  /* This (above) checks if each line that contains chords contains only chords 
  This is needed because if you have "Chorus 1" or "Verse B" that will be
  returned as a chord line, which isn't correct.
  */
  return true;
};
