# Simple ChordPro Package

An NPM package to convert song lyric and chords to and from the ChordPro format. This program does not implement the full ChordPro specification as detailed at https://www.chordpro.org/chordpro/. No ChordPro usage of meta-data is required, nor is it recognized by this program. This program simply takes a `string` in either a chord/lyric format or a ChordPro format and converts it to the other. There is also a built in functionality to transpose chords.

## Installation

`npm install simplechordpro`

## Usage

```javascript
import { createCP, parseCP, transpose, keys } from simplechordpro;
```

### createCP

`createCP` takes a string with a chord/lyric format and outputs a string with a ChordPro format

Input

```
Dm        A                    C
I’m gonna take my horse to the old town road
```

Output

```
[Dm]I’m gonna [A]take my horse to the [C]old town road
```

### parseCP

`parseCP` takes a string with a ChordPro format and outputs a string with a chord/lyric format

Input

```
[Dm]I’m gonna [A]take my horse to the [C]old town road
```

Output

```
Dm        A                    C
I’m gonna take my horse to the old town road
```

### transpose

`transpose` takes a string in either format and transposed the key of the song to that same format

Input

```
"[Dm]I’m gonna [A]take my horse to the [C]old town road", "A", "E"
```

Output

```
"[Am]I’m gonna [E]take my horse to the [G]old town road"
```

- the `key` of Solfège can only be used as the 3rd parameter, it can't transpose from Solfège to another key

### keys

`keys` is an array of keys, including Nashville and Solfège used by the program

### This package is used in the following:

- www.simplechordpro.com/
- [Simple ChordPro Chrome Extension](https://chrome.google.com/webstore/detail/simple-chordpro/negipcmgbepcfhamlpdbkepipeiidkfk)

## License

- MIT
- This is an open source project
