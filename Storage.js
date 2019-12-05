/**
 * Реалізуйте функцію makeStorage:
 *
 * Вона повинна працювати згідно наступного паттерну:
 *
 * const storage = makeStorage();
 * storage.setValue('name', 'Peter');
 * storage.setValue('age', 30);
 * storage.getValue('name'); // Peter
 * storage.getValue('age'); // 30
 * storage.setValue('age', 31);
 * storage.getValue('age'); // 31
 * storage.getValue('occupation'); // undefined
 *
 * @return {function}
 */
export function makeStorage(storage = {}) {
  function setValue(key, value) {
    return (storage[key] = value);
  }

  function getValue(key) {
    return storage[key];
  }

  return { setValue, getValue };
}

/**
  export function makeStorage() {
  const cache = {};
  return {
    getValue(key) {
      return cache[key];
    },
    setValue(key, value) {
      cache[key] = value;
    }
  };
}
