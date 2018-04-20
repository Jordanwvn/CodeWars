/* SUM OF ODD CUBED NUMBERS ****************************************************
Find the sum of the odd numbers within an array, after cubing the initial
integers. This function will return undefined if any of the values aren't 
numbers.
*******************************************************************************/

function cubeOdd(arr) {
  return arr.length === 0
  || arr.filter(x => x % 2 === 1 || x % 2 === -1).length === 0 ? 0
  : arr.filter(x => typeof x !== 'number').length > 0 ? undefined
  : arr
    .map(x => x * x * x)
    .filter(x => x % 2 === 1 || x % 2 === -1)
    .reduce( (acc, curr) => acc + curr);
}
