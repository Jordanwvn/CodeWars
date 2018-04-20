/* TAKE A TEN MINUTE WALK ******************************************************
You live in the city of Cartesia where all roads are laid out in a perfect
grid. You arrived ten minutes too early to an appointment, so you decided to
take the opportunity to go for a short walk. The city provides its citizens
with a Walk Generating App on their phones -- everytime you press the button it
sends you an array of one-letter strings representing directions to walk (eg.
['n', 's', 'w', 'e']). You always walk only a single block in a direction and
you know it takes you one minute to traverse one city block, so create a
function that will return true if the walk the app gives you will take you
exactly ten minutes (you don't want to be early or late!) and will, of course,
return you to your starting point. Return false otherwise.
*******************************************************************************/

function isValidWalk(walk) {
  let location = {vertical: 0, horizontal: 0};
  let distance = 0;
  walk.forEach(function(direction){
    if (direction === 'n') location.vertical ++;
    else if (direction === 's') location.vertical --;
    else if (direction === 'e') location.horizontal ++;
    else if (direction === 'w') location.horizontal --;
    distance ++;
  })
  if (distance === 10 && location.vertical === 0 && location.horizontal === 0) {
    return true;
  } else {
    return false;
  }
}
