/**
 * Реалізуйте функцію toArrayOfDigits:
 *
 * Функція приймає натуральне число N і
 * повертає масив з його цифрами в зворотньому порядку
 *
 * напр. для N = 46156 повинна повернути [6, 5, 1, 6, 4]. Елементи масиву
 * повинні бути числами. ['6', '5', '1', '6', '4'] - неправильна відповідь.
 *
 * @param {number} N
 *
 * @return {number[]}
 */
export function toArrayOfDigits(n) {
  n = n + "";
  return n
    .split("")
    .map(item => Number(item))
    .reverse();

  // let array = Array.from(n.toString()).map(Number).reverse();
  // return array; 
}
