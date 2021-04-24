const keyList = [
    'A',
    'A#',
    'Bb',
    'B',
    'C',
    'C#',
    'Db',
    'D',
    'D#',
    'Eb',
    'E',
    'F',
    'F#',
    'Gb',
    'G',
    'G#',
    'Ab',
    'Nashville',
    'Solfège',
  ];
const keyChords = new Map<string, string[]>();
keyChords.set('Ab', ['Ab', 'Bb', 'Cb', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']);
keyChords.set('A', ['A', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']);
keyChords.set('A#', ['A#', 'C', 'Db', 'D', 'D#', 'E', 'F', 'Gb', 'G', 'Ab', 'A']);
keyChords.set('Bb', ['Bb', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A']);
keyChords.set('B', ['B', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#']);
keyChords.set('Cb', ['Cb', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb']);
keyChords.set('C', ['C', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']);
keyChords.set('C#', ['C#', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'Cb', 'C']);
keyChords.set('Db', ['Db', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb', 'C']);
keyChords.set('D', ['D', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B', 'C', 'C#']);
keyChords.set('D#', ['D#', 'F', 'Gb', 'G', 'G#', 'A', 'A#', 'B', 'C', 'Db', 'D']);
keyChords.set('Eb', ['Eb', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb', 'C', 'Db', 'D']);
keyChords.set('E', ['E', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#']);
keyChords.set('F', ['F', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E']);
keyChords.set('F#', ['F#', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F']);
keyChords.set('Gb', ['Gb', 'Ab', 'A', 'Bb', 'Cb', 'C', 'Db', 'D', 'Eb', 'E', 'F']);
keyChords.set('G', ['G', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#']);
keyChords.set('G#', ['G#', 'A#', 'Cb', 'C', 'C#', 'D', 'D#', 'E', 'F', 'Gb', 'G']);
keyChords.set('Nashville', ['1', '2', '♭3', '3', '4', '#4', '5', '♭6', '6', '♭7', '7']);
keyChords.set('Solfège', ['Do', 'Re', 'Me', 'Mi', 'Fa', 'Fi', 'Sol', 'Le', 'La', 'Te', 'Ti']);

export { keyList, keyChords };