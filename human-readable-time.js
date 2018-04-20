/* HUMAN READABLE TIME *********************************************************
Write a function, which takes a non-negative integer (seconds) as input and
returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
*******************************************************************************/

function humanReadable(seconds) {
  let hours = 0, minutes = 0;
  let zero = '0';
  while (seconds >= 3600) {
    hours ++;
    seconds -= 3600;
  }
  while (seconds >= 60) {
    minutes ++;
    seconds -= 60;
  }
  if (hours < 10) hours = zero.concat(hours);
  if (minutes < 10) minutes = zero.concat(minutes);
  if (seconds < 10) seconds = zero.concat(seconds);
  return `${hours}:${minutes}:${seconds}`;
}
