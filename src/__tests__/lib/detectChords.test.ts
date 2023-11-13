import { detect } from "../../lib/detectChords";

describe("Testing dectectChords.js", () => {
  test("Passing in random text will return false", () => {
    expect(detect("random text")).toBe(false);
    expect(detect("Supercalifagilisticexpialidotious")).toBe(false);
  });
  test("Line that contains only chords will return true", () => {
    expect(detect("A")).toBe(true);
    expect(detect("Am7 Bsus  D F#m")).toBe(true);
    expect(detect("G C Em D")).toBe(true);
  });
  test("Line that contains Nashville Number will return true", () => {
    expect(detect("3 ♭7m 5# 4")).toBe(true);
    expect(detect("3 7m 5# 4")).toBe(true);
    expect(detect("♭3 ♭6 ♭7")).toBe(true);
    expect(detect("8 9m ♭0# 9sus7")).toBe(false);
  });
  test("Line that doesn't contain chords will return false", () => {
    expect(detect("A Good Boy Behaves Exemplary")).toBe(false);
    expect(detect("H# X   L Msus I")).toBe(false);
  });
  test("Line that contains a mix will return false", () => {
    expect(detect("Verse 1")).toBe(false);
    expect(detect("Chorus A")).toBe(false);
    expect(detect("Bridge 2")).toBe(false);
  });
});
