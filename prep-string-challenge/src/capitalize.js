/* exported capitalize */
function capitalize(word) {
  const firstChar = word[0].toUpperCase();
  let restOfWord = word.substring(1).toLowerCase();
  return firstChar + restOfWord;
}
