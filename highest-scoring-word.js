/* HIGHEST SCORING WORD ********************************************************
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the
original string.

All letters will be lowercase and all inputs will be valid.
*******************************************************************************/

function high(x){
  let highScore = 0;
  let finalWord;
  x = x.split(' ');
  for (let i = x.length - 1; i >= 0; i --) {
    let total = 0;
    for (let letter = 0; letter < x[i].length; letter ++) {
      total += x[i].charCodeAt(letter) - 96;
    }
    if (total >= highScore) {
      highScore = total;
      finalWord = x[i];
    }
  }
  return finalWord;
}
