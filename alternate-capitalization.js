/* ALTERNATE CAPITALIZATION ****************************************************
Given a string, capitalize the letters that occupy even indexes and odd indexes
separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for
more examples.

The input will be a lowercase string with no spaces.
*******************************************************************************/

function capitalize(s) {
  let r1 = '', r2 = '';
  for (let i = 0; i < s.length; i += 2) {
  r1 = r1.concat(s.charAt(i).toUpperCase());
  r1 = r1.concat(s.charAt(i + 1));
  r2 = r2.concat(s.charAt(i));
  r2 = r2.concat(s.charAt(i + 1).toUpperCase());
  }
  return [r1, r2];
};
