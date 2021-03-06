/* FORMAT WORDS INTO A SENTENCE ************************************************
Complete the method so that it formats the words into a single comma separated
value. The last word should be separated by the word 'and' instead of a comma.
The method takes in an array of strings and returns a single formatted string.
Empty string values should be ignored. Empty arrays or null/nil values being
passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and
ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""
*******************************************************************************/

function formatWords(words){
  if (!words) return '';
  words = words.filter(word => word.length > 0);
  return words.slice(0,-2).join(', ')
  + (words.length > 2 ? ', ' : '')
  + words.slice(-2).join(' and ');
}
