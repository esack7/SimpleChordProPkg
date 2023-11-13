import { transpose } from "../../index";

describe("Testing transpose.js", () => {
  const chordproKeyOfASong =
    "Verse 1\nO[A]ur father who in heaven re[Bm]igns        [F#m]    \n[D]How Great and mighty is your n[F#m]ame              [E]  \n[A]You[Bm]r kingdom co[F#m]me, Your will be done\n[D]Now here on earth as is above [F#m]                 [E]  \n\nVerse 2   \nO give to us our daily bread\nAnd keep our hungry spirits fed\nMay all our satisfaction be\nIn you whose grace has set us free\n\nChorus\nG[A]ive us hope, give us faith, help u[Bm]s trust in your guida[F#m]nce \nFrom t[E]he depths of Your grace, you hav[F#m]e richly provide[D]d \n[A]Thank you, thank you, Fathe[Bm]r you are all we need    [F#m]              [E]  \n[F#m]Father you are all we need  [D]      [A]  \n\nVerse 3\nForgive us all our trespasses\nAs we forgive when sinned against\nThough evil seeks to hide your face\nWe fix our eyes on you by faith\n\nInstrumental\n[A]  [Bm]  [F#m]  [D]  [E]\n\nBridge\nWe lift you hig[A]h above all n[Bm]ames           \n[F#m]Your kingdom will forever rei[D]gn!         [E]  \nTo you th[E]e glory and[A] the power [Bm]   -    f[F#m]orevermore      [D]       [E]";
  const chordproKeyOfGSong =
    "Verse 1\nO[G]ur father who in heaven re[Am]igns        [Em]    \n[C]How Great and mighty is your n[Em]ame              [D]  \n[G]You[Am]r kingdom co[Em]me, Your will be done\n[C]Now here on earth as is above [Em]                 [D]  \n\nVerse 2   \nO give to us our daily bread\nAnd keep our hungry spirits fed\nMay all our satisfaction be\nIn you whose grace has set us free\n\nChorus\nG[G]ive us hope, give us faith, help u[Am]s trust in your guida[Em]nce \nFrom t[D]he depths of Your grace, you hav[Em]e richly provide[C]d \n[G]Thank you, thank you, Fathe[Am]r you are all we need    [Em]              [D]  \n[Em]Father you are all we need  [C]      [G]  \n\nVerse 3\nForgive us all our trespasses\nAs we forgive when sinned against\nThough evil seeks to hide your face\nWe fix our eyes on you by faith\n\nInstrumental\n[G]  [Am]  [Em]  [C]  [D]\n\nBridge\nWe lift you hig[G]h above all n[Am]ames           \n[Em]Your kingdom will forever rei[C]gn!         [D]  \nTo you th[D]e glory and[G] the power [Am]   -    f[Em]orevermore      [C]       [D]";
  const chordproSimpleKeyOfA = "He[A]llo to the [B]bird from the wor[D]ld";
  const chordproSimpleKeyOfG = "He[G]llo to the [A]bird from the wor[C]ld";
  const simpleKeyOfA = `         A        B        D   E\nHello to the bird from the world`;
  const simpleKeyOfG = `         G        A        C   D\nHello to the bird from the world`;
  const simpleCompoundKeyOfA = `         A/C#     B        D   E\nHello to the bird from the world`;
  const simpleCompoundKeyOfG = `         G/B      A        C   D\nHello to the bird from the world`;
  const songKeyG = `Intro\nEm D G C\n\nVerse 1\n     G\nYou unravel me, with a melody\n      C             D      G\nYou surround me with a song\n     G\nOf deliverance, from my enemies\n     C          D         G\nTill all my fears are gone\n\nChorus\n        C        D        G\nI’m no longer a slave to fear\n Em     D        G\nI am a child of God\n\nBridge\nEm            D              G          C\nYou split the sea so I could walk right through it\nEm           D                  G    C\nMy fears are drowned in perfect love \nEm          D             G         C\nYou rescued me and I will stand and sing\n Em    D       G    C\nI am a child of God`;
  const songKeyA = `Intro\nF#m E A D\n\nVerse 1\n     A\nYou unravel me, with a melody\n      D             E      A\nYou surround me with a song\n     A\nOf deliverance, from my enemies\n     D          E         A\nTill all my fears are gone\n\nChorus\n        D        E        A\nI’m no longer a slave to fear\n F#m    E        A\nI am a child of God\n\nBridge\nF#m           E              A          D\nYou split the sea so I could walk right through it\nF#m          E                  A    D\nMy fears are drowned in perfect love\nF#m         E             A         D\nYou rescued me and I will stand and sing\n F#m   E       A    D\nI am a child of God`;
  const verseRepeatKeyG = `Bridge\nG                 D\nNo You never gave up on me!\nA                 Bm\nNo You never gave up on me!\nG                 D          A\nNo You never gave up on me!\n                          (X2)`;
  const verseRepeatKeyA = `Bridge\nA                 E\nNo You never gave up on me!\nB                 C#m\nNo You never gave up on me!\nA                 E          B\nNo You never gave up on me!\n                          (X2)`;
  test("Simple song line in chordpro format key of A should transpose correctly to same format in key of G", () => {
    expect(transpose(chordproSimpleKeyOfA, "A", "G")).toBe(
      chordproSimpleKeyOfG
    );
  });
  test("Simple song chord/verse lines in key of A should transpose correctly to same format in key of G", () => {
    expect(transpose(simpleKeyOfA, "A", "G")).toBe(simpleKeyOfG);
  });
  test("Simple song chord/verse lines w/compound chord in key of A should transpose correctly to same format in key of G", () => {
    expect(transpose(simpleCompoundKeyOfA, "A", "G")).toBe(
      simpleCompoundKeyOfG
    );
  });
  test("Song in chordpro format key of A should transpose correctly to same format in key of G", () => {
    expect(transpose(chordproKeyOfASong, "A", "G")).toBe(chordproKeyOfGSong);
  });
  test("Song in Key of G not in ChordPro format will transpose correctly to song in Key of A not in Chordpro format", () => {
    expect(transpose(songKeyG, "G", "A")).toBe(songKeyA);
  });
  test("Verse in Key of G not in ChordPro format two non-chord lines at end will transpose correctly to verse in Key of A", () => {
    expect(transpose(verseRepeatKeyG, "G", "A")).toBe(verseRepeatKeyA);
  });
});
