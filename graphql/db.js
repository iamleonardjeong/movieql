export const people = [
  { id: '0', name: 'hoon', age: 32, gender: 'male' },
  { id: '1', name: 'semi', age: 23, gender: 'male' },
  { id: '2', name: 'oga', age: 34, gender: 'male' },
  { id: '3', name: 'nicole', age: 45, gender: 'male' },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
