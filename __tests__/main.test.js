const { describe, test, expect } = require("@jest/globals");

const { createCP, parseCP, transpose, keys } = require('./../index.js');

const chordLyric = `G              D\nHello there birdie!`;
const chordpro = `[G]Hello there bir[D]die!`;
const chordproSimpleKeyOfA = 'He[A]llo to the [B]bird from the wor[D]ld';
const chordproSimpleKeyOfG = 'He[G]llo to the [A]bird from the wor[C]ld';

describe('Testing the exposed functionality', () => {
    test('Create ChordPro will work', () => {
        expect(createCP(chordLyric)).toBe(chordpro);
    })
    test('Parse ChordPro will work', () => {
        expect(parseCP(chordpro)).toBe(chordLyric);
    })
    test('Transpose function will work', () => {
        expect(transpose(chordproSimpleKeyOfA, 'A', 'G')).toBe(chordproSimpleKeyOfG);
    })
    test('Keys is an array of keys', () => {
        expect(keys[0]).toBe('A');
    })
})