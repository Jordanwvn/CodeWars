/* BUILD TOWER *****************************************************************
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

returns an Array;
*******************************************************************************/

function towerBuilder(nFloors) {
  let floors = nFloors, floorArray = [], _ = ' ';
  for (floors; floors > 0; floors--) floorArray.push("*");
  for (let i = 0; i < floorArray.length; i ++) {
    for (let j = i; j > 0; j--) floorArray[i] = floorArray[i].concat('**');
    for (let k = i + 1; k < nFloors; k++) floorArray[i] = _.concat(floorArray[i], _);
  }
  return floorArray;
}
