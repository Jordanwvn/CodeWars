/* INSERT DASHES ***************************************************************
Write a function insertDash(num)/InsertDash(int num) that will insert dashes
('-') between each two odd numbers in num. For example: if num is 454793 the
output should be 4547-9-3. Don't count zero as an odd number.
*******************************************************************************/

function insertDash(num) {
   var strNum = num.toString();
   for (var i = 0; i < strNum.length-1; i++) {
     if(parseInt(strNum.charAt(i)) % 2 !== 0 && parseInt(strNum.charAt(i+1)) % 2 !== 0) {
     strNum = insertChar(strNum, '-', i+1);
     i++
     }
   }
   return strNum;
}

function insertChar(strToChange, charToIns, indexToIns) {
  var beg = strToChange.slice(0, indexToIns);
  var end = strToChange.slice(indexToIns, strToChange.length);
  return beg + charToIns + end;
}
