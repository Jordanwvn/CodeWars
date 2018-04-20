/* ROMAN NUMERAL ENCODER *******************************************************
Create a function taking a positive integer as its parameter and returning a
string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting
with the left most digit and skipping any digit with a value of zero. In Roman
numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is
written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in
descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
*******************************************************************************/

// NOTE: this is a much less efficient solution than my LeetCode solution that I made months later.

function solution(number){
  let roman = [];
  // THOUSANDS PLACE
  if (number >= 1000) { // if the number is higher than 1000
    let thousands = Math.floor (number / 1000); // count how many thousands
    number -= (1000 * thousands); // subtract that many thousands
    for (thousands; thousands > 0; thousands --) roman.push('M'); // but add them to the result
  }
  if (number >= 100) { // if the number is higher than 100
    let hundreds = Math.floor (number / 100); // count how many hundreds
    number -= (100 * hundreds); // subtract that many hundreds
    roman.push (
      hundreds === 9 ? 'CM' :
      hundreds === 8 ? 'DCCC' :
      hundreds === 7 ? 'DCC' :
      hundreds === 6 ? 'DC' :
      hundreds === 5 ? 'D' :
      hundreds === 4 ? 'CD' :
      hundreds === 3 ? 'CCC' :
      hundreds === 2 ? 'CC' :
      'C'
    );
  }
  if (number >= 10) {
    let tens = Math.floor (number / 10);
    number -= (10 * tens);
    roman.push (
      tens === 9 ? 'XC' :
      tens === 8 ? 'LXXX' :
      tens === 7 ? 'LXX' :
      tens === 6 ? 'LX' :
      tens === 5 ? 'L' :
      tens === 4 ? 'XL' :
      tens === 3 ? 'XXX' :
      tens === 2 ? 'XX' :
      'X'
    );
  }
  if (number >=1) {
    let ones = number;
    number -= ones;
    roman.push (
      ones === 9 ? 'IX' :
      ones === 8 ? 'VIII' :
      ones === 7 ? 'VII' :
      ones === 6 ? 'VI' :
      ones === 5 ? 'V' :
      ones === 4 ? 'IV' :
      ones === 3 ? 'III' :
      ones === 2 ? 'II' :
      'I'
    );
  }
  return roman.join('');
}
