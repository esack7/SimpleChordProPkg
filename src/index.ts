import { create_chordpro } from './lib/create_chordpro';
import { parse } from './lib/parse_chordpro';
import {transpose as transposeChords} from './lib/transpose';
import { keyList } from './lib/chords';

const createCP = (string: string) => {
    return create_chordpro(string);
};
const parseCP = (string: string) => {
    return parse(string);
};
const transpose = (string: string, currentKey: string, transposeKey:string): string =>
    transposeChords(string, currentKey, transposeKey);

const keys = keyList;


export { createCP, parseCP, transpose, keys }
