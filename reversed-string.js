/* REVERSED STRING *************************************************************
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
*******************************************************************************/

function solution(str){
  var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
