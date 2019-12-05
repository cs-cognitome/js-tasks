/**
 * Реалізуйте функцію getPeopleWithParents,
 * яка приймає масив об'єктів people
 * приклад(повний масив в файлі people.json):
 * {
 *   "name": "Lieven de Causmaecker",
 *   "sex": "m",
 *   "born": 1696,
 *   "died": 1724,
 *   "father": "Carel de Causmaecker",
 *   "mother": "Joanna Claes"
 * }
 *
 * Потрібно замінити імена батька і матері на повні об'єкти.
 * Людину можна вважати батьком, якщо її ім'я співпадає з тим, що в полі father.
 * Аналогічно матір'ю.
 * Якщо батька чи матері немає в масиві, значення полей father/mother не потрібно змінювати.
 *
 *
 * @param {object[]}
 *
 * @returns {object[]}
 */
export function getPeopleWithParents(people) {
  return people.map(person => {
    let mom = people.filter(person => person.sex === "f");
    let dad = people.filter(person => person.sex === "m");

    let mother = mom.find(woman => person.mother === woman.name);
    person.mother = mother === undefined ? person.mother : mother;

    let father = dad.find(man => person.father === man.name);
    person.father = father === undefined ? person.father : father;

    return person;
  });
}
