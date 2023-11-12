import { lineTrim } from './lineTrim';
import { detect as detectChords } from './detectChords';

const detectChordpro = (line: string) => {
  if (line.split('').includes('[')) return true;
  return false;
};

// below using code from MDN docs to flatten an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
const flattenDeep = (arr1: any[]): string[] =>
  arr1.reduce(
    (acc: string[], val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );

const detectLyrics = (line: string) => {
  if (
    flattenDeep(
      line.split(' ').map(word => word.split('[').map(part => part.split(']')))
    )
      .filter((ele: string) => ele !== '')
      .map((ele: string) => detectChords(ele))
      .includes(false)
  )
    return true;
  return false;
};

const removeBrackets = (line: string) =>
  line
    .split('')
    .filter(char => {
      if (char === '[') return false;
      if (char === ']') return false;
      return true;
    })
    .join('');

const splitLine = (line:string) => {
  let chordLine = '';
  let lyricLine = '';
  let chordOnly = false;
  const splitLineArr = line.split('');
  let chordHold = 0;
  splitLineArr.map((char, index) => {
    if (char === '[' || char === ']') {
      chordOnly = !chordOnly;
      return null;
    }
    if (chordOnly) {
      chordLine = `${chordLine}${char}`;
      chordHold += 1;
      return null;
    }
    if (splitLineArr[index + 1] === '[') {
      chordLine = `${chordLine} `;
      lyricLine = `${lyricLine}${char}`;
      return null;
    }
    if (chordHold === 0) {
      chordLine = `${chordLine} `;
    }
    if (chordHold > 0) {
      chordHold -= 1;
    }
    lyricLine = `${lyricLine}${char}`;
    return null;
  });
  return `${chordLine.trimEnd()}\n${lyricLine.trimEnd()}`;
};

const parse_chordpro = (chordPro: string) => {
  const linetrim = lineTrim(chordPro);
  let parsed = '';
  const blockArr = linetrim.split('\n\n');
  blockArr.map((block: string) => {
    const lineArr = block.split('\n');
    lineArr.map(line => {
      if (detectChordpro(line)) {
        if (detectLyrics(line)) {
          parsed = `${parsed}\n${splitLine(line)}`;
          return parsed;
        }
        parsed = `${parsed}\n${removeBrackets(line)}`;
        return parsed;
      }
      parsed = `${parsed}\n${line}`;
      return parsed;
    });
    parsed = `${parsed}\n`;
    return parsed;
  });
  if (parsed.charCodeAt(1) === 32) {
    const newParsed = parsed.substring(1);
    return newParsed.trimEnd();
  }
  return parsed.trim();
};

export { parse_chordpro as parse };
