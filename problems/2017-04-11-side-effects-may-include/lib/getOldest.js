/**
 * Return the oldest person in the provided array of people objects.
 *
 * This function isn't so pure. Refactor it!
 */
exports.default = function(people) {
  const _people = people.slice(0)

  _people.sort((person1, person2) => {
    return new Date(person1.dateOfBirth) - new Date(person2.dateOfBirth);
  });

  return _people[0];
}
