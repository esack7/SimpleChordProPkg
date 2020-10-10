module.exports = songline =>
  songline.replace(
    // This regex determines if a there is a chord in a single line and changes the chords to have brackets [chords]
    /(\b([CDEFGAB1234567](?:b|bb)*(?:#|#m|##|m|sus|maj|min|aug)*[\d/]*(?:[CDEFGAB1234567](?:b|bb)*(?:#|##|sus|maj|min|aug)*[\d/]*)*)(?=\s|$)(?!\w))/gm,
    '[$2]'
  );
