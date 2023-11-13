import { keyChords } from "./chords";

const extract = (
  chord: string,
  currentKey: string
): ChordCompositionInterface => {
  let findChord = true;
  const chordObj: ChordCompositionInterface = { chord: "", postfix: "" };
  const currentKeyArr = keyChords.get(currentKey)!;
  chord.split("").forEach((ele, idx) => {
    if (findChord) {
      chordObj.chord += ele;
      if (
        currentKeyArr.includes(chordObj.chord) &&
        !currentKeyArr.includes(chordObj.chord + chord.split("")[idx + 1])
      ) {
        findChord = false;
      }
    } else {
      chordObj.postfix += ele;
    }
  });
  return chordObj;
};

export { extract };
