/* INDEXED CAPITALIZATION ******************************************************
Given a string and an array of integers representing indices, capitalize all
letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*******************************************************************************/

function capitalize(s,arr){
  let letters = s.split('');
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j]) letters[i] = letters[i].toUpperCase();
    }
  }
  return letters.join('');
};
