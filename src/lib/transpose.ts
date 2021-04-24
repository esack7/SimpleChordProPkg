import { keyChords } from './chords';
import { extract } from './chordExtract';
import { create_chordpro as createChordpro} from './create_chordpro';
import { parse } from './parse_chordpro';

const transpose = (song: string, currentKey: string, transposeKey: string) => {
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
              const index = keyChords.get(currentKey)!.indexOf(chord);
              if (postfix.includes('/')) {
                // this is a bit hacky and needs to be refactored in a recursive sort of way
                let [post, nextChord] = postfix.split('/');
                nextChord = extract(nextChord, currentKey).chord;
                const nextChordPostfix = extract(nextChord, currentKey).postfix;
                const nextChordIndex = keyChords.get(currentKey)!.indexOf(nextChord);
                post = `${post}/${
                  keyChords.get(transposeKey)![nextChordIndex]
                }${nextChordPostfix}`;
                postfix = post;
              }
              // if (postfix.includes('-')) {
              //   //  THIS NEEDS TO BE IMPLEMENTED TO TAKE CHORD SEQUENCES INTO ACCOUNT
              //   //  SUCH AS, C-D-G-Em
              //   //  SHOULD BE RECURSIVE
              // }
              chord = keyChords.get(transposeKey)![index] + postfix;
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
    return parse(logic);
  }
  return logic;
};

export { transpose };
