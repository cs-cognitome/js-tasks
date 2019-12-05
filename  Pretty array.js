/**
 * Гарним масивом вважається такий масив, в якому для кожного елемента n,
 * в масиві також існує n-1 або n+1.
 * Наприклад:
 * [2,10,9,3] красивий масив, бо
 *   2=3-1
 *   10=9+1
 *   3=2+1
 *   9=10-1
 * Напишіть функцію isArrayPretty, яка повертає true. якщо array аргумент є гарним, інакше false.
 * Також, потрібно повернути false, якщо переданий масив порожній.
 *
 * @param {number[]} array
 *
 * @returns {boolean}
 */
export function isArrayPretty(array) {
  return (
    !!array.length &&
    array.every(n =>
      array.some(element => element === n + 1 || element === n - 1)
    )
  );
}

/**
 export function isArrayPretty(array) {
  if (array.length === 0) {
    return false;
  }
  return array.every(item => {
    return array.includes(item - 1)
        || array.includes(item + 1)
  });
}
 
 */
