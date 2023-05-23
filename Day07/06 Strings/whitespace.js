function removeWhitespace(sentence) {
  return sentence.replace(/\s+/g, "");
}
const sentence = "   This is a sentence with a lot of whitespace   ";

const trimmedSentence = removeWhitespace(sentence);

console.log(trimmedSentence); // "This is a sentence with a lot of whitespace"
