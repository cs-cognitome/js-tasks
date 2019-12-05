/**
 * Реалізуйте функцію countOccurrences:
 *
 * Реалізуйте функцію, яка приймає 2 параметри (`str`, `substr`) і повертає
 * кількість разів, що `subst` з'являється у `str`.
 *
 * напр. для str = 'azyxxzyzy', substr = 'zy' функція повинна повернути 3, бо 'zy'
 * з'являється 3 рази: 'a[zy]xx[zy][zy]'.
 *
 * str і substr містять тільки латинські літери нижнього регістру.
 * Літери в substr не повторюються (substr не може бути рівним xyx)
 *
 * countOccurrences('azyxxzyzy', 'zy') === 3
 * countOccurrences('ababagalamaga', 'ba') === 2
 *
 * @param {string} str
 * @param {string} substr
 *
 * @return {number}
 */
export function countOccurrences(str, substr) {
  let count = 0;
  const newStr = str.toLowerCase().replace("/[^a-z]/");
  const newSubstr = substr.toLowerCase().replace("/[^a-z]/");

  if (!newStr.includes(newSubstr)) {
    return 0;
  }

  let index = 0;
  while (newStr.indexOf(newSubstr, index) > 0) {
    count++;
    index = newStr.indexOf(newSubstr, index) + 1;
  }

  return count;
}

/**
  export function countOccurrences(str, substr) {
    return str.split(substr).length - 1
}
 */
