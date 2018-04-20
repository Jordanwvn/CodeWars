/* MUTATE MY STRINGS ***********************************************************
I will give you two strings. I want you to transform stringOne into stringTwo
one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*******************************************************************************/

function mutateMyStrings(stringOne, stringTwo){
  let one = stringOne.split(''), two = stringTwo.split('');
  let endString = stringOne.concat('\n');
  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
      one[i] = two[i];
      endString = endString.concat(`${one.join('')}\n`);
    }
  }
  return endString;
}
