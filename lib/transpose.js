const { keyChords } = require('./chords');
const extract = require('./chordExtract');
const createChordpro = require('./create_chordpro');
const parseChordpro = require('./parse_chordpro');

const transpose = (song, currentKey, transposeKey) => {
  let convertBack = false;
  let songString = song;
  if (!song.includes('[')) {
    convertBack = true;
    songString = createChordpro(song);
  }
  const logic = songString
    .split('\n')
    .map(line => {
      if (line.includes('[')) {
        return line
          .split('[')
          .map(section => {
            if (section.includes(']')) {
              const x = section.split(']');
              const wholeChord = x[0];
              let { chord, postfix } = extract(wholeChord, currentKey);
              const index = keyChords[currentKey].indexOf(chord);
              if (postfix.includes('/')) {
                // this is a bit hacky and needs to be refactored in a recursive sort of way
                let [post, nextChord] = postfix.split('/');
                nextChord = extract(nextChord, currentKey).chord;
                const nextChordPostfix = extract(nextChord, currentKey).postfix;
                const nextChordIndex = keyChords[currentKey].indexOf(nextChord);
                post = `${post}/${
                  keyChords[transposeKey][nextChordIndex]
                }${nextChordPostfix}`;
                postfix = post;
              }
              // if (postfix.includes('-')) {
              //   //  THIS NEEDS TO BE IMPLEMENTED TO TAKE CHORD SEQUENCES INTO ACCOUNT
              //   //  SUCH AS, C-D-G-Em
              //   //  SHOULD BE RECURSIVE
              // }
              chord = keyChords[transposeKey][index] + postfix;
              x[0] = chord;
              return x.join(']');
            }
            return section;
          })
          .join('[');
      }
      return line;
    })
    .join('\n');
  if (convertBack) {
    return parseChordpro(logic);
  }
  return logic;
};

module.exports = transpose;
