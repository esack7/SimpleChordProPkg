const create_chordpro = require('./lib/create_chordpro');
const parse_chordpro = require('./lib/parse_chordpro');
const transpose = require('./lib/transpose');
const { keyList } = require('./lib/chords');

const simpleChordPro = {
    createCP: string => {
        return create_chordpro(string);
    },
    parseCP: string => {
        return parse_chordpro(string);
    },
    transpose: (string, currentKey, transposeKey) => {
        return transpose(string, currentKey, transposeKey);
    },
    keys: keyList,
};

module.exports = simpleChordPro;