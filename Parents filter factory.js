/**
 * Реалізуйте функцію createIsMyParentFilter,
 * яка приймає ім'я людини та повертає функцію,
 * якою можна відфільтрувати масив людей так,
 * що залишаться лише батьки людини, ім'я якої передали.
 *
 * Якщо такої людини немає в масиві або її батьків немає,
 * повернути порожній масив
 *
 * Приклад застосування:
 * const isMyParent = createIsMyParentFilter('Carolus Haverbeke');
 * const parents = people.filter(isMyParent);
 *
 * parents - це масив об'єктів що є батьками Carolus Haverbeke
 *
 * @param {string} name
 *
 * @returns {function}
 */
export function createIsMyParentFilter(name) {
  return (person, index, array) => {
    const child = array.find(child => child.name === name);
    return (
      child && (child.mother === person.name || child.father === person.name)
    );
  };
}

/**
  export function createIsMyParentFilter(name) {
  return (parent, i, people) => {
    const me = people.find(person => person.name === name);
    if (!me) {
      return false;
    }
    return parent.name === me.mother
        || parent.name === me.father;
  };
}
 */
